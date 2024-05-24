"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateFile = exports.newArchivo = exports.getArchivosUsuarioId = exports.getArchivosRazones = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getArchivosUsuarioId = exports.getArchivosUsuarioId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.prev = 1;
          _context.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getArchivosUsuarioId);
        case 7:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 16;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log("ERROR");
          res.status(500);
          res.send(_context.t0.message);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 11]]);
  }));
  return function getArchivosUsuarioId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var newArchivo = exports.newArchivo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, archivo_descripcion, archivo_tipo, archivo_tamanio, archivo_url, archivo_fecha, archivo_usuario_id, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, archivo_descripcion = _req$body.archivo_descripcion, archivo_tipo = _req$body.archivo_tipo, archivo_tamanio = _req$body.archivo_tamanio, archivo_url = _req$body.archivo_url, archivo_fecha = _req$body.archivo_fecha, archivo_usuario_id = _req$body.archivo_usuario_id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("archivo_descripcion", _connection.sql.VarChar, archivo_descripcion).input("archivo_tipo", _connection.sql.VarChar, archivo_tipo).input("archivo_tamanio", _connection.sql.Numeric, archivo_tamanio).input("archivo_url", _connection.sql.VarChar, archivo_url).input("archivo_fecha", _connection.sql.VarChar, archivo_fecha).input("archivo_usuario_id", _connection.sql.Numeric, archivo_usuario_id).query(_querys.queries.newArchivo);
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
  return function newArchivo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getArchivosRazones = exports.getArchivosRazones = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getArchivosRazones);
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
  return function getArchivosRazones(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateFile = exports.updateFile = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, selectedFile, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          console.log('GUARDAR ARCHIVO EN SERVIDOR');
          _context4.prev = 2;
          selectedFile = req.files.selectedFile;
          if (selectedFile) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            error: 'No se proporcionó ningún archivo'
          }));
        case 6:
          myFile = selectedFile;
          console.log(myFile);

          // Construir la ruta absoluta al directorio archivos_app
          archivosAppDir = path.join(__dirname, 'archivos_app'); // Crear el directorio si no existe
          if (!fs.existsSync(archivosAppDir)) {
            fs.mkdirSync(archivosAppDir);
          }
          console.log('DIRECTORIO ARCHIVOS ' + archivosAppDir);

          // Guardar el archivo en el directorio archivos_app
          serverFilePath = path.join(archivosAppDir, myFile.name);
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
          _context4.next = 19;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](2);
          console.log('ERROR: ' + _context4.t0);
          res.status(500).json(_context4.t0.message);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 15]]);
  }));
  return function updateFile(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();