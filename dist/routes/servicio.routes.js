"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _servicioController = require("../controllers/servicio.controller.js");
var router = (0, _express.Router)();
router.get('/servicio/getServicios', _servicioController.getServicios);
var _default = exports["default"] = router;