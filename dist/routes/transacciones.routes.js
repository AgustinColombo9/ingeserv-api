"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _transaccionesController = require("../controllers/transacciones.controller.js");
var router = (0, _express.Router)();
router.get('/transacciones/getTransacciones', _transaccionesController.getTransacciones);
var _default = exports["default"] = router;