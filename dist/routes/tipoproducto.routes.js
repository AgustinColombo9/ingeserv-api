"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tipoproductoController = require("../controllers/tipoproducto.controller.js");
var router = (0, _express.Router)();
router.get('/tipoproducto/getTiposProducto', _tipoproductoController.getTiposProducto);
var _default = exports["default"] = router;