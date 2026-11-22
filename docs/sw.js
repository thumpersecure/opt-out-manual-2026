// Network-first service worker: always try the live site so corrected opt-out
// links reach installed users, and fall back to the cache when offline.
const CACHE_NAME = 'privacy-shield-v2';
const APP_SHELL = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './theme.js',
  './data.js',
  './manifest.json',
  './icon.svg'
];
const NETWORK_TIMEOUT_MS = 4000;

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(APP_SHELL.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

function fromCache(request) {
  return caches.match(request, { ignoreSearch: true }).then((hit) => {
    if (hit) return hit;
    if (request.mode === 'navigate') return caches.match('./index.html');
    return Response.error();
  });
}

function fromNetwork(request) {
  return fetch(request).then((response) => {
    if (response.ok && response.type === 'basic') {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
    }
    return response;
  });
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  // Only same-origin GETs are ours to handle; everything else goes straight out.
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    new Promise((resolve) => {
      let settled = false;
      const done = (response) => { if (!settled) { settled = true; resolve(response); } };
      const timer = setTimeout(() => fromCache(request).then((r) => { if (r && r.type !== 'error') done(r); }), NETWORK_TIMEOUT_MS);
      fromNetwork(request)
        .then((response) => { clearTimeout(timer); done(response); })
        .catch(() => { clearTimeout(timer); fromCache(request).then(done); });
    })
  );
});
