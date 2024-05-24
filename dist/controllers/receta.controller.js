"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReceta = exports.updateImagenReceta = exports.updateFile = exports.newReceta = exports.getRecetasEstadoId = exports.getRecetasClienteId = exports.getRecetasClienteEstadoId = exports.getRecetaId = exports.getEstadosReceta = exports.deleteReceta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var _buffer = require("buffer");
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var newReceta = exports.newReceta = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, receta_fecha, receta_cliente_id, receta_estado_id, receta_descripcion, receta_autorizo, receta_observacion, pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('NUEVO');
          _req$body = req.body, receta_fecha = _req$body.receta_fecha, receta_cliente_id = _req$body.receta_cliente_id, receta_estado_id = _req$body.receta_estado_id, receta_descripcion = _req$body.receta_descripcion, receta_autorizo = _req$body.receta_autorizo, receta_observacion = _req$body.receta_observacion;
          console.log('RECECTA NUEVA: ' + receta_fecha + '  -  ' + receta_cliente_id);
          _context.prev = 3;
          _context.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context.sent;
          _context.next = 9;
          return pool.request().input("receta_fecha", _connection.sql.VarChar, receta_fecha).input("receta_cliente_id", _connection.sql.Numeric, receta_cliente_id).input("receta_estado_id", _connection.sql.Numeric, receta_estado_id).input("receta_descripcion", _connection.sql.VarChar, receta_descripcion).input("receta_autorizo", _connection.sql.VarChar, receta_autorizo).input("receta_observacion", _connection.sql.VarChar, receta_observacion).query(_querys.queries.newReceta);
        case 9:
          res.json({
            message: "OK"
          });
          _context.next = 16;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](3);
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 12]]);
  }));
  return function newReceta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateReceta = exports.updateReceta = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, _req$body2, receta_fecha, receta_cliente_id, receta_estado_id, receta_descripcion, receta_autorizo, receta_observacion, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _req$body2 = req.body, receta_fecha = _req$body2.receta_fecha, receta_cliente_id = _req$body2.receta_cliente_id, receta_estado_id = _req$body2.receta_estado_id, receta_descripcion = _req$body2.receta_descripcion, receta_autorizo = _req$body2.receta_autorizo, receta_observacion = _req$body2.receta_observacion;
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input("receta_fecha", _connection.sql.VarChar, receta_fecha).input("receta_cliente_id", _connection.sql.Numeric, receta_cliente_id).input("receta_estado_id", _connection.sql.Numeric, receta_estado_id).input("receta_descripcion", _connection.sql.VarChar, receta_descripcion).input("receta_autorizo", _connection.sql.VarChar, receta_autorizo).input("receta_observacion", _connection.sql.VarChar, receta_observacion).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateReceta);
        case 9:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          res.json({
            message: _context2.t0.message
          });
          console.log('INCORRECTO: ' + _context2.t0.message);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 13]]);
  }));
  return function updateReceta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteReceta = exports.deleteReceta = /*#__PURE__*/function () {
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
          return pool.request().request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteReceta);
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
  return function deleteReceta(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getRecetaId = exports.getRecetaId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getRecetaId);
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
  return function getRecetaId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getRecetasClienteId = exports.getRecetasClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getRecetasClienteId);
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
  return function getRecetasClienteId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getEstadosReceta = exports.getEstadosReceta = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getEstadosReceta);
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
  return function getEstadosReceta(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getRecetasEstadoId = exports.getRecetasEstadoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getRecetasEstadoId);
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
  return function getRecetasEstadoId(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getRecetasClienteEstadoId = exports.getRecetasClienteEstadoId = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$params, cliente_id, estado_id, pool, result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$params = req.params, cliente_id = _req$params.cliente_id, estado_id = _req$params.estado_id;
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context8.sent;
          _context8.next = 7;
          return pool.request().input('cliente_id', cliente_id).input('estado_id', estado_id).query(_querys.queries.getRecetasClienteEstadoId);
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
  return function getRecetasClienteEstadoId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var updateFile = exports.updateFile = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, selectedFile, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          console.log('GUARDAR ARCHIVO EN SERVIDOR');
          _context9.prev = 2;
          selectedFile = req.files.selectedFile;
          if (selectedFile) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", res.status(400).json({
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
          _context9.next = 19;
          break;
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](2);
          console.log('ERROR: ' + _context9.t0);
          res.status(500).json(_context9.t0.message);
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 15]]);
  }));
  return function updateFile(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var updateImagenReceta = exports.updateImagenReceta = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var id, _req$body3, index, receta_imagen, buffer, pool, _pool, _pool2, _pool3;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _req$body3 = req.body, index = _req$body3.index, receta_imagen = _req$body3.receta_imagen;
          buffer = _buffer.Buffer.from(receta_imagen, 'base64');
          _context10.prev = 3;
          if (!(parseInt(index) === 0)) {
            _context10.next = 14;
            break;
          }
          _context10.next = 7;
          return (0, _connection.getConnection)();
        case 7:
          pool = _context10.sent;
          _context10.next = 10;
          return pool.request().input("cliente_receta_foto_uno", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenUnoReceta);
        case 10:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 14:
          if (!(parseInt(index) === 1)) {
            _context10.next = 24;
            break;
          }
          _context10.next = 17;
          return (0, _connection.getConnection)();
        case 17:
          _pool = _context10.sent;
          _context10.next = 20;
          return _pool.request().input("cliente_receta_foto_dos", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenDosReceta);
        case 20:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 24:
          if (!(parseInt(index) === 2)) {
            _context10.next = 34;
            break;
          }
          _context10.next = 27;
          return (0, _connection.getConnection)();
        case 27:
          _pool2 = _context10.sent;
          _context10.next = 30;
          return _pool2.request().input("cliente_receta_foto_tres", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenTresReceta);
        case 30:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
          _context10.next = 41;
          break;
        case 34:
          _context10.next = 36;
          return (0, _connection.getConnection)();
        case 36:
          _pool3 = _context10.sent;
          _context10.next = 39;
          return _pool3.request().input("cliente_receta_foto_cuatro", _connection.sql.VarBinary, buffer).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateImagenCuatroReceta);
        case 39:
          res.json({
            message: "OK"
          });
          console.log('CORRECTO');
        case 41:
          _context10.next = 46;
          break;
        case 43:
          _context10.prev = 43;
          _context10.t0 = _context10["catch"](3);
          console.log('ERROR: ' + _context10.t0);
        case 46:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[3, 43]]);
  }));
  return function updateImagenReceta(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();