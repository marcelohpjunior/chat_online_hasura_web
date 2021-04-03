'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c81364a32d6a38c0ab79e3e0691116eb",
"index.html": "fab9376ba0cbed9971fd4dc475cc34de",
"/": "fab9376ba0cbed9971fd4dc475cc34de",
"main.dart.js": "245a5e3f8a66a39c47da1804a98f6da3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e555a6276fe7934154feda3c0cf8737",
".git/config": "d06feda76f076c865505ebb2ef8abce9",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/94/36a3126b59d9dfab898e69196707b90ff5fdd9": "2e1d286cbd24b05ad0b56c74ec6f33b1",
".git/objects/94/64c259376643e00a5f78828f90119029782c82": "6495796ff3174e0b84d6f22563a9670c",
".git/objects/a4/b7b3e490c1bbba10d7230b0c00badd27934517": "62f102079622df6a7cd19335880d633a",
".git/objects/a3/0dc8775584adf45f3a272254a86ed6c4b88e0b": "43f7dd070a156a719098fece7a05fd45",
".git/objects/ac/d01d49f603cc67208ca9d5e6a6a98175399a47": "81f20613dc7dd9f8877048ebf8279c8c",
".git/objects/ab/7c550ece7638783a1c259fee193ac8e68316f3": "f7b7ff59ceab3f7d252e54feaecc5a8d",
".git/objects/f3/aa9608db3c0bf6e01fc16380991c1ff3dc9c08": "96c79f2d6a81cb328eeaa1c0d925a0af",
".git/objects/cf/50fd84e5417addf9622b38ca6bcf704cbac5b7": "02a92ecf3baae4285eaf254d4a291b1d",
".git/objects/pack/pack-c859826b2b0b4c85c8dd3450171f8829d74f5c10.idx": "90b693a46e534c4868ce86029ead0c64",
".git/objects/pack/pack-c859826b2b0b4c85c8dd3450171f8829d74f5c10.pack": "acfedd62d650082480becfdc654feddb",
".git/objects/80/4ca6560941080310c73fd45de4996e0a2ebe66": "4d29281f4be16e462f2c0b4e2df69a0f",
".git/objects/8f/dd7453ab5aacdb1bddb6862f531c750b4b8a3e": "ed68478196dfd98898d79d2295f585a5",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/26/7d7179048d474c06d603810200b1dd7211f380": "1254ac2dc2f3f52c1a6bcebf13498b46",
".git/objects/75/f83c3656600dc4b48f6428cbcd1afc7166454c": "641f99e2cb18d07387813b10248628e6",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/88/ecf3087b32442dd0fd15a8156e55f81eab8a84": "dd3a42c195211a92b6b8fe363f8f6ef7",
".git/objects/90/b4182a6b9a85f9553bfafbf4921b287151307b": "e33f2ea9d968faca50db72b68b980cd9",
".git/objects/bf/ec6742a6fcb6ed06d1b207c3ff36ea614111f1": "ac0528322526958087bc306c5ea87fcb",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/c5/801a837c85594c88744410ac2d308631ce87c2": "97e31d493a2662d3a283f3a5243c8ca8",
".git/objects/c5/c7aa5b05357dd2c6cffbeda7a5dbb790d2e9e2": "82a155c3648039ebbe54b773575bd426",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/48/e5b7c0f961aef74c772fdf300a0e8160bec6c3": "5d381dc0f4887c98a3f92fb365cd9360",
".git/objects/1e/d5fc1d8f2730fde2130a5a95ea6239de32658e": "cdcbf0e475f0f26b27b159d739df530a",
".git/objects/23/ab02293f8061acf8edfb782a45e147d22f212f": "8a6669ba6a5c4848e9280e195de721bf",
".git/objects/15/9394fde3cd944b9a6cb50259e562da8113f387": "df610c764f77724ac3e57e32eaa793f4",
".git/objects/1d/6a2735e5cf5e70219b0dbbeb72f76d1edd895f": "d87140db3b39efb2073b95e3cc886fd2",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/7a/28808a47ed5ae12eeb622e39a687dd191d71d3": "0d4b1d54f9eb700e71720b2a73e4b21d",
".git/objects/25/9a5bde04f11f68b2e1d0725da2a138d84b6643": "e59702bda0c9b5452bdbf56581383a83",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dedd6a5b330ea4a28ddbe5f6cf409783",
".git/logs/refs/heads/master": "dedd6a5b330ea4a28ddbe5f6cf409783",
".git/logs/refs/remotes/origin/HEAD": "d15cbb63f36e3bba3c0a9d30ee72d07d",
".git/logs/refs/remotes/origin/master": "9d15cb47fb71cb855eb559c462beedc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "2e9b2965153abc7c607079b62e216ae2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2e9b2965153abc7c607079b62e216ae2",
".git/index": "5634cc31556d839ebf41eba4d20ab7bb",
".git/packed-refs": "3233eeadbe403180bb306998f6c127a0",
".git/COMMIT_EDITMSG": "02f6cd9f7a77a8bca31950b1568e3a14",
"assets/AssetManifest.json": "b8e8311547b14222536203d9ecdf5e6e",
"assets/NOTICES": "0edacc0aabc98fef1410637a55935d8e",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/logo.png": "859e2281c3c0e4e24225cd6000215f95",
"assets/assets/icons/icon_launcher.png": "745c4f0ec153de19fa77c8b1a283573b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
