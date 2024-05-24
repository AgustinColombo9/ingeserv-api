"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _archivosController = require("../controllers/archivos.controller.js");
var router = (0, _express.Router)();
router.get('/archivos/getArchivosUsuarioId/:id', _archivosController.getArchivosUsuarioId);
router.get('/archivos/getArchivosRazones', _archivosController.getArchivosRazones);
router.put('/archivos/newArchivo', _archivosController.newArchivo);
var _default = exports["default"] = router;