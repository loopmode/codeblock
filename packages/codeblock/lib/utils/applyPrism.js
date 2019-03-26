"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyPrism;

var _loadModule = _interopRequireDefault(require("./loadModule"));

var _getLanguages = _interopRequireDefault(require("./getLanguages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var importPrism = function importPrism() {
  return import(
  /* webpackChunkName: 'codeblock/prismjs' */
  'prismjs');
};
/**
 * Async function that loads and applies prism. See `hooks/usePrism`.
 */


function applyPrism(_x, _x2) {
  return _applyPrism.apply(this, arguments);
}

function _applyPrism() {
  _applyPrism = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(element, options) {
    var language, theme, isContainer, async, callback, stillMounted, Prism, lang, detected, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //
            language = options.language, theme = options.theme, isContainer = options.isContainer, async = options.async, callback = options.callback;

            stillMounted = function stillMounted() {
              return !!element;
            };

            _context.next = 4;
            return importPrism();

          case 4:
            Prism = _context.sent;

            if (!(isContainer && stillMounted())) {
              _context.next = 36;
              break;
            }

            detected = (0, _getLanguages.default)(element);
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;
            _iterator = detected[Symbol.iterator]();

          case 12:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 20;
              break;
            }

            lang = _step.value;

            if (!(lang && stillMounted())) {
              _context.next = 17;
              break;
            }

            _context.next = 17;
            return (0, _loadModule.default)('language', lang);

          case 17:
            _iteratorNormalCompletion = true;
            _context.next = 12;
            break;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 26:
            _context.prev = 26;
            _context.prev = 27;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 29:
            _context.prev = 29;

            if (!_didIteratorError) {
              _context.next = 32;
              break;
            }

            throw _iteratorError;

          case 32:
            return _context.finish(29);

          case 33:
            return _context.finish(26);

          case 34:
            _context.next = 39;
            break;

          case 36:
            if (!(language && stillMounted())) {
              _context.next = 39;
              break;
            }

            _context.next = 39;
            return (0, _loadModule.default)('language', language);

          case 39:
            if (!(theme && stillMounted())) {
              _context.next = 42;
              break;
            }

            _context.next = 42;
            return (0, _loadModule.default)('theme', theme);

          case 42:
            if (stillMounted()) {
              isContainer ? Prism.highlightAllUnder(element, async, callback) : Prism.highlightElement(element, async, callback);
            }

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 22, 26, 34], [27,, 29, 33]]);
  }));
  return _applyPrism.apply(this, arguments);
}
//# sourceMappingURL=applyPrism.js.map