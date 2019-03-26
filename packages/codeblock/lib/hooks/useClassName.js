"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCssClass;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cx = function cx(classes) {
  return classes.filter(function (v) {
    return !!v;
  }).join(' ').trim();
};

function useCssClass(classes, values) {
  return _react.default.useMemo(function () {
    return cx(classes);
  }, values);
}
//# sourceMappingURL=useClassName.js.map