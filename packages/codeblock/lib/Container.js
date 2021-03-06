"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Container;

var _react = _interopRequireDefault(require("react"));

var _Codeblock = _interopRequireDefault(require("./Codeblock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Container(props) {
  return _react.default.createElement(_Codeblock.default, _extends({}, props, {
    isContainer: true
  }));
}
//# sourceMappingURL=Container.js.map