"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadExternal;

/**
 * Loads the contents of an external resource as a string using window.fetch.
 *
 * @param {String} url the URL of a resource to load
 * @param {Function} callback function with a `(error, result)` signature
 * @return {Function} a function that aborts the request
 */
function loadExternal(url, callback) {
  var _window = window,
      fetch = _window.fetch,
      AbortController = _window.AbortController;
  var controller = new AbortController();
  fetch(url, {
    method: 'get',
    signal: controller.signal
  }).then(function (response) {
    return response.text();
  }).then(function (text) {
    return callback(null, text);
  }).catch(function (error) {
    return callback(error, null);
  });
  return function () {
    return controller.abort();
  };
}
//# sourceMappingURL=fetchExternal.js.map