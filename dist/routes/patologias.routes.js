"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _patologiasController = require("../controllers/patologias.controller.js");
var router = (0, _express.Router)();
router.put('/patologia/newPatologia', _patologiasController.newPatologia);
router.put('/patologia/updatePatologia/:id', _patologiasController.updatePatologia);
router.get('/patologia/getPatologias', _patologiasController.getPatologias);
var _default = exports["default"] = router;