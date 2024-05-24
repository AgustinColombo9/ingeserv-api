"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _serviceController = require("../controllers/service.controller.js");
var router = (0, _express.Router)();
router.put('/services/newService', _serviceController.newService);
router.put('/services/updateService/:id', _serviceController.updateService);
router["delete"]('/services/deleteService/:id', _serviceController.deleteService);
router.get('/services/getServices', _serviceController.getServices);
router.get('/services/getServiceId/:id', _serviceController.getServiceId);
router.get('/services/getServicesEmpleadoId/:id', _serviceController.getServicesEmpleadoId);

///////////////////////////////////////////////////////////////////////

router.put('/services/newServiceTarea', _serviceController.newServiceTarea);
router.put('/services/updateServiceTarea/:id', _serviceController.updateServiceTarea);
router["delete"]('/services/deleteServiceTarea/:id', _serviceController.deleteServiceTarea);
router.get('/services/getServiceTareasServiceId/:id', _serviceController.getServiceTareasServiceId);
router.get('/services/getServiceTareaId/:id', _serviceController.getServiceTareaId);

///////////////////////////////////////////////////////////////////////

router.put('/services/newServiceInsumo', _serviceController.newServiceInsumo);
router.put('/services/updateServiceInsumo/:id', _serviceController.updateServiceInsumo);
router["delete"]('/services/deleteServiceInsumo/:id', _serviceController.deleteServiceInsumo);
router.get('/services/getServiceInsumosServiceId/:id', _serviceController.getServiceInsumosServiceId);
router.get('/services/getServiceInsumosTareaId/:id', _serviceController.getServiceInsumosTareaId);
router.get('/services/getServiceInsumoId/:id', _serviceController.getServiceInsumoId);

///////////////////////////////////////////////////////////////////////

router.get('/services/getServiceTareas', _serviceController.getServiceTareas);
router.get('/services/getEstadosTarea', _serviceController.getEstadosTarea);
var _default = exports["default"] = router;