const CACHE_NAME = 'cyber-strike-v2';
const ASSETS = [
  './index.html',
  './hoho.png',    // الصورة القديمة
  './doksh.png',   // الصورة الجديدة للعدو
  './shoot.mp3',
  './file.mp3',
  './ahoh.mp3',
  './elahwe.mp3',
  './kosha.mp3'    // صوت القتل اللي لسه ضايفينه
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
