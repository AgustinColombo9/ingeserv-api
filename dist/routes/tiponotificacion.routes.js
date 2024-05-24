"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tiponotificacionController = require("../controllers/tiponotificacion.controller.js");
var router = (0, _express.Router)();
router.get('/tiponotificacion/getTiposNotificacion', _tiponotificacionController.getTiposNotificacion);
router.put('/tiponotificacion/newTipoNotificacion', _tiponotificacionController.newTipoNotificacion);
router.put('/tiponotificacion/updateTipoNotificacion/:id', _tiponotificacionController.updateTipoNotificacion);
var _default = exports["default"] = router;