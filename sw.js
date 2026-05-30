const CACHE_NAME = 'cyber-strike-v4'; // رفعنا الرقم عشان المتصفح يسحب التعديل الجديد
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
  './kosha.mp3',   // صوت القتل
  './skybox.glb'   // <-- ملف السما الصح انضاف هنا
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
