/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["answer/index-bundle.js","af8c5f60bbad6a2d8584f320fea3fa1a"],["answer/index.css","336cd284348faa6d52d3f12b947ba230"],["answer/index.html","013491230eb6e1fffafda76a16dc484e"],["game/cards/10C.svg","bd17caf676aa2c5fb42b49559f7a56d5"],["game/cards/10D.svg","7e448065fd60c3c91e3de947a9467d55"],["game/cards/10H.svg","144151555c69dc2a3ebba434b22d4e52"],["game/cards/10S.svg","51c55f0947ec7f522bbb4897763fb85e"],["game/cards/2C.svg","2ebae580363cb1eaa8a9dadf556292c6"],["game/cards/2D.svg","1c8adbb3a417e2cd9d2c6e7d7514fad4"],["game/cards/2H.svg","6c142beb1beccad24e9313569e4e5dd2"],["game/cards/2S.svg","e8c6e1db28ba36c9da50abdf43ab7a60"],["game/cards/3C.svg","fede85e4618bd869222837923c70f473"],["game/cards/3D.svg","629622e38e3bf9b219af55d70e4e2984"],["game/cards/3H.svg","cd9144e999749e012e5c812e3a0d31d6"],["game/cards/3S.svg","1da91887ae313a56c43dc4f0d61c07ff"],["game/cards/4C.svg","e1dfc148022183fab7aa33d0733bd23e"],["game/cards/4D.svg","5347d506886a379bf05bcb15cb9c6831"],["game/cards/4H.svg","cb60aa7c6fd30b1cd0a41a9c45f0144f"],["game/cards/4S.svg","3e78de896442be95c02b8d7d857c83e2"],["game/cards/5C.svg","b8fab0f2f7e257eaf7c3726d57103ac2"],["game/cards/5D.svg","434286e8a29af9ef49a799838e60afae"],["game/cards/5H.svg","d64b8d5b55f64cf74275c71e441f5b83"],["game/cards/5S.svg","74c699bbb2afa28916d82362de44f515"],["game/cards/6C.svg","dc1e4d33098b3aa0adc155afea645869"],["game/cards/6D.svg","93a9b3e86980b6fb9201aa5e6d60a680"],["game/cards/6H.svg","8875fac43aa7c0d6aaa76e389d9d10bf"],["game/cards/6S.svg","0d7fd9f2a618cb69863a0b07569e47b6"],["game/cards/7C.svg","d2e8a6b96b904265ba8a5e1223d374bf"],["game/cards/7D.svg","30ff4b8ad4e6896c4ad21cae4018d7d8"],["game/cards/7H.svg","8b3adf08a1e342f31325ce69039df311"],["game/cards/7S.svg","8343d3ef5d3ac1728325e1e59b0337e9"],["game/cards/8C.svg","873c8cc4f1b3a1741b7a0d19ef1a75f1"],["game/cards/8D.svg","3ce263b61eb6ab7c213333b36aebea9b"],["game/cards/8H.svg","a3d87fdd268a3652c6525a50e861fa35"],["game/cards/8S.svg","dfeb4fd51eaf7cf97544d70257040f23"],["game/cards/9C.svg","dbc1a11e649b59092a177e04bb7e7ad8"],["game/cards/9D.svg","82ad06e86707d5a25010878024c69932"],["game/cards/9H.svg","3ac1dc8446a9dfcd5addf3f1c5e978f7"],["game/cards/9S.svg","6318c689d091036b48eb2e1966ac3f3c"],["game/cards/AC.svg","dc5e22922b5bc6d69388163019454995"],["game/cards/AD.svg","c6985df3fb514d0685cc27f8acc218c0"],["game/cards/AH.svg","20924e830be37186fac5e62b211344d9"],["game/cards/AS.svg","6db59a9a08a076442cf83140ea54a200"],["game/cards/AUTHORS.txt","ba346764c9153ba592b20b64304d0375"],["game/cards/BLUE_BACK.svg","c8edaa7542a596a499a7153d968f11c5"],["game/cards/CHANGELOG.txt","97399c408e17d7615adf225e8df7fcb8"],["game/cards/COPYING.LESSER.txt","e6a600fd5e1d9cbde2d983680233ad02"],["game/cards/COPYING.txt","d32239bcb673463ab874e80d47fae504"],["game/cards/JC.svg","b9743a692c94a6f24e1612722f389cda"],["game/cards/JD.svg","68a1f57ba3dc6fc4382c5086359d4026"],["game/cards/JH.svg","30ac87897db757848c9cb1b1e51f9f4f"],["game/cards/JS.svg","088020790936dd98378318aa0cb4aca2"],["game/cards/KC.svg","145b0d0f3a9d107f2cd3b7e736bcc5da"],["game/cards/KD.svg","95d58638b6e5eb24cb56faa865dff3b5"],["game/cards/KH.svg","9467ef4b3bc888ffab9164a6644676fd"],["game/cards/KS.svg","e8f980f652d981194b3f392e17f6af5d"],["game/cards/NEWS.txt","5b8736472f64a3c27767432cee5761e5"],["game/cards/QC.svg","656da757dead3704115698d21d962b28"],["game/cards/QD.svg","20b2b104de7e432cc967d103c1382891"],["game/cards/QH.svg","027853d326e3728f42efb425a68032c1"],["game/cards/QS.svg","ea743b6389c2fe989a2b9093b12413f2"],["game/cards/RED_BACK.svg","efe558552bcb4c2adb4021d542669dd1"],["game/cards/RED_BLANK.svg","647476ffd6a0f8b693842a1a9521ca9a"],["game/cards/RED_DECK.svg","91c66f930082f9acc4926e981f0667d0"],["game/cards/TC.svg","bd17caf676aa2c5fb42b49559f7a56d5"],["game/cards/TD.svg","7e448065fd60c3c91e3de947a9467d55"],["game/cards/TH.svg","144151555c69dc2a3ebba434b22d4e52"],["game/cards/TS.svg","51c55f0947ec7f522bbb4897763fb85e"],["game/cards/readme.txt","4fb0c18f997b1a88b54324fe4855c592"],["game/cards/transparent.png","d4d6dafea9e7488ce9c790ae221487e5"],["game/guest-bundle.js","00edc8009e6e34f92609cdb55100c1e3"],["game/host-bundle.js","3335458adcc6b49ab9dda2e2f611bef6"],["game/index.css","07c8a155eafdbf952b0ec80d9304682a"],["game/index.html","567e02ee67b54d0c277be1ac391563ca"],["icons/icon-192x192.png","c4516657e8f7ddbb5cf446af04c575f7"],["icons/icon-256x256.png","93583495d35a1905fafce294a33723cd"],["icons/icon-384x384.png","89cea01656ca54168221ab7cc06909de"],["icons/icon-512x512.png","7701b9796ef9d8e33f45f3dc91efbded"],["index-bundle.js","291603bb6880fe17d9492ec903c5e442"],["index.css","de8247e298b99528f355055219231d3f"],["index.html","a10212c1904657ad735c9d099f457ee8"],["manifest.json","574c0b63d7a068559edd1cee0255c2f0"],["offer/index-bundle.js","0c2dbad2e4049ff15a764257269c4df2"],["offer/index.css","b90d6863873168324e1259118ce4475a"],["offer/index.html","9621c0685b0273371a90c89a19e129a6"],["vendors-node_modules_qr-scanner_qr-scanner-worker_min_js-bundle.js","bbdad7e28371ac015857d52923582510"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







