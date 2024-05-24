"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCliente = exports.updateAvatarCliente = exports.newCliente = exports.getClientesEmpleado = exports.getClientes = exports.getClienteTipos = exports.getClienteId = exports.getClienteEstados = exports.deleteCliente = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newCliente = exports.newCliente = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, cliente_razon_social, cliente_situacion_iva, cliente_tipo_identificacion, cliente_identificacion, cliente_provincia, cliente_ciudad, cliente_domicilio, cliente_contacto, cliente_telefono, cliente_celular, cliente_email, cliente_estado, cliente_fecha_alta, cliente_usuario, cliente_edad, pool, ultimoClienteIdResult, ultimoClienteId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, cliente_razon_social = _req$body.cliente_razon_social, cliente_situacion_iva = _req$body.cliente_situacion_iva, cliente_tipo_identificacion = _req$body.cliente_tipo_identificacion, cliente_identificacion = _req$body.cliente_identificacion, cliente_provincia = _req$body.cliente_provincia, cliente_ciudad = _req$body.cliente_ciudad, cliente_domicilio = _req$body.cliente_domicilio, cliente_contacto = _req$body.cliente_contacto, cliente_telefono = _req$body.cliente_telefono, cliente_celular = _req$body.cliente_celular, cliente_email = _req$body.cliente_email, cliente_estado = _req$body.cliente_estado, cliente_fecha_alta = _req$body.cliente_fecha_alta, cliente_usuario = _req$body.cliente_usuario, cliente_edad = _req$body.cliente_edad;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("cliente_razon_social", _connection.sql.VarChar, cliente_razon_social).input("cliente_situacion_iva", _connection.sql.Numeric, cliente_situacion_iva).input("cliente_tipo_identificacion", _connection.sql.Numeric, cliente_tipo_identificacion).input("cliente_identificacion", _connection.sql.VarChar, cliente_identificacion).input("cliente_provincia", _connection.sql.Numeric, cliente_provincia).input("cliente_ciudad", _connection.sql.Numeric, cliente_ciudad).input("cliente_domicilio", _connection.sql.VarChar, cliente_domicilio).input("cliente_contacto", _connection.sql.VarChar, cliente_contacto).input("cliente_telefono", _connection.sql.VarChar, cliente_telefono).input("cliente_celular", _connection.sql.VarChar, cliente_celular).input("cliente_email", _connection.sql.VarChar, cliente_email).input("cliente_estado", _connection.sql.Numeric, cliente_estado).input("cliente_fecha_alta", _connection.sql.VarChar, cliente_fecha_alta).input("cliente_usuario", _connection.sql.Numeric, cliente_usuario).input("cliente_edad", _connection.sql.Numeric, cliente_edad).query(_querys.queries.newCliente);
        case 7:
          _context.next = 9;
          return pool.request().query("SELECT (COALESCE(MAX(CLIENTE_ID), 0) + 1) AS UltimoClienteId from CLIENTE");
        case 9:
          ultimoClienteIdResult = _context.sent;
          ultimoClienteId = ultimoClienteIdResult.recordset[0].UltimoClienteId;
          res.json({
            message: "OK",
            CLIENTE_ID: ultimoClienteId
          });
          _context.next = 18;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send(_context.t0.message);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 14]]);
  }));
  return function newCliente(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateCliente = exports.updateCliente = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, cliente_razon_social, cliente_situacion_iva, cliente_tipo_identificacion, cliente_identificacion, cliente_provincia, cliente_ciudad, cliente_domicilio, cliente_contacto, cliente_telefono, cliente_celular, cliente_email, cliente_estado, cliente_fecha_alta, cliente_edad, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, cliente_razon_social = _req$body2.cliente_razon_social, cliente_situacion_iva = _req$body2.cliente_situacion_iva, cliente_tipo_identificacion = _req$body2.cliente_tipo_identificacion, cliente_identificacion = _req$body2.cliente_identificacion, cliente_provincia = _req$body2.cliente_provincia, cliente_ciudad = _req$body2.cliente_ciudad, cliente_domicilio = _req$body2.cliente_domicilio, cliente_contacto = _req$body2.cliente_contacto, cliente_telefono = _req$body2.cliente_telefono, cliente_celular = _req$body2.cliente_celular, cliente_email = _req$body2.cliente_email, cliente_estado = _req$body2.cliente_estado, cliente_fecha_alta = _req$body2.cliente_fecha_alta, cliente_edad = _req$body2.cliente_edad;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("cliente_razon_social", _connection.sql.VarChar, cliente_razon_social).input("cliente_situacion_iva", _connection.sql.Numeric, cliente_situacion_iva).input("cliente_tipo_identificacion", _connection.sql.Numeric, cliente_tipo_identificacion).input("cliente_identificacion", _connection.sql.VarChar, cliente_identificacion).input("cliente_provincia", _connection.sql.Numeric, cliente_provincia).input("cliente_ciudad", _connection.sql.Numeric, cliente_ciudad).input("cliente_domicilio", _connection.sql.VarChar, cliente_domicilio).input("cliente_contacto", _connection.sql.VarChar, cliente_contacto).input("cliente_telefono", _connection.sql.VarChar, cliente_telefono).input("cliente_celular", _connection.sql.VarChar, cliente_celular).input("cliente_email", _connection.sql.VarChar, cliente_email).input("cliente_estado", _connection.sql.Numeric, cliente_estado).input("cliente_fecha_alta", _connection.sql.VarChar, cliente_fecha_alta).input("cliente_edad", _connection.sql.Numeric, cliente_edad).query(_querys.queries.updateCliente);
        case 8:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          res.json({
            message: _context2.t0.message
          });
          console.log('INCORRECTO');
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return function updateCliente(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateAvatarCliente = exports.updateAvatarCliente = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, cliente_avatar, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          cliente_avatar = req.body.cliente_avatar;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("cliente_avatar", _connection.sql.VarBinary, cliente_avatar).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateAvatarCliente);
        case 8:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);
          res.json({
            message: _context3.t0.message
          });
          console.log('INCORRECTO');
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return function updateAvatarCliente(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteCliente = exports.deleteCliente = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteCliente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getClientes = exports.getClientes = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getClientes);
        case 6:
          result = _context5.sent;
          res.json(result.recordset);
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
  return function getClientes(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getClienteId = exports.getClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getClienteId);
        case 7:
          result = _context6.sent;
          res.json(result.recordset[0]);
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
  return function getClienteId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getClienteEstados = exports.getClienteEstados = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getClienteEstados);
        case 6:
          result = _context7.sent;
          res.json(result.recordset);
          _context7.next = 15;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context7.t0.message);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getClienteEstados(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getClienteTipos = exports.getClienteTipos = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context8.sent;
          _context8.next = 6;
          return pool.request().query(_querys.queries.getClienteTipos);
        case 6:
          result = _context8.sent;
          res.json(result.recordset);
          _context8.next = 15;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context8.t0.message);
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function getClienteTipos(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getClientesEmpleado = exports.getClientesEmpleado = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context9.sent;
          _context9.next = 6;
          return pool.request().query(_querys.queries.getClientesEmpleado);
        case 6:
          result = _context9.sent;
          res.json(result.recordset);
          _context9.next = 15;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context9.t0.message);
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getClientesEmpleado(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();