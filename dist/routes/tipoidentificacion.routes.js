"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipoidentificacionController = require("../controllers/tipoidentificacion.controller.js");
var router = (0, _express.Router)();
router.get('/tipoidentificacion/getTiposIdentificacion', _tipoidentificacionController.getTiposIdentificacion);
router.get('/tipoidentificacion/getTiposIdentificacionIVA/:id', _tipoidentificacionController.getTiposIdentificacionIVA);
var _default = exports["default"] = router;