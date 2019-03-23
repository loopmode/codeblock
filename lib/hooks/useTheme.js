"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTheme;

var _react = _interopRequireDefault(require("react"));

var _loadModule = _interopRequireDefault(require("../utils/loadModule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useTheme(value) {
  return _react.default.useEffect(function () {
    (0, _loadModule.default)('theme', value);
  }, [value]);
}