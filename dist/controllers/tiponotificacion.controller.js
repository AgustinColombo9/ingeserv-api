"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTipoNotificacion = exports.newTipoNotificacion = exports.getTiposNotificacion = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getTiposNotificacion = exports.getTiposNotificacion = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getTiposNotificacion);
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
  return function getTiposNotificacion(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var newTipoNotificacion = exports.newTipoNotificacion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, tipo_descripcion, tipo_borde_color, tipo_fondo_color, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, tipo_descripcion = _req$body.tipo_descripcion, tipo_borde_color = _req$body.tipo_borde_color, tipo_fondo_color = _req$body.tipo_fondo_color;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("tipo_descripcion", _connection.sql.VarChar, tipo_descripcion).input("tipo_borde_color", _connection.sql.VarChar, tipo_borde_color).input("tipo_fondo_color", _connection.sql.VarChar, tipo_fondo_color).query(_querys.queries.newTipoNotificacion);
        case 7:
          result = _context2.sent;
          res.json({
            message: "OK"
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function newTipoNotificacion(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateTipoNotificacion = exports.updateTipoNotificacion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body2, tipo_descripcion, tipo_borde_color, tipo_fondo_color, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, tipo_descripcion = _req$body2.tipo_descripcion, tipo_borde_color = _req$body2.tipo_borde_color, tipo_fondo_color = _req$body2.tipo_fondo_color;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("tipo_descripcion", _connection.sql.VarChar, tipo_descripcion).input("tipo_borde_color", _connection.sql.VarChar, tipo_borde_color).input("tipo_fondo_color", _connection.sql.VarChar, tipo_fondo_color).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateTipoNotificacion);
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
          console.log('INCORRECTO: ' + _context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return function updateTipoNotificacion(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();