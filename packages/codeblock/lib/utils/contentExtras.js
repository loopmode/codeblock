"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.report = exports.theme = exports.language = exports.src = void 0;

var src = function addSrc(props) {
  return "// src: ".concat(props.src);
};

exports.src = src;

var language = function addLanguage(props) {
  return "// language: ".concat(props.language);
};

exports.language = language;

var theme = function addTheme(props) {
  return "// theme: ".concat(props.theme);
};

exports.theme = theme;

var report = function addReport(props) {
  return "/*\n".concat(JSON.stringify(props, replacer, 4), "\n*/");

  function replacer(name, value) {
    if (typeof value === 'function') {
      return "function ".concat(value.name, "() { ... }");
    } else {
      return value;
    }
  }
};

exports.report = report;
//# sourceMappingURL=contentExtras.js.map