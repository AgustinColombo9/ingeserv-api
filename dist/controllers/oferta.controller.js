"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newOferta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newOferta = exports.newOferta = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, producto_titulo, producto_descripcion, producto_detalle, producto_marca, producto_categoria_id, producto_imagen, producto_precio, producto_descuento, producto_activo, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, producto_titulo = _req$body.producto_titulo, producto_descripcion = _req$body.producto_descripcion, producto_detalle = _req$body.producto_detalle, producto_marca = _req$body.producto_marca, producto_categoria_id = _req$body.producto_categoria_id, producto_imagen = _req$body.producto_imagen, producto_precio = _req$body.producto_precio, producto_descuento = _req$body.producto_descuento, producto_activo = _req$body.producto_activo;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("producto_titulo", _connection.sql.VarChar, producto_titulo).input("producto_descripcion", _connection.sql.VarChar, producto_descripcion).input("producto_detalle", _connection.sql.VarChar, producto_detalle).input("producto_marca", _connection.sql.VarChar, producto_marca).input("producto_categoria_id", _connection.sql.Decimal, producto_categoria_id).input("producto_imagen", _connection.sql.VarChar, producto_imagen).input("producto_precio", _connection.sql.Decimal, producto_precio).input("producto_descuento", _connection.sql.Decimal, producto_descuento)
          //.input("producto_vigencia", sql.Date, producto_vigencia)
          .input("producto_activo", _connection.sql.Decimal, producto_activo).query(_querys.queries.newProducto);
        case 7:
          res.json({
            message: "OK"
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  }));
  return function newOferta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();