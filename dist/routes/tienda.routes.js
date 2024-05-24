"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tiendaController = require("../controllers/tienda.controller.js");
var router = (0, _express.Router)();
router.get('/tienda/getTiendas', _tiendaController.getTiendas);
var _default = router;
exports["default"] = _default;