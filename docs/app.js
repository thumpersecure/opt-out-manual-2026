const App = (() => {
  const STORAGE_KEY = 'privacy-shield-progress';
  const STORAGE_META_KEY = 'privacy-shield-meta';
  let state = {};
  let meta = {};
  let currentFilters = { main: 'all', additional: 'all', brokers: 'all' };

  function init() {
    loadState();
    renderDashboard();
    renderMainSites();
    renderAdditionalSites();
    renderBrokerSites();
    registerSW();
  }

  // --- State Management ---

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      state = saved ? JSON.parse(saved) : {};
    } catch { state = {}; }
    try {
      const savedMeta = localStorage.getItem(STORAGE_META_KEY);
      meta = savedMeta ? JSON.parse(savedMeta) : {};
    } catch { meta = {}; }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(STORAGE_META_KEY, JSON.stringify(meta));
    } catch (e) {
      showToast('Storage full. Export your progress to avoid data loss.', 'error');
    }
  }

  function isCompleted(siteId) {
    return state[siteId] === true;
  }

  function isStepCompleted(siteId, stepIdx) {
    const key = siteId + ':step:' + stepIdx;
    return state[key] === true;
  }

  function getCompletedSteps(siteId, totalSteps) {
    let count = 0;
    for (let i = 0; i < totalSteps; i++) {
      if (isStepCompleted(siteId, i)) count++;
    }
    return count;
  }

  function toggleSite(siteId) {
    const wasCompleted = isCompleted(siteId);
    state[siteId] = !wasCompleted;
    if (!wasCompleted) {
      if (!meta.completedDates) meta.completedDates = {};
      meta.completedDates[siteId] = new Date().toISOString().slice(0, 10);
    }
    saveState();
    updateSiteUI(siteId);
    updateStats();
  }

  function toggleStep(siteId, stepIdx, totalSteps) {
    const key = siteId + ':step:' + stepIdx;
    state[key] = !state[key];
    const completed = getCompletedSteps(siteId, totalSteps);
    if (completed === totalSteps) {
      state[siteId] = true;
      if (!meta.completedDates) meta.completedDates = {};
      meta.completedDates[siteId] = new Date().toISOString().slice(0, 10);
    } else {
      state[siteId] = false;
    }
    saveState();
    updateStepUI(siteId, stepIdx);
    updateSiteUI(siteId);
    updateStats();
  }

  // --- Rendering ---

  function renderDashboard() {
    const qs = document.getElementById('quick-start-list');
    const bb = document.getElementById('before-begin-list');
    const pt = document.getElementById('pro-tips-list');
    if (SITE_DATA.quickStart) qs.innerHTML = SITE_DATA.quickStart.map(t => '<li>' + esc(t) + '</li>').join('');
    if (SITE_DATA.beforeYouBegin) bb.innerHTML = SITE_DATA.beforeYouBegin.map(t => '<li>' + esc(t) + '</li>').join('');
    if (SITE_DATA.proTips) pt.innerHTML = SITE_DATA.proTips.map(t => '<li>' + esc(t) + '</li>').join('');
    renderPriorityList();
    updateStats();
  }

  function renderPriorityList() {
    const priorities = [
      ...SITE_DATA.additionalSites.filter(s => s.priority),
      ...SITE_DATA.dataBrokerSites.filter(s => s.priority)
    ];
    const el = document.getElementById('priority-list');
    el.innerHTML = priorities.map(s => {
      const done = isCompleted(s.id);
      const url = s.optOutUrl || '';
      const hasUrl = url.startsWith('http');
      return '<div class="site-card' + (done ? ' completed' : '') + '" id="priority-' + s.id + '">' +
        '<div class="site-header" onclick="App.toggleSite(\'' + s.id + '\')">' +
          '<div class="site-checkbox' + (done ? ' checked' : '') + '">' + checkSvg + '</div>' +
          '<div class="site-info">' +
            '<div class="site-name">' + esc(s.name) + '</div>' +
            '<div class="site-meta">' +
              '<span class="site-badge badge-priority">Priority</span>' +
              '<span>' + esc(s.domain || s.website || '') + '</span>' +
            '</div>' +
          '</div>' +
          (hasUrl ? '<a href="' + esc(url) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="site-link" style="margin:0;padding:6px 10px;font-size:0.75rem">Open</a>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  function renderMainSites() {
    const el = document.getElementById('main-sites-list');
    el.innerHTML = SITE_DATA.mainSites.map(s => {
      const done = isCompleted(s.id);
      const completedSteps = getCompletedSteps(s.id, s.steps.length);
      const diffClass = s.difficulty === 'easy' ? 'badge-easy' : 'badge-medium';
      const diffLabel = s.difficulty === 'easy' ? 'Easy' : 'Medium';
      return '<div class="site-card' + (done ? ' completed' : '') + '" id="card-' + s.id + '" ' +
        'data-difficulty="' + s.difficulty + '" data-done="' + done + '">' +
        '<div class="site-header" onclick="App.toggleExpand(this.parentElement)">' +
          '<div class="site-checkbox' + (done ? ' checked' : '') + '" onclick="event.stopPropagation();App.toggleSite(\'' + s.id + '\')">' + checkSvg + '</div>' +
          '<div class="site-info">' +
            '<div class="site-name">' + esc(s.name) + '</div>' +
            '<div class="site-meta">' +
              '<span class="site-badge ' + diffClass + '">' + diffLabel + '</span>' +
              '<span>' + esc(s.time) + '</span>' +
              (s.needsEmail ? '<span>📧</span>' : '') +
              '<span>' + completedSteps + '/' + s.steps.length + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="site-expand"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>' +
        '</div>' +
        '<div class="site-details"><div class="site-details-inner">' +
          '<a href="' + esc(s.optOutUrl) + '" target="_blank" rel="noopener" class="site-link">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
            esc(s.domain) + ' opt-out' +
          '</a>' +
          (s.note ? '<div class="site-note">📝 ' + esc(s.note) + '</div>' : '') +
          '<ul class="step-list">' +
            s.steps.map((step, i) => {
              const stepDone = isStepCompleted(s.id, i);
              return '<li class="step-item">' +
                '<div class="step-checkbox' + (stepDone ? ' checked' : '') + '" id="step-' + s.id + '-' + i + '" ' +
                  'onclick="App.toggleStep(\'' + s.id + '\',' + i + ',' + s.steps.length + ')">' + checkSvgSm + '</div>' +
                '<span class="step-text' + (stepDone ? ' checked' : '') + '">' + esc(step) + '</span>' +
              '</li>';
            }).join('') +
          '</ul>' +
        '</div></div>' +
      '</div>';
    }).join('');
  }

  function renderAdditionalSites() {
    const el = document.getElementById('additional-sites-list');
    el.innerHTML = SITE_DATA.additionalSites.map(s => {
      const done = isCompleted(s.id);
      const url = s.optOutUrl || '';
      const hasUrl = url.startsWith('http');
      return '<div class="site-card' + (done ? ' completed' : '') + '" id="card-' + s.id + '" ' +
        'data-done="' + done + '" data-priority="' + (s.priority || false) + '">' +
        '<div class="site-header" onclick="App.toggleExpand(this.parentElement)">' +
          '<div class="site-checkbox' + (done ? ' checked' : '') + '" onclick="event.stopPropagation();App.toggleSite(\'' + s.id + '\')">' + checkSvg + '</div>' +
          '<div class="site-info">' +
            '<div class="site-name">' + esc(s.name) + '</div>' +
            '<div class="site-meta">' +
              (s.priority ? '<span class="site-badge badge-priority">Priority</span>' : '') +
              '<span>' + esc(s.method || '') + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="site-expand"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>' +
        '</div>' +
        '<div class="site-details"><div class="site-details-inner">' +
          (hasUrl ? '<a href="' + esc(url) + '" target="_blank" rel="noopener" class="site-link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' + esc(s.domain) + ' opt-out</a>' : '') +
          (s.notes ? '<div class="site-note" style="border-left:3px solid var(--primary);background:var(--surface)">ℹ️ ' + esc(s.notes) + '</div>' : '') +
        '</div></div>' +
      '</div>';
    }).join('');
  }

  function renderBrokerSites() {
    const el = document.getElementById('brokers-sites-list');
    el.innerHTML = SITE_DATA.dataBrokerSites.map(s => {
      const done = isCompleted(s.id);
      const catClass = 'cat-' + (s.category || 'other').toLowerCase();
      return '<div class="site-card' + (done ? ' completed' : '') + '" id="card-' + s.id + '" ' +
        'data-done="' + done + '" data-category="' + esc(s.category || '') + '" data-priority="' + (s.priority || false) + '">' +
        '<div class="site-header" onclick="App.toggleExpand(this.parentElement)">' +
          '<div class="site-checkbox' + (done ? ' checked' : '') + '" onclick="event.stopPropagation();App.toggleSite(\'' + s.id + '\')">' + checkSvg + '</div>' +
          '<div class="site-info">' +
            '<div class="site-name">' + esc(s.name) + '</div>' +
            '<div class="site-meta">' +
              '<span class="site-badge ' + catClass + '">' + esc(s.category || 'OTHER') + '</span>' +
              (s.priority ? '<span class="site-badge badge-priority">Priority</span>' : '') +
              '<span>' + esc(s.optOutMethod || '') + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="site-expand"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div>' +
        '</div>' +
        '<div class="site-details"><div class="site-details-inner">' +
          (s.processingTime ? '<div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:8px">⏱️ Processing: ' + esc(s.processingTime) + '</div>' : '') +
          (s.notes ? '<div class="site-note" style="border-left:3px solid var(--primary);background:var(--surface)">ℹ️ ' + esc(s.notes) + '</div>' : '') +
        '</div></div>' +
      '</div>';
    }).join('');
  }

  // --- UI Updates ---

  function updateStats() {
    const mainDone = SITE_DATA.mainSites.filter(s => isCompleted(s.id)).length;
    const addDone = SITE_DATA.additionalSites.filter(s => isCompleted(s.id)).length;
    const brokerDone = SITE_DATA.dataBrokerSites.filter(s => isCompleted(s.id)).length;
    const total = SITE_DATA.mainSites.length + SITE_DATA.additionalSites.length + SITE_DATA.dataBrokerSites.length;
    const totalDone = mainDone + addDone + brokerDone;
    const pct = total > 0 ? Math.round((totalDone / total) * 100) : 0;

    const today = new Date().toISOString().slice(0, 10);
    let todayCount = 0;
    if (meta.completedDates) {
      todayCount = Object.values(meta.completedDates).filter(d => d === today).length;
    }

    document.getElementById('stat-completed').textContent = totalDone;
    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-main').textContent = mainDone + '/' + SITE_DATA.mainSites.length;
    document.getElementById('stat-today').textContent = todayCount;
    document.getElementById('progress-pct').textContent = pct + '%';
    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('progress-detail').textContent = totalDone + ' of ' + total + ' sites completed';
    document.getElementById('main-count').textContent = '(' + mainDone + '/' + SITE_DATA.mainSites.length + ')';
    document.getElementById('additional-count').textContent = '(' + addDone + '/' + SITE_DATA.additionalSites.length + ')';
    document.getElementById('brokers-count').textContent = '(' + brokerDone + '/' + SITE_DATA.dataBrokerSites.length + ')';
  }

  function updateSiteUI(siteId) {
    const done = isCompleted(siteId);
    const cards = document.querySelectorAll('#card-' + siteId + ', #priority-' + siteId);
    cards.forEach(card => {
      if (!card) return;
      card.classList.toggle('completed', done);
      card.setAttribute('data-done', done);
      const cb = card.querySelector('.site-checkbox');
      if (cb) cb.classList.toggle('checked', done);
    });
    const mainSite = SITE_DATA.mainSites.find(s => s.id === siteId);
    if (mainSite) {
      const card = document.getElementById('card-' + siteId);
      if (card) {
        const metaEl = card.querySelector('.site-meta');
        if (metaEl) {
          const spans = metaEl.querySelectorAll('span');
          const last = spans[spans.length - 1];
          if (last && last.textContent.includes('/')) {
            last.textContent = getCompletedSteps(siteId, mainSite.steps.length) + '/' + mainSite.steps.length;
          }
        }
      }
    }
  }

  function updateStepUI(siteId, stepIdx) {
    const stepEl = document.getElementById('step-' + siteId + '-' + stepIdx);
    if (!stepEl) return;
    const done = isStepCompleted(siteId, stepIdx);
    stepEl.classList.toggle('checked', done);
    const textEl = stepEl.nextElementSibling;
    if (textEl) textEl.classList.toggle('checked', done);
  }

  // --- Navigation ---

  function navigate(page, tabEl) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    if (tabEl) tabEl.classList.add('active');
    else document.querySelector('.tab-item[data-page="' + page + '"]').classList.add('active');
    window.scrollTo(0, 0);
  }

  function toggleExpand(cardEl) {
    cardEl.classList.toggle('expanded');
  }

  // --- Search & Filter ---

  function filterMain() {
    const q = document.getElementById('search-main').value.toLowerCase().trim();
    const filter = currentFilters.main;
    document.querySelectorAll('#main-sites-list .site-card').forEach((card, i) => {
      const site = SITE_DATA.mainSites[i];
      if (!site) return;
      const matchSearch = !q || site.name.toLowerCase().includes(q) || site.domain.toLowerCase().includes(q);
      let matchFilter = true;
      if (filter === 'pending') matchFilter = !isCompleted(site.id);
      else if (filter === 'completed') matchFilter = isCompleted(site.id);
      else if (filter === 'easy') matchFilter = site.difficulty === 'easy';
      else if (filter === 'medium') matchFilter = site.difficulty === 'medium';
      card.style.display = (matchSearch && matchFilter) ? '' : 'none';
    });
  }

  function filterAdditional() {
    const q = document.getElementById('search-additional').value.toLowerCase().trim();
    const filter = currentFilters.additional;
    document.querySelectorAll('#additional-sites-list .site-card').forEach((card, i) => {
      const site = SITE_DATA.additionalSites[i];
      if (!site) return;
      const matchSearch = !q || site.name.toLowerCase().includes(q) || (site.domain || '').toLowerCase().includes(q);
      let matchFilter = true;
      if (filter === 'pending') matchFilter = !isCompleted(site.id);
      else if (filter === 'completed') matchFilter = isCompleted(site.id);
      else if (filter === 'priority') matchFilter = site.priority === true;
      card.style.display = (matchSearch && matchFilter) ? '' : 'none';
    });
  }

  function filterBrokers() {
    const q = document.getElementById('search-brokers').value.toLowerCase().trim();
    const filter = currentFilters.brokers;
    document.querySelectorAll('#brokers-sites-list .site-card').forEach((card, i) => {
      const site = SITE_DATA.dataBrokerSites[i];
      if (!site) return;
      const matchSearch = !q || site.name.toLowerCase().includes(q) || (site.website || '').toLowerCase().includes(q);
      let matchFilter = true;
      if (filter === 'pending') matchFilter = !isCompleted(site.id);
      else if (filter === 'completed') matchFilter = isCompleted(site.id);
      else if (['B2B','AD','MKT','FIN','GOV','LOC','HR','ID','PROP','PUB','OTHER'].includes(filter)) {
        matchFilter = site.category === filter;
      }
      card.style.display = (matchSearch && matchFilter) ? '' : 'none';
    });
  }

  function setFilter(section, filter, chipEl) {
    currentFilters[section] = filter;
    const bar = chipEl.parentElement;
    bar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
    if (section === 'main') filterMain();
    else if (section === 'additional') filterAdditional();
    else filterBrokers();
  }

  function showSearch() {
    const page = document.querySelector('.page.active');
    if (!page) return;
    const input = page.querySelector('.search-input');
    if (input) {
      input.focus();
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // --- Export / Import ---

  function exportProgress() {
    const data = {
      version: 1,
      exportDate: new Date().toISOString(),
      state: state,
      meta: meta
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy-shield-progress-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Progress exported successfully!', 'success');
  }

  function importProgress() {
    document.getElementById('import-file').click();
  }

  function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.state) throw new Error('Invalid file format');
        state = data.state;
        meta = data.meta || {};
        saveState();
        location.reload();
      } catch {
        showToast('Invalid file. Please select a valid export file.', 'error');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  function confirmReset() {
    showModal('Reset Progress', '<p style="margin-bottom:16px;color:var(--text-secondary)">This will permanently erase all your checklist progress. This cannot be undone.</p>' +
      '<p style="margin-bottom:20px;color:var(--text-secondary)">Consider exporting your data first.</p>' +
      '<div style="display:flex;gap:8px">' +
        '<button class="btn btn-secondary" style="flex:1" onclick="App.closeModal()">Cancel</button>' +
        '<button class="btn btn-danger" style="flex:1" onclick="App.resetProgress()">Reset Everything</button>' +
      '</div>');
  }

  function resetProgress() {
    state = {};
    meta = {};
    saveState();
    closeModal();
    location.reload();
  }

  // --- Reminder / iOS Shortcut ---

  function showReminderModal() {
    const shortcutUrl = 'https://www.icloud.com/shortcuts/';
    const content = '<div style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6">' +
      '<p style="margin-bottom:16px">Set up a daily reminder at 12:00 PM (noon) in your time zone to work through your opt-out checklist.</p>' +
      '<div class="tip-card" style="margin-bottom:16px">' +
        '<h3 style="margin-bottom:8px">Create an iOS Shortcut</h3>' +
        '<ol class="tip-list">' +
          '<li>Open the <strong>Shortcuts</strong> app on your iPhone</li>' +
          '<li>Tap <strong>+</strong> to create a new shortcut</li>' +
          '<li>Add action: <strong>"Open URL"</strong></li>' +
          '<li>Set the URL to this app\'s address (share it from Safari)</li>' +
          '<li>Tap the name at top → <strong>Rename</strong> to "Privacy Shield"</li>' +
          '<li>Tap <strong>Done</strong> to save</li>' +
        '</ol>' +
      '</div>' +
      '<div class="tip-card" style="margin-bottom:16px">' +
        '<h3 style="margin-bottom:8px">Set the Automation</h3>' +
        '<ol class="tip-list">' +
          '<li>Go to <strong>Shortcuts → Automation</strong> tab</li>' +
          '<li>Tap <strong>+</strong> → <strong>Time of Day</strong></li>' +
          '<li>Set to <strong>12:00 PM</strong>, repeat <strong>Daily</strong></li>' +
          '<li>Choose <strong>"Run Shortcut"</strong> → select "Privacy Shield"</li>' +
          '<li>Turn <strong>off</strong> "Ask Before Running"</li>' +
          '<li>Tap <strong>Done</strong></li>' +
        '</ol>' +
      '</div>' +
      '<p style="margin-bottom:16px">You\'ll get a notification every day at noon that opens this app directly.</p>' +
      '<div style="display:flex;gap:8px">' +
        '<button class="btn btn-primary btn-block" onclick="App.closeModal()">Got It</button>' +
      '</div>' +
    '</div>';
    showModal('Daily Reminder Setup', content);
  }

  // --- Email Template ---

  function showEmailTemplate() {
    const tmpl = SITE_DATA.emailTemplate;
    const content = '<div>' +
      '<p style="margin-bottom:12px;color:var(--text-secondary);font-size:0.875rem">Copy this template and customize for each site:</p>' +
      '<div class="email-template" id="email-tmpl-text">' +
        '<button class="copy-btn" onclick="App.copyEmailTemplate()">Copy</button>' +
        'Subject: ' + esc(tmpl.subject) + '\n\n' + esc(tmpl.body) +
      '</div>' +
    '</div>';
    showModal('Email Template', content);
  }

  function copyEmailTemplate() {
    const tmpl = SITE_DATA.emailTemplate;
    const text = 'Subject: ' + tmpl.subject + '\n\n' + tmpl.body;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast('Copied to clipboard!', 'success'));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Copied to clipboard!', 'success');
    }
  }

  // --- Add to Homescreen ---

  function showAddToHomescreen() {
    const content = '<div style="color:var(--text-secondary);font-size:0.9rem;line-height:1.6">' +
      '<div class="tip-card" style="margin-bottom:16px">' +
        '<h3 style="margin-bottom:8px">iOS (Safari)</h3>' +
        '<ol class="tip-list">' +
          '<li>Tap the <strong>Share</strong> button (box with arrow)</li>' +
          '<li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>' +
          '<li>Tap <strong>"Add"</strong> in the top right</li>' +
        '</ol>' +
      '</div>' +
      '<div class="tip-card" style="margin-bottom:16px">' +
        '<h3 style="margin-bottom:8px">Android (Chrome)</h3>' +
        '<ol class="tip-list">' +
          '<li>Tap the <strong>three dots</strong> menu (⋮)</li>' +
          '<li>Tap <strong>"Add to Home screen"</strong></li>' +
          '<li>Tap <strong>"Add"</strong></li>' +
        '</ol>' +
      '</div>' +
      '<p>The app will launch in fullscreen mode, just like a native app. Your progress is saved locally on your device.</p>' +
    '</div>';
    showModal('Add to Home Screen', content);
  }

  // --- Modal ---

  function showModal(title, content) {
    document.getElementById('modal-title').innerHTML = title;
    document.getElementById('modal-content').innerHTML = content;
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // --- Toast ---

  function showToast(message, type) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast ' + (type || '');
    toast.innerHTML = (type === 'success' ? '✅ ' : type === 'error' ? '❌ ' : '') + esc(message);
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-16px)';
      toast.style.transition = 'all 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- Service Worker ---

  function registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  // --- Helpers ---

  const checkSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';
  const checkSvgSm = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>';

  function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // --- Public API ---

  return {
    init, navigate, toggleExpand, toggleSite, toggleStep,
    filterMain, filterAdditional, filterBrokers, setFilter, showSearch,
    exportProgress, importProgress, handleImport, confirmReset, resetProgress,
    showReminderModal, showEmailTemplate, copyEmailTemplate, showAddToHomescreen,
    showModal, closeModal, showToast
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
