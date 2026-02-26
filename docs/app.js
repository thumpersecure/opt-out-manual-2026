const App = (() => {
  const STORAGE_KEY = 'privacy-shield-progress';
  const STORAGE_META_KEY = 'privacy-shield-meta';
  let state = {};
  let meta = {};
  let currentFilters = { main: 'all', additional: 'all', brokers: 'all' };
  let rendered = { main: false, additional: false, brokers: false };
  let searchTimers = {};

  function init() {
    loadState();
    renderDashboard();
    registerSW();
    window.addEventListener('popstate', handlePopState);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  // --- State ---

  function loadState() {
    try { state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { state = {}; }
    try { meta = JSON.parse(localStorage.getItem(STORAGE_META_KEY)) || {}; } catch { meta = {}; }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(STORAGE_META_KEY, JSON.stringify(meta));
    } catch {
      showToast('Storage full. Export your progress to avoid data loss.', 'error');
    }
  }

  function isCompleted(id) { return state[id] === true; }
  function isStepDone(id, i) { return state[id + ':s:' + i] === true; }

  function countStepsDone(id, total) {
    let n = 0;
    for (let i = 0; i < total; i++) if (isStepDone(id, i)) n++;
    return n;
  }

  function toggleSite(id) {
    const was = isCompleted(id);
    state[id] = !was;
    if (!was) {
      if (!meta.dates) meta.dates = {};
      meta.dates[id] = new Date().toISOString().slice(0, 10);
    }
    saveState();
    refreshSiteCard(id);
    updateStats();
  }

  function toggleStep(id, i, total) {
    const k = id + ':s:' + i;
    state[k] = !state[k];
    const done = countStepsDone(id, total);
    state[id] = done === total;
    if (done === total) {
      if (!meta.dates) meta.dates = {};
      meta.dates[id] = new Date().toISOString().slice(0, 10);
    }
    saveState();
    refreshStepEl(id, i);
    refreshSiteCard(id);
    updateStats();
  }

  // --- Safe DOM ID helpers ---

  function cardId(id) { return 'c-' + id; }
  function prioId(id) { return 'p-' + id; }
  function stepId(id, i) { return 's-' + id + '-' + i; }
  function getEl(domId) { return document.getElementById(domId); }

  // --- Rendering ---

  function renderDashboard() {
    const fill = (elId, items) => {
      const el = getEl(elId);
      if (el && items) el.innerHTML = items.map(t => '<li>' + esc(t) + '</li>').join('');
    };
    fill('quick-start-list', SITE_DATA.quickStart);
    fill('before-begin-list', SITE_DATA.beforeYouBegin);
    fill('pro-tips-list', SITE_DATA.proTips);
    renderPriorityList();
    updateStats();
  }

  function renderPriorityList() {
    const sites = [
      ...SITE_DATA.additionalSites.filter(s => s.priority),
      ...SITE_DATA.dataBrokerSites.filter(s => s.priority)
    ];
    getEl('priority-list').innerHTML = sites.map(s => {
      const done = isCompleted(s.id);
      const url = s.optOutUrl || '';
      const hasUrl = url.startsWith('http');
      return `<div class="site-card${done ? ' completed' : ''}" id="${prioId(s.id)}">
        <div class="site-header" onclick="App.toggleSite('${s.id}')">
          <div class="site-checkbox${done ? ' checked' : ''}">${CHK}</div>
          <div class="site-info">
            <div class="site-name">${esc(s.name)}</div>
            <div class="site-meta">
              <span class="site-badge badge-priority">Priority</span>
              <span>${esc(s.domain || s.website || '')}</span>
            </div>
          </div>
          ${hasUrl ? `<a href="${esc(url)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="site-link" style="margin:0;padding:6px 10px;font-size:.75rem">Open</a>` : ''}
        </div>
      </div>`;
    }).join('');
  }

  function ensureRendered(page) {
    if (page === 'main' && !rendered.main) { renderMainSites(); rendered.main = true; }
    if (page === 'additional' && !rendered.additional) { renderAdditionalSites(); rendered.additional = true; }
    if (page === 'brokers' && !rendered.brokers) { renderBrokerSites(); rendered.brokers = true; }
  }

  function renderMainSites() {
    getEl('main-sites-list').innerHTML = SITE_DATA.mainSites.map(s => {
      const done = isCompleted(s.id);
      const stepsDone = countStepsDone(s.id, s.steps.length);
      const dc = s.difficulty === 'easy' ? 'badge-easy' : 'badge-medium';
      const dl = s.difficulty === 'easy' ? 'Easy' : 'Medium';
      return `<div class="site-card${done ? ' completed' : ''}" id="${cardId(s.id)}" data-d="${s.difficulty}" data-done="${done}">
        <div class="site-header" onclick="App.toggleExpand(this.parentElement)">
          <div class="site-checkbox${done ? ' checked' : ''}" onclick="event.stopPropagation();App.toggleSite('${s.id}')">${CHK}</div>
          <div class="site-info">
            <div class="site-name">${esc(s.name)}</div>
            <div class="site-meta">
              <span class="site-badge ${dc}">${dl}</span>
              <span>${esc(s.time)}</span>
              ${s.needsEmail ? '<span>📧</span>' : ''}
              <span class="step-count">${stepsDone}/${s.steps.length}</span>
            </div>
          </div>
          <div class="site-expand">${CHEVRON}</div>
        </div>
        <div class="site-details"><div class="site-details-inner">
          <a href="${esc(s.optOutUrl)}" target="_blank" rel="noopener" class="site-link">${LINK_ICON}${esc(s.domain)} opt-out</a>
          ${s.note ? `<div class="site-note">${esc(s.note)}</div>` : ''}
          <ul class="step-list">${s.steps.map((step, i) => {
            const sd = isStepDone(s.id, i);
            return `<li class="step-item">
              <div class="step-checkbox${sd ? ' checked' : ''}" id="${stepId(s.id, i)}" onclick="App.toggleStep('${s.id}',${i},${s.steps.length})">${CHK_SM}</div>
              <span class="step-text${sd ? ' checked' : ''}">${esc(step)}</span>
            </li>`;
          }).join('')}</ul>
        </div></div>
      </div>`;
    }).join('');
  }

  function renderAdditionalSites() {
    getEl('additional-sites-list').innerHTML = SITE_DATA.additionalSites.map(s => {
      const done = isCompleted(s.id);
      const url = s.optOutUrl || '';
      const hasUrl = url.startsWith('http');
      return `<div class="site-card${done ? ' completed' : ''}" id="${cardId(s.id)}" data-done="${done}" data-pr="${s.priority || false}">
        <div class="site-header" onclick="App.toggleExpand(this.parentElement)">
          <div class="site-checkbox${done ? ' checked' : ''}" onclick="event.stopPropagation();App.toggleSite('${s.id}')">${CHK}</div>
          <div class="site-info">
            <div class="site-name">${esc(s.name)}</div>
            <div class="site-meta">
              ${s.priority ? '<span class="site-badge badge-priority">Priority</span>' : ''}
              <span>${esc(s.method || '')}</span>
            </div>
          </div>
          <div class="site-expand">${CHEVRON}</div>
        </div>
        <div class="site-details"><div class="site-details-inner">
          ${hasUrl ? `<a href="${esc(url)}" target="_blank" rel="noopener" class="site-link">${LINK_ICON}${esc(s.domain)} opt-out</a>` : ''}
          ${s.notes ? `<div class="site-note" style="border-left:3px solid var(--primary);background:var(--surface)">${esc(s.notes)}</div>` : ''}
        </div></div>
      </div>`;
    }).join('');
  }

  function renderBrokerSites() {
    getEl('brokers-sites-list').innerHTML = SITE_DATA.dataBrokerSites.map(s => {
      const done = isCompleted(s.id);
      const cat = (s.category || 'OTHER').toLowerCase();
      return `<div class="site-card${done ? ' completed' : ''}" id="${cardId(s.id)}" data-done="${done}" data-cat="${s.category || ''}" data-pr="${s.priority || false}">
        <div class="site-header" onclick="App.toggleExpand(this.parentElement)">
          <div class="site-checkbox${done ? ' checked' : ''}" onclick="event.stopPropagation();App.toggleSite('${s.id}')">${CHK}</div>
          <div class="site-info">
            <div class="site-name">${esc(s.name)}</div>
            <div class="site-meta">
              <span class="site-badge cat-${cat}">${esc(s.category || 'OTHER')}</span>
              ${s.priority ? '<span class="site-badge badge-priority">Priority</span>' : ''}
              <span>${esc(s.optOutMethod || '')}</span>
            </div>
          </div>
          <div class="site-expand">${CHEVRON}</div>
        </div>
        <div class="site-details"><div class="site-details-inner">
          ${s.processingTime ? `<div style="font-size:.8125rem;color:var(--text-secondary);margin-bottom:8px">Processing: ${esc(s.processingTime)}</div>` : ''}
          ${s.notes ? `<div class="site-note" style="border-left:3px solid var(--primary);background:var(--surface)">${esc(s.notes)}</div>` : ''}
        </div></div>
      </div>`;
    }).join('');
  }

  // --- UI Updates ---

  function updateStats() {
    const mc = SITE_DATA.mainSites.filter(s => isCompleted(s.id)).length;
    const ac = SITE_DATA.additionalSites.filter(s => isCompleted(s.id)).length;
    const bc = SITE_DATA.dataBrokerSites.filter(s => isCompleted(s.id)).length;
    const total = SITE_DATA.mainSites.length + SITE_DATA.additionalSites.length + SITE_DATA.dataBrokerSites.length;
    const done = mc + ac + bc;
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    const today = new Date().toISOString().slice(0, 10);
    const todayN = meta.dates ? Object.values(meta.dates).filter(d => d === today).length : 0;

    getEl('stat-completed').textContent = done;
    getEl('stat-total').textContent = total;
    getEl('stat-main').textContent = mc + '/' + SITE_DATA.mainSites.length;
    getEl('stat-today').textContent = todayN;
    getEl('progress-pct').textContent = pct + '%';
    getEl('progress-bar').style.width = pct + '%';
    getEl('progress-detail').textContent = done + ' of ' + total + ' sites completed';
    getEl('main-count').textContent = '(' + mc + '/' + SITE_DATA.mainSites.length + ')';
    getEl('additional-count').textContent = '(' + ac + '/' + SITE_DATA.additionalSites.length + ')';
    getEl('brokers-count').textContent = '(' + bc + '/' + SITE_DATA.dataBrokerSites.length + ')';
  }

  function refreshSiteCard(id) {
    const done = isCompleted(id);
    [cardId(id), prioId(id)].forEach(domId => {
      const card = getEl(domId);
      if (!card) return;
      card.classList.toggle('completed', done);
      card.setAttribute('data-done', String(done));
      const cb = card.querySelector('.site-checkbox');
      if (cb) cb.classList.toggle('checked', done);
      const sc = card.querySelector('.step-count');
      if (sc) {
        const ms = SITE_DATA.mainSites.find(s => s.id === id);
        if (ms) sc.textContent = countStepsDone(id, ms.steps.length) + '/' + ms.steps.length;
      }
    });
  }

  function refreshStepEl(id, i) {
    const el = getEl(stepId(id, i));
    if (!el) return;
    const done = isStepDone(id, i);
    el.classList.toggle('checked', done);
    const txt = el.nextElementSibling;
    if (txt) txt.classList.toggle('checked', done);
  }

  // --- Navigation ---

  function navigate(page, tabEl) {
    ensureRendered(page);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    getEl('page-' + page).classList.add('active');
    (tabEl || document.querySelector('[data-page="' + page + '"]')).classList.add('active');
    window.scrollTo(0, 0);
    if (history.state !== page) history.pushState(page, '', '');
  }

  function handlePopState(e) {
    if (e.state) navigate(e.state);
  }

  function toggleExpand(el) { el.classList.toggle('expanded'); }

  // --- Search & Filter (debounced) ---

  function debounce(key, fn) {
    clearTimeout(searchTimers[key]);
    searchTimers[key] = setTimeout(fn, 120);
  }

  function filterMain() {
    debounce('main', () => {
      const q = getEl('search-main').value.toLowerCase().trim();
      const f = currentFilters.main;
      const cards = getEl('main-sites-list').children;
      SITE_DATA.mainSites.forEach((s, i) => {
        if (!cards[i]) return;
        const ms = !q || s.name.toLowerCase().includes(q) || s.domain.toLowerCase().includes(q);
        let mf = true;
        if (f === 'pending') mf = !isCompleted(s.id);
        else if (f === 'completed') mf = isCompleted(s.id);
        else if (f === 'easy') mf = s.difficulty === 'easy';
        else if (f === 'medium') mf = s.difficulty === 'medium';
        cards[i].style.display = ms && mf ? '' : 'none';
      });
    });
  }

  function filterAdditional() {
    debounce('add', () => {
      const q = getEl('search-additional').value.toLowerCase().trim();
      const f = currentFilters.additional;
      const cards = getEl('additional-sites-list').children;
      SITE_DATA.additionalSites.forEach((s, i) => {
        if (!cards[i]) return;
        const ms = !q || s.name.toLowerCase().includes(q) || (s.domain || '').toLowerCase().includes(q);
        let mf = true;
        if (f === 'pending') mf = !isCompleted(s.id);
        else if (f === 'completed') mf = isCompleted(s.id);
        else if (f === 'priority') mf = s.priority === true;
        cards[i].style.display = ms && mf ? '' : 'none';
      });
    });
  }

  function filterBrokers() {
    debounce('bro', () => {
      const q = getEl('search-brokers').value.toLowerCase().trim();
      const f = currentFilters.brokers;
      const cats = ['B2B','AD','MKT','FIN','GOV','LOC','HR','ID','PROP','PUB','OTHER'];
      const cards = getEl('brokers-sites-list').children;
      SITE_DATA.dataBrokerSites.forEach((s, i) => {
        if (!cards[i]) return;
        const ms = !q || s.name.toLowerCase().includes(q) || (s.website || '').toLowerCase().includes(q);
        let mf = true;
        if (f === 'pending') mf = !isCompleted(s.id);
        else if (f === 'completed') mf = isCompleted(s.id);
        else if (cats.includes(f)) mf = s.category === f;
        cards[i].style.display = ms && mf ? '' : 'none';
      });
    });
  }

  function setFilter(section, filter, chip) {
    currentFilters[section] = filter;
    chip.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    if (section === 'main') filterMain();
    else if (section === 'additional') filterAdditional();
    else filterBrokers();
  }

  function showSearch() {
    const page = document.querySelector('.page.active');
    if (!page) return;
    const inp = page.querySelector('.search-input');
    if (inp) { inp.focus(); inp.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  }

  // --- Export / Import ---

  function exportProgress() {
    const blob = new Blob([JSON.stringify({ version: 1, exportDate: new Date().toISOString(), state, meta }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: 'privacy-shield-' + new Date().toISOString().slice(0, 10) + '.json' });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Progress exported!', 'success');
  }

  function importProgress() { getEl('import-file').click(); }

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = ev => {
      try {
        const d = JSON.parse(ev.target.result);
        if (!d.state) throw 0;
        state = d.state; meta = d.meta || {};
        saveState(); location.reload();
      } catch { showToast('Invalid file format.', 'error'); }
    };
    r.readAsText(file); e.target.value = '';
  }

  function confirmReset() {
    showModal('Reset Progress',
      `<p style="margin-bottom:16px;color:var(--text-secondary)">This will permanently erase all your checklist progress. This cannot be undone.</p>
       <p style="margin-bottom:20px;color:var(--text-secondary)">Consider exporting your data first.</p>
       <div style="display:flex;gap:8px">
         <button class="btn btn-secondary" style="flex:1" onclick="App.closeModal()">Cancel</button>
         <button class="btn btn-danger" style="flex:1" onclick="App.doReset()">Reset Everything</button>
       </div>`);
  }

  function doReset() {
    state = {}; meta = {}; saveState(); closeModal(); location.reload();
  }

  // --- Reminder (iOS Shortcut) ---

  function showReminderModal() {
    showModal('Daily Reminder Setup',
      `<div style="color:var(--text-secondary);font-size:.9rem;line-height:1.6">
        <p style="margin-bottom:16px">Set up a daily reminder at <strong>12:00 PM</strong> (noon) in your time zone to work through your opt-out checklist.</p>
        <div class="tip-card" style="margin-bottom:16px">
          <h3 style="margin-bottom:8px">Create an iOS Shortcut</h3>
          <ol class="tip-list">
            <li>Open the <strong>Shortcuts</strong> app on your iPhone</li>
            <li>Tap <strong>+</strong> to create a new shortcut</li>
            <li>Add action: <strong>"Open URL"</strong></li>
            <li>Set the URL to this app's address (share it from Safari)</li>
            <li>Tap the name at top &rarr; <strong>Rename</strong> to "Privacy Shield"</li>
            <li>Tap <strong>Done</strong> to save</li>
          </ol>
        </div>
        <div class="tip-card" style="margin-bottom:16px">
          <h3 style="margin-bottom:8px">Set the Automation</h3>
          <ol class="tip-list">
            <li>Go to <strong>Shortcuts &rarr; Automation</strong> tab</li>
            <li>Tap <strong>+</strong> &rarr; <strong>Time of Day</strong></li>
            <li>Set to <strong>12:00 PM</strong>, repeat <strong>Daily</strong></li>
            <li>Choose <strong>"Run Shortcut"</strong> &rarr; select "Privacy Shield"</li>
            <li>Turn <strong>off</strong> "Ask Before Running"</li>
            <li>Tap <strong>Done</strong></li>
          </ol>
        </div>
        <p style="margin-bottom:16px">You'll get a notification every day at noon that opens this app directly.</p>
        <button class="btn btn-primary btn-block" onclick="App.closeModal()">Got It</button>
      </div>`);
  }

  // --- Email Template ---

  function showEmailTemplate() {
    const t = SITE_DATA.emailTemplate;
    showModal('Email Template',
      `<p style="margin-bottom:12px;color:var(--text-secondary);font-size:.875rem">Copy this template and customize for each site:</p>
       <div class="email-template"><button class="copy-btn" onclick="App.copyEmail()">Copy</button>Subject: ${esc(t.subject)}\n\n${esc(t.body)}</div>`);
  }

  function copyEmail() {
    const t = SITE_DATA.emailTemplate;
    const txt = 'Subject: ' + t.subject + '\n\n' + t.body;
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => showToast('Copied!', 'success'));
    else { const ta = Object.assign(document.createElement('textarea'), { value: txt }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast('Copied!', 'success'); }
  }

  // --- Add to Homescreen ---

  function showAddToHomescreen() {
    showModal('Add to Home Screen',
      `<div style="color:var(--text-secondary);font-size:.9rem;line-height:1.6">
        <div class="tip-card" style="margin-bottom:16px">
          <h3 style="margin-bottom:8px">iOS (Safari)</h3>
          <ol class="tip-list">
            <li>Tap the <strong>Share</strong> button (box with arrow)</li>
            <li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>
            <li>Tap <strong>"Add"</strong> in the top right</li>
          </ol>
        </div>
        <div class="tip-card" style="margin-bottom:16px">
          <h3 style="margin-bottom:8px">Android (Chrome)</h3>
          <ol class="tip-list">
            <li>Tap the <strong>three dots</strong> menu (&vellip;)</li>
            <li>Tap <strong>"Add to Home screen"</strong></li>
            <li>Tap <strong>"Add"</strong></li>
          </ol>
        </div>
        <p>The app launches in fullscreen mode, like a native app. Your progress is saved locally on your device.</p>
      </div>`);
  }

  // --- Modal ---

  function showModal(title, html) {
    getEl('modal-title').innerHTML = title;
    getEl('modal-content').innerHTML = html;
    getEl('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    getEl('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Toast ---

  function showToast(msg, type) {
    const t = document.createElement('div');
    t.className = 'toast ' + (type || '');
    t.innerHTML = (type === 'success' ? '&#10003; ' : type === 'error' ? '&#10007; ' : '') + esc(msg);
    getEl('toast-container').appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(-16px)'; t.style.transition = 'all .3s'; setTimeout(() => t.remove(), 300); }, 3000);
  }

  // --- Service Worker ---

  function registerSW() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // --- SVG constants ---

  const CHK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
  const CHK_SM = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
  const CHEVRON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>';
  const LINK_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  function esc(s) { return s ? String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;') : ''; }

  return {
    init, navigate, toggleExpand, toggleSite, toggleStep,
    filterMain, filterAdditional, filterBrokers, setFilter, showSearch,
    exportProgress, importProgress, handleImport, confirmReset, doReset,
    showReminderModal, showEmailTemplate, copyEmail, showAddToHomescreen,
    showModal, closeModal, showToast
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
