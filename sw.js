const CACHE_NAME = "global-pulse-v31-20260628-museum-assets";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./app-icon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./public/images/textures/archive-desk.png",
  "./public/images/textures/artist-portrait.png",
  "./public/images/textures/instrument-collection.png",
  "./public/images/textures/story-poster.png",
  "./public/images/textures/cassette-market.png",
  "./public/images/textures/field-recorder-map.png",
  "./public/images/textures/record-crate.png",
  "./public/images/textures/community-music.png"
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
