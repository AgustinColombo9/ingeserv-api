"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateServiceTarea = exports.updateServiceInsumo = exports.updateService = exports.newServiceTarea = exports.newServiceInsumo = exports.newService = exports.getServicesEmpleadoId = exports.getServices = exports.getServiceTareasServiceId = exports.getServiceTareas = exports.getServiceTareaId = exports.getServiceInsumosTareaId = exports.getServiceInsumosServiceId = exports.getServiceInsumoId = exports.getServiceId = exports.getEstadosTarea = exports.deleteServiceTarea = exports.deleteServiceInsumo = exports.deleteService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newService = exports.newService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, service_producto_id, service_cliente_id, service_numero_orden, service_fecha, service_empleado_id, service_observacion, service_precio, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, service_producto_id = _req$body.service_producto_id, service_cliente_id = _req$body.service_cliente_id, service_numero_orden = _req$body.service_numero_orden, service_fecha = _req$body.service_fecha, service_empleado_id = _req$body.service_empleado_id, service_observacion = _req$body.service_observacion, service_precio = _req$body.service_precio;
          console.log('SERVICE A GUARDAR: ' + service_producto_id + ' - ' + service_cliente_id + ' - ' + service_numero_orden + ' - ' + service_fecha + ' - ' + service_empleado_id + ' - ' + service_observacion);
          _context.prev = 2;
          _context.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context.sent;
          _context.next = 8;
          return pool.request().input("service_producto_id", _connection.sql.Numeric, service_producto_id).input("service_cliente_id", _connection.sql.Numeric, service_cliente_id).input("service_numero_orden", _connection.sql.VarChar, service_numero_orden).input("service_fecha", _connection.sql.VarChar, service_fecha).input("service_empleado_id", _connection.sql.Numeric, service_empleado_id).input("service_observacion", _connection.sql.VarChar, service_observacion).input("service_precio", _connection.sql.Decimal, service_precio).query(_querys.queries.newService);
        case 8:
          res.json({
            message: "OK"
          });
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 11]]);
  }));
  return function newService(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateService = exports.updateService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, service_producto_id, service_cliente_id, service_numero_orden, service_fecha, service_empleado_id, service_observacion, service_precio, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, service_producto_id = _req$body2.service_producto_id, service_cliente_id = _req$body2.service_cliente_id, service_numero_orden = _req$body2.service_numero_orden, service_fecha = _req$body2.service_fecha, service_empleado_id = _req$body2.service_empleado_id, service_observacion = _req$body2.service_observacion, service_precio = _req$body2.service_precio;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input("service_producto_id", _connection.sql.Numeric, service_producto_id).input("service_cliente_id", _connection.sql.Numeric, service_cliente_id).input("service_numero_orden", _connection.sql.VarChar, service_numero_orden).input("service_fecha", _connection.sql.VarChar, service_fecha).input("service_empleado_id", _connection.sql.Numeric, service_empleado_id).input("service_observacion", _connection.sql.VarChar, service_observacion).input("service_precio", _connection.sql.Decimal, service_precio).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateService);
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
  return function updateService(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteService = exports.deleteService = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteService);
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
  return function deleteService(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getServiceId = exports.getServiceId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getServiceId);
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
  return function getServiceId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getServicesEmpleadoId = exports.getServicesEmpleadoId = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
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
          return pool.request().input('id', id).query(_querys.queries.getServicesEmpleadoId);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 16;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getServicesEmpleadoId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getServices = exports.getServices = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().query(_querys.queries.getServices);
        case 6:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 15;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getServices(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////////////////////

var newServiceTarea = exports.newServiceTarea = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body3, service_tarea_service_id, service_tarea_tarea_id, service_tarea_observacion, service_tarea_precio, service_tarea_fecha, service_tarea_estado_id, service_tarea_fecha_inicio, service_tarea_hora_inicio, service_tarea_fecha_fin, service_tarea_hora_fin, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body3 = req.body, service_tarea_service_id = _req$body3.service_tarea_service_id, service_tarea_tarea_id = _req$body3.service_tarea_tarea_id, service_tarea_observacion = _req$body3.service_tarea_observacion, service_tarea_precio = _req$body3.service_tarea_precio, service_tarea_fecha = _req$body3.service_tarea_fecha, service_tarea_estado_id = _req$body3.service_tarea_estado_id, service_tarea_fecha_inicio = _req$body3.service_tarea_fecha_inicio, service_tarea_hora_inicio = _req$body3.service_tarea_hora_inicio, service_tarea_fecha_fin = _req$body3.service_tarea_fecha_fin, service_tarea_hora_fin = _req$body3.service_tarea_hora_fin;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input("service_tarea_service_id", _connection.sql.Numeric, service_tarea_service_id).input("service_tarea_tarea_id", _connection.sql.Numeric, service_tarea_tarea_id).input("service_tarea_observacion", _connection.sql.VarChar, service_tarea_observacion).input("service_tarea_precio", _connection.sql.Decimal, service_tarea_precio).input("service_tarea_fecha", _connection.sql.VarChar, service_tarea_fecha).input("service_tarea_estado_id", _connection.sql.Numeric, service_tarea_estado_id).input("service_tarea_fecha_inicio", _connection.sql.VarChar, service_tarea_fecha_inicio).input("service_tarea_hora_inicio", _connection.sql.Time, service_tarea_hora_inicio).input("service_tarea_fecha_fin", _connection.sql.VarChar, service_tarea_fecha_fin).input("service_tarea_hora_fin", _connection.sql.Time, service_tarea_hora_fin).query(_querys.queries.newServiceTarea);
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
  return function newServiceTarea(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var updateServiceTarea = exports.updateServiceTarea = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, _req$body4, service_tarea_service_id, service_tarea_tarea_id, service_tarea_observacion, service_tarea_precio, service_tarea_fecha, service_tarea_estado_id, service_tarea_fecha_inicio, service_tarea_hora_inicio, service_tarea_fecha_fin, service_tarea_hora_fin, pool;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _req$body4 = req.body, service_tarea_service_id = _req$body4.service_tarea_service_id, service_tarea_tarea_id = _req$body4.service_tarea_tarea_id, service_tarea_observacion = _req$body4.service_tarea_observacion, service_tarea_precio = _req$body4.service_tarea_precio, service_tarea_fecha = _req$body4.service_tarea_fecha, service_tarea_estado_id = _req$body4.service_tarea_estado_id, service_tarea_fecha_inicio = _req$body4.service_tarea_fecha_inicio, service_tarea_hora_inicio = _req$body4.service_tarea_hora_inicio, service_tarea_fecha_fin = _req$body4.service_tarea_fecha_fin, service_tarea_hora_fin = _req$body4.service_tarea_hora_fin;
          _context8.prev = 2;
          _context8.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context8.sent;
          _context8.next = 8;
          return pool.request().input("service_tarea_service_id", _connection.sql.Numeric, service_tarea_service_id).input("service_tarea_tarea_id", _connection.sql.Numeric, service_tarea_tarea_id).input("service_tarea_observacion", _connection.sql.VarChar, service_tarea_observacion).input("service_tarea_precio", _connection.sql.Decimal, service_tarea_precio).input("service_tarea_fecha", _connection.sql.VarChar, service_tarea_fecha).input("service_tarea_estado_id", _connection.sql.Numeric, service_tarea_estado_id).input("service_tarea_fecha_inicio", _connection.sql.VarChar, service_tarea_fecha_inicio).input("service_tarea_hora_inicio", _connection.sql.Time, service_tarea_hora_inicio).input("service_tarea_fecha_fin", _connection.sql.VarChar, service_tarea_fecha_fin).input("service_tarea_hora_fin", _connection.sql.Time, service_tarea_hora_fin).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateServiceTarea);
        case 8:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context8.next = 16;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](2);
          res.json({
            message: _context8.t0.message
          });
          console.log('INCORRECTO: ' + _context8.t0.message);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 12]]);
  }));
  return function updateServiceTarea(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteServiceTarea = exports.deleteServiceTarea = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteServiceTarea);
        case 7:
          res.status(200);
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](1);
          res.status(500);
          res.send(_context9.t0.message);
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 10]]);
  }));
  return function deleteServiceTarea(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getServiceTareaId = exports.getServiceTareaId = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _context10.prev = 1;
          _context10.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context10.sent;
          _context10.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getServiceTareaId);
        case 7:
          result = _context10.sent;
          res.json(result.recordset[0]);
          _context10.next = 16;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context10.t0.message);
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[1, 11]]);
  }));
  return function getServiceTareaId(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getServiceTareasServiceId = exports.getServiceTareasServiceId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getServiceTareasServiceId);
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
  return function getServiceTareasServiceId(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////////////////////////

var newServiceInsumo = exports.newServiceInsumo = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var _req$body5, service_insumo_producto_id, service_insumo_service_id, service_insumo_descripcion, service_insumo_tarea_id, service_insumo_cantidad, pool;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          console.log('GUARDAR INSUMO');
          _req$body5 = req.body, service_insumo_producto_id = _req$body5.service_insumo_producto_id, service_insumo_service_id = _req$body5.service_insumo_service_id, service_insumo_descripcion = _req$body5.service_insumo_descripcion, service_insumo_tarea_id = _req$body5.service_insumo_tarea_id, service_insumo_cantidad = _req$body5.service_insumo_cantidad;
          console.log('GUARDAR INSUMO' + service_insumo_producto_id + ' - ' + service_insumo_service_id + ' - ' + service_insumo_descripcion + ' - ' + service_insumo_tarea_id + ' - ' + service_insumo_cantidad);
          _context12.prev = 3;
          _context12.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context12.sent;
          _context12.next = 9;
          return pool.request().input("service_insumo_producto_id", _connection.sql.Numeric, service_insumo_producto_id).input("service_insumo_service_id", _connection.sql.Numeric, service_insumo_service_id).input("service_insumo_descripcion", _connection.sql.VarChar, service_insumo_descripcion).input("service_insumo_tarea_id", _connection.sql.Numeric, service_insumo_tarea_id).input("service_insumo_cantidad", _connection.sql.Decimal, service_insumo_cantidad).query(_querys.queries.newServiceInsumo);
        case 9:
          res.json({
            message: "OK"
          });
          _context12.next = 16;
          break;
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](3);
          res.status(500);
          res.send(_context12.t0.message);
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[3, 12]]);
  }));
  return function newServiceInsumo(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var updateServiceInsumo = exports.updateServiceInsumo = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var id, _req$body6, service_insumo_producto_id, service_insumo_service_id, service_insumo_descripcion, service_insumo_tarea_id, service_insumo_cantidad, pool;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          _req$body6 = req.body, service_insumo_producto_id = _req$body6.service_insumo_producto_id, service_insumo_service_id = _req$body6.service_insumo_service_id, service_insumo_descripcion = _req$body6.service_insumo_descripcion, service_insumo_tarea_id = _req$body6.service_insumo_tarea_id, service_insumo_cantidad = _req$body6.service_insumo_cantidad;
          _context13.prev = 2;
          _context13.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context13.sent;
          _context13.next = 8;
          return pool.request().input("service_insumo_producto_id", _connection.sql.Numeric, service_insumo_producto_id).input("service_insumo_service_id", _connection.sql.Numeric, service_insumo_service_id).input("service_insumo_descripcion", _connection.sql.VarChar, service_insumo_descripcion).input("service_insumo_tarea_id", _connection.sql.Numeric, service_insumo_tarea_id).input("service_insumo_cantidad", _connection.sql.Decimal, service_insumo_cantidad).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateServiceInsumo);
        case 8:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context13.next = 16;
          break;
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](2);
          res.json({
            message: _context13.t0.message
          });
          console.log('INCORRECTO: ' + _context13.t0.message);
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 12]]);
  }));
  return function updateServiceInsumo(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteServiceInsumo = exports.deleteServiceInsumo = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteServiceInsumo);
        case 7:
          res.status(200);
          _context14.next = 14;
          break;
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](1);
          res.status(500);
          res.send(_context14.t0.message);
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 10]]);
  }));
  return function deleteServiceInsumo(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var getServiceInsumoId = exports.getServiceInsumoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getServiceInsumoId);
        case 7:
          result = _context15.sent;
          res.json(result.recordset[0]);
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
  return function getServiceInsumoId(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var getServiceInsumosTareaId = exports.getServiceInsumosTareaId = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          id = req.params.id;
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context16.sent;
          _context16.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getServiceInsumosTareaId);
        case 7:
          result = _context16.sent;
          res.json(result.recordset);
          _context16.next = 16;
          break;
        case 11:
          _context16.prev = 11;
          _context16.t0 = _context16["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context16.t0.message);
        case 16:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 11]]);
  }));
  return function getServiceInsumosTareaId(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var getServiceInsumosServiceId = exports.getServiceInsumosServiceId = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var id, pool, result;
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
          return pool.request().input('id', id).query(_querys.queries.getServiceInsumosServiceId);
        case 7:
          result = _context17.sent;
          res.json(result.recordset);
          _context17.next = 16;
          break;
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context17.t0.message);
        case 16:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 11]]);
  }));
  return function getServiceInsumosServiceId(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();

//////////////////////////////////////////////////////////////////////////////////

var getServiceTareas = exports.getServiceTareas = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context18.sent;
          _context18.next = 6;
          return pool.request().query(_querys.queries.getServiceTareas);
        case 6:
          result = _context18.sent;
          res.json(result.recordset);
          _context18.next = 15;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context18.t0.message);
        case 15:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function getServiceTareas(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var getEstadosTarea = exports.getEstadosTarea = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context19.sent;
          _context19.next = 6;
          return pool.request().query(_querys.queries.getEstadosTarea);
        case 6:
          result = _context19.sent;
          res.json(result.recordset);
          _context19.next = 15;
          break;
        case 10:
          _context19.prev = 10;
          _context19.t0 = _context19["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context19.t0.message);
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 10]]);
  }));
  return function getEstadosTarea(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();