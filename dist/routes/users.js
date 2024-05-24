"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('express'),
  Router = _require.Router;
var router = Router();
var fetch = require('node-fetch');
router.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var response, users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://jsonplaceholder.typicode.com/users');
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          users = _context.sent;
          //console.log(users);
          //res.send(users);
          res.json(users);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = router;