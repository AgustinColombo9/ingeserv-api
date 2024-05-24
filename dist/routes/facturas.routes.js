"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _facturasController = require("../controllers/facturas.controller.js");
var router = (0, _express.Router)();
router.put('/facturas/newFactura', _facturasController.newFactura);
router.put('/facturas/updateFactura/:id', _facturasController.updateFactura);
router.get('/facturas/getFacturas', _facturasController.getFacturas);
router.get('/facturas/getFacturasEstadoId/:id', _facturasController.getFacturasEstadoId);
router.put('/facturas/newFacturaProductoAsignado', _facturasController.newFacturaProductoAsignado);
router["delete"]('/facturas/deleteFacturaProductoAsignado/:id', _facturasController.deleteFacturaProductoAsignado);
router.get('/facturas/getFacturasProductoAsignadoId/:id', _facturasController.getFacturasProductoAsignadoId);
router.get('/facturas/getFacturaEstados', _facturasController.getFacturaEstados);
var multer = require('multer');
var storageFactura = multer.diskStorage({
  destination: "./facturas_app/",
  filename: function filename(req, file, cb) {
    var extension = '';
    if (file.mimetype === "application/pdf") {
      extension = '.pdf';
    } else if (file.mimetype.startsWith("image/")) {
      var imageExtension = file.mimetype.split("/")[1];
      extension = ".".concat(imageExtension);
    }
    cb(null, file.originalname + extension);
  }
});
var diskStorageFactura = multer({
  storage: storageFactura
});
router.post('/facturas/saveFactura', diskStorageFactura.single('file'), _facturasController.saveFactura);
var _default = exports["default"] = router;