"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLanguages;

var _languages = _interopRequireDefault(require("../languages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var supportedLanguages = Object.keys(_languages.default);
var childSelector = '[class*="language-"], [class*="lang-"]';
var languageRegex = /lang(uage)*-([a-z0-9\-]*)/;
/**
 * Detects prism languages found as CSS classes on the children of a given element.
 *
 * Queries all child elements that have a `language-*` CSS class and returns
 * an array of the unique language names (the `*` values) that were found.
 *
 * Use case: get all languages of rendered markdown
 *
 * @param {Element} element a DOM element
 * @return {Array} an array of languages found inside `element`
 */

function getLanguages(element) {
  if (!element) {
    return [];
  }

  var elements = _toConsumableArray(element.querySelectorAll(childSelector));

  return elements.reduce(function (result, el) {
    var matches = el.className.match(languageRegex);
    var language = matches && matches[2];

    if (supportedLanguages.includes(language) && !result.includes(language)) {
      result.push(language);
    }

    return result;
  }, []);
}
//# sourceMappingURL=getLanguages.js.map