"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategoriasVentasMes = exports.getCategorias = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getCategoriasVentasMes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_querys.queries.getCategoriasVentasMes);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getCategoriasVentasMes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getCategoriasVentasMes = getCategoriasVentasMes;
var getCategorias = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_querys.queries.getCategorias);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 15;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getCategorias(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getCategorias = getCategorias;