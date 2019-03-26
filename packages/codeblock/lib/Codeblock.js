"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Codeblock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _languages = _interopRequireDefault(require("./languages"));

var _themes = _interopRequireDefault(require("./themes"));

var _usePrism = _interopRequireDefault(require("./hooks/usePrism"));

var _useExternalContent = _interopRequireDefault(require("./hooks/useExternalContent"));

var _fetchExternal = _interopRequireDefault(require("./utils/fetchExternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &[class*='language-'] {\n        &.inline {\n            display: inline;\n            padding: 2px 3px;\n            margin-right: 5px;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

Codeblock.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  loadExternal: _propTypes.default.func,
  language: _propTypes.default.oneOf(Object.keys(_languages.default)),
  theme: _propTypes.default.oneOf(Object.keys(_themes.default)),
  component: _propTypes.default.string,
  innerComponent: _propTypes.default.string,
  src: _propTypes.default.string,
  callback: _propTypes.default.func,
  async: _propTypes.default.bool,
  inline: _propTypes.default.bool,
  isContainer: _propTypes.default.bool
};

function Codeblock(_ref) {
  var children = _ref.children,
      className = _ref.className,
      src = _ref.src,
      _ref$loadExternal = _ref.loadExternal,
      loadExternal = _ref$loadExternal === void 0 ? _fetchExternal.default : _ref$loadExternal,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? 'javascript' : _ref$language,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'okaidia' : _ref$theme,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'pre' : _ref$component,
      isContainer = _ref.isContainer,
      callback = _ref.callback,
      async = _ref.async,
      inline = _ref.inline,
      props = _objectWithoutProperties(_ref, ["children", "className", "src", "loadExternal", "language", "theme", "component", "isContainer", "callback", "async", "inline"]);

  var ref = _react.default.useRef(null);

  (0, _usePrism.default)(ref, {
    language: language,
    theme: theme,
    callback: callback,
    async: async,
    isContainer: isContainer
  });
  var content = children;

  if (src) {
    content = (0, _useExternalContent.default)(src, loadExternal);
  }

  var cssClasses = (0, _classnames.default)('Codeblock', className, {
    inline: inline
  }, _defineProperty({}, "language-".concat(language), language));
  return _react.default.createElement(Container, _extends({}, props, {
    className: cssClasses,
    as: component,
    ref: ref
  }), content);
}
//# sourceMappingURL=Codeblock.js.map