/* Service worker de Mamma Mia — ensayo
   Guarda la app en el dispositivo para que funcione sin internet.

   CADA VEZ QUE CAMBIES ALGO (guion.js, index.html, íconos…), SUBÍ ESTE NÚMERO.
   Así los teléfonos detectan la versión nueva y muestran el aviso "Actualizar". */
const VERSION = "2026-10-09.1";

const CACHE = "mamma-mia-" + VERSION;
const ARCHIVOS = [
  "./",
  "./index.html",
  "./guion.js",
  "./manifest.webmanifest",
  "./iconos/icono.svg",
  "./iconos/icono-192.png",
  "./iconos/icono-512.png",
  "./iconos/icono-maskable-512.png",
  "./iconos/apple-touch-icon.png"
];

self.addEventListener("install", ev => {
  // cache:"reload" saltea la caché HTTP, para no guardar una copia vieja de guion.js
  ev.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(ARCHIVOS.map(u =>
        fetch(new Request(u, {cache:"reload"})).then(r => {
          if (!r.ok) throw new Error("No se pudo bajar " + u);
          return c.put(u, r);
        })
      ))
    )
  );
  // no se activa solo: espera a que la persona toque "Actualizar"
});

self.addEventListener("message", ev => {
  if (ev.data && ev.data.tipo === "activar") self.skipWaiting();
});

self.addEventListener("activate", ev => {
  ev.waitUntil(
    caches.keys()
      .then(claves => Promise.all(
        claves.filter(k => k.startsWith("mamma-mia-") && k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* primero lo guardado; si no está, la red */
self.addEventListener("fetch", ev => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  ev.respondWith(
    caches.open(CACHE).then(c =>
      c.match(req, {ignoreSearch:true}).then(guardado => {
        if (guardado) return guardado;
        if (req.mode === "navigate") {
          return c.match("./index.html").then(idx => idx || fetch(req));
        }
        return fetch(req);
      })
    )
  );
});
