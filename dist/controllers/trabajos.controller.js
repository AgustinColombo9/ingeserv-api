"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTrabajo = exports.updateTarea = exports.saveTareasTrabajo = exports.newTrabajo = exports.newTareaTrabajo = exports.newTarea = exports.getTrabajos = exports.getTrabajoId = exports.getTareasTrabajo = exports.getTareas = exports.getTareaId = exports.deleteTrabajo = exports.deleteTareaTrabajo = exports.deleteTarea = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var newTrabajo = exports.newTrabajo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, trabajo_descripcion, trabajo_observacion, pool, result, id;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, trabajo_descripcion = _req$body.trabajo_descripcion, trabajo_observacion = _req$body.trabajo_observacion;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("trabajo_descripcion", _connection.sql.VarChar, trabajo_descripcion).input("trabajo_observacion", _connection.sql.VarChar, trabajo_observacion).query(_querys.queries.newTrabajo);
        case 7:
          result = _context.sent;
          _context.next = 10;
          return pool.request().query(_querys.queries.getUltimoTrabajo);
        case 10:
          id = _context.sent;
          res.json({
            message: "OK",
            TRABAJOS_ID: id.recordset[0].TRABAJOS_ID
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
  return function newTrabajo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateTrabajo = exports.updateTrabajo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, trabajo_descripcion, trabajo_observacion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, trabajo_descripcion = _req$body2.trabajo_descripcion, trabajo_observacion = _req$body2.trabajo_observacion;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input("trabajo_descripcion", _connection.sql.VarChar, trabajo_descripcion).input("trabajo_observacion", _connection.sql.VarChar, trabajo_observacion).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateTrabajo);
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
          console.log('INCORRECTO: ' + _context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return function updateTrabajo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteTrabajo = exports.deleteTrabajo = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool;
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteTrabajo);
        case 7:
          res.status(200);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function deleteTrabajo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getTrabajoId = exports.getTrabajoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getTrabajoId);
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
  return function getTrabajoId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getTrabajos = exports.getTrabajos = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getTrabajos);
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
  return function getTrabajos(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

////////////////////////////////////////////////////////////////

var newTarea = exports.newTarea = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, tarea_descripcion, tarea_detalle, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body3 = req.body, tarea_descripcion = _req$body3.tarea_descripcion, tarea_detalle = _req$body3.tarea_detalle;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("tarea_descripcion", _connection.sql.VarChar, tarea_descripcion).input("tarea_detalle", _connection.sql.VarChar, tarea_detalle).query(_querys.queries.newTarea);
        case 7:
          res.json({
            message: "OK"
          });
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          res.status(500);
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function newTarea(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updateTarea = exports.updateTarea = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, _req$body4, tarea_descripcion, tarea_detalle, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _req$body4 = req.body, tarea_descripcion = _req$body4.tarea_descripcion, tarea_detalle = _req$body4.tarea_detalle;
          _context7.prev = 2;
          _context7.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context7.sent;
          _context7.next = 8;
          return pool.request().input("tarea_descripcion", _connection.sql.VarChar, tarea_descripcion).input("tarea_detalle", _connection.sql.VarChar, tarea_detalle).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateTarea);
        case 8:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context7.next = 16;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](2);
          res.json({
            message: _context7.t0.message
          });
          console.log('INCORRECTO: ' + _context7.t0.message);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 12]]);
  }));
  return function updateTarea(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteTarea = exports.deleteTarea = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, pool;
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteTarea);
        case 7:
          res.status(200);
          _context8.next = 14;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.status(500);
          res.send(_context8.t0.message);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return function deleteTarea(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getTareaId = exports.getTareaId = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, pool, result;
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
          return pool.request().input('id', id).query(_querys.queries.getTareaId);
        case 7:
          result = _context9.sent;
          res.json(result.recordset[0]);
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
  return function getTareaId(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getTareas = exports.getTareas = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getTareas);
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
  return function getTareas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getTareasTrabajo = exports.getTareasTrabajo = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id;
          _context11.prev = 1;
          _context11.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context11.sent;
          _context11.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getTareasTrabajo);
        case 7:
          result = _context11.sent;
          res.json(result.recordset);
          _context11.next = 16;
          break;
        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context11.t0.message);
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 11]]);
  }));
  return function getTareasTrabajo(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var saveTareasTrabajo = exports.saveTareasTrabajo = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var detalles, pool, _iterator, _step, detalle, TRABAJOS_TAREAS_ID, TRABAJOS_TAREAS_TRABAJOS_ID, TRABAJOS_DESCRIPCION, TRABAJOS_OBSERVACION, TRABAJOS_TAREAS_TAREAS_ID, TAREAS_DESCRIPCION, TAREAS_DETALLE, _pool, ultimaTareaIdResult, ultimaTareaId;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          detalles = req.body;
          _context12.prev = 1;
          _context12.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context12.sent;
          _iterator = _createForOfIteratorHelper(detalles);
          _context12.prev = 6;
          _iterator.s();
        case 8:
          if ((_step = _iterator.n()).done) {
            _context12.next = 31;
            break;
          }
          detalle = _step.value;
          TRABAJOS_TAREAS_ID = detalle.TRABAJOS_TAREAS_ID, TRABAJOS_TAREAS_TRABAJOS_ID = detalle.TRABAJOS_TAREAS_TRABAJOS_ID, TRABAJOS_DESCRIPCION = detalle.TRABAJOS_DESCRIPCION, TRABAJOS_OBSERVACION = detalle.TRABAJOS_OBSERVACION, TRABAJOS_TAREAS_TAREAS_ID = detalle.TRABAJOS_TAREAS_TAREAS_ID, TAREAS_DESCRIPCION = detalle.TAREAS_DESCRIPCION, TAREAS_DETALLE = detalle.TAREAS_DETALLE;
          console.log('SAVE DETALLE: ' + TRABAJOS_TAREAS_TAREAS_ID + '  -  ' + TRABAJOS_TAREAS_TRABAJOS_ID);
          console.log('TAREA: ' + TAREAS_DESCRIPCION + '  -  ' + TAREAS_DETALLE);
          if (!(TRABAJOS_TAREAS_TAREAS_ID && TRABAJOS_TAREAS_TAREAS_ID > 0)) {
            _context12.next = 18;
            break;
          }
          _context12.next = 16;
          return pool.request().input("trabajo_tarea_trabajo_id", _connection.sql.Numeric, TRABAJOS_TAREAS_TRABAJOS_ID).input("trabajo_tarea_tarea_id", _connection.sql.Numeric, TRABAJOS_TAREAS_TAREAS_ID).query(_querys.queries.newTareaTrabajo);
        case 16:
          _context12.next = 29;
          break;
        case 18:
          _context12.next = 20;
          return (0, _connection.getConnection)();
        case 20:
          _pool = _context12.sent;
          _context12.next = 23;
          return _pool.request().input("tarea_descripcion", _connection.sql.VarChar, TAREAS_DESCRIPCION).input("tarea_detalle", _connection.sql.VarChar, TAREAS_DETALLE).query(_querys.queries.newTarea);
        case 23:
          _context12.next = 25;
          return _pool.request().query("SELECT MAX(TAREAS_ID) AS UltimoTareaId from TAREAS");
        case 25:
          ultimaTareaIdResult = _context12.sent;
          ultimaTareaId = ultimaTareaIdResult.recordset[0].UltimoTareaId;
          _context12.next = 29;
          return _pool.request().input("trabajo_tarea_trabajo_id", _connection.sql.Numeric, TRABAJOS_TAREAS_TRABAJOS_ID).input("trabajo_tarea_tarea_id", _connection.sql.Numeric, ultimaTareaId).query(_querys.queries.newTareaTrabajo);
        case 29:
          _context12.next = 8;
          break;
        case 31:
          _context12.next = 36;
          break;
        case 33:
          _context12.prev = 33;
          _context12.t0 = _context12["catch"](6);
          _iterator.e(_context12.t0);
        case 36:
          _context12.prev = 36;
          _iterator.f();
          return _context12.finish(36);
        case 39:
          res.json({
            message: "OK"
          });
          _context12.next = 47;
          break;
        case 42:
          _context12.prev = 42;
          _context12.t1 = _context12["catch"](1);
          console.log('ERROR: ' + _context12.t1.message);
          res.status(500);
          res.send(_context12.t1.message);
        case 47:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 42], [6, 33, 36, 39]]);
  }));
  return function saveTareasTrabajo(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var newTareaTrabajo = exports.newTareaTrabajo = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var _req$body5, trabajo_tarea_trabajo_id, trabajo_tarea_tarea_id, pool;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _req$body5 = req.body, trabajo_tarea_trabajo_id = _req$body5.trabajo_tarea_trabajo_id, trabajo_tarea_tarea_id = _req$body5.trabajo_tarea_tarea_id;
          _context13.prev = 1;
          _context13.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context13.sent;
          _context13.next = 7;
          return pool.request().input("trabajo_tarea_trabajo_id", _connection.sql.Numeric, trabajo_tarea_trabajo_id).input("trabajo_tarea_tarea_id", _connection.sql.Numeric, trabajo_tarea_tarea_id).query(_querys.queries.newTareaTrabajo);
        case 7:
          res.json({
            message: "OK"
          });
          _context13.next = 14;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](1);
          res.status(500);
          res.send(_context13.t0.message);
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[1, 10]]);
  }));
  return function newTareaTrabajo(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteTareaTrabajo = exports.deleteTareaTrabajo = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _context14.prev = 1;
          _context14.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context14.sent;
          _context14.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteTareaTrabajo);
        case 7:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context14.next = 15;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](1);
          res.json({
            message: _context14.t0.message
          });
          console.log('INCORRECTO: ' + _context14.t0.message);
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 11]]);
  }));
  return function deleteTareaTrabajo(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();