'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "887a16dd8740c45b4cbd509f6cc30bba",
".git/config": "10299fd25d26aacc9ae3c01ded792c1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "453d87857226cdf3fe39cd4da8158e6f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "60b7db28a1d9503c78bdc9718f96d942",
".git/logs/refs/heads/master": "60b7db28a1d9503c78bdc9718f96d942",
".git/logs/refs/remotes/origin/HEAD": "66429db1a5494b049247751baf82244e",
".git/logs/refs/remotes/origin/master": "bb4b67334f6981d76b8d32279e6ce7b1",
".git/objects/0a/b7b9c0f9ae754bbd777d79f6bfe4d32fd9d625": "6ef9ad84f1707d2e5ced66ee054ea799",
".git/objects/0b/4378c6d44ce997dbc7f3942e6e98f3a867081f": "5ba5e7bbaaa88d41c65ec1fbfee11568",
".git/objects/0e/356d4aa6ea9d5fff224d63cc3af5f18fbc812b": "cd161ea602a19b9e0bda9b5f752169ca",
".git/objects/0f/d59012243513284b9bd2143a0224f61a3637d3": "04d2068f2715f3909829f6bb329498b4",
".git/objects/17/4822a20a9eb06d0dfa13ad48d9437325d137ea": "6bede65bdafe31292d958cfd96e66425",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/1c/c27ab081d375b7a36d51d3935d810becfdc12f": "851eadc8af7528cf1a89c73eb6cf1740",
".git/objects/20/2cb6166b49625e2e0ef2dc6edd5989a3c87546": "5a6bc59e01f608a28fe5ceefc72d21f1",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/a66acee87b0dddeb337a99e3a851e2113f22a5": "2d61aa5809afe71c863bfa55acce5ed4",
".git/objects/2b/d6f0c57af204605c3800da16b959ed39574015": "7ffd533a6c51682a908cd533e693e452",
".git/objects/2f/23d72112fa984801c6cf598565a9c7117fb170": "d134ddf951889e50e97a9ae4d0ebef24",
".git/objects/34/40ef474e53f3776c013fc025d94f94757ead99": "014a96af1cd36df0771f3f0a5f132d16",
".git/objects/38/4e7f1f2c5bfe604fda7e9ceabbaf27236ab1b1": "6663cb75fb968e45ffc75b36487cfe94",
".git/objects/3e/260f8a1205a0fb1a3be459e99d5d147d5eb5ec": "c19cd495dcf43cece7487033215458fc",
".git/objects/3f/6403223b7bbda296ee50833027c0f1f43fb0db": "b3a91c58c322c6c96f6819427d72fac0",
".git/objects/43/eac7c0977e76b9899c978a09c3551a6e0cdc61": "424365fcbd3084773a8976839cb43aa7",
".git/objects/4e/1b90e0989db124ba4da304738cd340d004a784": "02f908ccf06c476d4528f245526223b6",
".git/objects/50/30f388bbb117ff48d4a91d5bf7d727e22c7821": "9dc1dbb8f4349cc1641cb346619e4d17",
".git/objects/57/6f93da247b2c5d851ba5adf9742269dfd98604": "e4914a8067535c9f02a7bfb02c85182c",
".git/objects/5c/38b266c301d4e76c03a5b890ebdcc6b6020416": "2cf3a12052b144f538ae055dd0d95cd3",
".git/objects/5d/46a5921e7114092c398226bd4b94fe47523ad0": "c3e1435671fd48958dc904d1d38df851",
".git/objects/5d/6f5a65e01d5ece34334bd9d14a48b8b44e1660": "6eb243cfa5adf5a6edf54cbd989d16b3",
".git/objects/5e/881ab1a70784023168886206dca10edfaa27ec": "003bbd17e498dc175459a98751e28e95",
".git/objects/5f/d3c52138b29a58d83bb170b4455d062aedf21d": "62fe8559533a13a2ab87bc11912d5192",
".git/objects/68/56baf4e7bb2926d55a40362a945cd4d5070752": "0ff9ba96d6aa0fb6b6e0401223117911",
".git/objects/69/f8e39dbffd2306c666ccc6dc7ec19832004d83": "785f54da419d472aa20b10098d2784d5",
".git/objects/6a/c7dbcdc3fe36eb6a4783cd238d1019689401f8": "08287411f3274c1eec8c9a43804b03c8",
".git/objects/75/2e461b48a1db6aaeceb5e9d7e093f54a3f8de8": "19a2e79203d346aabf890b6eeb292b45",
".git/objects/7b/c95969090adb145bf0f3c6a6fa86ad1b9aeb3c": "e092e53d2028397364746c9134319003",
".git/objects/7d/4bb08916a7bbbe573014ee5fbb88341e92c2b3": "ad46b648e645c7e722698fd8979b0844",
".git/objects/87/c77d481e52c9b0f64f8999e96b6f96b01aa33f": "528904448497cfb0a6c3b15d7974baa0",
".git/objects/88/55c80676dbb296fc9a78a4d45a07c92b68516b": "28024882a03c32efedbe6c65583bd8f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/7b340b8ad1e5656ab9a5919377271adab23747": "3aba8ebe3e471ae5791caa1cc0d0abd7",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/98/4d0999866ee942cb2b83e67acc562060f99e30": "de03c998136063c9f5861ef431b081e7",
".git/objects/9d/1119aef6c99f155b23d5976a19111eb88c85a4": "e51a511291cb2e2b3aa93ff2397dd53a",
".git/objects/9e/1e2129f3e15732e224c1ae2df1993ee4b51603": "36d2f87a81815edae600ee94c42d5225",
".git/objects/a2/3ad78364c870d810a703bd6ce8642ebdf7d6d7": "2e83a743e86ee7e95dff8c3c05a3aa3d",
".git/objects/a5/f65cdbc464e747a7f352f35f539b7d86126530": "ce90451cfef3785ac4f3a383b7c9c5fe",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a6/8c8d5e1a26fc479551e6322829d9906b93b706": "4ce7590f9462e6ad68489b4cae94abb7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/ab/0c1aaee5f7f5cb047259eab6d222cb42b2db5e": "c12aa467ce32c59bf5320dd3d10dbb41",
".git/objects/ad/41d474f905baea506597b1c7e941889e5dbe61": "3213ab250eb62c0fecba30afced27db6",
".git/objects/af/ae47f95cadac38b153d4c6e8fc34dea1c698ab": "82265b85467668fcf4f00d0b4d6d4874",
".git/objects/b5/4cec9df48e50d385fedea8d5169e7a8e877c3e": "432776171da52c40474949647a83df0a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/6036e78439e7731aa7a816e49d0bd9afb35437": "3b6f79cc73682ce118858b90371ac470",
".git/objects/bb/a7f61f2f29d7b1cd32a5618e0c59f933c0891c": "d69dd6bded4416173c233f8cfff9e20c",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c2/aa94a286bd59edcb8c48ce74e338472e33eafa": "d5aecc65b498bf60ca0e011c8ccedc60",
".git/objects/c7/1502a8d3080f71124fec49664bf597217b07a4": "a6d05b6ceef22acbbaa66fa582079eaa",
".git/objects/ca/a3b321893d96391d246e1b6e649805984dd87d": "2fc13bcb5e29afc57fdd29e3d421da38",
".git/objects/cb/fde7c556c8c9d1fd3fc35a6b97fe988a904274": "e154096b75080c7243a09b8f44d5cba1",
".git/objects/cd/853d40c59bd5cd5cecacb5967ecb76a7528df6": "7efdc66189c7b29ab07b07c92ed74344",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/cf/71f002d029d86d61c0002c1ba8a34448a19208": "a5170b7bd22f98dabfcef8110a22378a",
".git/objects/d0/5d88185bd7a0830a7ea4df308035e485d23ae6": "9aa88eb456c991d688aaffb01190a414",
".git/objects/d1/21590d08e8cc93feb20a93560c422a0403254a": "b9f1fc16271670bffee2eae0b508d165",
".git/objects/d5/7b7cb02629a7e47ca355f00d8d6c158cc36778": "0bc54b9fa89aa3206420d329d81a9864",
".git/objects/d6/c44cc657a73397ceebafd6bec242f0e1407896": "2f2b90436a3458d113ba4f34b66c40a1",
".git/objects/da/2a696c7a44775b64fd150e33d8ddfd6e699090": "4a317ad1fc3f2a4bc6981cf49eda50e9",
".git/objects/db/d1a0b48513bc7870b1b1a39dc9aedc7588b32b": "e6c5b147fc9593faff5707f05bd5cf7a",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e4/94d7a1bef57fecaff75b2f50d91756e192170e": "c43c262e6d251714ed17867fc22c4d58",
".git/objects/e6/3bc04986e2d3b7e594cd837799d0f90e237e8f": "af3237c0eca80bc1675a0b1af58f9c11",
".git/objects/eb/52c74a52e6033c933eeeb67534a63b6b620fd6": "73d280902d34e4de36d2aec26c733d51",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/ef/46e46d23364b7be28327dd056fe8000ea8fb15": "3712cd9fb09855844cbcd007269dab04",
".git/objects/f0/c67471890e12dd327551cbf246d892f1bcde20": "54c32f25dc4c2fc8f8068ea02fe02815",
".git/objects/f1/903442a6182a928a75f91c027d3373845d30a1": "54566e42f13e6ba097c79e19622ceab2",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/0f93f69ee12c6bde5a54f1ddde1e4bb05821dc": "b2211f538cf4a71726ec448388bdda5d",
".git/objects/fc/79642759dd117f93ea65dba241c75095ec00fa": "87498a66e67a4e7265331bd0d792a594",
".git/objects/fe/18a6db36dc99594a301c78574a69c97f49a941": "3cae7bb8f811b01b4e53e934c759bbc8",
".git/packed-refs": "02ca4d9afc2c213015f794b0213f2267",
".git/refs/heads/master": "db027c6e9a45bef72fafc54c56714cc6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "db027c6e9a45bef72fafc54c56714cc6",
"assets/AssetManifest.json": "b8e8311547b14222536203d9ecdf5e6e",
"assets/assets/icons/icon_launcher.png": "745c4f0ec153de19fa77c8b1a283573b",
"assets/assets/images/logo.png": "859e2281c3c0e4e24225cd6000215f95",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "fa7a1ff613aa47d93fd59b26b65979e1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e52a0b5ae7c128362049633db55e071b",
"/": "e52a0b5ae7c128362049633db55e071b",
"main.dart.js": "0c5205e53c574ba4efc534b70c3db74a",
"manifest.json": "3ef1193b00d57652124d719fdb063153",
"version.json": "c81364a32d6a38c0ab79e3e0691116eb"
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
