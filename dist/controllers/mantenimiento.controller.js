"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vencimientoOrdenMantenimiento = exports.updatePlanVigencia = exports.updatePlanMantenimientoProducto = exports.updatePlanMantenimientoHistorial = exports.updatePlanMantenimiento = exports.updateOrdenMantenimientoEstado = exports.saveTrabajosPlan = exports.savePlanMantenimiento = exports.newPlanVigencia = exports.newPlanMantenimientoTrabajo = exports.newPlanMantenimientoProducto = exports.newPlanMantenimientoHistorial = exports.newPlanMantenimiento = exports.newOrdenMantenimientoEstado = exports.newOrdenMantenimiento = exports.getTrabajosPlanMantenimiento = exports.getPlanesVigencia = exports.getPlanesMantenimientoVigenciaId = exports.getPlanesMantenimientoProductoId = exports.getPlanesMantenimiento = exports.getPlanMantenimientoHistorialClienteProducto = exports.getOrdenesMantenimientoProductoId = exports.getOrdenMantenimientoEstado = exports.deletePlanMantenimientoTrabajo = exports.deletePlanMantenimientoProducto = exports.deletePlanMantenimientoHistorial = exports.completarOrdenMantenimiento = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var getPlanesVigencia = exports.getPlanesVigencia = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getPlanesVigencia);
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
  return function getPlanesVigencia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var newPlanVigencia = exports.newPlanVigencia = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, plan_descripcion, plan_dias, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, plan_descripcion = _req$body.plan_descripcion, plan_dias = _req$body.plan_dias;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("plan_vigencia_descripcion", _connection.sql.VarChar, plan_descripcion).input("plan_vigencia_dias", _connection.sql.Numeric, plan_dias).query(_querys.queries.newPlanVigencia);
        case 7:
          res.json({
            message: "OK"
          });
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function newPlanVigencia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updatePlanVigencia = exports.updatePlanVigencia = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body2, plan_descripcion, plan_dias, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, plan_descripcion = _req$body2.plan_descripcion, plan_dias = _req$body2.plan_dias;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("plan_descripcion", _connection.sql.VarChar, plan_descripcion).input("plan_dias", _connection.sql.Numeric, plan_dias).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePlanVigencia);
        case 8:
          res.json({
            message: "OK"
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.json({
            message: _context3.t0.message
          });
          console.log('INCORRECTO: ' + _context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function updatePlanVigencia(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////////////////

var getPlanesMantenimiento = exports.getPlanesMantenimiento = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context4.sent;
          _context4.next = 6;
          return pool.request().query(_querys.queries.getPlanesMantenimiento);
        case 6:
          result = _context4.sent;
          res.json(result.recordset);
          _context4.next = 15;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context4.t0.message);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getPlanesMantenimiento(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var newPlanMantenimiento = exports.newPlanMantenimiento = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, plan_fecha, plan_descripcion, plan_vigencia_id, plan_observacion, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, plan_fecha = _req$body3.plan_fecha, plan_descripcion = _req$body3.plan_descripcion, plan_vigencia_id = _req$body3.plan_vigencia_id, plan_observacion = _req$body3.plan_observacion;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("plan_fecha", _connection.sql.VarChar, plan_fecha).input("plan_descripcion", _connection.sql.VarChar, plan_descripcion).input("plan_vigencia_id", _connection.sql.Numeric, plan_vigencia_id).input("plan_observacion", _connection.sql.VarChar, plan_observacion).query(_querys.queries.newPlanMantenimiento);
        case 7:
          res.json({
            message: "OK"
          });
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
  return function newPlanMantenimiento(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updatePlanMantenimiento = exports.updatePlanMantenimiento = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, _req$body4, plan_fecha, plan_descripcion, plan_vigencia_id, plan_observacion, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _req$body4 = req.body, plan_fecha = _req$body4.plan_fecha, plan_descripcion = _req$body4.plan_descripcion, plan_vigencia_id = _req$body4.plan_vigencia_id, plan_observacion = _req$body4.plan_observacion;
          _context6.prev = 2;
          _context6.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context6.sent;
          _context6.next = 8;
          return pool.request().input("plan_fecha", _connection.sql.VarChar, plan_fecha).input("plan_descripcion", _connection.sql.VarChar, plan_descripcion).input("plan_vigencia_id", _connection.sql.Numeric, plan_vigencia_id).input("plan_observacion", _connection.sql.VarChar, plan_observacion).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePlanMantenimiento);
        case 8:
          res.json({
            message: "OK"
          });
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](2);
          res.json({
            message: _context6.t0.message
          });
          console.log('INCORRECTO: ' + _context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 11]]);
  }));
  return function updatePlanMantenimiento(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

///////////////////////////////////////////////////////////////////////

var newPlanMantenimientoProducto = exports.newPlanMantenimientoProducto = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body5, plan_mantenimiento_id, plan_producto_id, plan_fecha, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body5 = req.body, plan_mantenimiento_id = _req$body5.plan_mantenimiento_id, plan_producto_id = _req$body5.plan_producto_id, plan_fecha = _req$body5.plan_fecha;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input("plan_mantenimiento_id", _connection.sql.Numeric, plan_mantenimiento_id).input("plan_producto_id", _connection.sql.Numeric, plan_producto_id).input("plan_fecha", _connection.sql.VarChar, plan_fecha).query(_querys.queries.newPlanMantenimientoProducto);
        case 7:
          res.json({
            message: "OK"
          });
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          res.status(500);
          res.send(_context7.t0.message);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function newPlanMantenimientoProducto(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var updatePlanMantenimientoProducto = exports.updatePlanMantenimientoProducto = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, _req$body6, plan_mantenimiento_id, plan_producto_id, pool;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _req$body6 = req.body, plan_mantenimiento_id = _req$body6.plan_mantenimiento_id, plan_producto_id = _req$body6.plan_producto_id;
          _context8.prev = 2;
          _context8.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context8.sent;
          _context8.next = 8;
          return pool.request().input("plan_mantenimiento_id", _connection.sql.Numeric, plan_mantenimiento_id).input("plan_producto_id", _connection.sql.Numeric, plan_producto_id).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePlanMantenimientoProducto);
        case 8:
          res.json({
            message: "OK"
          });
          _context8.next = 15;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](2);
          res.json({
            message: _context8.t0.message
          });
          console.log('INCORRECTO: ' + _context8.t0.message);
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 11]]);
  }));
  return function updatePlanMantenimientoProducto(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deletePlanMantenimientoProducto = exports.deletePlanMantenimientoProducto = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.prev = 1;
          _context9.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context9.sent;
          _context9.next = 7;
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deletePlanMantenimientoProducto);
        case 7:
          res.status(200).json({
            message: "OK"
          });
          _context9.next = 15;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context9.t0.message);
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 10]]);
  }));
  return function deletePlanMantenimientoProducto(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

////////////////////////////////////////////////////////////////////////

var getOrdenMantenimientoEstado = exports.getOrdenMantenimientoEstado = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context10.sent;
          _context10.next = 6;
          return pool.request().query(_querys.queries.getOrdenMantenimientoEstado);
        case 6:
          result = _context10.sent;
          res.json(result.recordset);
          _context10.next = 15;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context10.t0.message);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getOrdenMantenimientoEstado(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var newOrdenMantenimientoEstado = exports.newOrdenMantenimientoEstado = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var _req$body7, orden_estado_descripcion, orden_estado_color, pool;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$body7 = req.body, orden_estado_descripcion = _req$body7.orden_estado_descripcion, orden_estado_color = _req$body7.orden_estado_color;
          _context11.prev = 1;
          _context11.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context11.sent;
          _context11.next = 7;
          return pool.request().input("orden_estado_descripcion", _connection.sql.VarChar, orden_estado_descripcion).input("orden_estado_color", _connection.sql.VarChar, orden_estado_color).query(_querys.queries.newOrdenMantenimientoEstado);
        case 7:
          res.json({
            message: "OK"
          });
          _context11.next = 14;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](1);
          res.status(500);
          res.send(_context11.t0.message);
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 10]]);
  }));
  return function newOrdenMantenimientoEstado(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var getPlanesMantenimientoProductoId = exports.getPlanesMantenimientoProductoId = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          id = req.params.id;
          _context12.prev = 1;
          _context12.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context12.sent;
          _context12.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getPlanesMantenimientoProductoId);
        case 7:
          result = _context12.sent;
          res.json(result.recordset);
          _context12.next = 15;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](1);
          res.json({
            message: _context12.t0.message
          });
          console.log('INCORRECTO: ' + _context12.t0.message);
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 11]]);
  }));
  return function getPlanesMantenimientoProductoId(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var getPlanesMantenimientoVigenciaId = exports.getPlanesMantenimientoVigenciaId = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          _context13.prev = 1;
          _context13.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context13.sent;
          _context13.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getPlanesMantenimientoVigenciaId);
        case 7:
          result = _context13.sent;
          res.json(result.recordset);
          _context13.next = 15;
          break;
        case 11:
          _context13.prev = 11;
          _context13.t0 = _context13["catch"](1);
          res.json({
            message: _context13.t0.message
          });
          console.log('INCORRECTO: ' + _context13.t0.message);
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 11]]);
  }));
  return function getPlanesMantenimientoVigenciaId(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var updateOrdenMantenimientoEstado = exports.updateOrdenMantenimientoEstado = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var id, _req$body8, orden_estado_descripcion, orden_estado_color, pool;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _req$body8 = req.body, orden_estado_descripcion = _req$body8.orden_estado_descripcion, orden_estado_color = _req$body8.orden_estado_color;
          _context14.prev = 2;
          _context14.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context14.sent;
          _context14.next = 8;
          return pool.request().input("orden_estado_descripcion", _connection.sql.VarChar, orden_estado_descripcion).input("orden_estado_color", _connection.sql.VarChar, orden_estado_color).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePlanVigencia);
        case 8:
          res.json({
            message: "OK"
          });
          _context14.next = 15;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](2);
          res.json({
            message: _context14.t0.message
          });
          console.log('INCORRECTO: ' + _context14.t0.message);
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 11]]);
  }));
  return function updateOrdenMantenimientoEstado(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var getOrdenesMantenimientoProductoId = exports.getOrdenesMantenimientoProductoId = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          _context15.prev = 1;
          _context15.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context15.sent;
          _context15.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getOrdenesMantenimientoProductoId);
        case 7:
          result = _context15.sent;
          res.json(result.recordset);
          _context15.next = 16;
          break;
        case 11:
          _context15.prev = 11;
          _context15.t0 = _context15["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context15.t0.message);
        case 16:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 11]]);
  }));
  return function getOrdenesMantenimientoProductoId(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var newOrdenMantenimiento = exports.newOrdenMantenimiento = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var _req$body9, orden_producto_id, orden_plan_producto_id, orden_fecha, orden_estado_id, orden_fecha_update, pool;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _req$body9 = req.body, orden_producto_id = _req$body9.orden_producto_id, orden_plan_producto_id = _req$body9.orden_plan_producto_id, orden_fecha = _req$body9.orden_fecha, orden_estado_id = _req$body9.orden_estado_id, orden_fecha_update = _req$body9.orden_fecha_update;
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context16.sent;
          _context16.next = 7;
          return pool.request().input("orden_producto_id", _connection.sql.Numeric, orden_producto_id).input("orden_plan_producto_id", _connection.sql.Numeric, orden_plan_producto_id).input("orden_fecha", _connection.sql.VarChar, orden_fecha).input("orden_estado_id", _connection.sql.Numeric, orden_estado_id).input("orden_fecha_update", _connection.sql.VarChar, orden_fecha_update).query(_querys.queries.newOrdenMantenimiento);
        case 7:
          res.json({
            message: "OK"
          });
          _context16.next = 14;
          break;
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](1);
          res.status(500);
          res.send(_context16.t0.message);
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 10]]);
  }));
  return function newOrdenMantenimiento(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var vencimientoOrdenMantenimiento = exports.vencimientoOrdenMantenimiento = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          _context17.prev = 1;
          _context17.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context17.sent;
          _context17.next = 7;
          return pool.request().input("orden_estado_id", _connection.sql.Numeric, 2).input('id', _connection.sql.BigInt, id).query(_querys.queries.vencimientoOrdenMantenimiento);
        case 7:
          res.json({
            message: "OK"
          });
          _context17.next = 14;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](1);
          res.json({
            message: _context17.t0.message
          });
          console.log('INCORRECTO: ' + _context17.t0.message);
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 10]]);
  }));
  return function vencimientoOrdenMantenimiento(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var completarOrdenMantenimiento = exports.completarOrdenMantenimiento = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var id, _req$body10, orden_producto_id, orden_plan_producto_id, plan_vigencia_dias, fechaSistema, fechaFormateada, vigencia, pool;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          id = req.params.id;
          _req$body10 = req.body, orden_producto_id = _req$body10.orden_producto_id, orden_plan_producto_id = _req$body10.orden_plan_producto_id, plan_vigencia_dias = _req$body10.plan_vigencia_dias;
          fechaSistema = new Date();
          fechaFormateada = fechaSistema.toISOString().slice(0, 10);
          fechaSistema.setDate(fechaSistema.getDate() + plan_vigencia_dias);
          vigencia = fechaSistema.toISOString().slice(0, 10); // Formatear fecha como YYYY-MM-DD
          _context18.prev = 6;
          _context18.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context18.sent;
          _context18.next = 12;
          return pool.request().input("orden_estado_id", _connection.sql.Numeric, 3).input("orden_fecha_update", _connection.sql.VarChar, fechaFormateada).input('id', _connection.sql.BigInt, id).query(_querys.queries.completarOrdenMantenimiento);
        case 12:
          _context18.next = 14;
          return pool.request().input("orden_producto_id", _connection.sql.Numeric, orden_producto_id).input("orden_plan_producto_id", _connection.sql.Numeric, orden_plan_producto_id).input("orden_fecha", _connection.sql.VarChar, vigencia).input("orden_estado_id", _connection.sql.Numeric, 1).input("orden_fecha_update", _connection.sql.VarChar, orden_fecha_update).query(_querys.queries.newOrdenMantenimiento);
        case 14:
          res.json({
            message: "OK"
          });
          _context18.next = 21;
          break;
        case 17:
          _context18.prev = 17;
          _context18.t0 = _context18["catch"](6);
          res.json({
            message: _context18.t0.message
          });
          console.log('INCORRECTO: ' + _context18.t0.message);
        case 21:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[6, 17]]);
  }));
  return function completarOrdenMantenimiento(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

///////////////////////////////////////////////////////////////////////

var getTrabajosPlanMantenimiento = exports.getTrabajosPlanMantenimiento = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          id = req.params.id;
          _context19.prev = 1;
          _context19.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context19.sent;
          _context19.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getTrabajosPlanMantenimiento);
        case 7:
          result = _context19.sent;
          res.json(result.recordset);
          _context19.next = 16;
          break;
        case 11:
          _context19.prev = 11;
          _context19.t0 = _context19["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context19.t0.message);
        case 16:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 11]]);
  }));
  return function getTrabajosPlanMantenimiento(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var savePlanMantenimiento = exports.savePlanMantenimiento = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var _req$body11, datos, arrayDatos, planId, plan_producto, plan_id, plan_fecha, plan_descripcion, plan_observacion, plan_vigencia_id, _iterator, _step, detalle, PLAN_MANTENIMIENTO_TRABAJO_ID, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, PLAN_MANTENIMIENTO_DESCRIPCION, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, TRABAJOS_DESCRIPCION, TRABAJOS_OBSERVACION, pool, result, _iterator2, _step2, _detalle, _PLAN_MANTENIMIENTO_TRABAJO_ID, _PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, _PLAN_MANTENIMIENTO_DESCRIPCION, _PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, _TRABAJOS_DESCRIPCION, _TRABAJOS_OBSERVACION, ultimoTrabajodResult, ultimaTrabajoId;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _req$body11 = req.body, datos = _req$body11.datos, arrayDatos = _req$body11.arrayDatos;
          console.log('PLAN ID: ' + datos.plan_id);
          planId = 0;
          plan_producto = datos.plan_producto, plan_id = datos.plan_id, plan_fecha = datos.plan_fecha, plan_descripcion = datos.plan_descripcion, plan_observacion = datos.plan_observacion, plan_vigencia_id = datos.plan_vigencia_id;
          console.log('PLAN: PLAN-PROD:' + plan_producto + 'plan ID= ' + plan_id + ' - ' + plan_fecha + '  -  ' + plan_descripcion + '  -  ' + plan_observacion + '  -  ' + plan_vigencia_id);
          if (arrayDatos) {
            console.log('DETALLE: ' + arrayDatos.length);
          } else {
            console.log('DETALLE VACIO');
          }
          if (arrayDatos && arrayDatos.length > 0) {
            _iterator = _createForOfIteratorHelper(arrayDatos);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                detalle = _step.value;
                PLAN_MANTENIMIENTO_TRABAJO_ID = detalle.PLAN_MANTENIMIENTO_TRABAJO_ID, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID = detalle.PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, PLAN_MANTENIMIENTO_DESCRIPCION = detalle.PLAN_MANTENIMIENTO_DESCRIPCION, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID = detalle.PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, TRABAJOS_DESCRIPCION = detalle.TRABAJOS_DESCRIPCION, TRABAJOS_OBSERVACION = detalle.TRABAJOS_OBSERVACION;
                console.log('TRABAJO: ' + PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID + '  -  ' + TRABAJOS_DESCRIPCION + ' | ' + PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID + ' | ' + PLAN_MANTENIMIENTO_TRABAJO_ID);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          _context20.prev = 7;
          _context20.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context20.sent;
          if (!(plan_id === 0)) {
            _context20.next = 21;
            break;
          }
          _context20.next = 14;
          return pool.request().input("plan_fecha", _connection.sql.VarChar, plan_fecha).input("plan_descripcion", _connection.sql.VarChar, plan_descripcion).input("plan_vigencia_id", _connection.sql.Numeric, plan_vigencia_id).input("plan_observacion", _connection.sql.VarChar, plan_observacion).query(_querys.queries.newPlanMantenimiento);
        case 14:
          _context20.next = 16;
          return pool.request().query("SELECT MAX(PLAN_MANTENIMIENTO_ID) AS UltimoPlanId from TAREAS");
        case 16:
          result = _context20.sent;
          planId = parseInt(result.recordset[0].UltimoPlanId);
          console.log('PLAN ID nuevo: ' + planId);
          _context20.next = 23;
          break;
        case 21:
          /*
                      await pool.request()  
                          .input("plan_fecha", sql.VarChar, plan_fecha) 
                          .input("plan_descripcion", sql.VarChar, plan_descripcion) 
                          .input("plan_vigencia_id", sql.Numeric, plan_vigencia_id) 
                          .input("plan_observacion", sql.VarChar, plan_observacion) 
                          .input('id', sql.BigInt, plan_id)
                          .query(queries.updatePlanMantenimiento); 
          */
          console.log('POSIBLE UPDATE CORRECTO');
          console.log('OK');
        case 23:
          if (!(planId && planId > 0)) {
            _context20.next = 29;
            break;
          }
          console.log('CREAR NUEVO PLAN EQUIPO');
          _context20.next = 27;
          return pool.request().input("plan_mantenimiento_id", _connection.sql.Numeric, planId).input("plan_producto_id", _connection.sql.Numeric, productoId).query(_querys.queries.newPlanMantenimientoProducto);
        case 27:
          _context20.next = 32;
          break;
        case 29:
          console.log('PLAN_ID: ' + plan_id);
          planId, (0, _readOnlyError2["default"])("plan_id");
          console.log('PLAN ID: ' + plan_id);
        case 32:
          if (!(arrayDatos && arrayDatos.length > 0)) {
            _context20.next = 81;
            break;
          }
          _iterator2 = _createForOfIteratorHelper(arrayDatos);
          _context20.prev = 34;
          _iterator2.s();
        case 36:
          if ((_step2 = _iterator2.n()).done) {
            _context20.next = 73;
            break;
          }
          _detalle = _step2.value;
          _PLAN_MANTENIMIENTO_TRABAJO_ID = _detalle.PLAN_MANTENIMIENTO_TRABAJO_ID, _PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID = _detalle.PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, _PLAN_MANTENIMIENTO_DESCRIPCION = _detalle.PLAN_MANTENIMIENTO_DESCRIPCION, _PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID = _detalle.PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, _TRABAJOS_DESCRIPCION = _detalle.TRABAJOS_DESCRIPCION, _TRABAJOS_OBSERVACION = _detalle.TRABAJOS_OBSERVACION;
          console.log('TRABAJO ID: ' + _PLAN_MANTENIMIENTO_TRABAJO_ID);
          if (!(_PLAN_MANTENIMIENTO_TRABAJO_ID > 0)) {
            _context20.next = 44;
            break;
          }
          /*                    await pool.request()
                                  .input("plan_mantenimiento_plan_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID)
                                  .input("plan_mantenimiento_trabajo_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                                  .query(queries.newPlanMantenimientoTrabajo);
          */
          console.log('OK');
          _context20.next = 71;
          break;
        case 44:
          console.log('TRABAJO TRABAJO ID: ' + _PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID);
          if (!(_PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID > 0)) {
            _context20.next = 59;
            break;
          }
          console.log('crear plan trabajo');
          console.log('plan - trabajo: ' + plan_id + ' - ' + _PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID);
          _context20.prev = 48;
          _context20.next = 51;
          return pool.request().input("plan_mantenimiento_plan_id", _connection.sql.Numeric, plan_id).input("plan_mantenimiento_trabajo_id", _connection.sql.Numeric, _PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID).query(_querys.queries.newPlanMantenimientoTrabajo);
        case 51:
          _context20.next = 56;
          break;
        case 53:
          _context20.prev = 53;
          _context20.t0 = _context20["catch"](48);
          console.log(_context20.t0.message);
          //res.status(500); 
          //res.send(error.message); 
        case 56:
          console.log('creo plan trabajo CORRECTAMENTE');
          _context20.next = 71;
          break;
        case 59:
          console.log('crear trabajo');
          _context20.next = 62;
          return pool.request().input("trabajo_descripcion", _connection.sql.VarChar, _TRABAJOS_DESCRIPCION).input("trabajo_observacion", _connection.sql.VarChar, _TRABAJOS_OBSERVACION).query(_querys.queries.newTrabajo);
        case 62:
          console.log('creo trabajo CORRECTAMENTE');
          _context20.next = 65;
          return pool.request().query("SELECT (COALESCE(MAX(TRABAJOS_ID), 0) + 1) AS UltimoTrabajoId from TRABAJOS");
        case 65:
          ultimoTrabajodResult = _context20.sent;
          ultimaTrabajoId = ultimoTrabajodResult.recordset[0].UltimoTrabajoId;
          console.log('NUEVO TRABAJO: ' + ultimaTrabajoId);
          console.log('NUEVO PLAN TRABAJO: plan = ' + plan_id + '  -  trabajo = ' + ultimaTrabajoId);
          _context20.next = 71;
          return pool.request().input("plan_mantenimiento_plan_id", _connection.sql.Numeric, plan_id).input("plan_mantenimiento_trabajo_id", _connection.sql.Numeric, ultimaTrabajoId).query(_querys.queries.newPlanMantenimientoTrabajo);
        case 71:
          _context20.next = 36;
          break;
        case 73:
          _context20.next = 78;
          break;
        case 75:
          _context20.prev = 75;
          _context20.t1 = _context20["catch"](34);
          _iterator2.e(_context20.t1);
        case 78:
          _context20.prev = 78;
          _iterator2.f();
          return _context20.finish(78);
        case 81:
          res.json({
            message: "OK"
          });
          _context20.next = 88;
          break;
        case 84:
          _context20.prev = 84;
          _context20.t2 = _context20["catch"](7);
          res.status(500);
          res.send(_context20.t2.message);
        case 88:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[7, 84], [34, 75, 78, 81], [48, 53]]);
  }));
  return function savePlanMantenimiento(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var saveTrabajosPlan = exports.saveTrabajosPlan = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var detalles;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          detalles = req.body;
          /*
              try {
                  const pool = await getConnection();
          
                  for (const detalle of detalles) {
                      const {
                          PLAN_MANTENIMIENTO_TRABAJOS_ID, 
                          PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID, 
                          PLAN_MANTENIMIENTO_DESCRIPCION, 
                          PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID, 
                          TRABAJOS_DESCRIPCION, 
                          TRABAJOS_OBSERVACION 
                      } = detalle;
          
                      if (PLAN_MANTENIMIENTO_TRABAJOS_ID > 0) {
                          await pool.request()
                              .input("plan_mantenimiento_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_PLAN_ID)
                              .input("trabajo_id", sql.Numeric, PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID)
                              .query(queries.newPlanMantenimientoTrabajo);
                      }
                      else {
                          // new Tarea 
                          const pool = await getConnection(); 
                          await pool.request()
                              .input("tarea_descripcion", sql.VarChar, TAREAS_DESCRIPCION) 
                              .input("tarea_detalle", sql.VarChar, TAREAS_DETALLE) 
                              .query(queries.newTarea); 
          
                          const ultimaTareaIdResult = await pool.request().query("SELECT MAX(TAREAS_ID) AS UltimoTareaId from TAREAS")
                          const ultimaTareaId = ultimaTareaIdResult.recordset[0].UltimoTareaId;
                          
                          await pool.request()
                              .input("trabajo_tarea_trabajo_id", sql.Numeric, TRABAJOS_TAREAS_TRABAJOS_ID)
                              .input("trabajo_tarea_tarea_id", sql.Numeric, ultimaTareaId)
                              .query(queries.newTareaTrabajo);
                      }
                  }
          
                  res.json({ message: "OK" });
              } 
              catch (error) { 
                  console.log('ERROR: '+error.message)
                  res.status(500); 
                  res.send(error.message); 
              }  */
        case 1:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function saveTrabajosPlan(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var newPlanMantenimientoTrabajo = exports.newPlanMantenimientoTrabajo = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var _req$body12, plan_mantenimiento_id, trabajo_id, pool;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _req$body12 = req.body, plan_mantenimiento_id = _req$body12.plan_mantenimiento_id, trabajo_id = _req$body12.trabajo_id;
          _context22.prev = 1;
          _context22.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context22.sent;
          _context22.next = 7;
          return pool.request().input("plan_mantenimiento_id", _connection.sql.Numeric, plan_mantenimiento_id).input("trabajo_id", _connection.sql.Numeric, trabajo_id).query(_querys.queries.newPlanMantenimientoTrabajo);
        case 7:
          res.json({
            message: "OK"
          });
          _context22.next = 14;
          break;
        case 10:
          _context22.prev = 10;
          _context22.t0 = _context22["catch"](1);
          res.status(500);
          res.send(_context22.t0.message);
        case 14:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[1, 10]]);
  }));
  return function newPlanMantenimientoTrabajo(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var deletePlanMantenimientoTrabajo = exports.deletePlanMantenimientoTrabajo = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          id = req.params.id;
          _context23.prev = 1;
          _context23.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context23.sent;
          _context23.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deletePlanMantenimientoTrabajo);
        case 7:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context23.next = 15;
          break;
        case 11:
          _context23.prev = 11;
          _context23.t0 = _context23["catch"](1);
          res.json({
            message: _context23.t0.message
          });
          console.log('INCORRECTO: ' + _context23.t0.message);
        case 15:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[1, 11]]);
  }));
  return function deletePlanMantenimientoTrabajo(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();

//////////////////////////////////////////////////////////////////////

var newPlanMantenimientoHistorial = exports.newPlanMantenimientoHistorial = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    var _req$body13, plan_historial_producto_id, plan_historial_cliente_id, plan_historial_plan_id, plan_historial_fecha, plan_historial_observacion, pool;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _req$body13 = req.body, plan_historial_producto_id = _req$body13.plan_historial_producto_id, plan_historial_cliente_id = _req$body13.plan_historial_cliente_id, plan_historial_plan_id = _req$body13.plan_historial_plan_id, plan_historial_fecha = _req$body13.plan_historial_fecha, plan_historial_observacion = _req$body13.plan_historial_observacion;
          _context24.prev = 1;
          _context24.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context24.sent;
          _context24.next = 7;
          return pool.request().input("plan_historial_producto_id", _connection.sql.Numeric, plan_historial_producto_id).input("plan_historial_cliente_id", _connection.sql.Numeric, plan_historial_cliente_id).input("plan_historial_plan_id", _connection.sql.Numeric, plan_historial_plan_id).input("plan_historial_fecha", _connection.sql.VarChar, plan_historial_fecha).input("plan_historial_observacion", _connection.sql.NVarChar, plan_historial_observacion).query(_querys.queries.newPlanMantenimientoHistorial);
        case 7:
          res.json({
            message: "OK"
          });
          _context24.next = 14;
          break;
        case 10:
          _context24.prev = 10;
          _context24.t0 = _context24["catch"](1);
          res.status(500);
          res.send(_context24.t0.message);
        case 14:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[1, 10]]);
  }));
  return function newPlanMantenimientoHistorial(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var updatePlanMantenimientoHistorial = exports.updatePlanMantenimientoHistorial = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    var id, _req$body14, plan_historial_fecha, plan_historial_observacion, pool;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          id = req.params.id;
          _req$body14 = req.body, plan_historial_fecha = _req$body14.plan_historial_fecha, plan_historial_observacion = _req$body14.plan_historial_observacion;
          _context25.prev = 2;
          _context25.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context25.sent;
          _context25.next = 8;
          return pool.request().input("plan_historial_fecha", _connection.sql.VarChar, plan_historial_fecha).input("plan_historial_observacion", _connection.sql.NVarChar, plan_historial_observacion).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePlanMantenimientoHistorial);
        case 8:
          res.json({
            message: "OK"
          });
          _context25.next = 15;
          break;
        case 11:
          _context25.prev = 11;
          _context25.t0 = _context25["catch"](2);
          res.json({
            message: _context25.t0.message
          });
          console.log('INCORRECTO: ' + _context25.t0.message);
        case 15:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[2, 11]]);
  }));
  return function updatePlanMantenimientoHistorial(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var deletePlanMantenimientoHistorial = exports.deletePlanMantenimientoHistorial = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          id = req.params.id;
          _context26.prev = 1;
          _context26.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context26.sent;
          _context26.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deletePlanMantenimientoHistorial);
        case 7:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context26.next = 15;
          break;
        case 11:
          _context26.prev = 11;
          _context26.t0 = _context26["catch"](1);
          res.json({
            message: _context26.t0.message
          });
          console.log('INCORRECTO: ' + _context26.t0.message);
        case 15:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[1, 11]]);
  }));
  return function deletePlanMantenimientoHistorial(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var getPlanMantenimientoHistorialClienteProducto = exports.getPlanMantenimientoHistorialClienteProducto = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res) {
    var _req$params, clienteId, productoId, pool, result;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _req$params = req.params, clienteId = _req$params.clienteId, productoId = _req$params.productoId;
          _context27.prev = 1;
          _context27.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context27.sent;
          _context27.next = 7;
          return pool.request().input('clienteId', clienteId).input('productoId', productoId).query(_querys.queries.getPlanMantenimientoHistorialClienteProducto);
        case 7:
          result = _context27.sent;
          res.json(result.recordset);
          _context27.next = 16;
          break;
        case 11:
          _context27.prev = 11;
          _context27.t0 = _context27["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context27.t0.message);
        case 16:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[1, 11]]);
  }));
  return function getPlanMantenimientoHistorialClienteProducto(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();