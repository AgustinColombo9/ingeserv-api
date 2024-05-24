"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateChatGroup = exports.readMessage = exports.newChatMessage = exports.newChatGroup = exports.getChatsUsuarioId = exports.getChatsContainerId = exports.deleteChatMessage = exports.deleteChatGroup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getChatsUsuarioId = exports.getChatsUsuarioId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getChatsUsuarioId);
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
  return function getChatsUsuarioId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var newChatGroup = exports.newChatGroup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, chat_fecha, chat_nombre, chat_usuario_id, chat_destinatario_id, pool, result, newChatGroupId;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, chat_fecha = _req$body.chat_fecha, chat_nombre = _req$body.chat_nombre, chat_usuario_id = _req$body.chat_usuario_id, chat_destinatario_id = _req$body.chat_destinatario_id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input("chat_fecha", _connection.sql.VarChar, chat_fecha).input("chat_nombre", _connection.sql.VarChar, chat_nombre).input("chat_usuario_id", _connection.sql.Numeric, chat_usuario_id).input("chat_destinatario_id", _connection.sql.Numeric, chat_destinatario_id).query(_querys.queries.newChatGroup);
        case 7:
          result = _context2.sent;
          newChatGroupId = result.recordset[0].CHAT_CONTAINER_ID;
          res.json({
            message: "OK",
            newChatGroupId: newChatGroupId
          });

          //res.json({ message: "OK" });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function newChatGroup(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var updateChatGroup = exports.updateChatGroup = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, chat_nombre, pool;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          chat_nombre = req.body.chat_nombre;
          _context3.prev = 2;
          _context3.next = 5;
          return (0, _connection.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("chat_nombre", _connection.sql.VarChar, chat_nombre).input('id', _connection.sql.BigInt, id).query(_querys.queries.updateChatGroup);
        case 8:
          res.json({
            message: "OK"
          });
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.json({
            message: _context3.t0.message
          });
          console.log('INCORRECTO: ' + _context3.t0.message);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function updateChatGroup(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteChatGroup = exports.deleteChatGroup = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteChatGroup);
        case 7:
          res.json({
            message: "OK"
          });
          _context4.next = 14;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          res.json({
            message: _context4.t0.message
          });
          console.log('INCORRECTO: ' + _context4.t0.message);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function deleteChatGroup(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getChatsContainerId = exports.getChatsContainerId = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query(_querys.queries.getChatsContainerId);
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
  return function getChatsContainerId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var newChatMessage = exports.newChatMessage = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body2, chat_fecha, chat_hora, chat_mensaje, chat_estado, chat_container_id, chat_usuario_id, pool;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, chat_fecha = _req$body2.chat_fecha, chat_hora = _req$body2.chat_hora, chat_mensaje = _req$body2.chat_mensaje, chat_estado = _req$body2.chat_estado, chat_container_id = _req$body2.chat_container_id, chat_usuario_id = _req$body2.chat_usuario_id;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _connection.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("chat_fecha", _connection.sql.VarChar, chat_fecha).input("chat_hora", _connection.sql.VarChar, chat_hora).input("chat_mensaje", _connection.sql.VarChar, chat_mensaje).input("chat_estado", _connection.sql.Numeric, chat_estado).input("chat_container_id", _connection.sql.Numeric, chat_container_id).input("chat_usuario_id", _connection.sql.Numeric, chat_usuario_id).query(_querys.queries.newChatMessage);
        case 7:
          res.json({
            message: "OK"
          });
          _context6.next = 14;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](1);
          res.status(500);
          res.send(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 10]]);
  }));
  return function newChatMessage(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteChatMessage = exports.deleteChatMessage = /*#__PURE__*/function () {
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
          return pool.request().input('id', _connection.sql.BigInt, id).query(_querys.queries.deleteChatMessage);
        case 7:
          res.json({
            message: "OK"
          });
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          res.json({
            message: _context7.t0.message
          });
          console.log('INCORRECTO: ' + _context7.t0.message);
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function deleteChatMessage(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var readMessage = exports.readMessage = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id, pool;
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
          return pool.request().input("chat_message_estado", _connection.sql.Bit, 1).input('id', _connection.sql.BigInt, id).query(_querys.queries.readMessage);
        case 7:
          res.json({
            message: "LEIDO"
          });
          _context8.next = 14;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](1);
          res.json({
            message: _context8.t0.message
          });
          console.log('INCORRECTO: ' + _context8.t0.message);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 10]]);
  }));
  return function readMessage(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();