"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOferta = exports.updateFile = exports.saveOfertaDetalle = exports.newOferta2 = exports.newOferta = exports.getOfertasEstados = exports.getOfertasEstadoId = exports.getOfertasDetalleOfertaId = exports.getOfertasClienteId = exports.getOfertas = exports.getOfertaId = exports.getOfertaDetalleId = exports.cerrarOferta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _multiparty = _interopRequireDefault(require("multiparty"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
export const newOferta = async (req, res) => {
    try {
        const file = req.file;
        const {
            oferta_fecha,
            oferta_vigencia,
            oferta_descripcion,
            oferta_cliente_id,
            oferta_observacion,
            oferta_estado_id,
        } = req.body;

        const pool = await getConnection(); 
        await pool.request() 
        .input("oferta_fecha", sql.VarChar, oferta_fecha)
        .input("oferta_vigencia", sql.VarChar, oferta_vigencia)
        .input("oferta_descripcion", sql.VarChar, oferta_descripcion)
        .input("oferta_cliente_id", sql.Numeric, oferta_cliente_id) 
        .input("oferta_observacion", sql.NVarChar, oferta_observacion) 
        .input("oferta_imagen", sql.VarChar, oferta_imagen) 
        .input("oferta_estado_id", sql.Numeric, oferta_estado_id)
        .query(queries.newOferta); 

        console.log('GUARDO CABECERA')

        //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
        const primaryKey = await getUltimaOferta()

        console.log('PK: '+ primaryKey)

        //const { file } = req.files;
        //const { file } = formData

        console.log('FILE '+file)

        if (!file) {
          return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
        }
    
        const myFile = file;
        console.log(myFile);
    
        // Construir la ruta absoluta al directorio archivos_app
        const archivosAppDir = path.join(__dirname, 'archivos_app');
    
        // Crear el directorio si no existe
        if (!fs.existsSync(archivosAppDir)) {
          fs.mkdirSync(archivosAppDir);
        }
    
        console.log('DIRECTORIO ARCHIVOS ' + archivosAppDir);

        // Guardar el archivo en el directorio archivos_app
        const serverFilePath = path.join(archivosAppDir, myFile.name);
        myFile.mv(serverFilePath, (err) => {
          if (err) {
            return res.status(500).json({ error: 'Error al mover el archivo' });
          }
          
          console.log('SERVER FILE PATH '+serverFilePath);

          const imagePath = path.join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo
          
          console.log('image path: '+imagePath)

          updateClienteOfertaCabImagen(primaryKey, imagePath);

          //res.json({ message: 'OK' });
          console.log('CORRECTO ARCHIVO');
        });

        res.json({ message: "OK" });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
*/

var IMAGE_DIR = './archivos_app';
var newOferta2 = exports.newOferta2 = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var form, _req$params, fecha, vigencia, descripcion, clienteId, observacion, estadoId, file, pool, primaryKey, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('NEW OFERTA 2');
          form = new _multiparty["default"].Form({
            file: IMAGE_DIR
          });
          form.parse(req, function (err, fields, files) {
            console.log('fields ' + fields);
            console.log('file ' + files);
          });
          console.log('NUEVO 2');
          _req$params = req.params, fecha = _req$params.fecha, vigencia = _req$params.vigencia, descripcion = _req$params.descripcion, clienteId = _req$params.clienteId, observacion = _req$params.observacion, estadoId = _req$params.estadoId;
          file = req.files.file;
          _context.prev = 6;
          _context.next = 9;
          return (0, _connection.getConnection)();
        case 9:
          pool = _context.sent;
          _context.next = 12;
          return pool.request().input("oferta_fecha", _connection.sql.VarChar, fecha).input("oferta_vigencia", _connection.sql.VarChar, vigencia).input("oferta_descripcion", _connection.sql.VarChar, descripcion).input("oferta_cliente_id", _connection.sql.Numeric, clienteId).input("oferta_observacion", _connection.sql.NVarChar, observacion).input("oferta_imagen", _connection.sql.VarChar, imagen).input("oferta_estado_id", _connection.sql.Numeric, estadoId).query(_querys.queries.newOferta);
        case 12:
          console.log('GUARDO CABECERA');

          //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
          _context.next = 15;
          return getUltimaOferta();
        case 15:
          primaryKey = _context.sent;
          console.log('PK: ' + primaryKey);
          console.log('FILE ' + file);
          if (file) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: 'No se proporcionó ningún archivo'
          }));
        case 20:
          myFile = file;
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
            console.log('SERVER FILE PATH ' + serverFilePath);
            var imagePath = _path["default"].join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo

            console.log('image path: ' + imagePath);
            updateClienteOfertaCabImagen(primaryKey, imagePath);

            //res.json({ message: 'OK' });
            console.log('CORRECTO ARCHIVO');
          });
          res.json({
            message: "OK"
          });
          _context.next = 34;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](6);
          res.status(500);
          res.send(_context.t0.message);
        case 34:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[6, 30]]);
  }));
  return function newOferta2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var newOferta = exports.newOferta = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var oferta_fecha, oferta_vigencia, oferta_descripcion, oferta_cliente_id, oferta_observacion, oferta_imagen, oferta_estado_id, file, pool, primaryKey, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log('NUEVO');

          // Los datos de formulario están disponibles en req.body
          oferta_fecha = req.body.oferta_fecha;
          oferta_vigencia = req.body.oferta_vigencia;
          oferta_descripcion = req.body.oferta_descripcion;
          oferta_cliente_id = req.body.oferta_cliente_id;
          oferta_observacion = req.body.oferta_observacion;
          oferta_imagen = req.body.oferta_imagen;
          oferta_estado_id = req.body.oferta_estado_id; // El archivo está disponible en req.file
          file = req.file; //    const { file } = req.files;
          /*    const {
                  oferta_fecha,
                  oferta_vigencia,
                  oferta_descripcion,
                  oferta_cliente_id,
                  oferta_observacion,
                  oferta_imagen, // Aquí estará vacío ('')
                  oferta_estado_id,
              } = req.body; 
          */
          //    console.log('form data '+file)
          _context2.prev = 9;
          _context2.next = 12;
          return (0, _connection.getConnection)();
        case 12:
          pool = _context2.sent;
          _context2.next = 15;
          return pool.request().input("oferta_fecha", _connection.sql.VarChar, oferta_fecha).input("oferta_vigencia", _connection.sql.VarChar, oferta_vigencia).input("oferta_descripcion", _connection.sql.VarChar, oferta_descripcion).input("oferta_cliente_id", _connection.sql.Numeric, oferta_cliente_id).input("oferta_observacion", _connection.sql.NVarChar, oferta_observacion).input("oferta_imagen", _connection.sql.VarChar, oferta_imagen).input("oferta_estado_id", _connection.sql.Numeric, oferta_estado_id).query(_querys.queries.newOferta);
        case 15:
          console.log('GUARDO CABECERA');

          //const primaryKey = result.recordset[0].CLIENTE_OFERTA_CAB_ID;
          _context2.next = 18;
          return getUltimaOferta();
        case 18:
          primaryKey = _context2.sent;
          console.log('PK: ' + primaryKey);
          console.log('FILE ' + file);
          if (file) {
            _context2.next = 23;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            error: 'No se proporcionó ningún archivo'
          }));
        case 23:
          myFile = file;
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
            console.log('SERVER FILE PATH ' + serverFilePath);
            var imagePath = _path["default"].join('archivos_app', file.name); // Esto asume que 'archivos_app' es la carpeta donde se guarda el archivo

            console.log('image path: ' + imagePath);
            updateClienteOfertaCabImagen(primaryKey, imagePath);

            //res.json({ message: 'OK' });
            console.log('CORRECTO ARCHIVO');
          });
          res.json({
            message: "OK"
          });
          _context2.next = 37;
          break;
        case 33:
          _context2.prev = 33;
          _context2.t0 = _context2["catch"](9);
          res.status(500);
          res.send(_context2.t0.message);
        case 37:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[9, 33]]);
  }));
  return function newOferta(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateClienteOfertaCabImagen = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(primaryKey, imagePath) {
    var pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("CLIENTE_OFERTA_CAB_IMAGEN", _connection.sql.VarChar, imagePath).input("id", _connection.sql.Numeric, primaryKey).query(_querys.queries.updateClienteOfertaCabImagen);
        case 6:
          console.log("Campo CLIENTE_OFERTA_CAB_IMAGEN actualizado para la oferta con ID ".concat(primaryKey));
          _context3.next = 13;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error('Error al actualizar CLIENTE_OFERTA_CAB_IMAGEN:', _context3.t0);
          throw _context3.t0;
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function updateClienteOfertaCabImagen(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getUltimaOferta = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
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
          return pool.request().query('SELECT MAX(cliente_oferta_cab_id) AS maxId FROM cliente_oferta_cab');
        case 6:
          result = _context4.sent;
          return _context4.abrupt("return", result.recordset[0].maxId);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          // Manejo de errores aquí
          console.error('Error al obtener la última oferta:', _context4.t0);
          throw _context4.t0;
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getUltimaOferta() {
    return _ref4.apply(this, arguments);
  };
}();
var updateOferta = exports.updateOferta = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body, oferta_fecha, oferta_vigencia, oferta_descripcion, oferta_cliente_id, oferta_observacion, oferta_imagen, oferta_estado_id, pool;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _req$body = req.body, oferta_fecha = _req$body.oferta_fecha, oferta_vigencia = _req$body.oferta_vigencia, oferta_descripcion = _req$body.oferta_descripcion, oferta_cliente_id = _req$body.oferta_cliente_id, oferta_observacion = _req$body.oferta_observacion, oferta_imagen = _req$body.oferta_imagen, oferta_estado_id = _req$body.oferta_estado_id;
          _context5.prev = 3;
          _context5.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context5.sent;
          _context5.next = 9;
          return pool.request().input("oferta_fecha", _connection.sql.VarChar, oferta_fecha).input("oferta_vigencia", _connection.sql.VarChar, oferta_vigencia).input("oferta_descripcion", _connection.sql.NVarChar, oferta_descripcion).input("oferta_cliente_id", _connection.sql.Numeric, oferta_cliente_id).input("oferta_observacion", _connection.sql.NVarChar, oferta_observacion).input("oferta_imagen", _connection.sql.VarBinary, oferta_imagen).input("oferta_estado_id", _connection.sql.Numeric, oferta_estado_id).input("id", _connection.sql.BigInt, id).query(_querys.queries.updateOferta);
        case 9:
          res.json({
            message: "OK"
          });
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](3);
          res.status(500);
          res.send(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 12]]);
  }));
  return function updateOferta(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
var cerrarOferta = exports.cerrarOferta = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          console.log('UPDATE');
          _context6.prev = 2;
          _context6.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context6.sent;
          _context6.next = 8;
          return pool.request().input("id", _connection.sql.BigInt, id).query(_querys.queries.cerrarOferta);
        case 8:
          res.json({
            message: "OK"
          });
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](2);
          res.status(500);
          res.send(_context6.t0.message);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 11]]);
  }));
  return function cerrarOferta(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var getOfertaId = exports.getOfertaId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getOfertaId);
        case 7:
          result = _context7.sent;
          res.json(result.recordset[0]);
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
  return function getOfertaId(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getOfertasClienteId = exports.getOfertasClienteId = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.getOfertasClienteId);
        case 7:
          result = _context8.sent;
          res.status(200).json(result.recordset);
          _context8.next = 16;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](1);
          console.log("ERROR: " + _context8.t0);
          res.status(500);
          res.send(_context8.t0.message);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 11]]);
  }));
  return function getOfertasClienteId(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
var getOfertasEstadoId = exports.getOfertasEstadoId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getOfertasEstadoId);
        case 7:
          result = _context9.sent;
          res.status(200).json(result.recordset);
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
  return function getOfertasEstadoId(_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}();
