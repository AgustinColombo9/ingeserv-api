"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _marcaController = require("../controllers/marca.controller.js");
var router = (0, _express.Router)();
router.put('/marca/newMarca', _marcaController.newMarca);
router.put('/marca/updateMarca/:id', _marcaController.updateMarca);
router.get('/marca/getMarcas', _marcaController.getMarcas);
router.get('/marca/getMarcaId/:id', _marcaController.getMarcaId);
var _default = exports["default"] = router;