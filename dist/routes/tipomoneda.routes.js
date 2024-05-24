"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipomonedaController = require("../controllers/tipomoneda.controller.js");
var router = (0, _express.Router)();
router.get('/tipomoneda/getTiposMoneda', _tipomonedaController.getTiposMoneda);
var _default = exports["default"] = router;