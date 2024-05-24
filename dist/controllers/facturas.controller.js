"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFactura = exports.saveFactura = exports.newFacturaProductoAsignado = exports.newFactura = exports.getFacturasProductoAsignadoId = exports.getFacturasEstadoId = exports.getFacturas = exports.getFacturaEstados = exports.deleteFacturaProductoAsignado = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newFactura = exports.newFactura = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, factura_descripcion, factura_fecha, factura_filename, factura_codigo_bas, factura_extension, factura_estado_id, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, factura_descripcion = _req$body.factura_descripcion, factura_fecha = _req$body.factura_fecha, factura_filename = _req$body.factura_filename, factura_codigo_bas = _req$body.factura_codigo_bas, factura_extension = _req$body.factura_extension, factura_estado_id = _req$body.factura_estado_id;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("factura_descripcion", _connection.sql.VarChar, factura_descripcion).input("factura_fecha", _connection.sql.VarChar, factura_fecha).input("factura_filename", _connection.sql.VarChar, factura_filename).input("factura_codigo_bas", _connection.sql.VarChar, factura_codigo_bas).input("factura_extension", _connection.sql.VarChar, factura_extension).input("factura_estado_id", _connection.sql.Numeric, factura_estado_id).query(_querys.queries.newFactura);
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
  return function newFactura(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateFactura = exports.updateFactura = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, factura_descripcion, factura_fecha, factura_filename, factura_codigo_bas, factura_extension, factura_estado_id, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, factura_descripcion = _req$body2.factura_descripcion, factura_fecha = _req$body2.factura_fecha, factura_filename = _req$body2.factura_filename, factura_codigo_bas = _req$body2.factura_codigo_bas, factura_extension = _req$body2.factura_extension, factura_estado_id = _req$body2.factura_estado_id;
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("factura_descripcion", _connection.sql.VarChar, factura_descripcion).input("factura_fecha", _connection.sql.VarChar, factura_fecha).input("factura_filename", _connection.sql.VarChar, factura_filename).input("factura_codigo_bas", _connection.sql.VarChar, factura_codigo_bas).input("factura_extension", _connection.sql.VarChar, factura_extension).input("factura_estado_id", _connection.sql.Numeric, factura_estado_id).query(_querys.queries.updateFactura);
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
  return function updateFactura(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getFacturas = exports.getFacturas = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, _result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().query(_querys.queries.getFacturas);
        case 6:
          _result = _context3.sent;
          res.status(200).json(_result.recordset);
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
  return function getFacturas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getFacturasEstadoId = exports.getFacturasEstadoId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, _result2;
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getFacturasEstadoId);
        case 7:
          _result2 = _context4.sent;
          res.json(_result2.recordset);
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
  return function getFacturasEstadoId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var newFacturaProductoAsignado = exports.newFacturaProductoAsignado = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body3, producto_factura_producto_id, producto_factura_cliente_id, producto_factura_factura_id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body3 = req.body, producto_factura_producto_id = _req$body3.producto_factura_producto_id, producto_factura_cliente_id = _req$body3.producto_factura_cliente_id, producto_factura_factura_id = _req$body3.producto_factura_factura_id;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input("producto_factura_producto_id", _connection.sql.Numeric, producto_factura_producto_id).input("producto_factura_cliente_id", _connection.sql.Numeric, producto_factura_cliente_id).input("producto_factura_factura_id", _connection.sql.Numeric, producto_factura_factura_id).query(_querys.queries.newFacturaProductoAsignado);
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
  return function newFacturaProductoAsignado(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteFacturaProductoAsignado = exports.deleteFacturaProductoAsignado = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool;
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteFacturaProductoAsignado);
        case 7:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          res.json({
            message: _context6.t0.message
          });
          console.log('INCORRECTO');
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }));
  return function deleteFacturaProductoAsignado(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getFacturasProductoAsignadoId = exports.getFacturasProductoAsignadoId = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getFacturasProductoAsignadoId);
        case 7:
          res.status(200).json(result.recordset);
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          res.json({
            message: _context7.t0.message
          });
          console.log('INCORRECTO');
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function getFacturasProductoAsignadoId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getFacturaEstados = exports.getFacturaEstados = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var pool, _result3;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context8.sent;
          _context8.next = 6;
          return pool.request().query(_querys.queries.getFacturaEstados);
        case 6:
          _result3 = _context8.sent;
          res.status(200).json(_result3.recordset);
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
  return function getFacturaEstados(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var saveFactura = exports.saveFactura = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$body4, factura_id, factura_descripcion, factura_fecha, factura_filename, factura_codigo_bas, factura_extension, factura_estado_id, filePath, pool;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          console.log('FILE: ' + JSON.stringify(req.file));
          console.log('BODY: ' + JSON.stringify(req.body));
          _context9.prev = 2;
          // Verifica si se ha cargado correctamente el archivo
          /*        if (!req.file) {
                      // Si no se ha cargado correctamente el archivo, envía un mensaje de error
                      return res.status(400).send('Error: No se ha cargado ningún archivo.');
                  }
          */
          // Obtiene los datos del cuerpo de la solicitud
          _req$body4 = req.body, factura_id = _req$body4.factura_id, factura_descripcion = _req$body4.factura_descripcion, factura_fecha = _req$body4.factura_fecha, factura_filename = _req$body4.factura_filename, factura_codigo_bas = _req$body4.factura_codigo_bas, factura_extension = _req$body4.factura_extension, factura_estado_id = _req$body4.factura_estado_id;
          _context9.prev = 4;
          filePath = req.file.filename;
          console.log('FILE PATH: ' + filePath);
          if (!(factura_id && factura_id > 0)) {
            _context9.next = 10;
            break;
          }
          _context9.next = 15;
          break;
        case 10:
          _context9.next = 12;
          return (0, _connection.getConnection)();
        case 12:
          pool = _context9.sent;
          _context9.next = 15;
          return pool.request().input("factura_descripcion", _connection.sql.VarChar, factura_descripcion === "null" ? null : factura_descripcion).input("factura_fecha", _connection.sql.VarChar, factura_fecha === "null" ? null : factura_fecha).input("factura_filename", _connection.sql.VarChar, filePath === "null" ? null : filePath).input("factura_codigo_bas", _connection.sql.NVarChar, factura_codigo_bas === "null" ? null : factura_codigo_bas).input("factura_extension", _connection.sql.VarChar, factura_extension === "null" ? null : factura_extension).input("factura_estado_id", _connection.sql.Numeric, parseInt(factura_estado_id)).query(_querys.queries.newFactura);
        case 15:
          console.log('FINALIZO CORRECTO...');
          res.json({
            message: "OK"
          });
          _context9.next = 23;
          break;
        case 19:
          _context9.prev = 19;
          _context9.t0 = _context9["catch"](4);
          // Si ocurre un error, envía un mensaje de error
          console.error('Error al guardar producto asignado:', _context9.t0);
          res.status(500).send('Error interno del servidor.');
        case 23:
          _context9.next = 29;
          break;
        case 25:
          _context9.prev = 25;
          _context9.t1 = _context9["catch"](2);
          // Si ocurre un error, envía un mensaje de error
          console.error('Error al guardar los datos:', _context9.t1);
          res.status(500).send('Error interno del servidor.');
        case 29:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 25], [4, 19]]);
  }));
  return function saveFactura(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();