"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProveedor = exports.newProveedor = exports.getProveedores = exports.getProveedorId = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newProveedor = exports.newProveedor = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, proveedor_razon_social, proveedor_situacion_iva_id, proveedor_tipo_identificacion_id, proveedor_identificacion, proveedor_domicilio, proveedor_provincia_id, proveedor_ciudad_id, proveedor_contacto, proveedor_telefono, proveedor_celular, proveedor_email, proveedor_fecha_alta, pool, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, proveedor_razon_social = _req$body.proveedor_razon_social, proveedor_situacion_iva_id = _req$body.proveedor_situacion_iva_id, proveedor_tipo_identificacion_id = _req$body.proveedor_tipo_identificacion_id, proveedor_identificacion = _req$body.proveedor_identificacion, proveedor_domicilio = _req$body.proveedor_domicilio, proveedor_provincia_id = _req$body.proveedor_provincia_id, proveedor_ciudad_id = _req$body.proveedor_ciudad_id, proveedor_contacto = _req$body.proveedor_contacto, proveedor_telefono = _req$body.proveedor_telefono, proveedor_celular = _req$body.proveedor_celular, proveedor_email = _req$body.proveedor_email, proveedor_fecha_alta = _req$body.proveedor_fecha_alta;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("proveedor_razon_social", _connection.sql.VarChar, proveedor_razon_social).input("proveedor_situacion_iva_id", _connection.sql.Numeric, proveedor_situacion_iva_id).input("proveedor_tipo_identificacion_id", _connection.sql.Numeric, proveedor_tipo_identificacion_id).input("proveedor_identificacion", _connection.sql.VarChar, proveedor_identificacion).input("proveedor_domicilio", _connection.sql.VarChar, proveedor_domicilio).input("proveedor_provincia_id", _connection.sql.Numeric, proveedor_provincia_id).input("proveedor_ciudad_id", _connection.sql.Numeric, proveedor_ciudad_id).input("proveedor_contacto", _connection.sql.VarChar, proveedor_contacto).input("proveedor_telefono", _connection.sql.VarChar, proveedor_telefono).input("proveedor_celular", _connection.sql.VarChar, proveedor_celular).input("proveedor_email", _connection.sql.VarChar, proveedor_email).input("proveedor_fecha_alta", _connection.sql.VarChar, proveedor_fecha_alta).query(_querys.queries.newProveedor);
        case 7:
          _context.next = 9;
          return pool.request().query(_querys.queries.getUltimoProveedorId);
        case 9:
          id = _context.sent;
          res.json({
            message: "OK",
            PROVEEDOR_ID: id.recordset[0].PROVEEDOR_ID
          });
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          res.status(500);
          res.send(_context.t0.message);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
  }));
  return function newProveedor(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateProveedor = exports.updateProveedor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, proveedor_razon_social, proveedor_situacion_iva_id, proveedor_tipo_identificacion_id, proveedor_identificacion, proveedor_domicilio, proveedor_provincia_id, proveedor_ciudad_id, proveedor_contacto, proveedor_telefono, proveedor_celular, proveedor_email, proveedor_fecha_alta, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, proveedor_razon_social = _req$body2.proveedor_razon_social, proveedor_situacion_iva_id = _req$body2.proveedor_situacion_iva_id, proveedor_tipo_identificacion_id = _req$body2.proveedor_tipo_identificacion_id, proveedor_identificacion = _req$body2.proveedor_identificacion, proveedor_domicilio = _req$body2.proveedor_domicilio, proveedor_provincia_id = _req$body2.proveedor_provincia_id, proveedor_ciudad_id = _req$body2.proveedor_ciudad_id, proveedor_contacto = _req$body2.proveedor_contacto, proveedor_telefono = _req$body2.proveedor_telefono, proveedor_celular = _req$body2.proveedor_celular, proveedor_email = _req$body2.proveedor_email, proveedor_fecha_alta = _req$body2.proveedor_fecha_alta;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("proveedor_razon_social", _connection.sql.VarChar, proveedor_razon_social).input("proveedor_situacion_iva_id", _connection.sql.Numeric, proveedor_situacion_iva_id).input("proveedor_tipo_identificacion_id", _connection.sql.Numeric, proveedor_tipo_identificacion_id).input("proveedor_identificacion", _connection.sql.VarChar, proveedor_identificacion).input("proveedor_domicilio", _connection.sql.VarChar, proveedor_domicilio).input("proveedor_provincia_id", _connection.sql.Numeric, proveedor_provincia_id).input("proveedor_ciudad_id", _connection.sql.Numeric, proveedor_ciudad_id).input("proveedor_contacto", _connection.sql.VarChar, proveedor_contacto).input("proveedor_telefono", _connection.sql.VarChar, proveedor_telefono).input("proveedor_celular", _connection.sql.VarChar, proveedor_celular).input("proveedor_email", _connection.sql.VarChar, proveedor_email).input("proveedor_fecha_alta", _connection.sql.VarChar, proveedor_fecha_alta).query(_querys.queries.updateProveedor);
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
  return function updateProveedor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getProveedores = exports.getProveedores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().query(_querys.queries.getProveedores);
        case 6:
          result = _context3.sent;
          //res.json(result.recordset);

          res.status(200).json(result.recordset);
          _context3.next = 15;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getProveedores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getProveedorId = exports.getProveedorId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProveedorId);
        case 7:
          result = _context4.sent;
          res.json(result.recordset[0]);
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
  return function getProveedorId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();