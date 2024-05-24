"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _trabajosController = require("../controllers/trabajos.controller.js");
var router = (0, _express.Router)();
router.put('/trabajos/newTrabajo', _trabajosController.newTrabajo);
router.put('/trabajos/updateTrabajo/:id', _trabajosController.updateTrabajo);
router["delete"]('/trabajos/deleteTrabajo/:id', _trabajosController.deleteTrabajo);
router.get('/trabajos/getTrabajos', _trabajosController.getTrabajos);
router.get('/trabajos/getTrabajoId/:id', _trabajosController.getTrabajoId);

////////////////////////////////////////////////////////////

router.put('/trabajos/newTarea', _trabajosController.newTarea);
router.put('/trabajos/updateTarea/:id', _trabajosController.updateTarea);
router["delete"]('/trabajos/deleteTarea/:id', _trabajosController.deleteTarea);
router.get('/trabajos/getTareaId/:id', _trabajosController.getTareaId);
router.get('/trabajos/getTareas', _trabajosController.getTareas);
router.get('/trabajos/getTareasTrabajo/:id', _trabajosController.getTareasTrabajo);
router.put('/trabajos/newTareaTrabajo', _trabajosController.newTareaTrabajo);
router["delete"]('/trabajos/deleteTareaTrabajo/:id', _trabajosController.deleteTareaTrabajo);
router.post('/trabajos/saveTareasTrabajo', _trabajosController.saveTareasTrabajo);
var _default = exports["default"] = router;