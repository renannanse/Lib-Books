const CACHE_NAME = 'lib-books-v1';
const assetsToCache = [
  './index.html',
  './manifest.json'
  // Adicione aqui outros arquivos importantes do seu app, como seu style.css ou script.js seouver
];

// Instalando o Service Worker e salvando os arquivos no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Interceptando as requisições para funcionar offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});