var getOfertas = exports.getOfertas = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getOfertas);
        case 6:
          result = _context10.sent;
          res.status(200).json(result.recordset);
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
  return function getOfertas(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();
var getOfertasDetalleOfertaId = exports.getOfertasDetalleOfertaId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getOfertasDetalleOfertaId);
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
  return function getOfertasDetalleOfertaId(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();
var getOfertaDetalleId = exports.getOfertaDetalleId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getOfertaDetalleId);
        case 7:
          result = _context12.sent;
          res.json(result.recordset[0]);
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
  return function getOfertaDetalleId(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();
var saveOfertaDetalle = exports.saveOfertaDetalle = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var detalles, pool, _iterator, _step, detalle, oferta_id, oferta_cab_id, oferta_producto_id, oferta_producto_precio, oferta_precio, oferta_observacion;
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
          _iterator = _createForOfIteratorHelper(detalles);
          _context13.prev = 7;
          _iterator.s();
        case 9:
          if ((_step = _iterator.n()).done) {
            _context13.next = 22;
            break;
          }
          detalle = _step.value;
          oferta_id = detalle.oferta_id, oferta_cab_id = detalle.oferta_cab_id, oferta_producto_id = detalle.oferta_producto_id, oferta_producto_precio = detalle.oferta_producto_precio, oferta_precio = detalle.oferta_precio, oferta_observacion = detalle.oferta_observacion;
          console.log('OFERTA DETALLE ID: ' + oferta_id);
          if (!oferta_id) {
            _context13.next = 18;
            break;
          }
          _context13.next = 16;
          return pool.request().input("oferta_cab_id", _connection.sql.Numeric, oferta_cab_id).input("oferta_producto_id", _connection.sql.Numeric, oferta_producto_id).input("oferta_producto_precio", _connection.sql.Numeric, oferta_producto_precio).input("oferta_precio", _connection.sql.Numeric, oferta_precio).input("oferta_observacion", _connection.sql.VarChar, oferta_observacion).query(_querys.queries.newOfertaDetalle);
        case 16:
          _context13.next = 20;
          break;
        case 18:
          _context13.next = 20;
          return pool.request().input("oferta_producto_id", _connection.sql.Numeric, oferta_producto_id).input("oferta_producto_precio", _connection.sql.Numeric, oferta_producto_precio).input("oferta_precio", _connection.sql.Numeric, oferta_precio).input("oferta_observacion", _connection.sql.VarChar, oferta_observacion).input("id", _connection.sql.BigInt, id).query(_querys.queries.updateOfertaDetalle);
        case 20:
          _context13.next = 9;
          break;
        case 22:
          _context13.next = 27;
          break;
        case 24:
          _context13.prev = 24;
          _context13.t0 = _context13["catch"](7);
          _iterator.e(_context13.t0);
        case 27:
          _context13.prev = 27;
          _iterator.f();
          return _context13.finish(27);
        case 30:
          res.json({
            message: "OK"
          });
          _context13.next = 37;
          break;
        case 33:
          _context13.prev = 33;
          _context13.t1 = _context13["catch"](2);
          res.status(500);
          res.send(_context13.t1.message);
        case 37:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 33], [7, 24, 27, 30]]);
  }));
  return function saveOfertaDetalle(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();
var getOfertasEstados = exports.getOfertasEstados = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getOfertasEstados);
        case 6:
          result = _context14.sent;
          res.status(200).json(result.recordset);
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
  return function getOfertasEstados(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}();
var updateFile = exports.updateFile = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var id, file, myFile, archivosAppDir, serverFilePath;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          console.log('GUARDAR ARCHIVO EN SERVIDOR');
          _context15.prev = 2;
          file = req.files.file;
          if (file) {
            _context15.next = 6;
            break;
          }
          return _context15.abrupt("return", res.status(400).json({
            error: 'No se proporcionó ningún archivo'
          }));
        case 6:
          myFile = file;
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
  return function updateFile(_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}();