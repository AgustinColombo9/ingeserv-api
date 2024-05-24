"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _proveedorController = require("../controllers/proveedor.controller.js");
var router = (0, _express.Router)();
router.put('/proveedor/newProveedor', _proveedorController.newProveedor);
router.put('/proveedor/updateProveedor/:id', _proveedorController.updateProveedor);
router.get('/proveedor/getProveedores', _proveedorController.getProveedores);
router.get('/proveedor/getProveedorId/:id', _proveedorController.getProveedorId);
var _default = exports["default"] = router;