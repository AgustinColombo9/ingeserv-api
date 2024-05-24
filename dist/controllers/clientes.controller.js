"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientes = exports.getClienteId = exports.editCliente = exports.deleteCliente = exports.addCliente = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getClienteId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getClienteId);
        case 7:
          result = _context.sent;
          res.json(result.recordset[0]);
          _context.next = 16;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 11]]);
  }));
  return function getClienteId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getClienteId = getClienteId;
var getClientes = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getClientes);
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
  return function getClientes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getClientes = getClientes;
var addCliente = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, cliente_codigo, cliente_nombre, cliente_apellido, cliente_razon_social, cliente_tipo_identificacion, cliente_identificacion, cliente_situacion_iva, cliente_provincia, cliente_ciudad, cliente_codigo_postal, cliente_domicilio, cliente_celular, cliente_email, cliente_fecha_alta, cliente_rubro, cliente_cuenta, cliente_valoracion, cliente_observacion, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //const { id } = req.params;
          _req$body = req.body, cliente_codigo = _req$body.cliente_codigo, cliente_nombre = _req$body.cliente_nombre, cliente_apellido = _req$body.cliente_apellido, cliente_razon_social = _req$body.cliente_razon_social, cliente_tipo_identificacion = _req$body.cliente_tipo_identificacion, cliente_identificacion = _req$body.cliente_identificacion, cliente_situacion_iva = _req$body.cliente_situacion_iva, cliente_provincia = _req$body.cliente_provincia, cliente_ciudad = _req$body.cliente_ciudad, cliente_codigo_postal = _req$body.cliente_codigo_postal, cliente_domicilio = _req$body.cliente_domicilio, cliente_celular = _req$body.cliente_celular, cliente_email = _req$body.cliente_email, cliente_fecha_alta = _req$body.cliente_fecha_alta, cliente_rubro = _req$body.cliente_rubro, cliente_cuenta = _req$body.cliente_cuenta, cliente_valoracion = _req$body.cliente_valoracion, cliente_observacion = _req$body.cliente_observacion;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request()
          //.input('id', sql.BigInt, id)
          .input("cliente_codigo", _connection.sql.VarChar, cliente_codigo).input("cliente_nombre", _connection.sql.VarChar, cliente_nombre).input("cliente_apellido", _connection.sql.VarChar, cliente_apellido).input("cliente_razon_social", _connection.sql.VarChar, cliente_razon_social).input("cliente_tipo_identificacion", _connection.sql.Numeric, cliente_tipo_identificacion).input("cliente_identificacion", _connection.sql.VarChar, cliente_identificacion).input("cliente_situacion_iva", _connection.sql.Numeric, cliente_situacion_iva).input("cliente_provincia", _connection.sql.Numeric, cliente_provincia).input("cliente_ciudad", _connection.sql.Numeric, cliente_ciudad).input("cliente_celular", _connection.sql.VarChar, cliente_celular).input("cliente_email", _connection.sql.VarChar, cliente_email).input("cliente_codigo_postal", _connection.sql.VarChar, cliente_codigo_postal).input("cliente_domicilio", _connection.sql.VarChar, cliente_domicilio).input("cliente_fecha_alta", _connection.sql.Date, cliente_fecha_alta).input("cliente_valoracion", _connection.sql.Numeric, cliente_valoracion).input("cliente_rubro", _connection.sql.Numeric, cliente_rubro).input("cliente_cuenta", _connection.sql.VarChar, cliente_cuenta).input("cliente_observacion", _connection.sql.VarChar, cliente_observacion).query(_querys.queries.addCliente);
        case 7:
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send(_context3.t0.message);
        case 13:
          res.status(200);
          //res.json({ usuario_nombre, usuario_password }); 
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return function addCliente(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.addCliente = addCliente;
var editCliente = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, cliente_codigo, cliente_nombre, cliente_apellido, cliente_razon_social, cliente_tipo_identificacion, cliente_identificacion, cliente_situacion_iva, cliente_provincia, cliente_ciudad, cliente_codigo_postal, cliente_domicilio, cliente_celular, cliente_email, cliente_fecha_alta, cliente_rubro, cliente_cuenta, cliente_valoracion, cliente_observacion, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, cliente_codigo = _req$body2.cliente_codigo, cliente_nombre = _req$body2.cliente_nombre, cliente_apellido = _req$body2.cliente_apellido, cliente_razon_social = _req$body2.cliente_razon_social, cliente_tipo_identificacion = _req$body2.cliente_tipo_identificacion, cliente_identificacion = _req$body2.cliente_identificacion, cliente_situacion_iva = _req$body2.cliente_situacion_iva, cliente_provincia = _req$body2.cliente_provincia, cliente_ciudad = _req$body2.cliente_ciudad, cliente_codigo_postal = _req$body2.cliente_codigo_postal, cliente_domicilio = _req$body2.cliente_domicilio, cliente_celular = _req$body2.cliente_celular, cliente_email = _req$body2.cliente_email, cliente_fecha_alta = _req$body2.cliente_fecha_alta, cliente_rubro = _req$body2.cliente_rubro, cliente_cuenta = _req$body2.cliente_cuenta, cliente_valoracion = _req$body2.cliente_valoracion, cliente_observacion = _req$body2.cliente_observacion;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context4.sent;
          _context4.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("cliente_codigo", _connection.sql.VarChar, cliente_codigo).input("cliente_nombre", _connection.sql.VarChar, cliente_nombre).input("cliente_apellido", _connection.sql.VarChar, cliente_apellido).input("cliente_razon_social", _connection.sql.VarChar, cliente_razon_social).input("cliente_tipo_identificacion", _connection.sql.Numeric, cliente_tipo_identificacion).input("cliente_identificacion", _connection.sql.VarChar, cliente_identificacion).input("cliente_situacion_iva", _connection.sql.Numeric, cliente_situacion_iva).input("cliente_provincia", _connection.sql.Numeric, cliente_provincia).input("cliente_ciudad", _connection.sql.Numeric, cliente_ciudad).input("cliente_celular", _connection.sql.VarChar, cliente_celular).input("cliente_email", _connection.sql.VarChar, cliente_email).input("cliente_codigo_postal", _connection.sql.VarChar, cliente_codigo_postal).input("cliente_domicilio", _connection.sql.VarChar, cliente_domicilio).input("cliente_fecha_alta", _connection.sql.Date, cliente_fecha_alta).input("cliente_valoracion", _connection.sql.Numeric, cliente_valoracion).input("cliente_rubro", _connection.sql.Numeric, cliente_rubro).input("cliente_cuenta", _connection.sql.VarChar, cliente_cuenta).input("cliente_observacion", _connection.sql.VarChar, cliente_observacion).query(_querys.queries.editCliente);
        case 8:
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](2);
          res.status(500);
          res.send(_context4.t0.message);
        case 14:
          res.status(200);
          //res.json({ usuario_nombre, usuario_password }); 
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 10]]);
  }));
  return function editCliente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.editCliente = editCliente;
var deleteCliente = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteCliente);
        case 7:
          res.status(200);
          _context5.next = 14;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          res.status(500);
          res.send(_context5.t0.message);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 10]]);
  }));
  return function deleteCliente(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteCliente = deleteCliente;