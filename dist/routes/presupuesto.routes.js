"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _presupuestosController = require("../controllers/presupuestos.controller.js");
var router = (0, _express.Router)();
router.put('/presupuestos/newPresupuesto', _presupuestosController.newPresupuesto);
router.put('/presupuestos/updatePresupuesto/:id', _presupuestosController.updatePresupuesto);
router.put('/presupuestos/updateImagenPresupuesto/:id', _presupuestosController.updateImagenPresupuesto);
router["delete"]('/presupuestos/deletePresupuesto/:id', _presupuestosController.deletePresupuesto);
router.get('/presupuestos/getPresupuestoId/:id', _presupuestosController.getPresupuestoId);
router.get('/presupuestos/getPresupuestosClienteId/:id', _presupuestosController.getPresupuestosClienteId);
router.get('/presupuestos/getPresupuestosClienteEstadoId/:cliente_id/:estado_id', _presupuestosController.getPresupuestosClienteEstadoId);
router.get('/presupuestos/getPresupuestosEstadoId/:id', _presupuestosController.getPresupuestosEstadoId);

/////////////////////////////////////////////////////////////////////////////

router.get('/presupuestos/getPresupuestoEstados', _presupuestosController.getPresupuestoEstados);
router.put('/presupuestos/newPresupuestoServicio', _presupuestosController.newPresupuestoServicio);
router.put('/presupuestos/updatePresupuestoServicio/:id', _presupuestosController.updatePresupuestoServicio);
router.get('/presupuestos/getPresupuestoServicios', _presupuestosController.getPresupuestoServicios);
router.put('/presupuestos/newPresupuestoDestinatario', _presupuestosController.newPresupuestoDestinatario);
router.put('/presupuestos/updatePresupuestoDestinatario/:id', _presupuestosController.updatePresupuestoDestinatario);
router.get('/presupuestos/getPresupuestoDestinatarios', _presupuestosController.getPresupuestoDestinatarios);

//////////////////////////////////////////////////////////////////////////////

router.get('/presupuestos/getPresupuestoDetallePresupuestoId/:id', _presupuestosController.getPresupuestoDetallePresupuestoId);
router.get('/presupuestos/getPresupuestoDetalleId/:id', _presupuestosController.getPresupuestoDetalleId);
router.put('/presupuestos/newPresupuestoDetalle', _presupuestosController.newPresupuestoDetalle);
router.put('/presupuestos/savePresupuestoDetalle', _presupuestosController.savePresupuestoDetalle);
router.put('/presupuestos/updatePresupuestoDetalle/:id', _presupuestosController.updatePresupuestoDetalle);
router.put('/presupuestos/updateFile/:id', _presupuestosController.updateFile);
var _default = exports["default"] = router;