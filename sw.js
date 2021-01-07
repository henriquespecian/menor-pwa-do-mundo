
//Escolhe os arquivos a serem inseridos no cache
self.addEventListener('install', function (event) {
    console.log("Instalando service worker");
    event.waitUntil(
        caches.open('menor-pwa')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/index.js',
                    '/manifest.json'
                ])
            })
    );
    return self.clients.claim();
});


//
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if(!res) {
                    return fetch(event.request);
                }
                return res;
            }).catch(e => console.log("Caiu no catch"))
    );
});

self.addEventListener('activate', function (event) {
    console.log("Ativando service worker");
});