"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _mantenimientoController = require("../controllers/mantenimiento.controller.js");
var router = (0, _express.Router)();
router.get('/mantenimiento/getPlanesVigencia', _mantenimientoController.getPlanesVigencia);
router.put('/mantenimiento/newPlanVigencia', _mantenimientoController.newPlanVigencia);
router.put('/mantenimiento/updatePlanVigencia/:id', _mantenimientoController.updatePlanVigencia);
router.get('/mantenimiento/getPlanesMantenimiento', _mantenimientoController.getPlanesMantenimiento);
router.get('/mantenimiento/getPlanesMantenimientoVigenciaId/:id', _mantenimientoController.getPlanesMantenimientoVigenciaId);
router.get('/mantenimiento/getPlanesMantenimientoProductoId/:id', _mantenimientoController.getPlanesMantenimientoProductoId);
router.put('/mantenimiento/newPlanMantenimiento', _mantenimientoController.newPlanMantenimiento);
router.put('/mantenimiento/savePlanMantenimiento', _mantenimientoController.savePlanMantenimiento);
router.put('/mantenimiento/updatePlanMantenimiento/:id', _mantenimientoController.updatePlanMantenimiento);
router.put('/mantenimiento/newPlanMantenimientoProducto', _mantenimientoController.newPlanMantenimientoProducto);
router.put('/mantenimiento/updatePlanMantenimientoProducto/:id', _mantenimientoController.updatePlanMantenimientoProducto);
router["delete"]('/mantenimiento/deletePlanMantenimientoProducto/:id', _mantenimientoController.deletePlanMantenimientoProducto);
router.get('/mantenimiento/getOrdenMantenimientoEstado', _mantenimientoController.getOrdenMantenimientoEstado);
router.put('/mantenimiento/newOrdenMantenimientoEstado', _mantenimientoController.newOrdenMantenimientoEstado);
router.put('/mantenimiento/updateOrdenMantenimientoEstado/:id', _mantenimientoController.updateOrdenMantenimientoEstado);
router.get('/mantenimiento/getOrdenesMantenimientoProductoId/:id', _mantenimientoController.getOrdenesMantenimientoProductoId);
router.put('/mantenimiento/newOrdenMantenimiento', _mantenimientoController.newOrdenMantenimiento);
router.put('/mantenimiento/vencimientoOrdenMantenimiento/:id', _mantenimientoController.vencimientoOrdenMantenimiento);
router.put('/mantenimiento/completarOrdenMantenimiento/:id', _mantenimientoController.completarOrdenMantenimiento);
router.put('/mantenimiento/newPlanMantenimientoTrabajo', _mantenimientoController.newPlanMantenimientoTrabajo);
router["delete"]('/mantenimiento/deletePlanMantenimientoTrabajo/:id', _mantenimientoController.deletePlanMantenimientoTrabajo);
router.get('/mantenimiento/getTrabajosPlanMantenimiento/:id', _mantenimientoController.getTrabajosPlanMantenimiento);
router.post('/mantenimiento/saveTrabajosPlan', _mantenimientoController.saveTrabajosPlan);
router.put('/mantenimiento/newPlanMantenimientoHistorial', _mantenimientoController.newPlanMantenimientoHistorial);
router.put('/mantenimiento/updatePlanMantenimientoHistorial/:id', _mantenimientoController.updatePlanMantenimientoHistorial);
router["delete"]('/mantenimiento/deletePlanMantenimientoHistorial/:id', _mantenimientoController.deletePlanMantenimientoHistorial);
router.get('/mantenimiento/getPlanMantenimientoHistorialClienteProducto/:clienteId/:productoId', _mantenimientoController.getPlanMantenimientoHistorialClienteProducto);
var _default = exports["default"] = router;