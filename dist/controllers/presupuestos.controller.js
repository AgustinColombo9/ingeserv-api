"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePresupuestoServicio = exports.updatePresupuestoDetalle = exports.updatePresupuestoDestinatario = exports.updatePresupuesto = exports.updateImagenPresupuesto = exports.updateFile = exports.savePresupuestoDetalle = exports.newPresupuestoServicio = exports.newPresupuestoDetalle = exports.newPresupuestoDestinatario = exports.newPresupuesto = exports.getPresupuestosEstadoId = exports.getPresupuestosClienteId = exports.getPresupuestosClienteEstadoId = exports.getPresupuestoServicios = exports.getPresupuestoId = exports.getPresupuestoEstados = exports.getPresupuestoDetallePresupuestoId = exports.getPresupuestoDetalleId = exports.getPresupuestoDestinatarios = exports.deletePresupuesto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var newPresupuesto = exports.newPresupuesto = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, presupuesto_cliente_id, presupuesto_fecha, presupuesto_destinatario, presupuesto_afiliado, presupuesto_asunto, presupuesto_estado_id, pool, id, ultimoPresupuestoIdResult, ultimoPresupuestoId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('NUEVO');
          /*  const {
                presupuesto_cliente_id, 
                presupuesto_fecha, 
                presupuesto_estado_id, 
                presupuesto_nombre_apellido, 
                presupuesto_edad, 
                presupuesto_dni,
                presupuesto_celular,
                presupuesto_medico_tratante,
                presupuesto_patologias,
                presupuesto_servicio_id,
                presupuesto_foto_uno, 
                presupuesto_foto_dos, 
                presupuesto_foto_tres,
                presupuesto_destinatario_id,
                presupuesto_destinatario,
                presupuesto_domicilio,
                presupuesto_ciudad_id,
                presupuesto_codigo_postal,
                presupuesto_provincia_id
            } = req.body;
              try { 
                const pool = await getConnection(); 
                await pool.request() 
                .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
                .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
                .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id) 
                .input("presupuesto_nombre_apellido", sql.VarChar, presupuesto_nombre_apellido) 
                .input("presupuesto_edad", sql.Numeric, presupuesto_edad) 
                .input("presupuesto_dni", sql.VarChar, presupuesto_dni)
                .input("presupuesto_celular", sql.VarChar, presupuesto_celular) 
                .input("presupuesto_medico_tratante", sql.VarChar, presupuesto_medico_tratante) 
                .input("presupuesto_patologias", sql.VarChar, presupuesto_patologias)
                .input("presupuesto_servicio_id", sql.Numeric, presupuesto_servicio_id) 
                .input("presupuesto_foto_uno", sql.VarBinary, presupuesto_foto_uno) 
                .input("presupuesto_foto_dos", sql.VarBinary, presupuesto_foto_dos) 
                .input("presupuesto_foto_tres", sql.VarBinary, presupuesto_foto_tres) 
                .input("presupuesto_destinatario_id", sql.Numeric, presupuesto_destinatario_id) 
                .input("presupuesto_destinatario", sql.VarChar, presupuesto_destinatario)
                .input("presupuesto_domicilio", sql.VarChar, presupuesto_domicilio) 
                .input("presupuesto_ciudad_id", sql.Numeric, presupuesto_ciudad_id) 
                .input("presupuesto_codigo_postal", sql.VarChar, presupuesto_codigo_postal)
                .input("presupuesto_provincia_id", sql.Numeric, presupuesto_provincia_id)
                .query(queries.newPresupuesto); 
                  res.json({ message: "OK" });
            } 
            catch (error) { 
                res.status(500); 
                res.send(error.message); 
            }  
            */
          _req$body = req.body, presupuesto_cliente_id = _req$body.presupuesto_cliente_id, presupuesto_fecha = _req$body.presupuesto_fecha, presupuesto_destinatario = _req$body.presupuesto_destinatario, presupuesto_afiliado = _req$body.presupuesto_afiliado, presupuesto_asunto = _req$body.presupuesto_asunto, presupuesto_estado_id = _req$body.presupuesto_estado_id;
          console.log('NUEVO PRESUPUESTO: ' + presupuesto_cliente_id + ' - ' + presupuesto_fecha + ' - ' + presupuesto_destinatario + ' - ' + presupuesto_afiliado + ' - ' + presupuesto_asunto + ' - ' + presupuesto_estado_id);
          _context.prev = 3;
          _context.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context.sent;
          _context.next = 9;
          return pool.request().input("presupuesto_cliente_id", _connection.sql.Numeric, presupuesto_cliente_id).input("presupuesto_fecha", _connection.sql.VarChar, presupuesto_fecha).input("presupuesto_destinatario", _connection.sql.NVarChar, presupuesto_destinatario).input("presupuesto_afiliado", _connection.sql.NVarChar, presupuesto_afiliado).input("presupuesto_asunto", _connection.sql.NVarChar, presupuesto_asunto).input("presupuesto_estado_id", _connection.sql.Numeric, presupuesto_estado_id).query(_querys.queries.newPresupuesto);
        case 9:
          _context.next = 11;
          return pool.request().query(_querys.queries.getUltimoPresupuestoId);
        case 11:
          id = _context.sent;
          _context.next = 14;
          return pool.request().query("SELECT MAX(CLIENTE_PRESUPUESTO_CAB_ID) AS UltimoPresupuestoId from CLIENTE_PRESUPUESTO_CAB");
        case 14:
          ultimoPresupuestoIdResult = _context.sent;
          ultimoPresupuestoId = ultimoPresupuestoIdResult.recordset[0].UltimoPresupuestoId;
          res.json({
            message: "OK",
            PRESUPUESTO_ID: ultimoPresupuestoId
          });
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](3);
          res.status(500);
          res.send(_context.t0.message);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 19]]);
  }));
  return function newPresupuesto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updatePresupuesto = exports.updatePresupuesto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, presupuesto_cliente_id, presupuesto_fecha, presupuesto_destinatario, presupuesto_afiliado, presupuesto_asunto, presupuesto_estado_id, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');

          /*   const {
                 presupuesto_cliente_id, 
                 presupuesto_fecha, 
                 presupuesto_estado_id, 
                 presupuesto_nombre_apellido, 
                 presupuesto_edad, 
                 presupuesto_dni,
                 presupuesto_celular,
                 presupuesto_medico_tratante,
                 presupuesto_patologias,
                 presupuesto_servicio_id,
                 presupuesto_destinatario_id,
                 presupuesto_destinatario,
                 presupuesto_domicilio,
                 presupuesto_ciudad_id,
                 presupuesto_codigo_postal,
                 presupuesto_provincia_id
             } = req.body;
          
             try { 
                 const pool = await getConnection(); 
                 await pool.request()  
                 .input("presupuesto_cliente_id", sql.Numeric, presupuesto_cliente_id) 
                 .input("presupuesto_fecha", sql.VarChar, presupuesto_fecha) 
                 .input("presupuesto_estado_id", sql.Numeric, presupuesto_estado_id) 
                 .input("presupuesto_nombre_apellido", sql.VarChar, presupuesto_nombre_apellido) 
                 .input("presupuesto_edad", sql.Numeric, presupuesto_edad) 
                 .input("presupuesto_dni", sql.VarChar, presupuesto_dni)
                 .input("presupuesto_celular", sql.VarChar, presupuesto_celular) 
                 .input("presupuesto_medico_tratante", sql.VarChar, presupuesto_medico_tratante) 
                 .input("presupuesto_patologias", sql.VarChar, presupuesto_patologias)
                 .input("presupuesto_servicio_id", sql.Numeric, presupuesto_servicio_id) 
                 .input("presupuesto_destinatario_id", sql.Numeric, presupuesto_destinatario_id) 
                 .input("presupuesto_destinatario", sql.VarChar, presupuesto_destinatario)
                 .input("presupuesto_domicilio", sql.VarChar, presupuesto_domicilio) 
                 .input("presupuesto_ciudad_id", sql.Numeric, presupuesto_ciudad_id) 
                 .input("presupuesto_codigo_postal", sql.VarChar, presupuesto_codigo_postal)
                 .input("presupuesto_provincia_id", sql.Numeric, presupuesto_provincia_id)
                 .input('id', sql.BigInt, id)
                 .query(queries.updatePresupuesto); 
          
                 res.json({ message: "OK" });
                 console.log('CORRECTO')
             } 
             catch (error) { 
                 res.json({ message: error.message });
                 console.log('INCORRECTO: '+error.message)
             }   */
          _req$body2 = req.body, presupuesto_cliente_id = _req$body2.presupuesto_cliente_id, presupuesto_fecha = _req$body2.presupuesto_fecha, presupuesto_destinatario = _req$body2.presupuesto_destinatario, presupuesto_afiliado = _req$body2.presupuesto_afiliado, presupuesto_asunto = _req$body2.presupuesto_asunto, presupuesto_estado_id = _req$body2.presupuesto_estado_id;
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input("presupuesto_cliente_id", _connection.sql.Numeric, presupuesto_cliente_id).input("presupuesto_fecha", _connection.sql.VarChar, presupuesto_fecha).input("presupuesto_destinatario", _connection.sql.NVarChar, presupuesto_destinatario).input("presupuesto_afiliado", _connection.sql.NVarChar, presupuesto_afiliado).input("presupuesto_asunto", _connection.sql.NVarChar, presupuesto_asunto).input("presupuesto_estado_id", _connection.sql.Numeric, presupuesto_estado_id).input("id", _connection.sql.BigInt, id).query(_querys.queries.updatePresupuesto);
        case 9:
          res.json({
            message: "OK"
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 12]]);
  }));
  return function updatePresupuesto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deletePresupuesto = exports.deletePresupuesto = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deletePresupuesto);
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
  return function deletePresupuesto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateImagenPresupuesto = exports.updateImagenPresupuesto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body3, index, presupuesto_imagen, buffer, pool, _pool, _pool2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body3 = req.body, index = _req$body3.index, presupuesto_imagen = _req$body3.presupuesto_imagen;
          buffer = Buffer.from(receta_imagen, 'base64');
          _context4.prev = 3;
          if (!(parseInt(index) === 0)) {
            _context4.next = 14;
            break;
          }
          _context4.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context4.sent;
          _context4.next = 10;
          return pool.request().input("presupuesto_foto_uno", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoFotoUno);
        case 10:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context4.next = 31;
          break;
        case 14:
          if (!(parseInt(index) === 1)) {
            _context4.next = 24;
            break;
          }
          _context4.next = 17;
          return (0, _connection.getConnection)();
        case 17:
          _pool = _context4.sent;
          _context4.next = 20;
          return _pool.request().input("presupuesto_foto_dos", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoFotoDos);
        case 20:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context4.next = 31;
          break;
        case 24:
          _context4.next = 26;
          return (0, _connection.getConnection)();
        case 26:
          _pool2 = _context4.sent;
          _context4.next = 29;
          return _pool2.request().input("presupuesto_foto_tres", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoFotoTres);
        case 29:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
        case 31:
          _context4.next = 36;
          break;
        case 33:
          _context4.prev = 33;
          _context4.t0 = _context4["catch"](3);
          console.log('ERROR: ' + _context4.t0);
        case 36:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 33]]);
  }));
  return function updateImagenPresupuesto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getPresupuestosClienteId = exports.getPresupuestosClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getPresupuestosClienteId);
        case 7:
          result = _context5.sent;
          res.status(200).json(result.recordset);
          _context5.next = 16;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          console.log("ERROR: " + _context5.t0);
          res.status(500);
          res.send(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }));
  return function getPresupuestosClienteId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getPresupuestosEstadoId = exports.getPresupuestosEstadoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getPresupuestosEstadoId);
        case 7:
          result = _context6.sent;
          res.status(200).json(result.recordset);
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
  return function getPresupuestosEstadoId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getPresupuestosClienteEstadoId = exports.getPresupuestosClienteEstadoId = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$params, cliente_id, estado_id, pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$params = req.params, cliente_id = _req$params.cliente_id, estado_id = _req$params.estado_id;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input('cliente_id', cliente_id).input('estado_id', estado_id).query(_querys.queries.getPresupuestosClienteEstadoId);
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
  return function getPresupuestosClienteEstadoId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getPresupuestoId = exports.getPresupuestoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getPresupuestoId);
        case 7:
          result = _context8.sent;
          res.json(result.recordset[0]);
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
  return function getPresupuestoId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getPresupuestoEstados = exports.getPresupuestoEstados = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getPresupuestoEstados);
        case 6:
          result = _context9.sent;
          res.status(200).json(result.recordset);
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
  return function getPresupuestoEstados(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getPresupuestoDetallePresupuestoId = exports.getPresupuestoDetallePresupuestoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getPresupuestoDetallePresupuestoId);
        case 7:
          result = _context10.sent;
          res.json(result.recordset);
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
  return function getPresupuestoDetallePresupuestoId(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getPresupuestoDetalleId = exports.getPresupuestoDetalleId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getPresupuestoDetalleId);
        case 7:
          result = _context11.sent;
          res.json(result.recordset[0]);
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
  return function getPresupuestoDetalleId(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var savePresupuestoDetalle = exports.savePresupuestoDetalle = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var detalles, pool, _iterator, _step, detalle, CLIENTE_PRESUPUESTO_DET_ID, CLIENTE_PRESUPUESTO_DET_CAB_ID, CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID, CLIENTE_PRESUPUESTO_DET_CANTIDAD, CLIENTE_PRESUPUESTO_DET_OBSERVACION, CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA, CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER, CLIENTE_PRESUPUESTO_DET_NOTA_UNO, CLIENTE_PRESUPUESTO_DET_NOTA_DOS, CLIENTE_PRESUPUESTO_DET_NOTA_TRES, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA, presupuesto_cab_id;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          console.log('NUEVO detalle');
          detalles = req.body;
          console.log('DETALLES PRESUPUESTO: ' + JSON.stringify(detalles));
          _context12.prev = 3;
          _context12.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context12.sent;
          _iterator = _createForOfIteratorHelper(detalles);
          _context12.prev = 8;
          _iterator.s();
        case 10:
          if ((_step = _iterator.n()).done) {
            _context12.next = 22;
            break;
          }
          detalle = _step.value;
          CLIENTE_PRESUPUESTO_DET_ID = detalle.CLIENTE_PRESUPUESTO_DET_ID, CLIENTE_PRESUPUESTO_DET_CAB_ID = detalle.CLIENTE_PRESUPUESTO_DET_CAB_ID, CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID = detalle.CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID, CLIENTE_PRESUPUESTO_DET_CANTIDAD = detalle.CLIENTE_PRESUPUESTO_DET_CANTIDAD, CLIENTE_PRESUPUESTO_DET_OBSERVACION = detalle.CLIENTE_PRESUPUESTO_DET_OBSERVACION, CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA = detalle.CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA, CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER = detalle.CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER, CLIENTE_PRESUPUESTO_DET_NOTA_UNO = detalle.CLIENTE_PRESUPUESTO_DET_NOTA_UNO, CLIENTE_PRESUPUESTO_DET_NOTA_DOS = detalle.CLIENTE_PRESUPUESTO_DET_NOTA_DOS, CLIENTE_PRESUPUESTO_DET_NOTA_TRES = detalle.CLIENTE_PRESUPUESTO_DET_NOTA_TRES, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO = detalle.CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA = detalle.CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA, presupuesto_cab_id = detalle.presupuesto_cab_id;
          if (!(CLIENTE_PRESUPUESTO_DET_ID && CLIENTE_PRESUPUESTO_DET_ID > 0)) {
            _context12.next = 18;
            break;
          }
          _context12.next = 16;
          return pool.request().input("presupuesto_cab_id", _connection.sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_CAB_ID)).input("presupuesto_producto_id", _connection.sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID)).input("presupuesto_cantidad", _connection.sql.Numeric, CLIENTE_PRESUPUESTO_DET_CANTIDAD).input("presupuesto_observacion", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_OBSERVACION).input("presupuesto_precio_venta", _connection.sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA)).input("presupuesto_precio_alquiler", _connection.sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER)).input("presupuesto_nota_uno", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_UNO).input("presupuesto_nota_dos", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_DOS).input("presupuesto_nota_tres", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_TRES).input("presupuesto_producto_modelo", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO).input("presupuesto_producto_marca", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA).input("id", _connection.sql.Numeric, CLIENTE_PRESUPUESTO_DET_ID).query(_querys.queries.updatePresupuestoDetalle);
        case 16:
          _context12.next = 20;
          break;
        case 18:
          _context12.next = 20;
          return pool.request().input("presupuesto_cab_id", _connection.sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_CAB_ID)).input("presupuesto_producto_id", _connection.sql.Numeric, parseInt(CLIENTE_PRESUPUESTO_DET_PRODUCTO_ID)).input("presupuesto_cantidad", _connection.sql.Numeric, CLIENTE_PRESUPUESTO_DET_CANTIDAD).input("presupuesto_observacion", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_OBSERVACION).input("presupuesto_precio_venta", _connection.sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_VENTA)).input("presupuesto_precio_alquiler", _connection.sql.Float, parseFloat(CLIENTE_PRESUPUESTO_DET_PRECIO_ALQUILER)).input("presupuesto_nota_uno", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_UNO).input("presupuesto_nota_dos", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_DOS).input("presupuesto_nota_tres", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_NOTA_TRES).input("presupuesto_producto_modelo", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MODELO).input("presupuesto_producto_marca", _connection.sql.VarChar, CLIENTE_PRESUPUESTO_DET_PRODUCTO_MARCA).query(_querys.queries.newPresupuestoDetalle);
        case 20:
          _context12.next = 10;
          break;
        case 22:
          _context12.next = 27;
          break;
        case 24:
          _context12.prev = 24;
          _context12.t0 = _context12["catch"](8);
          _iterator.e(_context12.t0);
        case 27:
          _context12.prev = 27;
          _iterator.f();
          return _context12.finish(27);
        case 30:
          res.json({
            message: "OK"
          });
          _context12.next = 37;
          break;
        case 33:
          _context12.prev = 33;
          _context12.t1 = _context12["catch"](3);
          res.status(500);
          res.send(_context12.t1.message);
        case 37:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[3, 33], [8, 24, 27, 30]]);
  }));
  return function savePresupuestoDetalle(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var newPresupuestoDetalle = exports.newPresupuestoDetalle = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var detalles, pool, _iterator2, _step2, detalle, presupuesto_cab_id, presupuesto_producto_id, presupuesto_cantidad, presupuesto_observacion, presupuesto_precio_venta, presupuesto_precio_alquiler, presupuesto_nota_uno, presupuesto_nota_dos, presupuesto_nota_tres, presupuesto_producto_modelo, presupuesto_producto_marca;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          console.log('NUEVO');
          detalles = req.body.detalles;
          _context13.prev = 2;
          _context13.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context13.sent;
          _iterator2 = _createForOfIteratorHelper(detalles);
          _context13.prev = 7;
          _iterator2.s();
        case 9:
          if ((_step2 = _iterator2.n()).done) {
            _context13.next = 16;
            break;
          }
          detalle = _step2.value;
          presupuesto_cab_id = detalle.presupuesto_cab_id, presupuesto_producto_id = detalle.presupuesto_producto_id, presupuesto_cantidad = detalle.presupuesto_cantidad, presupuesto_observacion = detalle.presupuesto_observacion, presupuesto_precio_venta = detalle.presupuesto_precio_venta, presupuesto_precio_alquiler = detalle.presupuesto_precio_alquiler, presupuesto_nota_uno = detalle.presupuesto_nota_uno, presupuesto_nota_dos = detalle.presupuesto_nota_dos, presupuesto_nota_tres = detalle.presupuesto_nota_tres, presupuesto_producto_modelo = detalle.presupuesto_producto_modelo, presupuesto_producto_marca = detalle.presupuesto_producto_marca;
          _context13.next = 14;
          return pool.request().input("presupuesto_cliente_id", _connection.sql.Numeric, presupuesto_cab_id).input("presupuesto_producto_id", _connection.sql.Numeric, presupuesto_producto_id).input("presupuesto_cantidad", _connection.sql.Numeric, presupuesto_cantidad).input("presupuesto_observacion", _connection.sql.VarChar, presupuesto_observacion).input("presupuesto_precio_venta", _connection.sql.Numeric, presupuesto_precio_venta).input("presupuesto_precio_alquiler", _connection.sql.Numeric, presupuesto_precio_alquiler).input("presupuesto_nota_uno", _connection.sql.VarChar, presupuesto_nota_uno).input("presupuesto_nota_dos", _connection.sql.VarChar, presupuesto_nota_dos).input("presupuesto_nota_tres", _connection.sql.VarChar, presupuesto_nota_tres).input("presupuesto_producto_modelo", _connection.sql.VarChar, presupuesto_producto_modelo).input("presupuesto_producto_marca", _connection.sql.VarChar, presupuesto_producto_marca).query(_querys.queries.newPresupuestoDetalle);
        case 14:
          _context13.next = 9;
          break;
        case 16:
          _context13.next = 21;
          break;
        case 18:
          _context13.prev = 18;
          _context13.t0 = _context13["catch"](7);
          _iterator2.e(_context13.t0);
        case 21:
          _context13.prev = 21;
          _iterator2.f();
          return _context13.finish(21);
        case 24:
          res.json({
            message: "OK"
          });
          _context13.next = 31;
          break;
        case 27:
          _context13.prev = 27;
          _context13.t1 = _context13["catch"](2);
          res.status(500);
          res.send(_context13.t1.message);
        case 31:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 27], [7, 18, 21, 24]]);
  }));
  return function newPresupuestoDetalle(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var updatePresupuestoDetalle = exports.updatePresupuestoDetalle = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var id, detalles, pool, _iterator3, _step3, detalle, presupuesto_cab_id, presupuesto_producto_id, presupuesto_cantidad, presupuesto_observacion, presupuesto_precio_venta, presupuesto_precio_alquiler, presupuesto_nota_uno, presupuesto_nota_dos, presupuesto_nota_tres, presupuesto_producto_modelo, presupuesto_producto_marca;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          console.log('UPDATE');
          id = req.params.id;
          detalles = req.body.detalles;
          _context14.prev = 3;
          _context14.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context14.sent;
          _iterator3 = _createForOfIteratorHelper(detalles);
          _context14.prev = 8;
          _iterator3.s();
        case 10:
          if ((_step3 = _iterator3.n()).done) {
            _context14.next = 17;
            break;
          }
          detalle = _step3.value;
          presupuesto_cab_id = detalle.presupuesto_cab_id, presupuesto_producto_id = detalle.presupuesto_producto_id, presupuesto_cantidad = detalle.presupuesto_cantidad, presupuesto_observacion = detalle.presupuesto_observacion, presupuesto_precio_venta = detalle.presupuesto_precio_venta, presupuesto_precio_alquiler = detalle.presupuesto_precio_alquiler, presupuesto_nota_uno = detalle.presupuesto_nota_uno, presupuesto_nota_dos = detalle.presupuesto_nota_dos, presupuesto_nota_tres = detalle.presupuesto_nota_tres, presupuesto_producto_modelo = detalle.presupuesto_producto_modelo, presupuesto_producto_marca = detalle.presupuesto_producto_marca;
          _context14.next = 15;
          return pool.request().input("presupuesto_cliente_id", _connection.sql.Numeric, presupuesto_cab_id).input("presupuesto_producto_id", _connection.sql.Numeric, presupuesto_producto_id).input("presupuesto_cantidad", _connection.sql.Numeric, presupuesto_cantidad).input("presupuesto_observacion", _connection.sql.VarChar, presupuesto_observacion).input("presupuesto_precio_venta", _connection.sql.Numeric, presupuesto_precio_venta).input("presupuesto_precio_alquiler", _connection.sql.Numeric, presupuesto_precio_alquiler).input("presupuesto_nota_uno", _connection.sql.VarChar, presupuesto_nota_uno).input("presupuesto_nota_dos", _connection.sql.VarChar, presupuesto_nota_dos).input("presupuesto_nota_tres", _connection.sql.VarChar, presupuesto_nota_tres).input("presupuesto_producto_modelo", _connection.sql.VarChar, presupuesto_producto_modelo).input("presupuesto_producto_marca", _connection.sql.VarChar, presupuesto_producto_marca).input("id", _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoDetalle);
        case 15:
          _context14.next = 10;
          break;
        case 17:
          _context14.next = 22;
          break;
        case 19:
          _context14.prev = 19;
          _context14.t0 = _context14["catch"](8);
          _iterator3.e(_context14.t0);
        case 22:
          _context14.prev = 22;
          _iterator3.f();
          return _context14.finish(22);
        case 25:
          res.json({
            message: "OK"
          });
          _context14.next = 32;
          break;
        case 28:
          _context14.prev = 28;
          _context14.t1 = _context14["catch"](3);
          res.status(500);
          res.send(_context14.t1.message);
        case 32:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[3, 28], [8, 19, 22, 25]]);
  }));
  return function updatePresupuestoDetalle(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var updateFile = exports.updateFile = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var id, selectedFile, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          console.log('GUARDAR ARCHIVO EN SERVIDOR');
          _context15.prev = 2;
          selectedFile = req.files.selectedFile;
          if (selectedFile) {
            _context15.next = 6;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            error: 'No se proporcionó ningún archivo'
          }));
        case 6:
          myFile = selectedFile;
          console.log(myFile);

          // Construir la ruta absoluta al directorio archivos_app
          archivosAppDir = _path["default"].join(__dirname, 'archivos_app'); // Crear el directorio si no existe
          if (!_fs["default"].existsSync(archivosAppDir)) {
            _fs["default"].mkdirSync(archivosAppDir);
          }
          console.log('DIRECTORIO ARCHIVOS ' + archivosAppDir);

          // Guardar el archivo en el directorio archivos_app
          serverFilePath = _path["default"].join(archivosAppDir, myFile.name);
          myFile.mv(serverFilePath, function (err) {
            if (err) {
              return res.status(500).json({
                error: 'Error al mover el archivo'
              });
            }
            console.log('ACTUALIZAR CAMPO IMAGEN POR URL DEL ARCHIVO: ' + archivosAppDir);
            res.json({
              message: 'OK'
            });
            console.log('CORRECTO');
          });
          _context15.next = 19;
          break;
        case 15:
          _context15.prev = 15;
          _context15.t0 = _context15["catch"](2);
          console.log('ERROR: ' + _context15.t0);
          res.status(500).json(_context15.t0.message);
        case 19:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 15]]);
  }));
  return function updateFile(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////////////////////////////////////////

var newPresupuestoServicio = exports.newPresupuestoServicio = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var presupuesto_servicio_descripcion, pool;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          presupuesto_servicio_descripcion = req.body.presupuesto_servicio_descripcion;
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context16.sent;
          _context16.next = 7;
          return pool.request().input("presupuesto_servicio_descripcion", _connection.sql.NVarChar, presupuesto_servicio_descripcion).query(_querys.queries.newPresupuestoServicio);
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
  return function newPresupuestoServicio(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var updatePresupuestoServicio = exports.updatePresupuestoServicio = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res) {
    var id, presupuesto_servicio_descripcion, pool;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          presupuesto_servicio_descripcion = req.body.presupuesto_servicio_descripcion;
          _context17.prev = 2;
          _context17.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context17.sent;
          _context17.next = 8;
          return pool.request().input("presupuesto_servicio_descripcion", _connection.sql.NVarChar, presupuesto_servicio_descripcion).input("id", _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoServicio);
        case 8:
          res.json({
            message: "OK"
          });
          _context17.next = 15;
          break;
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](2);
          res.status(500);
          res.send(_context17.t0.message);
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[2, 11]]);
  }));
  return function updatePresupuestoServicio(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var getPresupuestoServicios = exports.getPresupuestoServicios = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getPresupuestoServicios);
        case 6:
          result = _context18.sent;
          res.status(200).json(result.recordset);
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
  return function getPresupuestoServicios(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();

///////////////////////////////////////////////////////////////////////////////

var newPresupuestoDestinatario = exports.newPresupuestoDestinatario = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res) {
    var presupuesto_destinatario_descripcion, pool;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          presupuesto_destinatario_descripcion = req.body.presupuesto_destinatario_descripcion;
          _context19.prev = 1;
          _context19.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context19.sent;
          _context19.next = 7;
          return pool.request().input("presupuesto_destinatario_descripcion", _connection.sql.NVarChar, presupuesto_destinatario_descripcion).query(_querys.queries.newPresupuestoDestinatario);
        case 7:
          res.json({
            message: "OK"
          });
          _context19.next = 14;
          break;
        case 10:
          _context19.prev = 10;
          _context19.t0 = _context19["catch"](1);
          res.status(500);
          res.send(_context19.t0.message);
        case 14:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[1, 10]]);
  }));
  return function newPresupuestoDestinatario(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var updatePresupuestoDestinatario = exports.updatePresupuestoDestinatario = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var id, presupuesto_destinatario_descripcion, pool;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          id = req.params.id;
          presupuesto_destinatario_descripcion = req.body.presupuesto_destinatario_descripcion;
          _context20.prev = 2;
          _context20.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context20.sent;
          _context20.next = 8;
          return pool.request().input("presupuesto_destinatario_descripcion", _connection.sql.NVarChar, presupuesto_destinatario_descripcion).input("id", _connection.sql.BigInt, id).query(_querys.queries.updatePresupuestoDestinatario);
        case 8:
          res.json({
            message: "OK"
          });
          _context20.next = 15;
          break;
        case 11:
          _context20.prev = 11;
          _context20.t0 = _context20["catch"](2);
          res.status(500);
          res.send(_context20.t0.message);
        case 15:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[2, 11]]);
  }));
  return function updatePresupuestoDestinatario(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var getPresupuestoDestinatarios = exports.getPresupuestoDestinatarios = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context21.sent;
          _context21.next = 6;
          return pool.request().query(_querys.queries.getPresupuestoDestinatarios);
        case 6:
          result = _context21.sent;
          res.status(200).json(result.recordset);
          _context21.next = 15;
          break;
        case 10:
          _context21.prev = 10;
          _context21.t0 = _context21["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context21.t0.message);
        case 15:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 10]]);
  }));
  return function getPresupuestoDestinatarios(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();