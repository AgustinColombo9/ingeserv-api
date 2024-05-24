"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _turnosController = require("../controllers/turnos.controller.js");
var router = (0, _express.Router)();

//router.get('/turnos/getTurnosByEspecialistaId/:id', veriFyToken, getTurnosByEspecialistaId);
router.get('/turnos/getTurnosByEspecialistaId/:id', _turnosController.getTurnosByEspecialistaId);
router.get('/turnos/getTurnos', _turnosController.getTurnos);
var _default = router;
exports["default"] = _default;