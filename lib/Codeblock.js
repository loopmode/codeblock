"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Codeblock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _syntax = _interopRequireDefault(require("./syntax"));

var _theme = _interopRequireDefault(require("./theme"));

var _useLanguage = _interopRequireDefault(require("./hooks/useLanguage"));

var _useTheme = _interopRequireDefault(require("./hooks/useTheme"));

var _usePrism = _interopRequireDefault(require("./hooks/usePrism"));

var _useExternalContent = _interopRequireDefault(require("./hooks/useExternalContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Codeblock.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  loader: _propTypes.default.func,
  language: _propTypes.default.oneOf(Object.keys(_syntax.default)),
  theme: _propTypes.default.oneOf(Object.keys(_theme.default)),
  component: _propTypes.default.string,
  innerComponent: _propTypes.default.string,
  src: _propTypes.default.string
};

function Codeblock(_ref) {
  var children = _ref.children,
      className = _ref.className,
      src = _ref.src,
      loader = _ref.loader,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'javascript' : _ref$language,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'okaidia' : _ref$theme,
      _ref$component = _ref.component,
      Outer = _ref$component === void 0 ? 'pre' : _ref$component,
      _ref$innerComponent = _ref.innerComponent,
      Inner = _ref$innerComponent === void 0 ? 'code' : _ref$innerComponent,
      props = _objectWithoutProperties(_ref, ["children", "className", "src", "loader", "language", "theme", "component", "innerComponent"]);

  var ref = _react.default.useRef(null);

  var content = children;

  if (src) {
    content = (0, _useExternalContent.default)(src, loader);
  }

  (0, _useLanguage.default)(language);
  (0, _useTheme.default)(theme);
  (0, _usePrism.default)(ref);
  return _react.default.createElement(Outer, _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)('Codeblock', _defineProperty({}, "language-".concat(language), language), className)
  }), _react.default.createElement(Inner, {
    children: content
  }));
}