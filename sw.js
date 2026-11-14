/* ============================================================
   Service worker — keeps the meal plan working without signal.

   - The page comes from the network when there is one, so a new
     version shows at once; without it, or after 3 seconds of
     waiting, the saved copy is used.
   - Every file the page names (scripts, styles, icons) is saved
     and from then on served from that copy. Their addresses carry
     a version (?v=…), so a changed file is a new address.
   - When a newer page arrives, the files it names are fetched and
     those it names no more are dropped.

   Nothing to keep up to date here: the list of files is read
   from index.html.
   ============================================================ */
const CACHE = 'meal-plan';
const PAGE = './';

// Saves the page and every file it names; forgets the files it names no more
async function keep(page) {
  const cache = await caches.open(CACHE);
  const html = await page.clone().text();
  const files = [...html.matchAll(/(?:src|href)="([^":#]+\.(?:js|css|png|webmanifest)(?:\?[^"]*)?)"/g)].map(m => m[1]);
  await Promise.all(files.map(async file => { if (!await cache.match(file)) await cache.add(file); }));
  await cache.put(PAGE, page);
  const named = new Set([PAGE, ...files].map(file => new URL(file, self.registration.scope).href));
  await Promise.all((await cache.keys()).filter(request => !named.has(request.url)).map(request => cache.delete(request)));
}

self.addEventListener('install', event => {
  event.waitUntil(fetch(PAGE, { cache: 'no-cache' })
    .then(page => page.ok && keep(page))
    .catch(() => {})                         // no signal right now: the first visit with one fills the cache
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const saved = await caches.match(PAGE);
      const fresh = fetch(request).then(page => {
        if (page.ok) {
          const kept = keep(page.clone()).catch(() => {});
          try { event.waitUntil(kept); } catch (e) { /* answered already: it still finishes */ }
        }
        return page;
      });
      if (!saved) return fresh;
      const late = new Promise(resolve => setTimeout(resolve, 3000, saved));
      return Promise.race([fresh.catch(() => saved), late]);
    })());
    return;
  }

  event.respondWith(caches.match(request).then(saved => saved || fetch(request)));
});
