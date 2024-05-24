"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pedidoController = require("../controllers/pedido.controller.js");
var router = (0, _express.Router)();
router.get('/pedidos/getPedidosEstadoId/:id', _pedidoController.getPedidosEstadoId);
router.get('/pedidos/getPedidoEstados', _pedidoController.getPedidoEstados);
router.get('/pedidos/getPedidoCabeceraId/:id', _pedidoController.getPedidoCabeceraId);
router.put('/pedidos/newPedidoCabecera', _pedidoController.newPedidoCabecera);
router.put('/pedidos/updatePedidoCabecera/:id', _pedidoController.updatePedidoCabecera);
router.put('/pedidos/updateImagenPedido/:id', _pedidoController.updateImagenPedido);
router["delete"]('/pedidos/deletePedidoCabecera/:id', _pedidoController.deletePedidoCabecera);
router.get('/pedidos/getUltimoPedidoId', _pedidoController.getUltimoPedidoId);
router.get('/pedidos/getPedidosUsuarioId/:id', _pedidoController.getPedidosUsuarioId);
router.get('/pedidos/getPedidosUsuarioEstadoId/:id/:estado_id', _pedidoController.getPedidosUsuarioEstadoId);
var _default = exports["default"] = router;