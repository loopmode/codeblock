"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadModule;

var _theme = _interopRequireDefault(require("../theme"));

var _syntax = _interopRequireDefault(require("../syntax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loaders = {
  theme: _theme.default,
  syntax: _syntax.default
};

function loadModule(_x, _x2) {
  return _loadModule.apply(this, arguments);
}

function _loadModule() {
  _loadModule = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(type, name) {
    var load;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            load = loaders[type] && loaders[type][name];

            if (!(typeof load === 'function')) {
              _context.next = 14;
              break;
            }

            _context.prev = 2;
            console.log('loadModule', {
              type: type,
              name: name,
              load: load
            });
            _context.next = 6;
            return load();

          case 6:
            console.log('>> loadModule done', {
              type: type,
              name: name,
              load: load
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error("Error loading ".concat(type, " \"").concat(name, "\""), _context.t0);

          case 12:
            _context.next = 15;
            break;

          case 14:
            console.warn("Unsupported ".concat(type, " \"").concat(name, "\""), {
              supported: Object.keys(loaders[type])
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _loadModule.apply(this, arguments);
}