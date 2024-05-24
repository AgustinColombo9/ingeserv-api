"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePedidoCabecera = exports.updateImagenPedido = exports.newPedidoCabecera = exports.getUltimoPedidoId = exports.getPedidosUsuarioId = exports.getPedidosUsuarioEstadoId = exports.getPedidosEstadoId = exports.getPedidoEstados = exports.getPedidoCabeceraId = exports.deletePedidoCabecera = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var _buffer = require("buffer");
var getPedidoEstados = exports.getPedidoEstados = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getPedidoEstados);
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
  return function getPedidoEstados(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getPedidosEstadoId = exports.getPedidosEstadoId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getPedidosEstadoId);
        case 7:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 16;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function getPedidosEstadoId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getPedidoCabeceraId = exports.getPedidoCabeceraId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getPedidoCabeceraId);
        case 7:
          result = _context3.sent;
          res.json(result.recordset[0]);
          _context3.next = 16;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }));
  return function getPedidoCabeceraId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var newPedidoCabecera = exports.newPedidoCabecera = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, pedido_fecha, pedido_cliente_id, pedido_estado_id, pedido_fecha_update, pedido_descripcion, pedido_transporte, pedido_comprobante, pedido_cantidad, pedido_precio, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, pedido_fecha = _req$body.pedido_fecha, pedido_cliente_id = _req$body.pedido_cliente_id, pedido_estado_id = _req$body.pedido_estado_id, pedido_fecha_update = _req$body.pedido_fecha_update, pedido_descripcion = _req$body.pedido_descripcion, pedido_transporte = _req$body.pedido_transporte, pedido_comprobante = _req$body.pedido_comprobante, pedido_cantidad = _req$body.pedido_cantidad, pedido_precio = _req$body.pedido_precio;
          console.log('PEDIDO NEW: ' + pedido_fecha + ' - ' + pedido_cliente_id + ' - ' + pedido_estado_id + ' - ' + pedido_fecha_update + ' - ' + pedido_descripcion + ' - ' + pedido_transporte + ' - ' + pedido_comprobante + ' - ' + pedido_cantidad + ' - ' + pedido_precio);
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context4.sent;
          _context4.next = 8;
          return pool.request().input("pedido_fecha", _connection.sql.VarChar, pedido_fecha).input("pedido_cliente_id", _connection.sql.Numeric, pedido_cliente_id).input("pedido_estado_id", _connection.sql.Numeric, pedido_estado_id).input("pedido_fecha_update", _connection.sql.VarChar, pedido_fecha_update).input("pedido_descripcion", _connection.sql.VarChar, pedido_descripcion).input("pedido_transporte", _connection.sql.VarChar, pedido_transporte).input("pedido_comprobante", _connection.sql.VarChar, pedido_comprobante).input("pedido_cantidad", _connection.sql.Numeric, pedido_cantidad).input("pedido_precio", _connection.sql.Float, pedido_precio).query(_querys.queries.newPedidoCabecera);
        case 8:
          res.json({
            message: "OK"
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          res.status(500);
          res.send(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 11]]);
  }));
  return function newPedidoCabecera(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var updatePedidoCabecera = exports.updatePedidoCabecera = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, pedido_fecha, pedido_cliente_id, pedido_estado_id, pedido_fecha_update, pedido_descripcion, pedido_transporte, pedido_comprobante, pedido_cantidad, pedido_precio, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _req$body2 = req.body, pedido_fecha = _req$body2.pedido_fecha, pedido_cliente_id = _req$body2.pedido_cliente_id, pedido_estado_id = _req$body2.pedido_estado_id, pedido_fecha_update = _req$body2.pedido_fecha_update, pedido_descripcion = _req$body2.pedido_descripcion, pedido_transporte = _req$body2.pedido_transporte, pedido_comprobante = _req$body2.pedido_comprobante, pedido_cantidad = _req$body2.pedido_cantidad, pedido_precio = _req$body2.pedido_precio;
          _context5.prev = 3;
          _context5.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context5.sent;
          _context5.next = 9;
          return pool.request().input("pedido_fecha", _connection.sql.VarChar, pedido_fecha).input("pedido_cliente_id", _connection.sql.Numeric, pedido_cliente_id).input("pedido_estado_id", _connection.sql.Numeric, pedido_estado_id).input("pedido_fecha_update", _connection.sql.VarChar, pedido_fecha_update).input("pedido_descripcion", _connection.sql.VarChar, pedido_descripcion).input("pedido_transporte", _connection.sql.VarChar, pedido_transporte).input("pedido_comprobante", _connection.sql.VarChar, pedido_comprobante).input("pedido_cantidad", _connection.sql.Numeric, pedido_cantidad).input("pedido_precio", _connection.sql.Float, pedido_precio).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePedidoCabecera);
        case 9:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context5.next = 17;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](3);
          res.json({
            message: _context5.t0.message
          });
          console.log('INCORRECTO: ' + _context5.t0.message);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 13]]);
  }));
  return function updatePedidoCabecera(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deletePedidoCabecera = exports.deletePedidoCabecera = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deletePedidoCabecera);
        case 7:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          res.json({
            message: _context6.t0.message
          });
          console.log('INCORRECTO: ' + _context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function deletePedidoCabecera(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getUltimoPedidoId = exports.getUltimoPedidoId = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context7.sent;
          _context7.next = 6;
          return pool.request().query(_querys.queries.getUltimoPedidoId);
        case 6:
          result = _context7.sent;
          res.json(result.recordset[0]);
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          res.json({
            message: _context7.t0.message
          });
          console.log('INCORRECTO: ' + _context7.t0.message);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getUltimoPedidoId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getPedidosUsuarioId = exports.getPedidosUsuarioId = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context8.sent;
          _context8.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getPedidosUsuarioId);
        case 7:
          result = _context8.sent;
          res.json(result.recordset);
          _context8.next = 16;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context8.t0.message);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 11]]);
  }));
  return function getPedidosUsuarioId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getPedidosUsuarioEstadoId = exports.getPedidosUsuarioEstadoId = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$params, id, estadoId, pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params = req.params, id = _req$params.id, estadoId = _req$params.estadoId;
          _context9.prev = 1;
          _context9.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context9.sent;
          _context9.next = 7;
          return pool.request().input('id', id).input('estado_id', estadoId).query(_querys.queries.getPedidosUsuarioEstadoId);
        case 7:
          result = _context9.sent;
          res.json(result.recordset);
          _context9.next = 16;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context9.t0.message);
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 11]]);
  }));
  return function getPedidosUsuarioEstadoId(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var updateImagenPedido = exports.updateImagenPedido = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, _req$body3, index, pedido_imagen, buffer, pool, _pool, _pool2, _pool3;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _req$body3 = req.body, index = _req$body3.index, pedido_imagen = _req$body3.pedido_imagen;
          buffer = _buffer.Buffer.from(pedido_imagen, 'base64');
          _context10.prev = 3;
          if (!(parseInt(index) === 0)) {
            _context10.next = 14;
            break;
          }
          _context10.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context10.sent;
          _context10.next = 10;
          return pool.request().input("cliente_delivery_foto_uno", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenUnoPedido);
        case 10:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 14:
          if (!(parseInt(index) === 1)) {
            _context10.next = 24;
            break;
          }
          _context10.next = 17;
          return (0, _connection.getConnection)();
        case 17:
          _pool = _context10.sent;
          _context10.next = 20;
          return _pool.request().input("cliente_delivery_foto_dos", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenDosPedido);
        case 20:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 24:
          if (!(parseInt(index) === 2)) {
            _context10.next = 34;
            break;
          }
          _context10.next = 27;
          return (0, _connection.getConnection)();
        case 27:
          _pool2 = _context10.sent;
          _context10.next = 30;
          return _pool2.request().input("cliente_delivery_foto_tres", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenTresPedido);
        case 30:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 34:
          _context10.next = 36;
          return (0, _connection.getConnection)();
        case 36:
          _pool3 = _context10.sent;
          _context10.next = 39;
          return _pool3.request().input("cliente_delivery_foto_cuatro", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenCuatroPedido);
        case 39:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
        case 41:
          _context10.next = 46;
          break;
        case 43:
          _context10.prev = 43;
          _context10.t0 = _context10["catch"](3);
          console.log('ERROR: ' + _context10.t0);
        case 46:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[3, 43]]);
  }));
  return function updateImagenPedido(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();