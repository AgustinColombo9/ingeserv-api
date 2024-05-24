"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clientesController = require("../controllers/clientes.controller.js");
var router = (0, _express.Router)();
router.get('/clientes/getClienteId/:id', _clientesController.getClienteId);
router.put('/clientes/editCliente/:id', _clientesController.editCliente);
router.get('/clientes/getClientes', _clientesController.getClientes);
router.post('/clientes/addCliente', _clientesController.addCliente);
router["delete"]('/clientes/deleteCliente/:id', _clientesController.deleteCliente);
var _default = router;
exports["default"] = _default;