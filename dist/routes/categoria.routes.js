"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _categoriaController = require("../controllers/categoria.controller.js");
var router = (0, _express.Router)();
router.put('/categoria/newCategoria', _categoriaController.newCategoria);
router.put('/categoria/updateCategoria/:id', _categoriaController.updateCategoria);
router.get('/categoria/getCategorias', _categoriaController.getCategorias);
router.get('/categoria/getCategoriasRubroId/:id', _categoriaController.getCategoriasRubroId);
var _default = exports["default"] = router;