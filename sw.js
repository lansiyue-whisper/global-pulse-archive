const CACHE_NAME = "global-pulse-v24-20260623-real-photos";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./app-icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./assets/images/archive-desk.png",
  "./assets/images/artist-portrait.png",
  "./assets/images/instrument-collection.png",
  "./assets/images/story-poster.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
