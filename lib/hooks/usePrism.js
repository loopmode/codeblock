"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usePrism;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Applies prism highlighting to a given element
 * @param {Element} ref the target DOM element
 */
function usePrism(ref) {
  var applyPrism =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var Prism;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return import(
              /* webpackChunkName: 'prism' */
              'prismjs');

            case 2:
              Prism = _context.sent;

              if (ref && ref.current) {
                Prism.highlightElement(ref.current);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function applyPrism() {
      return _ref.apply(this, arguments);
    };
  }();

  _react.default.useEffect(function () {
    try {
      applyPrism();
    } catch (error) {
      console.warn('[usePrism] failed', {
        error: error
      });
    }
  }, [ref]);
}