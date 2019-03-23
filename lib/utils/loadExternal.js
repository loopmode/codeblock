"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadExternal;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _window = window,
    AbortController = _window.AbortController;
/**
 * Loads the text contents of an external resource and invokes a callback with the result.
 * @param {String} url the URL of a resource to load
 * @param {*} successCallback a callback function to invoke in case of success. Receives the result text.
 * @param {*} errorCallback a callback function to invoke in case of error. Receives the error object.
 */

function loadExternal(_x, _x2, _x3) {
  return _loadExternal.apply(this, arguments);
}

function _loadExternal() {
  _loadExternal = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, successCallback, errorCallback) {
    var controller, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            controller = new AbortController();
            _context.prev = 1;
            _context.next = 4;
            return window.fetch(url, {
              method: 'get',
              signal: controller.signal
            });

          case 4:
            response = _context.sent;
            _context.t0 = successCallback;
            _context.next = 8;
            return response.text();

          case 8:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t2 = _context["catch"](1);
            console.warn('[loadExternal] failed', {
              error: _context.t2
            });
            errorCallback(_context.t2);

          case 16:
            return _context.abrupt("return", function () {
              return controller.abort();
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _loadExternal.apply(this, arguments);
}