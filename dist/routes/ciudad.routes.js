"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ciudadController = require("../controllers/ciudad.controller.js");
var router = (0, _express.Router)();
router.put('/ciudad/newCiudad', _ciudadController.newCiudad);
router.put('/ciudad/updateCiudad/:id', _ciudadController.updateCiudad);
router.get('/ciudad/getCiudades', _ciudadController.getCiudades);
router.get('/ciudad/getCiudadesProvinciaId/:id', _ciudadController.getCiudadesProvinciaId);
var _default = exports["default"] = router;