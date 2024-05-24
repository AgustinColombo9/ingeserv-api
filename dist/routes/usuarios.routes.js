"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuariosController = require("../controllers/usuarios.controller.js");
var router = (0, _express.Router)();
router.post('/usuarios/login', _usuariosController.loginUsuario);
router.get('/usuarios/getUsuarios', _usuariosController.getUsuarios);
router.get('/usuarios/getUsuarioTipos', _usuariosController.getUsuarioTipos);
router.get('/usuarios/getRepositories', _usuariosController.getRepositories);
router.put('/usuarios/updateIngreso/:id', _usuariosController.updateIngreso);
var _default = exports["default"] = router;