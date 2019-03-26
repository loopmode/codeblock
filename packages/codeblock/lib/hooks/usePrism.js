"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePrism;
exports.applyPrism = applyPrism;

var _react = _interopRequireDefault(require("react"));

var _loadModule = _interopRequireDefault(require("../utils/loadModule"));

var _getLanguages = _interopRequireDefault(require("../utils/getLanguages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var importPrism = function importPrism() {
  return import(
  /* webpackChunkName: 'codeblock/prismjs' */
  'prismjs');
};
/**
 * Highlights code in the target element using prismjs.
 * Loads prismjs itself, the specified theme and the specified or auto-detected languages.
 *
 * If the element is not the actual target but a container of possible targets (e.g. you render a markdown file, that may contain any codeblocks),
 * use the `{isContainer: true}` option to automatically detect languages and run  `Prism.highlightAllUnder` instead of `Prism.highlightElement`.
 *
 * If you need to display large amounts of code, set the `{async: true}` option to use a worker for parsing.
 *
 * Check out the [prism documentation](https://prismjs.com/extending.html#api) for more details on the `async` and `callback` options.
 *
 */


function usePrism(ref, options) {
  _react.default.useEffect(function () {
    try {
      if (ref.current) {
        applyPrism(ref.current, options);
      }
    } catch (error) {
      console.warn('[codeblock] usePrism failed', {
        error: error
      });
    }
  }, [ref.current].concat(_toConsumableArray(Object.values(options))));
}
/**
 * Async function that loads and applies prism.
 *
 * @param {Object} element The target DOM element
 * @param {Object} options Options object
 * @param {String} [options.language] Name of the prism language to load
 * @param {String} [options.theme] Name of the prism theme to load
 * @param {Boolean} [options.isContainer] Whether to treat the element as a container
 * @param {Boolean} [options.async] Whether to use a web worker for parsing the code
 * @param {Function} [options.callback] Optional callback invoked after the highlighting is done
 */


function applyPrism(_x, _x2) {
  return _applyPrism.apply(this, arguments);
}

function _applyPrism() {
  _applyPrism = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(element, options) {
    var language, theme, isContainer, async, callback, stillMounted, Prism, detected, lang, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step;

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
//# sourceMappingURL=usePrism.js.map