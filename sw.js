const CACHE_NAME = 'cyber-strike-v3'; // غيرنا الرقم عشان المتصفح يحدّث الملفات
const ASSETS = [
  './index.html',
  './hoho.png',    // الصورة القديمة
  './doksh.png',   // الصورة الجديدة للعدو
  './ard.jpg',     // صورة الأرضية الجديدة
  './het.jpg',     // صورة الحيطان الجديدة
  './shoot.mp3',
  './file.mp3',
  './ahoh.mp3',
  './elahwe.mp3',
  './kosha.mp3'    // صوت القتل
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
