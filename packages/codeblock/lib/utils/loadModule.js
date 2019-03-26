"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModule;

var _themes = _interopRequireDefault(require("../themes"));

var _languages = _interopRequireDefault(require("../languages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loaders = {
  theme: _themes.default,
  language: _languages.default
};
/**
 * Loads a prismjs theme or language module.
 *
 * @param {String} type either `theme` or `language`
 * @param {String} name the name of the theme or language to load
 */

function loadModule(_x, _x2) {
  return _loadModule.apply(this, arguments);
}

function _loadModule() {
  _loadModule = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, name) {
    var loader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loader = loaders[type] && loaders[type][name];
            console.debug('loadModule', {
              type: type,
              name: name,
              loader: loader
            });

            if (!(typeof loader === 'function')) {
              _context.next = 13;
              break;
            }

            _context.prev = 3;
            _context.next = 6;
            return loader();

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](3);
            console.error("[loadModule] error loading ".concat(type, " \"").concat(name, "\""), _context.t0);

          case 11:
            _context.next = 14;
            break;

          case 13:
            console.warn("Unsupported ".concat(type, " \"").concat(name, "\""), {
              supported: Object.keys(loaders[type])
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 8]]);
  }));
  return _loadModule.apply(this, arguments);
}
//# sourceMappingURL=loadModule.js.map