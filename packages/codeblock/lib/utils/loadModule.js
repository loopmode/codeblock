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

            if (!(typeof loader === 'function')) {
              _context.next = 12;
              break;
            }

            _context.prev = 2;
            _context.next = 5;
            return loader();

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            console.warn("[codeblock] loadModule failed", type, name);

          case 10:
            _context.next = 13;
            break;

          case 12:
            console.warn("[codeblock] Unsupported ".concat(type, " \"").concat(name, "\""), {
              supported: Object.keys(loaders[type])
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _loadModule.apply(this, arguments);
}
//# sourceMappingURL=loadModule.js.map