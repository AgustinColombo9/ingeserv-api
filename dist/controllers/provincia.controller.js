"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProvincia = exports.newProvincia = exports.getProvincias = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newProvincia = exports.newProvincia = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var provincia_descripcion, pool, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          provincia_descripcion = req.body.provincia_descripcion;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("provincia_descripcion", _connection.sql.VarChar, provincia_descripcion).query(_querys.queries.newProvincia);
        case 7:
          _context.next = 9;
          return pool.request().query(_querys.queries.getUltimaProvinciaId);
        case 9:
          id = _context.sent;
          res.json({
            message: "OK",
            PROVINCIA_ID: id.recordset[0].PROVINCIA_ID
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
  return function newProvincia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateProvincia = exports.updateProvincia = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, provincia_descripcion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          provincia_descripcion = req.body.provincia_descripcion;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("provincia_descripcion", _connection.sql.VarChar, provincia_descripcion).query(_querys.queries.updateProvincia);
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
  return function updateProvincia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getProvincias = exports.getProvincias = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getProvincias);
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
  return function getProvincias(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();