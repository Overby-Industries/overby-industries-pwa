if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          ((e.src = a), (e.onload = s), document.head.appendChild(e));
        } else ((e = a), importScripts(a), s());
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => a(e, t),
      d = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(i.map((e) => d[e] || r(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/WHITEPAPERS_OVERBY_INDUSTRIES.pdf",
          revision: "b6c13bd478036ae4458d10dd4ada64d1",
        },
        {
          url: "/_next/app-build-manifest.json",
          revision: "43e46520a01da3e8181ea3b52e574faa",
        },
        {
          url: "/_next/static/0F5TV1W8D7shFalE3xxHZ/_buildManifest.js",
          revision: "4a3a13eaf0f246659a8db12a4e0ff382",
        },
        {
          url: "/_next/static/0F5TV1W8D7shFalE3xxHZ/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/153-e9be8dee2040f46a.js",
          revision: "e9be8dee2040f46a",
        },
        {
          url: "/_next/static/chunks/255-cb395327542b56ef.js",
          revision: "cb395327542b56ef",
        },
        {
          url: "/_next/static/chunks/4bd1b696-c023c6e3521b1417.js",
          revision: "c023c6e3521b1417",
        },
        {
          url: "/_next/static/chunks/850-da5bfaac4e6cc11e.js",
          revision: "da5bfaac4e6cc11e",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-1dc650340cd8d36d.js",
          revision: "1dc650340cd8d36d",
        },
        {
          url: "/_next/static/chunks/app/aerospace/airframe/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/aerospace/flight-controls/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/aerospace/layout-5ee10eaffb9634d5.js",
          revision: "5ee10eaffb9634d5",
        },
        {
          url: "/_next/static/chunks/app/aerospace/operating-systems/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/aerospace/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/aerospace/propulsion/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/api/donate/route-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/api/subscribe/route-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/donation-canceled/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/donation-success/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/advanced-manufacturing/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/asteroid-mining/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/layout-5ee10eaffb9634d5.js",
          revision: "5ee10eaffb9634d5",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/robotics/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/heavy-industry/space-debris-reclamation/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/isru/hydrocarbons/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/isru/layout-5ee10eaffb9634d5.js",
          revision: "5ee10eaffb9634d5",
        },
        {
          url: "/_next/static/chunks/app/isru/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/isru/precious-based-metals/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/isru/regolith/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/isru/water/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/layout-936ef6f0d4407fd6.js",
          revision: "936ef6f0d4407fd6",
        },
        {
          url: "/_next/static/chunks/app/page-dbf9425f64e1bce7.js",
          revision: "dbf9425f64e1bce7",
        },
        {
          url: "/_next/static/chunks/app/the-gravastar-project/layout-5ee10eaffb9634d5.js",
          revision: "5ee10eaffb9634d5",
        },
        {
          url: "/_next/static/chunks/app/the-gravastar-project/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/app/whitepapers/layout-5ee10eaffb9634d5.js",
          revision: "5ee10eaffb9634d5",
        },
        {
          url: "/_next/static/chunks/app/whitepapers/page-e071bed0f0082279.js",
          revision: "e071bed0f0082279",
        },
        {
          url: "/_next/static/chunks/framework-acd67e14855de5a2.js",
          revision: "acd67e14855de5a2",
        },
        {
          url: "/_next/static/chunks/main-app-f7fabf87dd9a5212.js",
          revision: "f7fabf87dd9a5212",
        },
        {
          url: "/_next/static/chunks/main-c5326ecd0f8f58da.js",
          revision: "c5326ecd0f8f58da",
        },
        {
          url: "/_next/static/chunks/pages/_app-7d307437aca18ad4.js",
          revision: "7d307437aca18ad4",
        },
        {
          url: "/_next/static/chunks/pages/_error-cb2a52f75f2162e2.js",
          revision: "cb2a52f75f2162e2",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-54edc5da07044344.js",
          revision: "54edc5da07044344",
        },
        {
          url: "/_next/static/css/7ea804774a3357e9.css",
          revision: "7ea804774a3357e9",
        },
        {
          url: "/_next/static/media/19cfc7226ec3afaa-s.woff2",
          revision: "9dda5cfc9a46f256d0e131bb535e46f8",
        },
        {
          url: "/_next/static/media/21350d82a1f187e9-s.woff2",
          revision: "4e2553027f1d60eff32898367dd4d541",
        },
        {
          url: "/_next/static/media/8e9860b6e62d6359-s.woff2",
          revision: "01ba6c2a184b8cba08b0d57167664d75",
        },
        {
          url: "/_next/static/media/9a4ee768fed045da-s.p.woff2",
          revision: "51eee31e9cbbffe82e6d01f1c5f876a1",
        },
        {
          url: "/_next/static/media/ba9851c3c22cd980-s.woff2",
          revision: "9e494903d6b0ffec1a1e14d34427d44d",
        },
        {
          url: "/_next/static/media/c5fe6dc8356a8c31-s.woff2",
          revision: "027a89e9ab733a145db70f09b8a18b42",
        },
        {
          url: "/_next/static/media/df0a9ae256c0569c-s.woff2",
          revision: "d54db44de5ccb18886ece2fda72bdfe0",
        },
        {
          url: "/_next/static/media/e4af272ccee01ff0-s.p.woff2",
          revision: "65850a373e258f1c897a2b3d75eb74de",
        },
        { url: "/favicon.ico", revision: "9c20b8d008d67bfd627020643b5b656f" },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "d2bbbcdc5e91c9d00feac9d1512c96a0",
        },
        {
          url: "/icons/android-chrome-512x512.png",
          revision: "885549f2aff57872f2bcdfbc858c62fc",
        },
        {
          url: "/icons/apple-touch-icon.png",
          revision: "3f3f3374619949161e8d6520b46598fb",
        },
        {
          url: "/icons/favicon-16x16.png",
          revision: "540477fd9d968df4fb5f09c69e7cef37",
        },
        {
          url: "/icons/favicon-32x32.png",
          revision: "71bc5fd85cef955de89c59e0f41f2fb8",
        },
        { url: "/manifest.json", revision: "71bd8ab79fe4fff4dd8ec3dbabd57df7" },
        {
          url: "/overby-flat-logo.svg",
          revision: "340897d2796e498902628e777dd17f08",
        },
        {
          url: "/overby-logo-gradient.svg",
          revision: "8bf9e5f0613b04f113d8da06cc65c4bc",
        },
        {
          url: "/overby-logo-neon.svg",
          revision: "3e0c7fef2c41df483e04f6b769d91764",
        },
        {
          url: "/overby-logo.svg",
          revision: "6d1a5ac7ff3a584910a3db5459a09ad5",
        },
        {
          url: "/overby-wordmark-flat.svg",
          revision: "12e899cfd9e5509744a6ae1d3bc3f66a",
        },
        {
          url: "/overby-wordmark-gradient.svg",
          revision: "b7f37940a8e40d5388e7d028b0d3fb12",
        },
        {
          url: "/overby-wordmark-neon.svg",
          revision: "2de91e0553f0559982ffef0b9d640f0a",
        },
        {
          url: "/site.webmanifest",
          revision: "3e82a557afded6fde72220d98a2636d8",
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    ));
});
