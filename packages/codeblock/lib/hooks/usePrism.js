"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePrism;

var _react = _interopRequireDefault(require("react"));

var _applyPrism = _interopRequireDefault(require("../utils/applyPrism"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
 * @param {Object} element The target DOM element
 * @param {Object} options the options object
 * @param {String} [options.language] name of the prism language to load
 * @param {String} [options.theme] name of the prism theme to load
 * @param {Boolean} [options.isContainer] whether `element` is a container of targets
 * @param {Boolean} [options.async] whether to use a web worker for parsing
 * @param {Function} [options.callback] Optional invoked after the highlighting is done
 *
 */
function usePrism(ref, options) {
  _react.default.useEffect(function () {
    try {
      if (ref.current) {
        console.log('usePrism', {
          ref: ref,
          options: options
        });
        (0, _applyPrism.default)(ref.current, options);
      }
    } catch (error) {
      console.warn('[codeblock] usePrism failed', {
        error: error
      });
    }
  }, [ref.current].concat(_toConsumableArray(Object.values(options))));
}
//# sourceMappingURL=usePrism.js.map