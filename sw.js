
//Escolhe os arquivos a serem inseridos no cache
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('menor-pwa')
            .then(function (cache) {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/index.js'
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
                return res;
            })
    );
});