"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Codeblock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useContent = _interopRequireDefault(require("@loopmode/use-content"));

var _languages = _interopRequireDefault(require("./languages"));

var _themes = _interopRequireDefault(require("./themes"));

var _usePrism = _interopRequireDefault(require("./hooks/usePrism"));

var extras = _interopRequireWildcard(require("./utils/contentExtras"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CustomTypes = {
  language: _propTypes.default.oneOf(Object.keys(_languages.default)),
  theme: _propTypes.default.oneOf(Object.keys(_themes.default)),
  stringy: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.array])
};
Codeblock.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  //
  theme: CustomTypes.theme,
  language: CustomTypes.language,
  as: _propTypes.default.string,
  loadExternal: _propTypes.default.func,
  src: _propTypes.default.string,
  callback: _propTypes.default.func,
  async: _propTypes.default.bool,
  isContainer: _propTypes.default.bool,
  redact: _propTypes.default.func,
  prepend: CustomTypes.stringy,
  append: CustomTypes.stringy
};
Codeblock.defaultProps = {
  language: 'javascript',
  theme: 'okaidia',
  as: 'pre',
  loadExternal: undefined,
  src: undefined,
  callback: undefined,
  async: false,
  isContainer: false,
  redact: undefined,
  prepend: undefined,
  append: undefined
};
Codeblock.extras = extras;

function Codeblock(props) {
  var Renderer = props.as;

  var elementRef = _react.default.useRef(null);

  var content = (0, _useContent.default)(props.children, props);
  (0, _usePrism.default)(elementRef, props);
  return _react.default.createElement(Renderer, _extends({}, getForeignProps(props), {
    ref: elementRef,
    className: (0, _classnames.default)('Codeblock', props.className, getLanguageClass(props))
  }), content);
}

function getLanguageClass(props) {
  if (props.language && !props.isContainer) {
    return "language-".concat(props.language);
  }
}

function getForeignProps(props) {
  var ownKeys = Object.keys(Codeblock.defaultProps);
  return Object.entries(props).reduce(function (result, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (ownKeys.includes(key)) {
      return result;
    }

    return Object.assign(result, _defineProperty({}, key, value));
  }, {});
}
//# sourceMappingURL=Codeblock.js.map