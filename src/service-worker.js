const CACHE_NAME = "footballleague-v1";
var urlsToCache = [
  "/",
  "/src/index.html",
  "/src/manifest.json",
  "/src/app.js",
  "/src/img/banner/banner.png",
  "/src/img/icon/save.svg",
  "/src/img/icon/trash.svg",
  "/src/script/component/app-bar.js",
  "/src/script/component/favorites.js",
  "/src/script/component/home.js",
  "/src/script/component/menu.js",
  "/src/script/component/scoreTable.js",
  "/src/script/component/teamInfo.js",
  "/src/script/data/config.js",
  "/src/script/data/data-source.js",
  "/src/script/db/idb.js",
  "/src/script/view/main.js",
  "/src/styles/style.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  var base_url = "http://api.football-data.org/v2/";

  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then(function(response) {
        return response || fetch (event.request);
      })
    )
  }
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
