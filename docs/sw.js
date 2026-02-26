const CACHE_NAME = 'privacy-shield-v1';
const APP_SHELL = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
});

const APP_SHELL_PATHS = ['index.html', 'app.css', 'app.js', 'data.js', 'manifest.json', 'icon.svg'];

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const pathname = url.pathname;
  const isAppShell =
    pathname.endsWith('/') ||
    pathname === '' ||
    APP_SHELL_PATHS.some((p) => pathname.endsWith(p));

  if (isAppShell) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
