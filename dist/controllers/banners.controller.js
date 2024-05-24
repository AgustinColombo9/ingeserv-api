"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBanner = exports.newBanner = exports.getVentanas = exports.getBannersEstadoId = exports.getBanners = exports.getBannerId = exports.deleteBanner = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var newBanner = exports.newBanner = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, banners_cab_id, banners_titulo, banners_titulo_color, banners_titulo_tamanio, banners_titulo_pos_vertical, banners_titulo_pos_horizontal, banners_descripcion, banners_descripcion_color, banners_descripcion_tamanio, banners_descripcion_pos_vertical, banners_descripcion_pos_horizontal, banners_borde_color, banners_accion, banners_accion_celular, banners_link, banners_ventana_id, banners_producto_id, banners_boton_activo, banners_boton_accion, banners_boton_borde, banners_boton_fondo, banners_fondo_color, banners_fondo_imagen, banners_boton_label, banners_boton_label_color, banners_boton_pos_vertical, banners_boton_pos_horizontal, banners_estado, banners_fecha, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, banners_cab_id = _req$body.banners_cab_id, banners_titulo = _req$body.banners_titulo, banners_titulo_color = _req$body.banners_titulo_color, banners_titulo_tamanio = _req$body.banners_titulo_tamanio, banners_titulo_pos_vertical = _req$body.banners_titulo_pos_vertical, banners_titulo_pos_horizontal = _req$body.banners_titulo_pos_horizontal, banners_descripcion = _req$body.banners_descripcion, banners_descripcion_color = _req$body.banners_descripcion_color, banners_descripcion_tamanio = _req$body.banners_descripcion_tamanio, banners_descripcion_pos_vertical = _req$body.banners_descripcion_pos_vertical, banners_descripcion_pos_horizontal = _req$body.banners_descripcion_pos_horizontal, banners_borde_color = _req$body.banners_borde_color, banners_accion = _req$body.banners_accion, banners_accion_celular = _req$body.banners_accion_celular, banners_link = _req$body.banners_link, banners_ventana_id = _req$body.banners_ventana_id, banners_producto_id = _req$body.banners_producto_id, banners_boton_activo = _req$body.banners_boton_activo, banners_boton_accion = _req$body.banners_boton_accion, banners_boton_borde = _req$body.banners_boton_borde, banners_boton_fondo = _req$body.banners_boton_fondo, banners_fondo_color = _req$body.banners_fondo_color, banners_fondo_imagen = _req$body.banners_fondo_imagen, banners_boton_label = _req$body.banners_boton_label, banners_boton_label_color = _req$body.banners_boton_label_color, banners_boton_pos_vertical = _req$body.banners_boton_pos_vertical, banners_boton_pos_horizontal = _req$body.banners_boton_pos_horizontal, banners_estado = _req$body.banners_estado, banners_fecha = _req$body.banners_fecha;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("banners_cab_id", _connection.sql.Numeric, banners_cab_id).input("banners_titulo", _connection.sql.VarChar, banners_titulo).input("banners_titulo_color", _connection.sql.VarChar, banners_titulo_color).input("banners_titulo_tamanio", _connection.sql.Numeric, banners_titulo_tamanio).input("banners_titulo_pos_vertical", _connection.sql.VarChar, banners_titulo_pos_vertical).input("banners_titulo_pos_horizontal", _connection.sql.VarChar, banners_titulo_pos_horizontal).input("banners_descripcion", _connection.sql.VarChar, banners_descripcion).input("banners_descripcion_color", _connection.sql.VarChar, banners_descripcion_color).input("banners_descripcion_tamanio", _connection.sql.Numeric, banners_descripcion_tamanio).input("banners_descripcion_pos_vertical", _connection.sql.VarChar, banners_descripcion_pos_vertical).input("banners_descripcion_pos_horizontal", _connection.sql.VarChar, banners_descripcion_pos_horizontal).input("banners_borde_color", _connection.sql.VarChar, banners_borde_color).input("banners_accion", _connection.sql.VarChar, banners_accion).input("banners_accion_celular", _connection.sql.VarChar, banners_accion_celular).input("banners_link", _connection.sql.VarChar, banners_link).input("banners_ventana_id", _connection.sql.Numeric, banners_ventana_id).input("banners_producto_id", _connection.sql.Numeric, banners_producto_id).input("banners_boton_activo", _connection.sql.Bit, banners_boton_activo).input("banners_boton_accion", _connection.sql.VarChar, banners_boton_accion).input("banners_boton_borde", _connection.sql.VarChar, banners_boton_borde).input("banners_boton_fondo", _connection.sql.VarChar, banners_boton_fondo).input("banners_fondo_color", _connection.sql.VarChar, banners_fondo_color).input("banners_fondo_imagen", _connection.sql.VarChar, banners_fondo_imagen).input("banners_boton_label", _connection.sql.VarChar, banners_boton_label).input("banners_boton_label_color", _connection.sql.VarChar, banners_boton_label_color).input("banners_boton_pos_vertical", _connection.sql.VarChar, banners_boton_pos_vertical).input("banners_boton_pos_horizontal", _connection.sql.VarChar, banners_boton_pos_horizontal).input("banners_estado", _connection.sql.Bit, banners_estado).input("banners_fecha", _connection.sql.VarChar, banners_fecha).query(_querys.queries.newBanner);
        case 7:
          res.json({
            message: "OK"
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error('Error al procesar la solicitud:', _context.t0);
          res.status(500).json({
            error: 'Error interno del servidor'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function newBanner(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateBanner = exports.updateBanner = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, banners_cab_id, banners_titulo, banners_titulo_color, banners_titulo_tamanio, banners_titulo_pos_vertical, banners_titulo_pos_horizontal, banners_descripcion, banners_descripcion_color, banners_descripcion_tamanio, banners_descripcion_pos_vertical, banners_descripcion_pos_horizontal, banners_borde_color, banners_accion, banners_accion_celular, banners_link, banners_ventana_id, banners_producto_id, banners_boton_activo, banners_boton_accion, banners_boton_color, banners_boton_borde, banners_boton_fondo, banners_fondo_color, banners_fondo_imagen, banners_boton_label, banners_boton_label_color, banners_boton_pos_vertical, banners_boton_pos_horizontal, banners_estado, banners_fecha, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _req$body2 = req.body, banners_cab_id = _req$body2.banners_cab_id, banners_titulo = _req$body2.banners_titulo, banners_titulo_color = _req$body2.banners_titulo_color, banners_titulo_tamanio = _req$body2.banners_titulo_tamanio, banners_titulo_pos_vertical = _req$body2.banners_titulo_pos_vertical, banners_titulo_pos_horizontal = _req$body2.banners_titulo_pos_horizontal, banners_descripcion = _req$body2.banners_descripcion, banners_descripcion_color = _req$body2.banners_descripcion_color, banners_descripcion_tamanio = _req$body2.banners_descripcion_tamanio, banners_descripcion_pos_vertical = _req$body2.banners_descripcion_pos_vertical, banners_descripcion_pos_horizontal = _req$body2.banners_descripcion_pos_horizontal, banners_borde_color = _req$body2.banners_borde_color, banners_accion = _req$body2.banners_accion, banners_accion_celular = _req$body2.banners_accion_celular, banners_link = _req$body2.banners_link, banners_ventana_id = _req$body2.banners_ventana_id, banners_producto_id = _req$body2.banners_producto_id, banners_boton_activo = _req$body2.banners_boton_activo, banners_boton_accion = _req$body2.banners_boton_accion, banners_boton_color = _req$body2.banners_boton_color, banners_boton_borde = _req$body2.banners_boton_borde, banners_boton_fondo = _req$body2.banners_boton_fondo, banners_fondo_color = _req$body2.banners_fondo_color, banners_fondo_imagen = _req$body2.banners_fondo_imagen, banners_boton_label = _req$body2.banners_boton_label, banners_boton_label_color = _req$body2.banners_boton_label_color, banners_boton_pos_vertical = _req$body2.banners_boton_pos_vertical, banners_boton_pos_horizontal = _req$body2.banners_boton_pos_horizontal, banners_estado = _req$body2.banners_estado, banners_fecha = _req$body2.banners_fecha;
          _context2.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input("banners_cab_id", _connection.sql.Numeric, banners_cab_id).input("banners_titulo", _connection.sql.VarChar, banners_titulo).input("banners_titulo_color", _connection.sql.VarChar, banners_titulo_color).input("banners_titulo_tamanio", _connection.sql.Numeric, banners_titulo_tamanio).input("banners_titulo_pos_vertical", _connection.sql.VarChar, banners_titulo_pos_vertical).input("banners_titulo_pos_horizontal", _connection.sql.VarChar, banners_titulo_pos_horizontal).input("banners_descripcion", _connection.sql.VarChar, banners_descripcion).input("banners_descripcion_color", _connection.sql.VarChar, banners_descripcion_color).input("banners_descripcion_tamanio", _connection.sql.Numeric, banners_descripcion_tamanio).input("banners_descripcion_pos_vertical", _connection.sql.VarChar, banners_descripcion_pos_vertical).input("banners_descripcion_pos_horizontal", _connection.sql.VarChar, banners_descripcion_pos_horizontal).input("banners_borde_color", _connection.sql.VarChar, banners_borde_color).input("banners_accion", _connection.sql.VarChar, banners_accion).input("banners_accion_celular", _connection.sql.VarChar, banners_accion_celular).input("banners_link", _connection.sql.VarChar, banners_link).input("banners_ventana_id", _connection.sql.Numeric, banners_ventana_id).input("banners_producto_id", _connection.sql.Numeric, banners_producto_id).input("banners_boton_activo", _connection.sql.Bit, banners_boton_activo).input("banners_boton_accion", _connection.sql.VarChar, banners_boton_accion).input("banners_boton_borde", _connection.sql.VarChar, banners_boton_borde).input("banners_boton_fondo", _connection.sql.VarChar, banners_boton_fondo).input("banners_fondo_color", _connection.sql.VarChar, banners_fondo_color).input("banners_fondo_imagen", _connection.sql.VarChar, banners_fondo_imagen).input("banners_boton_label", _connection.sql.VarChar, banners_boton_label).input("banners_boton_label_color", _connection.sql.VarChar, banners_boton_label_color).input("banners_boton_pos_vertical", _connection.sql.VarChar, banners_boton_pos_vertical).input("banners_boton_pos_horizontal", _connection.sql.VarChar, banners_boton_pos_horizontal).input("banners_estado", _connection.sql.Bit, banners_estado).input("banners_fecha", _connection.sql.VarChar, banners_fecha).input("id", _connection.sql.Numeric, id).query(_querys.queries.updateBanner);
        case 8:
          res.json({
            message: "OK"
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error('Error al procesar la solicitud:', _context2.t0);
          res.status(500).json({
            error: 'Error interno del servidor'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return function updateBanner(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteBanner = exports.deleteBanner = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteBanner);
        case 7:
          res.status(200).json({
            message: "OK"
          });
          _context3.next = 15;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function deleteBanner(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getBanners = exports.getBanners = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getBanners);
        case 6:
          result = _context4.sent;
          res.status(200).json(result.recordset);
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
  return function getBanners(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getBannerId = exports.getBannerId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getBannerId);
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
  return function getBannerId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getBannersEstadoId = exports.getBannersEstadoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getBannersEstadoId);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
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
  return function getBannersEstadoId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getVentanas = exports.getVentanas = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context7.sent;
          _context7.next = 6;
          return pool.request().query(_querys.queries.getVentanas);
        case 6:
          result = _context7.sent;
          res.json(result.recordset);
          _context7.next = 15;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context7.t0.message);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getVentanas(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();