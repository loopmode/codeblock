"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Codeblock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _languages = _interopRequireDefault(require("./languages"));

var _themes = _interopRequireDefault(require("./themes"));

var _usePrism = _interopRequireDefault(require("./hooks/usePrism"));

var _useContent = _interopRequireDefault(require("./hooks/useContent"));

var _fetchExternal = _interopRequireDefault(require("./utils/fetchExternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Codeblock.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  loadExternal: _propTypes.default.func,
  language: _propTypes.default.oneOf(Object.keys(_languages.default)),
  theme: _propTypes.default.oneOf(Object.keys(_themes.default)),
  as: _propTypes.default.string,
  src: _propTypes.default.string,
  callback: _propTypes.default.func,
  async: _propTypes.default.bool,
  isContainer: _propTypes.default.bool
};
Codeblock.defaultProps = {
  as: 'pre',
  language: 'javascript',
  theme: 'okaidia',
  loadExternal: _fetchExternal.default
};

function Codeblock(props) {
  var Renderer = props.as,
      language = props.language,
      theme = props.theme,
      src = props.src,
      isContainer = props.isContainer,
      loadExternal = props.loadExternal,
      callback = props.callback,
      children = props.children,
      async = props.async,
      otherProps = _objectWithoutProperties(props, ["as", "language", "theme", "src", "isContainer", "loadExternal", "callback", "children", "async"]);

  var element = _react.default.useRef(null);

  var content = (0, _useContent.default)(children, src, loadExternal);
  var className = (0, _classnames.default)('Codeblock', _defineProperty({}, "language-".concat(language), language && !isContainer), props.className);
  (0, _usePrism.default)(element, {
    language: language,
    theme: theme,
    callback: callback,
    async: async,
    isContainer: isContainer
  });
  return _react.default.createElement(Renderer, _extends({}, otherProps, {
    ref: element,
    className: className
  }), content);
}
//# sourceMappingURL=Codeblock.js.map