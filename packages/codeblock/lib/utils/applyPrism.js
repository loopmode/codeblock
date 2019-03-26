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
    var language, theme, isContainer, async, callback, isMounted, Prism, detectedLanguages, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, lang;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //
            language = options.language, theme = options.theme, isContainer = options.isContainer, async = options.async, callback = options.callback;

            isMounted = function isMounted() {
              return !!element;
            };

            _context.next = 4;
            return importPrism();

          case 4:
            Prism = _context.sent;

            if (!(isMounted() && theme)) {
              _context.next = 9;
              break;
            }

            console.debug('[applyPrism] load theme', theme);
            _context.next = 9;
            return (0, _loadModule.default)('theme', theme);

          case 9:
            if (!(isMounted() && language)) {
              _context.next = 13;
              break;
            }

            console.debug('[applyPrism] load language', language);
            _context.next = 13;
            return (0, _loadModule.default)('language', language);

          case 13:
            if (!(isMounted() && isContainer)) {
              _context.next = 43;
              break;
            }

            detectedLanguages = (0, _getLanguages.default)(element);
            console.debug('applyPrism', {
              detectedLanguages: detectedLanguages
            });
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 19;
            _iterator = detectedLanguages[Symbol.iterator]();

          case 21:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 29;
              break;
            }

            lang = _step.value;

            if (!(isMounted() && lang)) {
              _context.next = 26;
              break;
            }

            _context.next = 26;
            return (0, _loadModule.default)('language', lang);

          case 26:
            _iteratorNormalCompletion = true;
            _context.next = 21;
            break;

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](19);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 35:
            _context.prev = 35;
            _context.prev = 36;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 38:
            _context.prev = 38;

            if (!_didIteratorError) {
              _context.next = 41;
              break;
            }

            throw _iteratorError;

          case 41:
            return _context.finish(38);

          case 42:
            return _context.finish(35);

          case 43:
            if (isMounted()) {
              isContainer ? Prism.highlightAllUnder(element, async, callback) : Prism.highlightElement(element, async, callback);
            }

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[19, 31, 35, 43], [36,, 38, 42]]);
  }));
  return _applyPrism.apply(this, arguments);
}
//# sourceMappingURL=applyPrism.js.map