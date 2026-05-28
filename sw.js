const CACHE_NAME = 'cyber-strike-v1';
const ASSETS = [
  './index.html',
  './image.png',
  './shoot.mp3',
  './file.mp3',
  './ahoh.mp3',
  './elahwe.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
