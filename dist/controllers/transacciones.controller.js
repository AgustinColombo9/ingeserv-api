"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransacciones = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _connection = require("../database/connection.js");
var _querys = require("../database/querys.js");
var getTransacciones = exports.getTransacciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _connection.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_querys.queries.getTransacciones);
        case 6:
          result = _context.sent;
          /*
            ERROR EN EL FIND
          
          */
          /*
                  console.log(`page: ${page} , pageSize: ${pageSize}, sort: ${sort}, search: ${search} `)
                  console.log("FIND")
                  const transacciones = await result.find({
                      $or: [
                          { PRODUCTOTRANSACCION_COSTO: { $regex: new RegExp(search, "i") } }, 
                          { PRODUCTOTRANSACCION_ID: { $regex: new RegExp(search, "i") } } 
                      ],
                  })
                  .sort(sortFormatted)
                  .skip(page * pageSize)
                  .limit(pageSize);
                  console.log(transacciones)
                  /*
                  const total = await result.countDocuments({
                      name: { $regex: search, $options: "i" },
                  });*/
          //const total = await result.recordset.length; 

          //res.status(200).json(JSON.Parse(result)); 
          //res.status(200).json({transacciones, total});
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log("ERROR");
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getTransacciones(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();