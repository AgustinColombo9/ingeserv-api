"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clienteController = require("../controllers/cliente.controller.js");
var router = (0, _express.Router)();
router.put('/clientes/newCliente', _clienteController.newCliente);
router.put('/clientes/updateCliente/:id', _clienteController.updateCliente);
router["delete"]('/clientes/deleteCliente/:id', _clienteController.deleteCliente);
router.get('/clientes/getClienteId/:id', _clienteController.getClienteId);
router.get('/clientes/getClientes', _clienteController.getClientes);
router.get('/clientes/getClienteEstados', _clienteController.getClienteEstados);
router.get('/clientes/getClienteTipos', _clienteController.getClienteTipos);
router.get('/clientes/getClientesEmpleado', _clienteController.getClientesEmpleado);
router.put('/clientes/updateAvatarCliente/:id', _clienteController.updateAvatarCliente);
var _default = exports["default"] = router;