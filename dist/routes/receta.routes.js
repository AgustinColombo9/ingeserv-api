"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _recetaController = require("../controllers/receta.controller.js");
var router = (0, _express.Router)();
router.put('/recetas/newReceta', _recetaController.newReceta);
router.put('/recetas/updateReceta/:id', _recetaController.updateReceta);
router.put('/recetas/updateImagenReceta/:id', _recetaController.updateImagenReceta);
router["delete"]('/recetas/deleteReceta/:id', _recetaController.deleteReceta);
router.put('/recetas/getRecetaId/:id', _recetaController.getRecetaId);
router.get('/recetas/getRecetasClienteId/:id', _recetaController.getRecetasClienteId);
router.get('/recetas/getRecetasClienteEstadoId/:cliente_id/:estado_id', _recetaController.getRecetasClienteEstadoId);
router.get('/recetas/getRecetasEstadoId/:id', _recetaController.getRecetasEstadoId);
router.put('/recetas/updateFile/:id', _recetaController.updateFile);

/////////////////////////////////////////////////////////////////////////////

router.get('/recetas/getEstadosReceta', _recetaController.getEstadosReceta);
var _default = exports["default"] = router;