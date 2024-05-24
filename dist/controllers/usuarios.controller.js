"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.veriFyToken = exports.updateUsuarioById = exports.updateIngreso = exports.newUsuario = exports.loginUsuario = exports.getUsuarios = exports.getUsuarioTipos = exports.getUsuarioById = exports.getTotalUsuarios = exports.getRepositories = exports.getDashboardEstadisticas = exports.deleteUsuarioById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var jwt = require("jsonwebtoken");
var TOKEN_KEY = "x4TvnErxRETbVcqal5dqMI115eNlp5y";
var veriFyToken = exports.veriFyToken = function veriFyToken(req, res, next) {
  var authHeader = req.header["authorization"];
  var token = authHeader && authHeader.split(' ')[1];
  console.log(authHeader);
  if (token == null) {
    return res.status(401).send("Token requerido");
  } else {
    jwt.verify(token, TOKEN_KEY, function (err, user) {
      if (err) return res.status(403).send("Token invalido");
      console.log(user);
      req.user = user;
      next();
    });
  }
};
var loginUsuario = exports.loginUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, pool, result, datos, token, nDatos, _datos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          /*  const { dni, password } = req.body;
            if( dni == null || password == null ) {
                res.status(400).json({msg: 'Bad Request, please fill all fields'});
            }
              console.log('USUARIO LOGUEO ENFPOINT: '+dni+'   -   '+password)
              try {
                const pool = await getConnection();    
                const result = await pool.request()
                    .input("USUARIO_DNI", sql.VarChar, dni)
                    .input("USUARIO_PASSWORD", sql.VarChar, password)
                    .query(queries.loginUsuario);
            
                if (result.recordset[0] != null) {
                    const datos = {
                        usuario_id: result.recordset[0].USUARIO_ID, 
                        usuario_dni: result.recordset[0].USUARIO_DNI, 
                        usuario_username: result.recordset[0].USUARIO_USERNAME, 
                        usuario_password: result.recordset[0].USUARIO_PASSWORD, 
                        usuario_tipo_id: result.recordset[0].USUARIO_TIPO_ID, 
                        usuario_status: result.recordset[0].USUARIO_STATUS, 
                        usuario_cliente_id: result.recordset[0].CLIENTE_ID, 
                        usuario_cliente_razon_social: result.recordset[0].CLIENTE_RAZON_SOCIAL, 
                        usuario_cliente_celular: result.recordset[0].CLIENTE_CELULAR, 
                        usuario_cliente_estado_id: result.recordset[0].CLIENTE_ESTADO_ID, 
                    }
            
                   const token = jwt.sign(
                        {usuario_id: datos.usuario_id, 
                        usuario_dni: datos.usuario_dni, 
                        usuario_username: datos.usuario_username, 
                        usuario_password: datos.usuario_password, 
                        usuario_tipo_id: datos.usuario_tipo_id, 
                        usuario_status: datos.usuario_status, 
                        usuario_cliente_id: datos.usuario_cliente_id, 
                        usuario_cliente_razon_social: datos.usuario_cliente_razon_social, 
                        usuario_cliente_celular: datos.usuario_cliente_celular, 
                        usuario_cliente_estado_id: datos.usuario_cliente_estado_id}, 
                        TOKEN_KEY,
                        {expiresIn: "2h"}
                   );
                    let nDatos = {...datos, token};
                      res.status(200).json(nDatos);
                    //return res.status(200).json({msg: 'Acceso correcto.'});
                }
                else {
                    //res.status(400).json({status: '400'});
                    const datos = {
                        usuario_id: 0, 
                        usuario_dni: "", 
                        usuario_username: "", 
                        usuario_password: "", 
                        usuario_tipo_id: 0, 
                        usuario_status: false, 
                        usuario_cliente_id: 0, 
                        usuario_cliente_razon_social: "", 
                        usuario_cliente_celular: "", 
                        usuario_cliente_estado_id: 0, 
                    }
                    res.status(200).json(datos);
                }
            } catch (error) {
                res.status(500);
                res.send(error.message);
            }
            */
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          if (email == null || password == null) {
            res.status(400).json({
              msg: 'Bad Request, please fill all fields'
            });
          }
          console.log('PARAMS: ' + email + '  -  ' + password);
          _context.prev = 3;
          _context.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context.sent;
          _context.next = 9;
          return pool.request().input("USUARIO_EMAIL", _connection.sql.VarChar, email).input("USUARIO_PASSWORD", _connection.sql.VarChar, password).query(_querys.queries.loginUsuario);
        case 9:
          result = _context.sent;
          if (result.recordset[0] != null) {
            datos = {
              usuario_id: result.recordset[0].USUARIO_ID,
              usuario_email: result.recordset[0].USUARIO_EMAIL,
              usuario_dni: result.recordset[0].USUARIO_DNI,
              usuario_username: result.recordset[0].USUARIO_USERNAME,
              usuario_password: result.recordset[0].USUARIO_PASSWORD,
              usuario_tipo_id: result.recordset[0].USUARIO_TIPO_ID,
              usuario_status: result.recordset[0].USUARIO_STATUS,
              usuario_cliente_id: result.recordset[0].CLIENTE_ID,
              usuario_cliente_razon_social: result.recordset[0].CLIENTE_RAZON_SOCIAL,
              usuario_cliente_celular: result.recordset[0].CLIENTE_CELULAR,
              usuario_cliente_email: result.recordset[0].USUARIO_EMAIL,
              usuario_cliente_estado_id: result.recordset[0].CLIENTE_ESTADO_ID,
              usuario_token_notificacion: result.recordset[0].USUARIO_TOKEN_NOTIFICACION
            };
            token = jwt.sign({
              usuario_id: datos.usuario_id,
              usuario_email: datos.usuario_email,
              usuario_dni: datos.usuario_dni,
              usuario_username: datos.usuario_username,
              usuario_password: datos.usuario_password,
              usuario_tipo_id: datos.usuario_tipo_id,
              usuario_status: datos.usuario_status,
              usuario_cliente_id: datos.usuario_cliente_id,
              usuario_cliente_razon_social: datos.usuario_cliente_razon_social,
              usuario_cliente_celular: datos.usuario_cliente_celular,
              usuario_cliente_email: datos.usuario_email,
              usuario_cliente_estado_id: datos.usuario_cliente_estado_id,
              usuario_token_notificacion: datos.usuario_token_notificacion
            }, TOKEN_KEY, {
              expiresIn: "2h"
            });
            nDatos = _objectSpread(_objectSpread({}, datos), {}, {
              token: token
            });
            res.status(200).json(nDatos);
            //return res.status(200).json({msg: 'Acceso correcto.'});
          } else {
            //res.status(400).json({status: '400'});
            _datos = {
              usuario_id: 0,
              usuario_email: "",
              usuario_dni: "",
              usuario_username: "",
              usuario_password: "",
              usuario_tipo_id: 0,
              usuario_status: false,
              usuario_cliente_id: 0,
              usuario_cliente_razon_social: "",
              usuario_cliente_celular: "",
              usuario_cliente_email: "",
              usuario_cliente_estado_id: 0,
              usuario_token_notificacion: ""
            };
            res.status(200).json(_datos);
          }
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          res.status(500);
          res.send(_context.t0.message);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 13]]);
  }));
  return function loginUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUsuarios = exports.getUsuarios = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_querys.queries.getUsuarios);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getUsuarios(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUsuarioTipos = exports.getUsuarioTipos = /*#__PURE__*/function () {
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
          return pool.request().query(_querys.queries.getUsuarioTipos);
        case 6:
          result = _context3.sent;
          res.json(result.recordset);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500);
          res.send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getUsuarioTipos(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var newUsuario = exports.newUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body2, usuario_dni, usuario_username, usuario_password, usuario_status, usuario_tipo_id, pool;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body2 = req.body, usuario_dni = _req$body2.usuario_dni, usuario_username = _req$body2.usuario_username, usuario_password = _req$body2.usuario_password;
          usuario_status = req.body.usuario_status;
          usuario_tipo_id = req.body.usuario_tipo_id;
          if (!(usuario_dni == null || usuario_username == null || usuario_password == null)) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad Request, please fill all fields'
          }));
        case 5:
          if (usuario_tipo_id == 0) usuario_tipo_id = 4; // paciente por default

          if (usuario_status == null) usuario_status = true;
          _context4.prev = 7;
          _context4.next = 10;
          return (0, _connection.getConnection)();
        case 10:
          pool = _context4.sent;
          _context4.next = 13;
          return pool.request().input("USUARIO_DNI", _connection.sql.VarChar, usuario_dni).input("USUARIO_NOMBRE", _connection.sql.VarChar, usuario_nombre).input("USUARIO_PASSWORD", _connection.sql.VarChar, usuario_password).input("USUARIO_TIPO_ID", _connection.sql.Numeric, usuario_tipo_id).input("USUARIO_STATUS", _connection.sql.Bit, usuario_status).query(_querys.queries.newUsuario);
        case 13:
          _context4.next = 19;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](7);
          res.status(500);
          res.send(_context4.t0.message);
        case 19:
          res.json({
            usuario_nombre: usuario_nombre,
            usuario_password: usuario_password
          });
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[7, 15]]);
  }));
  return function newUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getUsuarioById = exports.getUsuarioById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context5.sent;
          _context5.next = 6;
          return pool.request().input('id', id).query(_querys.queries.getUsuarioById);
        case 6:
          result = _context5.sent;
          res.send(result.recordset[0]);
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getUsuarioById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteUsuarioById = exports.deleteUsuarioById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context6.sent;
          _context6.next = 6;
          return pool.request().input('id', id).query(_querys.queries.deleteUsuarioById);
        case 6:
          result = _context6.sent;
          res.sendStatus(204);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function deleteUsuarioById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getTotalUsuarios = exports.getTotalUsuarios = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _connection.getConnection)();
        case 2:
          pool = _context7.sent;
          _context7.next = 5;
          return pool.request().query(_querys.queries.getTotalUsuarios);
        case 5:
          result = _context7.sent;
          res.json(result.recordset[0]['']);
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getTotalUsuarios(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var updateUsuarioById = exports.updateUsuarioById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body3, usuario_nombre, usuario_dni, usuario_password, usuario_tipo_id, usuario_status, id, pool;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body3 = req.body, usuario_nombre = _req$body3.usuario_nombre, usuario_dni = _req$body3.usuario_dni, usuario_password = _req$body3.usuario_password, usuario_tipo_id = _req$body3.usuario_tipo_id, usuario_status = _req$body3.usuario_status;
          id = req.params.id;
          if (!(usuario_nombre == null || usuario_dni == null || usuario_password == null)) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(400).json({
            msg: 'Bad Request, please fill all fields'
          }));
        case 4:
          if (usuario_tipo_id == 0) 4, (0, _readOnlyError2["default"])("usuario_tipo_id"); // paciente por default

          if (usuario_status == null) true, (0, _readOnlyError2["default"])("usuario_status");
          _context8.next = 8;
          return (0, _connection.getConnection)();
        case 8:
          pool = _context8.sent;
          _context8.next = 11;
          return pool.request().input('usuario_dni', _connection.sql.VarChar, usuario_dni).input('usuario_nombre', _connection.sql.VarChar, usuario_nombre).input('usuario_password', _connection.sql.VarChar, usuario_password).input('usuario_tipo_id', _connection.sql.Numeric, usuario_tipo_id).input('usuario_status', _connection.sql.Bit, usuario_status).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateUsuarioById);
        case 11:
          res.json({
            usuario_nombre: usuario_nombre,
            usuario_dni: usuario_dni,
            usuario_password: usuario_password
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function updateUsuarioById(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var updateIngreso = exports.updateIngreso = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var id, _req$body4, usuario_ingreso, usuario_ultimo_ingreso, pool;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _req$body4 = req.body, usuario_ingreso = _req$body4.usuario_ingreso, usuario_ultimo_ingreso = _req$body4.usuario_ultimo_ingreso;
          _context9.prev = 2;
          _context9.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context9.sent;
          _context9.next = 8;
          return pool.request().input("usuario_ingreso", _connection.sql.Bit, usuario_ingreso).input("usuario_ultimo_ingreso", _connection.sql.Numeric, usuario_ultimo_ingreso).input("id", _connection.sql.Numeric, id).query(_querys.queries.updateIngreso);
        case 8:
          _context9.next = 14;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](2);
          res.status(500);
          res.send(_context9.t0.message);
        case 14:
          res.json({
            usuario_nombre: usuario_nombre,
            usuario_password: usuario_password
          });
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 10]]);
  }));
  return function updateIngreso(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getDashboardEstadisticas = exports.getDashboardEstadisticas = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var currentMonth, currentYear, currentDay, pool, transactions, overallStat, _overallStat$, totalCustomers, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory, thisMonthStats, todayStats;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          currentMonth = "November";
          currentYear = 2023;
          currentDay = "01/01/2023";
          _context10.next = 6;
          return (0, _connection.getConnection)();
        case 6:
          pool = _context10.sent;
          _context10.next = 9;
          return Transaction.find().limit(50).sort({
            createdOn: -1
          });
        case 9:
          transactions = _context10.sent;
          _context10.next = 12;
          return OverallStat.find({
            year: currentYear
          });
        case 12:
          overallStat = _context10.sent;
          _overallStat$ = overallStat[0], totalCustomers = _overallStat$.totalCustomers, yearlyTotalSoldUnits = _overallStat$.yearlyTotalSoldUnits, yearlySalesTotal = _overallStat$.yearlySalesTotal, monthlyData = _overallStat$.monthlyData, salesByCategory = _overallStat$.salesByCategory;
          thisMonthStats = overallStat[0].monthlyData.find(function (_ref11) {
            var month = _ref11.month;
            return month === currentMonth;
          });
          todayStats = overallStat[0].dailyData.find(function (_ref12) {
            var date = _ref12.date;
            return date === currentDay;
          });
          res.status(200).json({
            totalCustomers: totalCustomers,
            yearlyTotalSoldUnits: yearlyTotalSoldUnits,
            yearlySalesTotal: yearlySalesTotal,
            monthlyData: monthlyData,
            salesByCategory: salesByCategory,
            thisMonthStats: thisMonthStats,
            todayStats: todayStats,
            transactions: transactions
          });
          _context10.next = 23;
          break;
        case 19:
          _context10.prev = 19;
          _context10.t0 = _context10["catch"](0);
          res.status(500);
          res.send(_context10.t0.message);
        case 23:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 19]]);
  }));
  return function getDashboardEstadisticas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getRepositories = exports.getRepositories = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
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
          return pool.request().query(_querys.queries.getRepositories);
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
  return function getRepositories(_x21, _x22) {
    return _ref13.apply(this, arguments);
  };
}();