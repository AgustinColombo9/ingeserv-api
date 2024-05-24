"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductoEquipoAsignar = exports.updateProducto = exports.updateImagenProducto = exports.updateCaracteristicaProductoId = exports.sincronizarProductosEquipo = exports.saveProductoEquipoAsignar = exports.newProductoEquipoAsignar = exports.newProducto = exports.newCaracteristicaProducto = exports.getUltimoProductoId = exports.getProductosRubroId = exports.getProductosProveedorId = exports.getProductosEquiposClienteId = exports.getProductosEquipos = exports.getProductosConsumiblesClienteId = exports.getProductosConsumibles = exports.getProductosCategoriaIdCard = exports.getProductosCategoriaId = exports.getProductosCard = exports.getProductos = exports.getProductoId = exports.getProductoEquipoHistorialId = exports.getProductoEquipoDetalleClienteId = exports.getProductoConsumibleDetalleClienteId = exports.getCaracteristicasProductoId = exports.deleteProductoEquipoAsignar = exports.deleteProducto = exports.deleteCaracteristicaProductoId = exports.activarProducto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _app = require("../app.js");
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var _buffer = require("buffer");
var newProducto = exports.newProducto = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, producto_codigo, producto_serie, producto_bas, producto_descripcion, producto_modelo, producto_marca_id, producto_categoria_id, producto_proveedor_id, producto_precio, producto_producto_tipo_id, producto_ultima_fecha, producto_condicion_id, producto_tipo_moneda_id, producto_servicio_id, producto_activo, producto_descripcion_larga, pool, ultimoProductoIdResult, ultimoProductoId;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('NUEVO');
          _req$body = req.body, producto_codigo = _req$body.producto_codigo, producto_serie = _req$body.producto_serie, producto_bas = _req$body.producto_bas, producto_descripcion = _req$body.producto_descripcion, producto_modelo = _req$body.producto_modelo, producto_marca_id = _req$body.producto_marca_id, producto_categoria_id = _req$body.producto_categoria_id, producto_proveedor_id = _req$body.producto_proveedor_id, producto_precio = _req$body.producto_precio, producto_producto_tipo_id = _req$body.producto_producto_tipo_id, producto_ultima_fecha = _req$body.producto_ultima_fecha, producto_condicion_id = _req$body.producto_condicion_id, producto_tipo_moneda_id = _req$body.producto_tipo_moneda_id, producto_servicio_id = _req$body.producto_servicio_id, producto_activo = _req$body.producto_activo, producto_descripcion_larga = _req$body.producto_descripcion_larga;
          console.log('PRODUCTO Codigo: ' + producto_codigo);
          console.log('PRODUCTO Serie: ' + producto_serie);
          console.log('PRODUCTO Bas: ' + producto_bas);
          console.log('PRODUCTO Desc: ' + producto_descripcion);
          console.log('PRODUCTO Modelo: ' + producto_modelo);
          console.log('PRODUCTO Marca: ' + producto_marca_id);
          console.log('PRODUCTO Categoria: ' + producto_categoria_id);
          console.log('PRODUCTO proveedor: ' + producto_proveedor_id);
          console.log('PRODUCTO precio: ' + producto_precio);
          console.log('PRODUCTO Tipo: ' + producto_producto_tipo_id);
          console.log('PRODUCTO Fecha: ' + producto_ultima_fecha);
          console.log('PRODUCTO Condicion: ' + producto_condicion_id);
          console.log('PRODUCTO Moneda: ' + producto_tipo_moneda_id);
          console.log('PRODUCTO Servicio: ' + producto_servicio_id);
          console.log('PRODUCTO Activo: ' + producto_activo);
          console.log('PRODUCTO Desc larga: ' + producto_descripcion_larga);
          _context.prev = 18;
          _context.next = 21;
          return (0, _connection.getConnection)();
        case 21:
          pool = _context.sent;
          _context.next = 24;
          return pool.request().input("producto_codigo", _connection.sql.VarChar, producto_codigo).input("producto_serie", _connection.sql.VarChar, producto_serie).input("producto_bas", _connection.sql.VarChar, producto_bas).input("producto_descripcion", _connection.sql.VarChar, producto_descripcion).input("producto_modelo", _connection.sql.VarChar, producto_modelo).input("producto_marca_id", _connection.sql.Numeric, producto_marca_id).input("producto_categoria_id", _connection.sql.Numeric, producto_categoria_id).input("producto_proveedor_id", _connection.sql.Numeric, producto_proveedor_id).input("producto_precio", _connection.sql.Decimal, producto_precio).input("producto_producto_tipo_id", _connection.sql.Numeric, producto_producto_tipo_id).input("producto_ultima_fecha", _connection.sql.VarChar, producto_ultima_fecha).input("producto_condicion_id", _connection.sql.Numeric, producto_condicion_id).input("producto_tipo_moneda_id", _connection.sql.Numeric, producto_tipo_moneda_id).input("producto_servicio_id", _connection.sql.Numeric, producto_servicio_id).input("producto_activo", _connection.sql.Numeric, producto_activo).input("producto_descripcion_larga", _connection.sql.VarChar, producto_descripcion_larga).query(_querys.queries.newProducto);
        case 24:
          _context.next = 26;
          return pool.request().query("SELECT MAX(PRODUCTO_ID) AS UltimoProductoId from PRODUCTO");
        case 26:
          ultimoProductoIdResult = _context.sent;
          ultimoProductoId = ultimoProductoIdResult.recordset[0].UltimoProductoId;
          res.json({
            message: "OK",
            ultimoProducto: ultimoProductoId
          });
          _context.next = 35;
          break;
        case 31:
          _context.prev = 31;
          _context.t0 = _context["catch"](18);
          res.status(500);
          res.send(_context.t0.message);
        case 35:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[18, 31]]);
  }));
  return function newProducto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateImagenProducto = exports.updateImagenProducto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, index, producto_imagen, buffer, pool, _pool, _pool2, _pool3;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, index = _req$body2.index, producto_imagen = _req$body2.producto_imagen;
          console.log('IMAGEN GUARDAR: ' + producto_imagen);
          buffer = _buffer.Buffer.from(producto_imagen, 'base64');
          _context2.prev = 4;
          if (!(parseInt(index) === 0)) {
            _context2.next = 15;
            break;
          }
          _context2.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context2.sent;
          _context2.next = 11;
          return pool.request().input("producto_imagen_uno", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenUnoProducto);
        case 11:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context2.next = 42;
          break;
        case 15:
          if (!(parseInt(index) === 1)) {
            _context2.next = 25;
            break;
          }
          _context2.next = 18;
          return (0, _connection.getConnection)();
        case 18:
          _pool = _context2.sent;
          _context2.next = 21;
          return _pool.request().input("producto_imagen_dos", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenDosProducto);
        case 21:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context2.next = 42;
          break;
        case 25:
          if (!(parseInt(index) === 2)) {
            _context2.next = 35;
            break;
          }
          _context2.next = 28;
          return (0, _connection.getConnection)();
        case 28:
          _pool2 = _context2.sent;
          _context2.next = 31;
          return _pool2.request().input("producto_imagen_tres", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenTresProducto);
        case 31:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context2.next = 42;
          break;
        case 35:
          _context2.next = 37;
          return (0, _connection.getConnection)();
        case 37:
          _pool3 = _context2.sent;
          _context2.next = 40;
          return _pool3.request().input("producto_imagen_cuatro", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenCuatroProducto);
        case 40:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
        case 42:
          _context2.next = 47;
          break;
        case 44:
          _context2.prev = 44;
          _context2.t0 = _context2["catch"](4);
          console.log('ERROR: ' + _context2.t0);
        case 47:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 44]]);
  }));
  return function updateImagenProducto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateProducto = exports.updateProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _req$body3, producto_codigo, producto_serie, producto_bas, producto_descripcion, producto_modelo, producto_marca_id, producto_categoria_id, producto_proveedor_id, producto_precio, producto_producto_tipo_id, producto_ultima_fecha, producto_condicion_id, producto_tipo_moneda_id, producto_servicio_id, producto_activo, producto_descripcion_larga, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _req$body3 = req.body, producto_codigo = _req$body3.producto_codigo, producto_serie = _req$body3.producto_serie, producto_bas = _req$body3.producto_bas, producto_descripcion = _req$body3.producto_descripcion, producto_modelo = _req$body3.producto_modelo, producto_marca_id = _req$body3.producto_marca_id, producto_categoria_id = _req$body3.producto_categoria_id, producto_proveedor_id = _req$body3.producto_proveedor_id, producto_precio = _req$body3.producto_precio, producto_producto_tipo_id = _req$body3.producto_producto_tipo_id, producto_ultima_fecha = _req$body3.producto_ultima_fecha, producto_condicion_id = _req$body3.producto_condicion_id, producto_tipo_moneda_id = _req$body3.producto_tipo_moneda_id, producto_servicio_id = _req$body3.producto_servicio_id, producto_activo = _req$body3.producto_activo, producto_descripcion_larga = _req$body3.producto_descripcion_larga;
          console.log('DB DESC. LARGA: ' + producto_descripcion_larga);
          _context3.prev = 4;
          _context3.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context3.sent;
          _context3.next = 10;
          return pool.request().input("producto_codigo", _connection.sql.VarChar, producto_codigo).input("producto_serie", _connection.sql.VarChar, producto_serie).input("producto_bas", _connection.sql.VarChar, producto_bas).input("producto_descripcion", _connection.sql.VarChar, producto_descripcion).input("producto_modelo", _connection.sql.VarChar, producto_modelo).input("producto_marca_id", _connection.sql.Numeric, producto_marca_id).input("producto_categoria_id", _connection.sql.Numeric, producto_categoria_id).input("producto_proveedor_id", _connection.sql.Numeric, producto_proveedor_id).input("producto_precio", _connection.sql.Decimal, producto_precio).input("producto_producto_tipo_id", _connection.sql.Numeric, producto_producto_tipo_id).input("producto_ultima_fecha", _connection.sql.VarChar, producto_ultima_fecha).input("producto_condicion_id", _connection.sql.Numeric, producto_condicion_id).input("producto_tipo_moneda_id", _connection.sql.Numeric, producto_tipo_moneda_id).input("producto_servicio_id", _connection.sql.Numeric, producto_servicio_id).input("producto_activo", _connection.sql.Numeric, producto_activo).input("producto_descripcion_larga", _connection.sql.VarChar, producto_descripcion_larga).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateProducto);
        case 10:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](4);
          res.json({
            message: _context3.t0.message
          });
          console.log('INCORRECTO: ' + _context3.t0.message);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[4, 14]]);
  }));
  return function updateProducto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteProducto = exports.deleteProducto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool;
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteProducto);
        case 7:
          res.status(200);
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send(_context4.t0.message);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function deleteProducto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var activarProducto = exports.activarProducto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, producto_activo, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          producto_activo = req.body.producto_activo;
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context5.sent;
          _context5.next = 8;
          return pool.request().input('id', _connection.sql.BigInt, id).input("producto_activo", _connection.sql.Decimal, producto_activo).query(_querys.queries.updateProducto);
        case 8:
          res.status(200);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](2);
          res.status(500);
          res.send(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 11]]);
  }));
  return function activarProducto(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getProductoId = exports.getProductoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductoId);
        case 7:
          result = _context6.sent;
          res.json(result.recordset[0]);
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
  return function getProductoId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getProductosCategoriaId = exports.getProductosCategoriaId = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id, pool, result;
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
          return pool.request().input('id', id).query(_querys.queries.getProductosCategoriaId);
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
  return function getProductosCategoriaId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getProductosProveedorId = exports.getProductosProveedorId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductosProveedorId);
        case 7:
          result = _context8.sent;
          res.json(result.recordset);
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
  return function getProductosProveedorId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getProductosRubroId = exports.getProductosRubroId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductosRubroId);
        case 7:
          result = _context9.sent;
          res.json(result.recordset);
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
  return function getProductosRubroId(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getProductos = exports.getProductos = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getProductos);
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
  return function getProductos(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getProductosCard = exports.getProductosCard = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context11.sent;
          _context11.next = 6;
          return pool.request().query(_querys.queries.getProductosCard);
        case 6:
          result = _context11.sent;
          res.json(result.recordset);
          _context11.next = 15;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context11.t0.message);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function getProductosCard(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var getProductosCategoriaIdCard = exports.getProductosCategoriaIdCard = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductosCategoriaIdCard);
        case 7:
          result = _context12.sent;
          res.json(result.recordset);
          _context12.next = 16;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context12.t0.message);
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[1, 11]]);
  }));
  return function getProductosCategoriaIdCard(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var getProductosEquipos = exports.getProductosEquipos = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context13.sent;
          _context13.next = 6;
          return pool.request().query(_querys.queries.getProductosEquipos);
        case 6:
          result = _context13.sent;
          res.json(result.recordset);
          _context13.next = 15;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context13.t0.message);
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return function getProductosEquipos(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var getProductosConsumibles = exports.getProductosConsumibles = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context14.sent;
          _context14.next = 6;
          return pool.request().query(_querys.queries.getProductosConsumibles);
        case 6:
          result = _context14.sent;
          res.json(result.recordset);
          _context14.next = 15;
          break;
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context14.t0.message);
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 10]]);
  }));
  return function getProductosConsumibles(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var getUltimoProductoId = exports.getUltimoProductoId = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context15.sent;
          _context15.next = 6;
          return pool.request().query(_querys.queries.getUltimoProductoId);
        case 6:
          result = _context15.sent;
          res.json(result.recordset[0]);
          _context15.next = 15;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context15.t0.message);
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 10]]);
  }));
  return function getUltimoProductoId(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

///////////////////////////////////////////////////////////////////////////

var getProductosEquiposClienteId = exports.getProductosEquiposClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductosEquiposClienteId);
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
  return function getProductosEquiposClienteId(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var getProductoEquipoDetalleClienteId = exports.getProductoEquipoDetalleClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductoEquipoDetalleClienteId);
        case 7:
          result = _context17.sent;
          console.log('DETALLE: ' + JSON.stringify(result.recordset[0]));
          res.json(result.recordset[0]);
          _context17.next = 17;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context17.t0.message);
        case 17:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 12]]);
  }));
  return function getProductoEquipoDetalleClienteId(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var getProductosConsumiblesClienteId = exports.getProductosConsumiblesClienteId = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          id = req.params.id;
          _context18.prev = 1;
          _context18.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context18.sent;
          _context18.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getProductosConsumiblesClienteId);
        case 7:
          result = _context18.sent;
          res.json(result.recordset);
          _context18.next = 16;
          break;
        case 11:
          _context18.prev = 11;
          _context18.t0 = _context18["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context18.t0.message);
        case 16:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 11]]);
  }));
  return function getProductosConsumiblesClienteId(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var getProductoConsumibleDetalleClienteId = exports.getProductoConsumibleDetalleClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getProductoConsumibleDetalleClienteId);
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
  return function getProductoConsumibleDetalleClienteId(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var getProductoEquipoHistorialId = exports.getProductoEquipoHistorialId = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          id = req.params.id;
          _context20.prev = 1;
          _context20.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context20.sent;
          _context20.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getProductoEquipoHistorialId);
        case 7:
          result = _context20.sent;
          res.json(result.recordset);
          _context20.next = 16;
          break;
        case 11:
          _context20.prev = 11;
          _context20.t0 = _context20["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context20.t0.message);
        case 16:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[1, 11]]);
  }));
  return function getProductoEquipoHistorialId(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();

///////////////////////////////////////////////////////////////////////////////////

var newProductoEquipoAsignar = exports.newProductoEquipoAsignar = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res) {
    var _req$body4, producto_asignado_ciente_id, producto_asignado_producto_id, producto_asignado_fecha_alta, producto_asignado_observacion, producto_asignado_importe, producto_asignado_service, producto_asignado_recomendaciones, producto_asignado_fecha_baja, producto_asignado_factura, producto_asignado_factura_tipo, pool, resultPlanes, i, planId, resultUltimoHistorial, ultimoHistorialId, resultTrabajos, j, trabajoId;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          console.log('NUEVO');
          _req$body4 = req.body, producto_asignado_ciente_id = _req$body4.producto_asignado_ciente_id, producto_asignado_producto_id = _req$body4.producto_asignado_producto_id, producto_asignado_fecha_alta = _req$body4.producto_asignado_fecha_alta, producto_asignado_observacion = _req$body4.producto_asignado_observacion, producto_asignado_importe = _req$body4.producto_asignado_importe, producto_asignado_service = _req$body4.producto_asignado_service, producto_asignado_recomendaciones = _req$body4.producto_asignado_recomendaciones, producto_asignado_fecha_baja = _req$body4.producto_asignado_fecha_baja, producto_asignado_factura = _req$body4.producto_asignado_factura, producto_asignado_factura_tipo = _req$body4.producto_asignado_factura_tipo;
          _context21.prev = 2;
          _context21.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context21.sent;
          _context21.next = 8;
          return pool.request().input("producto_asignado_ciente_id", _connection.sql.Numeric, producto_asignado_ciente_id).input("producto_asignado_producto_id", _connection.sql.Numeric, producto_asignado_producto_id).input("producto_asignado_fecha_alta", _connection.sql.VarChar, producto_asignado_fecha_alta).input("producto_asignado_observacion", _connection.sql.VarChar, producto_asignado_observacion).input("producto_asignado_importe", _connection.sql.Float, producto_asignado_importe).input("producto_asignado_service", _connection.sql.VarChar, producto_asignado_service).input("producto_asignado_recomendaciones", _connection.sql.VarChar, producto_asignado_recomendaciones).input("producto_asignado_fecha_baja", _connection.sql.VarChar, producto_asignado_fecha_baja).input("producto_asignado_factura", _connection.sql.NVarChar, producto_asignado_factura).input("producto_asignado_factura_tipo", _connection.sql.VarChar, producto_asignado_factura_tipo).query(_querys.queries.newProductoEquipoAsignar);
        case 8:
          _context21.next = 10;
          return pool.request().input("id", _connection.sql.Numeric, producto_asignado_producto_id).query(_querys.queries.getPlanesMantenimientoProductoId);
        case 10:
          resultPlanes = _context21.sent;
          if (!(resultPlanes.recordset.length > 0)) {
            _context21.next = 36;
            break;
          }
          i = 0;
        case 13:
          if (!(i < resultPlanes.recordset.length)) {
            _context21.next = 36;
            break;
          }
          planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;
          _context21.next = 17;
          return pool.request().input("plan_historial_producto_id", _connection.sql.Numeric, producto_asignado_producto_id).input("plan_historial_cliente_id", _connection.sql.Numeric, producto_asignado_ciente_id).input("plan_historial_plan_id", _connection.sql.Numeric, parseInt(planId)).input("plan_historial_fecha", _connection.sql.VarChar, null).input("plan_historial_observacion", _connection.sql.NVarChar, '').query(_querys.queries.newPlanMantenimientoHistorial);
        case 17:
          _context21.next = 19;
          return pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) + 1 AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL");
        case 19:
          resultUltimoHistorial = _context21.sent;
          ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId;
          _context21.next = 23;
          return pool.request().input("id", _connection.sql.Numeric, planId).query(_querys.queries.getTrabajosPlanMantenimiento);
        case 23:
          resultTrabajos = _context21.sent;
          if (!(resultTrabajos.recordset.length > 0)) {
            _context21.next = 33;
            break;
          }
          j = 0;
        case 26:
          if (!(j < resultTrabajos.recordset.length)) {
            _context21.next = 33;
            break;
          }
          trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;
          _context21.next = 30;
          return pool.request().input("plan_mantenimiento_historial_id", _connection.sql.Numeric, ultimoHistorialId).input("plan_mantenimiento_trabajo_id", _connection.sql.Numeric, trabajoId).input("plan_mantenimiento_estado", _connection.sql.Bit, 0).input("plan_mantenimiento_fecha", _connection.sql.VarChar, null).query(_querys.queries.newPlanMantenimientoHistorialDetalle);
        case 30:
          j++;
          _context21.next = 26;
          break;
        case 33:
          i++;
          _context21.next = 13;
          break;
        case 36:
          res.json({
            message: "OK"
          });
          _context21.next = 43;
          break;
        case 39:
          _context21.prev = 39;
          _context21.t0 = _context21["catch"](2);
          res.status(500);
          res.send(_context21.t0.message);
        case 43:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[2, 39]]);
  }));
  return function newProductoEquipoAsignar(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var updateProductoEquipoAsignar = exports.updateProductoEquipoAsignar = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res) {
    var id, _req$body5, producto_asignado_ciente_id, producto_asignado_producto_id, producto_asignado_fecha_alta, producto_asignado_observacion, producto_asignado_importe, producto_asignado_service, producto_asignado_recomendaciones, producto_asignado_fecha_baja, producto_asignado_factura, producto_asignado_factura_tipo, pool;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _req$body5 = req.body, producto_asignado_ciente_id = _req$body5.producto_asignado_ciente_id, producto_asignado_producto_id = _req$body5.producto_asignado_producto_id, producto_asignado_fecha_alta = _req$body5.producto_asignado_fecha_alta, producto_asignado_observacion = _req$body5.producto_asignado_observacion, producto_asignado_importe = _req$body5.producto_asignado_importe, producto_asignado_service = _req$body5.producto_asignado_service, producto_asignado_recomendaciones = _req$body5.producto_asignado_recomendaciones, producto_asignado_fecha_baja = _req$body5.producto_asignado_fecha_baja, producto_asignado_factura = _req$body5.producto_asignado_factura, producto_asignado_factura_tipo = _req$body5.producto_asignado_factura_tipo;
          _context22.prev = 3;
          _context22.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context22.sent;
          _context22.next = 9;
          return pool.request().input("producto_asignado_ciente_id", _connection.sql.Numeric, producto_asignado_ciente_id).input("producto_asignado_producto_id", _connection.sql.Numeric, producto_asignado_producto_id).input("producto_asignado_fecha_alta", _connection.sql.VarChar, producto_asignado_fecha_alta).input("producto_asignado_observacion", _connection.sql.VarChar, producto_asignado_observacion).input("producto_asignado_importe", _connection.sql.Float, producto_asignado_importe).input("producto_asignado_service", _connection.sql.VarChar, producto_asignado_service).input("producto_asignado_recomendaciones", _connection.sql.VarChar, producto_asignado_recomendaciones).input("producto_asignado_fecha_baja", _connection.sql.VarChar, producto_asignado_fecha_baja).input("producto_asignado_factura", _connection.sql.NVarChar, producto_asignado_factura).input("producto_asignado_factura_tipo", _connection.sql.VarChar, producto_asignado_factura_tipo).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateProductoEquipoAsignar);
        case 9:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context22.next = 17;
          break;
        case 13:
          _context22.prev = 13;
          _context22.t0 = _context22["catch"](3);
          res.json({
            message: _context22.t0.message
          });
          console.log('INCORRECTO: ' + _context22.t0.message);
        case 17:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[3, 13]]);
  }));
  return function updateProductoEquipoAsignar(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var deleteProductoEquipoAsignar = exports.deleteProductoEquipoAsignar = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteProductoEquipoAsignar);
        case 7:
          res.status(200);
          _context23.next = 14;
          break;
        case 10:
          _context23.prev = 10;
          _context23.t0 = _context23["catch"](1);
          res.status(500);
          res.send(_context23.t0.message);
        case 14:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[1, 10]]);
  }));
  return function deleteProductoEquipoAsignar(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var sincronizarProductosEquipo = exports.sincronizarProductosEquipo = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res) {
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          (0, _objectDestructuringEmpty2["default"])(req.params);
        case 1:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function sincronizarProductosEquipo(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();

/////////////////////////////////////////////////////////////////////

var getCaracteristicasProductoId = exports.getCaracteristicasProductoId = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          id = req.params.id;
          _context25.prev = 1;
          _context25.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context25.sent;
          _context25.next = 7;
          return pool.request().input('id', id).query(_querys.queries.getCaracteristicasProductoId);
        case 7:
          result = _context25.sent;
          res.json(result.recordset);
          _context25.next = 15;
          break;
        case 11:
          _context25.prev = 11;
          _context25.t0 = _context25["catch"](1);
          res.status(500);
          res.send(_context25.t0.message);
        case 15:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[1, 11]]);
  }));
  return function getCaracteristicasProductoId(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var newCaracteristicaProducto = exports.newCaracteristicaProducto = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res) {
    var _req$body6, caracteristica_producto_id, caracteristica_descripcion, pool;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          console.log('NUEVO');
          _req$body6 = req.body, caracteristica_producto_id = _req$body6.caracteristica_producto_id, caracteristica_descripcion = _req$body6.caracteristica_descripcion;
          _context26.prev = 2;
          _context26.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context26.sent;
          _context26.next = 8;
          return pool.request().input("caracteristica_producto_id", _connection.sql.Numeric, caracteristica_producto_id).input("caracteristica_descripcion", _connection.sql.VarChar, caracteristica_descripcion).query(_querys.queries.newCaracteristicaProducto);
        case 8:
          res.json({
            message: "OK"
          });
          _context26.next = 15;
          break;
        case 11:
          _context26.prev = 11;
          _context26.t0 = _context26["catch"](2);
          res.status(500);
          res.send(_context26.t0.message);
        case 15:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[2, 11]]);
  }));
  return function newCaracteristicaProducto(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var updateCaracteristicaProductoId = exports.updateCaracteristicaProductoId = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res) {
    var id, caracteristica_descripcion, pool;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          caracteristica_descripcion = req.body.caracteristica_descripcion;
          _context27.prev = 3;
          _context27.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context27.sent;
          _context27.next = 9;
          return pool.request().input("caracteristica_descripcion", _connection.sql.VarChar, caracteristica_descripcion).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateCaracteristicaProductoId);
        case 9:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context27.next = 17;
          break;
        case 13:
          _context27.prev = 13;
          _context27.t0 = _context27["catch"](3);
          res.json({
            message: _context27.t0.message
          });
          console.log('INCORRECTO: ' + _context27.t0.message);
        case 17:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[3, 13]]);
  }));
  return function updateCaracteristicaProductoId(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var deleteCaracteristicaProductoId = exports.deleteCaracteristicaProductoId = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          id = req.params.id;
          _context28.prev = 1;
          _context28.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context28.sent;
          _context28.next = 7;
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteCaracteristicaProductoId);
        case 7:
          res.status(200).json({
            message: "OK"
          });
          _context28.next = 14;
          break;
        case 10:
          _context28.prev = 10;
          _context28.t0 = _context28["catch"](1);
          res.status(500);
          res.send(_context28.t0.message);
        case 14:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[1, 10]]);
  }));
  return function deleteCaracteristicaProductoId(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();

//const multer = require('multer');
//const upload = multer({ dest: 'archivos_app/' });

var path = require('path');
var fs = require('fs');
/*
export const saveProductoEquipoAsignar = async (req, res) => {
    let correcto = true
    //const productoAsignado = req.body;
    
    const producto_asignado_ciente_id = req.body.producto_asignado_ciente_id
    const producto_asignado_producto_id = req.body.producto_asignado_producto_id
    const producto_asignado_fecha_alta = req.body.producto_asignado_fecha_alta
    const producto_asignado_observacion = req.body.producto_asignado_observacion
    const producto_asignado_importe = req.body.producto_asignado_importe
    const producto_asignado_service = req.body.producto_asignado_service 
    const producto_asignado_recomendaciones  = req.body.producto_asignado_recomendaciones
    const producto_asignado_fecha_baja = req.body.producto_asignado_fecha_baja
    const producto_asignado_factura = req.body.producto_asignado_factura
    const producto_asignado_factura_tipo = req.body.producto_asignado_factura_tipo 
    
    // Obtener datos del archivo
    const file = req.file;
    console.log('FILE PARAM: '+file)
    const filePath = file.path; // Ruta temporal del archivo
    const originalFileName = file.originalname; 

    console.log('DATOS: '+producto_asignado_ciente_id+' - '+producto_asignado_producto_id+' - '+producto_asignado_fecha_alta+' - '+producto_asignado_factura)
    console.log('FILE: '+file)
/*
    const {
        producto_asignado_ciente_id, 
        producto_asignado_producto_id, 
        producto_asignado_fecha_alta, 
        producto_asignado_observacion, 
        producto_asignado_importe, 
        producto_asignado_service, 
        producto_asignado_recomendaciones, 
        producto_asignado_fecha_baja, 
        producto_asignado_factura, 
        producto_asignado_factura_tipo
    } = productoAsignado; 
*/
/*
    try { 
        const pool = await getConnection(); 
        await pool.request() 
            .input("producto_asignado_ciente_id", sql.Numeric, producto_asignado_ciente_id) 
            .input("producto_asignado_producto_id", sql.Numeric, producto_asignado_producto_id) 
            .input("producto_asignado_fecha_alta", sql.VarChar, producto_asignado_fecha_alta) 
            .input("producto_asignado_observacion", sql.VarChar, producto_asignado_observacion) 
            .input("producto_asignado_importe", sql.Float, producto_asignado_importe) 
            .input("producto_asignado_service", sql.VarChar, producto_asignado_service) 
            .input("producto_asignado_recomendaciones", sql.VarChar, producto_asignado_recomendaciones) 
            .input("producto_asignado_fecha_baja", sql.VarChar, producto_asignado_fecha_baja)   
            .input("producto_asignado_factura", sql.NVarChar, producto_asignado_factura)   
            .input("producto_asignado_factura_tipo", sql.VarChar, producto_asignado_factura_tipo)
            .query(queries.newProductoEquipoAsignar); 

        const resultUltimaAsignacion = await pool.request().query("SELECT COALESCE(MAX(PRODUCTO_ASIGNADO_ID), 0) + 1 AS UltimaAsignacionId from PRODUCTO_ASIGNADO") 
        const ultimaAsignacionId = resultUltimaAsignacion.recordset[0].UltimaAsignacionId; 
        
/*        const file = req.file;

        // Aquí construyes el path al archivo guardado en el servidor
        const filePath = path.join(__dirname, '..', 'facturas_app', file.filename);

        // Lee el archivo temporal y guárdalo en el servidor
        fs.readFile(file.path, (err, data) => {
            if (err) { 
                correcto = false
                throw err;
            }

            // Escribe los datos en el nuevo archivo
            fs.writeFile(filePath, data, (err) => {
                if (err) { 
                    correcto = false
                    throw err;
                }
                console.log('El archivo se ha guardado correctamente en el servidor.'); 
                correcto = true
            });
        });
*/
/*
        const file = req.file;
        console.log('FILE erq: '+file)
        // Ruta temporal del archivo
        const tempFilePath = file.path;

        // Nombre original del archivo
        const originalFileName = file.originalname;

        // Directorio donde se guardarán los archivos
        const uploadDir = 'facturas_app/';

        // Ruta donde se guardará el archivo en el servidor
        const filePath = `${uploadDir}${originalFileName}`;

        // Lee el archivo temporal y guárdalo en el servidor
        fs.readFile(tempFilePath, (err, data) => {
            if (err) { 
                correcto = false
                throw err;
            }

            // Escribe los datos en el nuevo archivo
            fs.writeFile(filePath, data, (err) => {
                if (err) { 
                    correcto = false
                    throw err;
                }
                correcto = true
                console.log('El archivo se ha guardado correctamente en el servidor.');
                
                // Resto del código para guardar los datos en la base de datos...
            });
        });
        //actualizo correcto
        if (correcto) {
            // actualizar path factura en producto_asignado 
            await pool.request() 
                .input("producto_asignado_factura", sql.NVarChar, filePath)   
                .input("id", sql.Numeric, ultimaAsignacionId)
                .query(queries.updateProductoEquipoAsignarFactura); 
            console.log('ACTUALIZO PATH FACTURA CORRECTO')
        }

        const resultPlanes = await pool.request() 
            .input("id", sql.Numeric, producto_asignado_producto_id) 
            .query(queries.getPlanesMantenimientoProductoId) 

        if (resultPlanes.recordset.length > 0) {
            for (let i = 0; i < resultPlanes.recordset.length; i++) {
                let planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;
        
                await pool.request()
                    .input("plan_historial_producto_id", sql.Numeric, producto_asignado_producto_id)
                    .input("plan_historial_cliente_id", sql.Numeric, producto_asignado_ciente_id)
                    .input("plan_historial_plan_id", sql.Numeric, parseInt(planId))
                    .input("plan_historial_fecha", sql.VarChar, null)
                    .input("plan_historial_observacion", sql.NVarChar, '')
                    .query(queries.newPlanMantenimientoHistorial);

                const resultUltimoHistorial = await pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) + 1 AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL") 
                const ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId;         
    
                const resultTrabajos = await pool.request()
                    .input("id", sql.Numeric, planId)
                    .query(queries.getTrabajosPlanMantenimiento)

                if (resultTrabajos.recordset.length > 0) {
                    for (let j = 0; j < resultTrabajos.recordset.length; j++) {
                        let trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;

                        await pool.request()
                            .input("plan_mantenimiento_historial_id", sql.Numeric, ultimoHistorialId)
                            .input("plan_mantenimiento_trabajo_id", sql.Numeric, trabajoId)
                            .input("plan_mantenimiento_estado", sql.Bit, 0)
                            .input("plan_mantenimiento_fecha", sql.VarChar, null)
                            .query(queries.newPlanMantenimientoHistorialDetalle);
                    }
                }
            }
        }

        res.json({ message: "OK" });
    } 
    catch (error) { 
        res.status(500); 
        res.send(error.message); 
    }  
};
*/

var saveProductoEquipoAsignar = exports.saveProductoEquipoAsignar = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res) {
    var _req$body7, producto_asignado_id, producto_asignado_ciente_id, producto_asignado_producto_id, producto_asignado_fecha_alta, producto_asignado_observacion, producto_asignado_importe, producto_asignado_service, producto_asignado_recomendaciones, producto_asignado_fecha_baja, producto_asignado_factura, producto_asignado_factura_tipo, pool, resultUltimaAsignacion, ultimaAsignacionId, filePath, resultPlanes, i, planId, resultUltimoHistorial, ultimoHistorialId, resultTrabajos, j, trabajoId;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          console.log('FILE: ' + JSON.stringify(req.file));
          console.log('BODY: ' + JSON.stringify(req.body));
          _context29.prev = 2;
          // Verifica si se ha cargado correctamente el archivo
          /*        if (!req.file) {
                      // Si no se ha cargado correctamente el archivo, envía un mensaje de error
                      return res.status(400).send('Error: No se ha cargado ningún archivo.');
                  }
          */
          // Obtiene los datos del cuerpo de la solicitud
          _req$body7 = req.body, producto_asignado_id = _req$body7.producto_asignado_id, producto_asignado_ciente_id = _req$body7.producto_asignado_ciente_id, producto_asignado_producto_id = _req$body7.producto_asignado_producto_id, producto_asignado_fecha_alta = _req$body7.producto_asignado_fecha_alta, producto_asignado_observacion = _req$body7.producto_asignado_observacion, producto_asignado_importe = _req$body7.producto_asignado_importe, producto_asignado_service = _req$body7.producto_asignado_service, producto_asignado_recomendaciones = _req$body7.producto_asignado_recomendaciones, producto_asignado_fecha_baja = _req$body7.producto_asignado_fecha_baja, producto_asignado_factura = _req$body7.producto_asignado_factura, producto_asignado_factura_tipo = _req$body7.producto_asignado_factura_tipo;
          _context29.prev = 4;
          if (!(producto_asignado_id && producto_asignado_id > 0)) {
            _context29.next = 8;
            break;
          }
          _context29.next = 53;
          break;
        case 8:
          _context29.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context29.sent;
          _context29.next = 13;
          return pool.request().input("producto_asignado_ciente_id", _connection.sql.Numeric, parseInt(producto_asignado_ciente_id)).input("producto_asignado_producto_id", _connection.sql.Numeric, parseInt(producto_asignado_producto_id)).input("producto_asignado_fecha_alta", _connection.sql.VarChar, producto_asignado_fecha_alta === "null" ? null : producto_asignado_fecha_alta).input("producto_asignado_observacion", _connection.sql.VarChar, producto_asignado_observacion === "null" ? null : producto_asignado_observacion).input("producto_asignado_importe", _connection.sql.Float, parseFloat(producto_asignado_importe)).input("producto_asignado_service", _connection.sql.VarChar, producto_asignado_service === "null" ? null : producto_asignado_service).input("producto_asignado_recomendaciones", _connection.sql.VarChar, producto_asignado_recomendaciones === "null" ? null : producto_asignado_recomendaciones).input("producto_asignado_fecha_baja", _connection.sql.VarChar, producto_asignado_fecha_baja === "null" ? null : producto_asignado_fecha_baja).input("producto_asignado_factura", _connection.sql.NVarChar, producto_asignado_factura === "null" ? null : producto_asignado_factura).input("producto_asignado_factura_tipo", _connection.sql.VarChar, producto_asignado_factura_tipo === "null" ? null : producto_asignado_factura_tipo).query(_querys.queries.newProductoEquipoAsignar);
        case 13:
          _context29.next = 15;
          return pool.request().query("SELECT COALESCE(MAX(PRODUCTO_ASIGNADO_ID), 1) AS UltimaAsignacionId from PRODUCTO_ASIGNADO");
        case 15:
          resultUltimaAsignacion = _context29.sent;
          ultimaAsignacionId = resultUltimaAsignacion.recordset[0].UltimaAsignacionId; //const filePath = req.file.path;
          //console.log('ULTIMO ASIGNADO: '+ultimaAsignacionId)
          //console.log('FILE PATH: '+filePath)
          //const filePath = directorioFacturas+'//'+req.file.filename
          filePath = req.file.filename;
          console.log('FILE PATH: ' + filePath);
          _context29.next = 21;
          return pool.request().input("producto_asignado_factura", _connection.sql.NVarChar, filePath).input("id", _connection.sql.Numeric, ultimaAsignacionId).query(_querys.queries.updateProductoEquipoAsignarFactura);
        case 21:
          console.log('ACTUALIZO PARH');
          _context29.next = 24;
          return pool.request().input("id", _connection.sql.Numeric, producto_asignado_producto_id).query(_querys.queries.getPlanesMantenimientoProductoId);
        case 24:
          resultPlanes = _context29.sent;
          console.log('PLANES PRODUCTO: ' + resultPlanes.recordset.length);
          if (!(resultPlanes.recordset.length > 0)) {
            _context29.next = 53;
            break;
          }
          i = 0;
        case 28:
          if (!(i < resultPlanes.recordset.length)) {
            _context29.next = 53;
            break;
          }
          planId = resultPlanes.recordset[i].PLAN_MANTENIMIENTO_ID;
          _context29.next = 32;
          return pool.request().input("plan_historial_producto_id", _connection.sql.Numeric, ultimaAsignacionId).input("plan_historial_cliente_id", _connection.sql.Numeric, producto_asignado_ciente_id).input("plan_historial_plan_id", _connection.sql.Numeric, parseInt(planId)).input("plan_historial_fecha", _connection.sql.VarChar, null).input("plan_historial_observacion", _connection.sql.NVarChar, '').query(_querys.queries.newPlanMantenimientoHistorial);
        case 32:
          _context29.next = 34;
          return pool.request().query("SELECT COALESCE(MAX(PLAN_MANTENIMIENTO_HISTORIAL_ID), 0) AS UltimoPlanId from PLAN_MANTENIMIENTO_HISTORIAL");
        case 34:
          resultUltimoHistorial = _context29.sent;
          ultimoHistorialId = resultUltimoHistorial.recordset[0].UltimoPlanId;
          console.log('ULTIMO HISTORIAL: ' + ultimoHistorialId);
          _context29.next = 39;
          return pool.request().input("id", _connection.sql.Numeric, planId).query(_querys.queries.getTrabajosPlanMantenimiento);
        case 39:
          resultTrabajos = _context29.sent;
          console.log('TRABAJOS PLAN: ' + resultTrabajos.recordset.length);
          if (!(resultTrabajos.recordset.length > 0)) {
            _context29.next = 50;
            break;
          }
          j = 0;
        case 43:
          if (!(j < resultTrabajos.recordset.length)) {
            _context29.next = 50;
            break;
          }
          trabajoId = resultTrabajos.recordset[j].PLAN_MANTENIMIENTO_TRABAJO_TRABAJO_ID;
          _context29.next = 47;
          return pool.request().input("plan_mantenimiento_historial_id", _connection.sql.Numeric, ultimoHistorialId).input("plan_mantenimiento_trabajo_id", _connection.sql.Numeric, trabajoId).input("plan_mantenimiento_estado", _connection.sql.Bit, 0).input("plan_mantenimiento_fecha", _connection.sql.VarChar, null).query(_querys.queries.newPlanMantenimientoHistorialDetalle);
        case 47:
          j++;
          _context29.next = 43;
          break;
        case 50:
          i++;
          _context29.next = 28;
          break;
        case 53:
          _context29.next = 59;
          break;
        case 55:
          _context29.prev = 55;
          _context29.t0 = _context29["catch"](4);
          // Si ocurre un error, envía un mensaje de error
          console.error('Error al guardar producto asignado:', _context29.t0);
          res.status(500).send('Error interno del servidor.');
        case 59:
          console.log('FINALIZO CORRECTO...');
          res.json({
            message: "OK"
          });
          _context29.next = 67;
          break;
        case 63:
          _context29.prev = 63;
          _context29.t1 = _context29["catch"](2);
          // Si ocurre un error, envía un mensaje de error
          console.error('Error al guardar los datos:', _context29.t1);
          res.status(500).send('Error interno del servidor.');
        case 67:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[2, 63], [4, 55]]);
  }));
  return function saveProductoEquipoAsignar(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();