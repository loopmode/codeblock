"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useLanguage;

var _react = _interopRequireDefault(require("react"));

var _loadModule = _interopRequireDefault(require("../utils/loadModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useLanguage(value) {
  return _react.default.useEffect(function () {
    (0, _loadModule.default)('syntax', value);
  }, [value]);
}