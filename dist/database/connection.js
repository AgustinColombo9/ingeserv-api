"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var _config = _interopRequireDefault(require("../config.js"));
/* 

const configDB1 = {
  user: 'usuario',
  password: 'contraseña',
  server: 'localhost',
  database: 'nombre_basedatos_1',
  options: {
    encrypt: true // Si estás utilizando Azure SQL, activa esta opción
  }
};

// Configuración de conexión a la segunda base de datos
const configDB2 = {
  user: 'usuario',
  password: 'contraseña',
  server: 'localhost',
  database: 'nombre_basedatos_2',
  options: {
    encrypt: true // Si estás utilizando Azure SQL, activa esta opción
  }
};

await mssql.connect(configDB1);

*/

var dbSettings = {
  user: "admin",
  //config.dbUser, 
  password: "carp1234",
  //config.dbPassword, 
  server: "localhost",
  //config.dbServer,
  //    server: 'gtinformatica.ddns.net',
  database: "INGESERV",
  //config.dbDatabase, 
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};
function getConnection() {
  return _getConnection.apply(this, arguments);
}
function _getConnection() {
  _getConnection = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mssql["default"].connect(dbSettings);
        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getConnection.apply(this, arguments);
}
;