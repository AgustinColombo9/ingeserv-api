"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _ofertasController = require("../controllers/ofertas.controller.js");
var router = (0, _express["default"])();
router.post('/ofertas/newOferta2', _ofertasController.newOferta2);

//router.put('/ofertas/newOferta2', upload.single('file'), newOferta2);

//router.put('/ofertas/newOferta', newOferta)

router.put('/ofertas/updateOferta/:id', _ofertasController.updateOferta);
router.put('/ofertas/cerrarOferta/:id', _ofertasController.cerrarOferta);
router.get('/ofertas/getOfertas', _ofertasController.getOfertas);
router.get('/ofertas/getOfertaId/:id', _ofertasController.getOfertaId);
router.get('/ofertas/getOfertasClienteId/:id', _ofertasController.getOfertasClienteId);

//router.get('/ofertas/getPresupuestosClienteEstadoId/:cliente_id/:estado_id', getPresupuestosClienteEstadoId)

router.get('/ofertas/getOfertasEstadoId/:id', _ofertasController.getOfertasEstadoId);

/////////////////////////////////////////////////////////////////////////////

router.get('/ofertas/getOfertasEstados', _ofertasController.getOfertasEstados);

//////////////////////////////////////////////////////////////////////////////

router.get('/ofertas/getOfertasDetalleOfertaId/:id', _ofertasController.getOfertasDetalleOfertaId);
router.get('/presupuestos/getOfertaDetalleId/:id', _ofertasController.getOfertaDetalleId);
router.put('/presupuestos/saveOfertaDetalle', _ofertasController.saveOfertaDetalle);
var _default = exports["default"] = router;