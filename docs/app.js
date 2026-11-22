/* Privacy Shield - opt-out checklist. No dependencies, no network calls.
 *
 * Security model: the page ships a strict Content-Security-Policy
 * (script-src 'self', no inline handlers). Site data comes from data.js, which
 * accepts outside pull requests, so every value is treated as untrusted:
 * text is HTML-escaped, ids are allow-listed, and links are limited to http(s).
 */
(() => {
  'use strict';

  // GitHub Pages cannot send X-Frame-Options / frame-ancestors, so refuse to
  // run inside another site's frame (clickjacking guard).
  if (window.top !== window.self) {
    document.documentElement.hidden = true;
    return;
  }

  const STORAGE_KEY = 'privacy-shield-progress';
  const STORAGE_META_KEY = 'privacy-shield-meta';
  const THEME_KEY = 'privacy-shield-theme';
  const MAX_IMPORT_BYTES = 1024 * 1024;
  const MAX_STATE_KEYS = 20000;

  const ID_RE = /^[a-z0-9-]{1,64}$/;
  const STATE_KEY_RE = /^[a-z0-9-]{1,64}(?::s:\d{1,3})?$/;
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  const DOMAIN_RE = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/[a-z0-9._~\/-]*)?$/i;
  const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+/i;
  const PAGES = ['dashboard', 'main', 'additional', 'brokers', 'settings'];
  const CATEGORIES = ['B2B', 'AD', 'MKT', 'FIN', 'GOV', 'LOC', 'HR', 'ID', 'PROP', 'PUB', 'OTHER'];
  const DIFFICULTY = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

  const DATA = window.SITE_DATA || (typeof SITE_DATA !== 'undefined' ? SITE_DATA : {});
  const usable = list => (Array.isArray(list) ? list : []).filter(s => s && ID_RE.test(s.id));

  const SECTIONS = {
    main: { label: 'Main', sites: usable(DATA.mainSites), list: 'main-sites-list', card: mainCard },
    additional: { label: 'Additional', sites: usable(DATA.additionalSites), list: 'additional-sites-list', card: additionalCard },
    brokers: { label: 'Broker', sites: usable(DATA.dataBrokerSites), list: 'brokers-sites-list', card: brokerCard }
  };
  const SECTION_KEYS = Object.keys(SECTIONS);

  const SITE_INDEX = new Map();
  SECTION_KEYS.forEach(section => SECTIONS[section].sites.forEach(site => {
    if (!SITE_INDEX.has(site.id)) SITE_INDEX.set(site.id, { site, section });
  }));

  let state = {};
  let meta = {};
  const filters = { main: 'all', additional: 'all', brokers: 'all' };
  const rendered = { main: false, additional: false, brokers: false };
  const timers = {};
  const haystacks = new Map();
  let lastFocus = null;

  // --- Escaping and allow-lists ---

  function esc(value) {
    return value == null ? '' : String(value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // Only http(s) links are ever rendered; anything else (javascript:, data:,
  // plain text such as "None (email only)") returns ''.
  function safeUrl(value) {
    try {
      const url = new URL(String(value));
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch { return ''; }
  }

  function domainUrl(domain) {
    return DOMAIN_RE.test(domain || '') ? 'https://' + domain : '';
  }

  function findEmail(...texts) {
    const match = EMAIL_RE.exec(texts.filter(Boolean).join(' '));
    return match ? match[0] : '';
  }

  function mailtoUrl(email) {
    const t = DATA.emailTemplate || {};
    return 'mailto:' + encodeURIComponent(email).replace('%40', '@') +
      '?subject=' + encodeURIComponent(t.subject || 'Request for Removal of Personal Information') +
      '&body=' + encodeURIComponent(t.body || '');
  }

  // --- State ---

  function cleanState(raw) {
    const out = {};
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
    let n = 0;
    for (const [key, value] of Object.entries(raw)) {
      if (value === true && STATE_KEY_RE.test(key)) {
        out[key] = true;
        if (++n >= MAX_STATE_KEYS) break;
      }
    }
    return out;
  }

  function cleanMeta(raw) {
    const dates = {};
    const src = raw && typeof raw === 'object' && raw.dates && typeof raw.dates === 'object' ? raw.dates : {};
    for (const [key, value] of Object.entries(src)) {
      if (ID_RE.test(key) && typeof value === 'string' && DATE_RE.test(value)) dates[key] = value;
    }
    return { dates };
  }

  function readJson(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  }

  function loadState() {
    state = cleanState(readJson(STORAGE_KEY));
    meta = cleanMeta(readJson(STORAGE_META_KEY));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(STORAGE_META_KEY, JSON.stringify(meta));
    } catch {
      showToast('Could not save. Export your progress to avoid data loss.', 'error');
    }
  }

  function localDate() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  const isCompleted = id => state[id] === true;
  const isStepDone = (id, i) => state[id + ':s:' + i] === true;
  const dateOf = id => (meta.dates && meta.dates[id]) || '';

  function countStepsDone(id, total) {
    let n = 0;
    for (let i = 0; i < total; i++) if (isStepDone(id, i)) n++;
    return n;
  }

  function setCompleted(id, done) {
    if (done) {
      state[id] = true;
      meta.dates[id] = localDate();
    } else {
      delete state[id];
      delete meta.dates[id];
    }
  }

  function toggleSite(id) {
    if (!SITE_INDEX.has(id)) return;
    setCompleted(id, !isCompleted(id));
    saveState();
    refreshSiteCard(id);
    updateStats();
  }

  function toggleStep(id, i) {
    const entry = SITE_INDEX.get(id);
    if (!entry || !Array.isArray(entry.site.steps) || !(i >= 0 && i < entry.site.steps.length)) return;
    const key = id + ':s:' + i;
    if (state[key]) delete state[key]; else state[key] = true;
    const total = entry.site.steps.length;
    const allDone = countStepsDone(id, total) === total;
    if (allDone !== isCompleted(id)) setCompleted(id, allDone);
    saveState();
    refreshStepEl(id, i);
    refreshSiteCard(id);
    updateStats();
  }

  // --- DOM helpers ---

  const getEl = domId => document.getElementById(domId);
  const cardId = id => 'c-' + id;
  const prioId = id => 'p-' + id;
  const stepId = (id, i) => 's-' + id + '-' + i;

  const CHK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  const CHK_SM = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  const CHEVRON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
  const LINK_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
  const MAIL_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';

  function extLink(url, label, extraClass) {
    return url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" class="site-link${extraClass ? ' ' + extraClass : ''}">${LINK_ICON}${esc(label)}</a>` : '';
  }

  function emailLink(email) {
    return email ? `<a href="${esc(mailtoUrl(email))}" class="site-link">${MAIL_ICON}Email ${esc(email)}</a>` : '';
  }

  function siteCheckbox(site, done) {
    return `<button type="button" class="site-checkbox${done ? ' checked' : ''}" role="checkbox" aria-checked="${done}" aria-label="Mark ${esc(site.name)} as done" data-action="toggle-site" data-id="${esc(site.id)}">${CHK}</button>`;
  }

  function doneDate(id) {
    const d = isCompleted(id) ? dateOf(id) : '';
    return `<div class="done-date"${d ? '' : ' hidden'}>${d ? 'Marked done ' + esc(d) : ''}</div>`;
  }

  // --- Rendering ---

  function card(site, metaHtml, detailsHtml) {
    const done = isCompleted(site.id);
    const detailsId = 'd-' + site.id;
    return `<div class="site-card${done ? ' completed' : ''}" id="${esc(cardId(site.id))}" data-id="${esc(site.id)}">
      <div class="site-header">
        ${siteCheckbox(site, done)}
        <button type="button" class="site-toggle" data-action="expand" aria-expanded="false" aria-controls="${esc(detailsId)}">
          <span class="site-info">
            <span class="site-name">${esc(site.name)}</span>
            <span class="site-meta">${metaHtml}</span>
          </span>
          <span class="site-expand">${CHEVRON}</span>
        </button>
      </div>
      <div class="site-details" id="${esc(detailsId)}"><div class="site-details-clip"><div class="site-details-inner">
        ${detailsHtml}
        ${doneDate(site.id)}
      </div></div></div>
    </div>`;
  }

  function mainCard(s) {
    const steps = Array.isArray(s.steps) ? s.steps : [];
    const level = DIFFICULTY[s.difficulty] ? s.difficulty : 'medium';
    const metaHtml =
      `<span class="site-badge badge-${level}">${DIFFICULTY[level]}</span>
       <span>${esc(s.time)}</span>
       ${s.needsEmail ? '<span class="site-badge badge-neutral">Email needed</span>' : ''}
       ${s.needsId ? '<span class="site-badge badge-priority">ID required</span>' : ''}
       <span class="step-count">${countStepsDone(s.id, steps.length)}/${steps.length}</span>`;
    const detailsHtml =
      `${extLink(safeUrl(s.optOutUrl), (s.domain || s.name) + ' opt-out')}
       ${s.note ? `<div class="site-note">${esc(s.note)}</div>` : ''}
       <ul class="step-list">${steps.map((step, i) => {
         const sd = isStepDone(s.id, i);
         return `<li class="step-item">
           <button type="button" class="step-checkbox${sd ? ' checked' : ''}" role="checkbox" aria-checked="${sd}" aria-label="Step ${i + 1} done" id="${esc(stepId(s.id, i))}" data-action="toggle-step" data-id="${esc(s.id)}" data-step="${i}">${CHK_SM}</button>
           <span class="step-text${sd ? ' checked' : ''}">${esc(step)}</span>
         </li>`;
       }).join('')}</ul>`;
    return card(s, metaHtml, detailsHtml);
  }

  function additionalCard(s) {
    const url = safeUrl(s.optOutUrl);
    const metaHtml =
      `${s.priority ? '<span class="site-badge badge-priority">Priority</span>' : ''}
       <span>${esc(s.method || '')}</span>`;
    const detailsHtml =
      `<div class="link-row">
         ${url ? extLink(url, (s.domain || s.name) + ' opt-out') : extLink(domainUrl(s.domain), 'Visit ' + s.domain)}
         ${emailLink(findEmail(s.notes, s.method))}
       </div>
       ${!url && s.optOutUrl ? `<div class="detail-line">Opt-out page: ${esc(s.optOutUrl)}</div>` : ''}
       ${s.notes ? `<div class="site-note note-info">${esc(s.notes)}</div>` : ''}`;
    return card(s, metaHtml, detailsHtml);
  }

  function brokerCard(s) {
    const cat = CATEGORIES.includes(s.category) ? s.category : 'OTHER';
    const metaHtml =
      `<span class="site-badge cat-${cat.toLowerCase()}">${esc(cat)}</span>
       ${s.priority ? '<span class="site-badge badge-priority">Priority</span>' : ''}
       <span>${esc(s.optOutMethod || '')}</span>`;
    const detailsHtml =
      `<div class="link-row">
         ${extLink(domainUrl(s.website), 'Visit ' + s.website)}
         ${emailLink(findEmail(s.optOutMethod, s.notes))}
       </div>
       ${s.processingTime ? `<div class="detail-line">Processing: ${esc(s.processingTime)}</div>` : ''}
       ${s.notes ? `<div class="site-note note-info">${esc(s.notes)}</div>` : ''}`;
    return card(s, metaHtml, detailsHtml);
  }

  function renderDashboard() {
    const fill = (elId, items) => {
      const el = getEl(elId);
      if (el && Array.isArray(items)) el.innerHTML = items.map(t => '<li>' + esc(t) + '</li>').join('');
    };
    fill('quick-start-list', DATA.quickStart);
    fill('before-begin-list', DATA.beforeYouBegin);
    fill('pro-tips-list', DATA.proTips);
    renderPriorityList();
    updateStats();
  }

  function renderPriorityList() {
    const sites = [...SECTIONS.additional.sites, ...SECTIONS.brokers.sites].filter(s => s.priority);
    getEl('priority-list').innerHTML = sites.map(s => {
      const done = isCompleted(s.id);
      const url = safeUrl(s.optOutUrl) || domainUrl(s.domain || s.website);
      return `<div class="site-card${done ? ' completed' : ''}" id="${esc(prioId(s.id))}">
        <div class="site-header site-header-static">
          ${siteCheckbox(s, done)}
          <button type="button" class="site-toggle" data-action="goto" data-id="${esc(s.id)}" aria-label="Show details for ${esc(s.name)}">
            <span class="site-info">
              <span class="site-name">${esc(s.name)}</span>
              <span class="site-meta">
                <span class="site-badge badge-priority">Priority</span>
                <span>${esc(s.domain || s.website || '')}</span>
              </span>
            </span>
          </button>
          ${extLink(url, 'Open', 'site-link-compact')}
        </div>
      </div>`;
    }).join('');
  }

  function ensureRendered(page) {
    const section = SECTIONS[page];
    if (!section || rendered[page]) return;
    getEl(section.list).innerHTML = section.sites.map(section.card).join('');
    rendered[page] = true;
  }

  // --- UI updates ---

  function updateStats() {
    const counts = {};
    let total = 0;
    let done = 0;
    SECTION_KEYS.forEach(key => {
      const sites = SECTIONS[key].sites;
      counts[key] = sites.filter(s => isCompleted(s.id)).length;
      total += sites.length;
      done += counts[key];
      const pct = sites.length ? Math.round((counts[key] / sites.length) * 100) : 0;
      getEl(key + '-count').textContent = '(' + counts[key] + '/' + sites.length + ')';
      getEl('sp-count-' + key).textContent = counts[key] + '/' + sites.length;
      getEl('sp-bar-' + key).style.width = pct + '%';
    });
    const pct = total ? Math.round((done / total) * 100) : 0;
    const today = localDate();
    const todayN = Object.keys(meta.dates).filter(id => meta.dates[id] === today && isCompleted(id) && SITE_INDEX.has(id)).length;

    getEl('stat-completed').textContent = done;
    getEl('stat-total').textContent = total;
    getEl('stat-main').textContent = counts.main + '/' + SECTIONS.main.sites.length;
    getEl('stat-today').textContent = todayN;
    getEl('progress-pct').textContent = pct + '%';
    getEl('progress-bar').style.width = pct + '%';
    getEl('progress-meter').setAttribute('aria-valuenow', String(pct));
    getEl('progress-detail').textContent = done + ' of ' + total + ' sites completed';
  }

  function refreshSiteCard(id) {
    const done = isCompleted(id);
    [cardId(id), prioId(id)].forEach(domId => {
      const el = getEl(domId);
      if (!el) return;
      el.classList.toggle('completed', done);
      const cb = el.querySelector('.site-checkbox');
      if (cb) { cb.classList.toggle('checked', done); cb.setAttribute('aria-checked', String(done)); }
      const sc = el.querySelector('.step-count');
      const entry = SITE_INDEX.get(id);
      if (sc && entry && Array.isArray(entry.site.steps)) {
        sc.textContent = countStepsDone(id, entry.site.steps.length) + '/' + entry.site.steps.length;
      }
      const dd = el.querySelector('.done-date');
      if (dd) {
        const d = done ? dateOf(id) : '';
        dd.hidden = !d;
        dd.textContent = d ? 'Marked done ' + d : '';
      }
    });
  }

  function refreshStepEl(id, i) {
    const el = getEl(stepId(id, i));
    if (!el) return;
    const done = isStepDone(id, i);
    el.classList.toggle('checked', done);
    el.setAttribute('aria-checked', String(done));
    const txt = el.nextElementSibling;
    if (txt) txt.classList.toggle('checked', done);
  }

  function setExpanded(cardEl, open) {
    cardEl.classList.toggle('expanded', open);
    const toggle = cardEl.querySelector('.site-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
  }

  // --- Navigation ---

  function navigate(page, push) {
    if (!PAGES.includes(page)) page = 'dashboard';
    ensureRendered(page);
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + page));
    document.querySelectorAll('.tab-item').forEach(t => {
      const on = t.dataset.page === page;
      t.classList.toggle('active', on);
      if (on) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
    if (push !== false && history.state !== page) history.pushState(page, '', '#' + page);
  }

  function pageFromHash() {
    const page = location.hash.slice(1);
    return PAGES.includes(page) ? page : 'dashboard';
  }

  // Jump to a site's card from the priority list or global search.
  function goToSite(id) {
    const entry = SITE_INDEX.get(id);
    if (!entry) return;
    closeModal();
    navigate(entry.section);
    const input = getEl('search-' + entry.section);
    if (input) input.value = '';
    setFilter(entry.section, 'all');
    applyFilter(entry.section);
    const el = getEl(cardId(id));
    if (!el) return;
    setExpanded(el, true);
    el.scrollIntoView({ block: 'center' });
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
    const toggle = el.querySelector('.site-toggle');
    if (toggle) toggle.focus({ preventScroll: true });
  }

  // --- Search and filter ---

  function haystack(site) {
    let text = haystacks.get(site.id);
    if (text === undefined) {
      text = [site.name, site.domain, site.website, site.method, site.optOutMethod, site.notes, site.note, site.category]
        .filter(Boolean).join(' ').toLowerCase();
      haystacks.set(site.id, text);
    }
    return text;
  }

  function matchesFilter(site, filter) {
    switch (filter) {
      case 'all': return true;
      case 'pending': return !isCompleted(site.id);
      case 'completed': return isCompleted(site.id);
      case 'priority': return site.priority === true;
      case 'easy': case 'medium': case 'hard': return site.difficulty === filter;
      case 'OTHER': return !CATEGORIES.includes(site.category) || site.category === 'OTHER';
      default: return site.category === filter;
    }
  }

  function applyFilter(section) {
    if (!rendered[section]) return;
    const input = getEl('search-' + section);
    const words = (input ? input.value : '').toLowerCase().trim().split(/\s+/).filter(Boolean);
    let shown = 0;
    SECTIONS[section].sites.forEach(site => {
      const el = getEl(cardId(site.id));
      if (!el) return;
      const text = haystack(site);
      const ok = matchesFilter(site, filters[section]) && words.every(w => text.includes(w));
      el.hidden = !ok;
      if (ok) shown++;
    });
    getEl('empty-' + section).hidden = shown > 0;
  }

  function setFilter(section, filter) {
    filters[section] = filter;
    document.querySelectorAll('#filter-' + section + ' .filter-chip').forEach(chip => {
      const on = chip.dataset.filter === filter;
      chip.classList.toggle('active', on);
      chip.setAttribute('aria-pressed', String(on));
    });
  }

  function debounce(key, fn) {
    clearTimeout(timers[key]);
    timers[key] = setTimeout(fn, 120);
  }

  // Global search across all three sections.
  function showGlobalSearch() {
    showModal('Search all sites',
      `<div class="search-wrap">
         <input type="search" class="search-input search-input-plain" id="global-search" placeholder="Name, domain, or keyword..." aria-label="Search all sites" autocomplete="off" spellcheck="false">
       </div>
       <div id="global-results" class="global-results"><p class="modal-text">Search ${SITE_INDEX.size} sites across Main, Additional and Data Brokers.</p></div>`);
    const input = getEl('global-search');
    if (input) input.focus();
  }

  function runGlobalSearch() {
    const input = getEl('global-search');
    const out = getEl('global-results');
    if (!input || !out) return;
    const words = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (!words.length) { out.innerHTML = ''; return; }
    const hits = [];
    for (const { site, section } of SITE_INDEX.values()) {
      const text = haystack(site);
      if (words.every(w => text.includes(w))) hits.push({ site, section, nameHit: site.name.toLowerCase().includes(words[0]) });
    }
    hits.sort((a, b) => Number(b.nameHit) - Number(a.nameHit));
    const LIMIT = 40;
    out.innerHTML = hits.length
      ? hits.slice(0, LIMIT).map(({ site, section }) =>
          `<button type="button" class="result-row" data-action="goto" data-id="${esc(site.id)}">
             <span class="result-name">${isCompleted(site.id) ? '<span class="result-done">✓</span> ' : ''}${esc(site.name)}</span>
             <span class="result-meta">${esc(SECTIONS[section].label)} · ${esc(site.domain || site.website || '')}</span>
           </button>`).join('') +
        (hits.length > LIMIT ? `<p class="modal-text">${hits.length - LIMIT} more — keep typing to narrow it down.</p>` : '')
      : '<p class="modal-text">No sites match.</p>';
  }

  // --- Export / Import ---

  function exportProgress() {
    const payload = JSON.stringify({ version: 1, exportDate: new Date().toISOString(), state, meta }, null, 2);
    const url = URL.createObjectURL(new Blob([payload], { type: 'application/json' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'privacy-shield-' + localDate() + '.json' });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Progress exported!', 'success');
  }

  // Validates an imported backup. Nothing from the file is trusted: only
  // well-formed "site-id" / "site-id:s:N" keys set to true survive.
  function sanitizeImport(text) {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
    if (!parsed.state || typeof parsed.state !== 'object' || Array.isArray(parsed.state)) throw new Error('no state');
    return { state: cleanState(parsed.state), meta: cleanMeta(parsed.meta) };
  }

  // Decides what happens to progress already on this device when a backup is
  // imported. `current` and `incoming` are both { state, meta } and both are
  // already sanitized. Must return a { state, meta } object.
  function mergeProgress(current, incoming) {
    // TODO(human): choose the import policy. Right now the backup simply
    // replaces what is on the device (the original behaviour).
    return incoming;
  }

  function handleImport(file) {
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) { showToast('That file is too large to be a backup.', 'error'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const merged = mergeProgress({ state, meta }, sanitizeImport(String(reader.result)));
        state = cleanState(merged.state);
        meta = cleanMeta(merged.meta);
        saveState();
        location.reload();
      } catch {
        showToast('That file is not a Privacy Shield backup.', 'error');
      }
    };
    reader.onerror = () => showToast('Could not read that file.', 'error');
    reader.readAsText(file);
  }

  function confirmReset() {
    showModal('Reset Progress',
      `<p class="modal-text">This will permanently erase all your checklist progress on this device. This cannot be undone.</p>
       <p class="modal-text">Consider exporting your data first.</p>
       <div class="btn-row">
         <button type="button" class="btn btn-secondary" data-action="close-modal">Cancel</button>
         <button type="button" class="btn btn-danger" data-action="do-reset">Reset Everything</button>
       </div>`);
  }

  function doReset() {
    state = {};
    meta = { dates: {} };
    saveState();
    location.reload();
  }

  // --- Static modals ---

  function showReminderModal() {
    showModal('Daily Reminder Setup',
      `<div class="modal-body">
        <p class="modal-text">Set up a daily reminder at <strong>12:00 PM</strong> (noon) in your time zone to work through your opt-out checklist.</p>
        <div class="tip-card">
          <h3>Create an iOS Shortcut</h3>
          <ol class="tip-list">
            <li>Open the <strong>Shortcuts</strong> app on your iPhone</li>
            <li>Tap <strong>+</strong> to create a new shortcut</li>
            <li>Add action: <strong>"Open URL"</strong></li>
            <li>Set the URL to this app's address (share it from Safari)</li>
            <li>Tap the name at top &rarr; <strong>Rename</strong> to "Privacy Shield"</li>
            <li>Tap <strong>Done</strong> to save</li>
          </ol>
        </div>
        <div class="tip-card">
          <h3>Set the Automation</h3>
          <ol class="tip-list">
            <li>Go to <strong>Shortcuts &rarr; Automation</strong> tab</li>
            <li>Tap <strong>+</strong> &rarr; <strong>Time of Day</strong></li>
            <li>Set to <strong>12:00 PM</strong>, repeat <strong>Daily</strong></li>
            <li>Choose <strong>"Run Shortcut"</strong> &rarr; select "Privacy Shield"</li>
            <li>Turn <strong>off</strong> "Ask Before Running"</li>
            <li>Tap <strong>Done</strong></li>
          </ol>
        </div>
        <p class="modal-text">You'll get a notification every day at noon that opens this app directly.</p>
        <button type="button" class="btn btn-primary btn-block" data-action="close-modal">Got It</button>
      </div>`);
  }

  function emailText() {
    const t = DATA.emailTemplate || {};
    return 'Subject: ' + (t.subject || '') + '\n\n' + (t.body || '');
  }

  function showEmailTemplate() {
    showModal('Email Template',
      `<p class="modal-text">Copy this template and customize for each site:</p>
       <div class="email-template"><button type="button" class="copy-btn" data-action="copy-email">Copy</button>${esc(emailText())}</div>`);
  }

  function copyEmail() {
    const text = emailText();
    const ok = () => showToast('Copied!', 'success');
    const fallback = () => {
      const ta = Object.assign(document.createElement('textarea'), { value: text });
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); ok(); } catch { showToast('Copy failed. Select the text and copy it manually.', 'error'); }
      ta.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fallback);
    else fallback();
  }

  function showAddToHomescreen() {
    showModal('Add to Home Screen',
      `<div class="modal-body">
        <div class="tip-card">
          <h3>iOS (Safari)</h3>
          <ol class="tip-list">
            <li>Tap the <strong>Share</strong> button (box with arrow)</li>
            <li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>
            <li>Tap <strong>"Add"</strong> in the top right</li>
          </ol>
        </div>
        <div class="tip-card">
          <h3>Android (Chrome)</h3>
          <ol class="tip-list">
            <li>Tap the <strong>three dots</strong> menu (&vellip;)</li>
            <li>Tap <strong>"Add to Home screen"</strong></li>
            <li>Tap <strong>"Add"</strong></li>
          </ol>
        </div>
        <p class="modal-text">The app launches in fullscreen mode, like a native app. Your progress is saved locally on your device.</p>
      </div>`);
  }

  // --- Modal ---

  function showModal(title, html) {
    const overlay = getEl('modal-overlay');
    if (!overlay.classList.contains('active')) lastFocus = document.activeElement;
    getEl('modal-title').textContent = title;
    getEl('modal-content').innerHTML = html;
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
    getEl('modal').scrollTop = 0;
    getEl('modal').focus();
  }

  function closeModal() {
    const overlay = getEl('modal-overlay');
    if (!overlay.classList.contains('active')) return;
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
    getEl('modal-content').innerHTML = '';
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
    lastFocus = null;
  }

  function trapFocus(e) {
    const modal = getEl('modal');
    const items = modal.querySelectorAll('button, a[href], input, [tabindex]:not([tabindex="-1"])');
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === modal)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  }

  // --- Toast ---

  function showToast(msg, type) {
    const t = document.createElement('div');
    t.className = 'toast' + (type === 'success' || type === 'error' ? ' ' + type : '');
    t.textContent = (type === 'success' ? '✓ ' : type === 'error' ? '✗ ' : '') + msg;
    getEl('toast-container').appendChild(t);
    setTimeout(() => { t.classList.add('leaving'); setTimeout(() => t.remove(), 300); }, 3000);
  }

  // --- Theme ---

  function themePref() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      return saved === 'light' || saved === 'system' ? saved : 'dark';
    } catch { return 'dark'; }
  }

  function applyTheme(pref) {
    const light = pref === 'light' || (pref === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches);
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', light ? '#f5f6fa' : '#0a0a0f');
    document.querySelectorAll('.segment[data-theme]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === pref)));
  }

  function setTheme(pref) {
    if (!['dark', 'light', 'system'].includes(pref)) return;
    try { localStorage.setItem(THEME_KEY, pref); } catch { /* still applies for this visit */ }
    applyTheme(pref);
  }

  // --- Events (single delegated listener; no inline handlers anywhere) ---

  const ACTIONS = {
    'nav': el => navigate(el.dataset.page),
    'search-open': () => showGlobalSearch(),
    'goto': el => goToSite(el.dataset.id),
    'toggle-site': el => toggleSite(el.dataset.id),
    'toggle-step': el => toggleStep(el.dataset.id, Number(el.dataset.step)),
    'expand': el => { const c = el.closest('.site-card'); if (c) setExpanded(c, !c.classList.contains('expanded')); },
    'filter': el => { if (SECTIONS[el.dataset.section]) { setFilter(el.dataset.section, el.dataset.filter); applyFilter(el.dataset.section); } },
    'export': () => exportProgress(),
    'import': () => getEl('import-file').click(),
    'reset': () => confirmReset(),
    'do-reset': () => doReset(),
    'reminder': () => showReminderModal(),
    'email-template': () => showEmailTemplate(),
    'copy-email': () => copyEmail(),
    'a2hs': () => showAddToHomescreen(),
    'theme': el => setTheme(el.dataset.theme),
    'close-modal': () => closeModal(),
    'overlay': (el, e) => { if (e.target === el) closeModal(); }
  };

  function onClick(e) {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const handler = ACTIONS[el.dataset.action];
    if (handler) handler(el, e);
  }

  function onInput(e) {
    const el = e.target;
    if (el.id === 'global-search') debounce('global', runGlobalSearch);
    else if (el.classList.contains('search-input') && SECTIONS[el.dataset.section]) {
      debounce(el.dataset.section, () => applyFilter(el.dataset.section));
    }
  }

  function onKeydown(e) {
    const modalOpen = getEl('modal-overlay').classList.contains('active');
    if (e.key === 'Escape' && modalOpen) closeModal();
    else if (e.key === 'Tab' && modalOpen) trapFocus(e);
    else if (e.key === '/' && !modalOpen && !/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) { e.preventDefault(); showGlobalSearch(); }
  }

  function init() {
    loadState();
    renderDashboard();
    applyTheme(themePref());

    document.addEventListener('click', onClick);
    document.addEventListener('input', onInput);
    document.addEventListener('keydown', onKeydown);
    getEl('import-file').addEventListener('change', e => { handleImport(e.target.files[0]); e.target.value = ''; });
    window.addEventListener('popstate', e => navigate(PAGES.includes(e.state) ? e.state : pageFromHash(), false));
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const onScheme = () => { if (themePref() === 'system') applyTheme('system'); };
      if (mq.addEventListener) mq.addEventListener('change', onScheme);
    }

    const start = pageFromHash();
    history.replaceState(start, '', location.hash || location.pathname + location.search);
    navigate(start, false);

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
