"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _categoriasController = require("../controllers/categorias.controller.js");
var router = (0, _express.Router)();
router.get('/categorias/getCategoriasVentasMes', _categoriasController.getCategoriasVentasMes);
router.get('/categorias/getCategorias', _categoriasController.getCategorias);
var _default = router;
exports["default"] = _default;