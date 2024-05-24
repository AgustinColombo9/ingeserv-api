"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCiudad = exports.newCiudad = exports.getCiudadesProvinciaId = exports.getCiudades = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newCiudad = exports.newCiudad = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, ciudad_descripcion, ciudad_provincia_id, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, ciudad_descripcion = _req$body.ciudad_descripcion, ciudad_provincia_id = _req$body.ciudad_provincia_id;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("ciudad_descripcion", _connection.sql.VarChar, ciudad_descripcion).input("ciudad_provincia_id", _connection.sql.Numeric, ciudad_provincia_id).query(_querys.queries.newCiudad);
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
  return function newCiudad(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateCiudad = exports.updateCiudad = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, ciudad_descripcion, ciudad_provincia_id, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, ciudad_descripcion = _req$body2.ciudad_descripcion, ciudad_provincia_id = _req$body2.ciudad_provincia_id;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("ciudad_descripcion", _connection.sql.VarChar, ciudad_descripcion).input("ciudad_provincia_id", _connection.sql.Numeric, ciudad_provincia_id).query(_querys.queries.updateCiudad);
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
  return function updateCiudad(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getCiudades = exports.getCiudades = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getCiudades);
        case 6:
          result = _context3.sent;
          res.json(result.recordset);
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
  return function getCiudades(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getCiudadesProvinciaId = exports.getCiudadesProvinciaId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getCiudadesProvinciaId);
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
  return function getCiudadesProvinciaId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();