// Applies the saved theme before first paint (loaded in <head>, no inline script
// so the page can keep a strict Content-Security-Policy).
(function () {
  var pref = 'dark';
  try {
    var saved = localStorage.getItem('privacy-shield-theme');
    if (saved === 'light' || saved === 'dark' || saved === 'system') pref = saved;
  } catch (e) { /* storage blocked: stay dark */ }
  var theme = pref;
  if (pref === 'system') {
    theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
})();
