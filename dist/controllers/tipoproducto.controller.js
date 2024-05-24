"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTiposProducto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getTiposProducto = exports.getTiposProducto = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getTiposProducto);
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
  return function getTiposProducto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();