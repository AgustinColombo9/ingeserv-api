"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productosController = require("../controllers/productos.controller.js");
var router = (0, _express.Router)();
router.put('/productos/newProducto', _productosController.newProducto);
router.put('/productos/updateProducto/:id', _productosController.updateProducto);
router.put('/productos/updateImagenProducto/:id', _productosController.updateImagenProducto);
router["delete"]('/productos/deleteProducto/:id', _productosController.deleteProducto);
router.put('/productos/activarProducto/:id', _productosController.activarProducto);
router.get('/productos/getProductoId/:id', _productosController.getProductoId);
router.get('/productos/getProductosCategoriaId/:id', _productosController.getProductosCategoriaId);
router.get('/productos/getProductosCategoriaIdCard/:id', _productosController.getProductosCategoriaIdCard);
router.get('/productos/getProductosRubroId/:id', _productosController.getProductosRubroId);
router.get('/productos/getProductosProveedorId/:id', _productosController.getProductosProveedorId);
router.get('/productos/getProductos', _productosController.getProductos);
router.get('/productos/getProductosCard', _productosController.getProductosCard);
router.get('/productos/getProductosEquipos', _productosController.getProductosEquipos);
router.get('/productos/getProductosConsumibles', _productosController.getProductosConsumibles);
router.get('/productos/getUltimoProductoId', _productosController.getUltimoProductoId);

/////////////////////////////////////////////////////////////////////////////

router.get('/productos/getProductosEquiposClienteId/:id', _productosController.getProductosEquiposClienteId);
router.get('/productos/getProductoEquipoDetalleClienteId/:id', _productosController.getProductoEquipoDetalleClienteId);
router.get('/productos/getProductosConsumiblesClienteId/:id', _productosController.getProductosConsumiblesClienteId);
router.get('/productos/getProductoConsumibleDetalleClienteId/:id', _productosController.getProductoConsumibleDetalleClienteId);

//////////////////////////////////////////////////////////////////////////////

router.get('/productos/getProductoEquipoHistorialId/:id', _productosController.getProductoEquipoHistorialId);

//////////////////////////////////////////////////////////////////////////////

router.put('/productos/newProductoEquipoAsignar', _productosController.newProductoEquipoAsignar);
router.put('/productos/updateProductoEquipoAsignar/:id', _productosController.updateProductoEquipoAsignar);
router["delete"]('/productos/deleteProductoEquipoAsignar/:id', _productosController.deleteProductoEquipoAsignar);

/////////////////////////////////////////////////////////////////////////////

router.get('/productos/getCaracteristicasProductoId/:id', _productosController.getCaracteristicasProductoId);
router.put('/productos/newCaracteristicaProducto', _productosController.newCaracteristicaProducto);
router.put('/productos/updateCaracteristicaProductoId/:id', _productosController.updateCaracteristicaProductoId);
router["delete"]('/productos/deleteCaracteristicaProductoId/:id', _productosController.deleteCaracteristicaProductoId);
var multer = require('multer');
var storageFactura = multer.diskStorage({
  destination: "./facturas_app/",
  filename: function filename(req, file, cb) {
    var extension = '';
    if (file.mimetype === "application/pdf") {
      extension = '.pdf';
    }
    cb(null, file.originalname + extension);
  }
});
var diskStorageFactura = multer({
  storage: storageFactura
});
router.post('/productos/saveProductoEquipoAsignar', diskStorageFactura.single('file'), _productosController.saveProductoEquipoAsignar);
var _default = exports["default"] = router;