"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ofertaController = require("../controllers/oferta.controller.js");
var router = (0, _express.Router)();
router.put('/ofertas/newProducto', _ofertaController.newOferta);
var _default = exports["default"] = router;