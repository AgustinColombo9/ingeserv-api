"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNotificacion = exports.readNotificacion = exports.newNotificacion = exports.getNotificacionesUsuarioId = exports.getNotificacionesEstadoId = exports.getNotificaciones = exports.getNotificacionId = exports.deleteNotificacion = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newNotificacion = exports.newNotificacion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, notificacion_titulo, notificacion_mensaje, notificacion_fondo_color, notificacion_borde_color, notificacion_boton_label, notificacion_boton_label_color, notificacion_boton_borde_color, notificacion_boton_fondo_color, notificacion_usuario_id, notificacion_estado, notificacion_fecha, notificacion_fecha_read, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, notificacion_titulo = _req$body.notificacion_titulo, notificacion_mensaje = _req$body.notificacion_mensaje, notificacion_fondo_color = _req$body.notificacion_fondo_color, notificacion_borde_color = _req$body.notificacion_borde_color, notificacion_boton_label = _req$body.notificacion_boton_label, notificacion_boton_label_color = _req$body.notificacion_boton_label_color, notificacion_boton_borde_color = _req$body.notificacion_boton_borde_color, notificacion_boton_fondo_color = _req$body.notificacion_boton_fondo_color, notificacion_usuario_id = _req$body.notificacion_usuario_id, notificacion_estado = _req$body.notificacion_estado, notificacion_fecha = _req$body.notificacion_fecha, notificacion_fecha_read = _req$body.notificacion_fecha_read;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("notificacion_titulo", _connection.sql.VarChar, notificacion_titulo).input("notificacion_mensaje", _connection.sql.VarChar, notificacion_mensaje).input("notificacion_fondo_color", _connection.sql.VarChar, notificacion_fondo_color).input("notificacion_borde_color", _connection.sql.VarChar, notificacion_borde_color).input("notificacion_boton_label", _connection.sql.VarChar, notificacion_boton_label).input("notificacion_boton_label_color", _connection.sql.VarChar, notificacion_boton_label_color).input("notificacion_boton_borde_color", _connection.sql.VarChar, notificacion_boton_borde_color).input("notificacion_boton_fondo_color", _connection.sql.VarChar, notificacion_boton_fondo_color).input("notificacion_usuario_id", _connection.sql.Numeric, notificacion_usuario_id).input("notificacion_estado", _connection.sql.Bit, notificacion_estado).input("notificacion_fecha", _connection.sql.VarChar, notificacion_fecha).input("notificacion_fecha_read", _connection.sql.VarChar, notificacion_fecha_read).query(_querys.queries.newNotificacion);
        case 7:
          res.json({
            message: "OK"
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Error al procesar la solicitud:', _context.t0);
          res.status(500).json({
            error: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function newNotificacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateNotificacion = exports.updateNotificacion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, notificacion_titulo, notificacion_mensaje, notificacion_fondo_color, notificacion_borde_color, notificacion_boton_label, notificacion_boton_label_color, notificacion_boton_borde_color, notificacion_boton_fondo_color, notificacion_usuario_id, notificacion_estado, notificacion_fecha, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _req$body2 = req.body, notificacion_titulo = _req$body2.notificacion_titulo, notificacion_mensaje = _req$body2.notificacion_mensaje, notificacion_fondo_color = _req$body2.notificacion_fondo_color, notificacion_borde_color = _req$body2.notificacion_borde_color, notificacion_boton_label = _req$body2.notificacion_boton_label, notificacion_boton_label_color = _req$body2.notificacion_boton_label_color, notificacion_boton_borde_color = _req$body2.notificacion_boton_borde_color, notificacion_boton_fondo_color = _req$body2.notificacion_boton_fondo_color, notificacion_usuario_id = _req$body2.notificacion_usuario_id, notificacion_estado = _req$body2.notificacion_estado, notificacion_fecha = _req$body2.notificacion_fecha;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input("notificacion_titulo", _connection.sql.VarChar, notificacion_titulo).input("notificacion_mensaje", _connection.sql.VarChar, notificacion_mensaje).input("notificacion_fondo_color", _connection.sql.VarChar, notificacion_fondo_color).input("notificacion_borde_color", _connection.sql.VarChar, notificacion_borde_color).input("notificacion_boton_label", _connection.sql.VarChar, notificacion_boton_label).input("notificacion_boton_label_color", _connection.sql.VarChar, notificacion_boton_label_color).input("notificacion_boton_borde_color", _connection.sql.VarChar, notificacion_boton_borde_color).input("notificacion_boton_fondo_color", _connection.sql.VarChar, notificacion_boton_fondo_color).input("notificacion_usuario_id", _connection.sql.Numeric, notificacion_usuario_id).input("notificacion_estado", _connection.sql.Bit, notificacion_estado).input("notificacion_fecha", _connection.sql.VarChar, notificacion_fecha).input("id", _connection.sql.Numeric, id).query(_querys.queries.updateNotificacion);
        case 8:
          res.json({
            message: "OK"
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error('Error al procesar la solicitud:', _context2.t0);
          res.status(500).json({
            error: 'Error interno del servidor'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function updateNotificacion(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var readNotificacion = exports.readNotificacion = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.readNotificacion);
        case 7:
          result = _context3.sent;
          res.json(result.recordset);
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
  return function readNotificacion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteNotificacion = exports.deleteNotificacion = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteNotificacion);
        case 7:
          result = _context4.sent;
          res.json(result.recordset);
          _context4.next = 16;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context4.t0.message);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }));
  return function deleteNotificacion(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getNotificaciones = exports.getNotificaciones = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().query(_querys.queries.getNotificaciones);
        case 6:
          result = _context5.sent;
          res.status(200).json(result.recordset);
          _context5.next = 15;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getNotificaciones(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getNotificacionId = exports.getNotificacionId = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool, result;
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getNotificacionId);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 16;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context6.t0.message);
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function getNotificacionId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getNotificacionesEstadoId = exports.getNotificacionesEstadoId = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getNotificacionesEstadoId);
        case 7:
          result = _context7.sent;
          res.json(result.recordset);
          _context7.next = 16;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context7.t0.message);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return function getNotificacionesEstadoId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getNotificacionesUsuarioId = exports.getNotificacionesUsuarioId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getNotificacionesUsuarioId);
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
  return function getNotificacionesUsuarioId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();