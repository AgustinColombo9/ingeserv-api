"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _notificacionesController = require("../controllers/notificaciones.controller.js");
var router = (0, _express["default"])();
router.put('/notificaciones/newNotificacion', _notificacionesController.newNotificacion);
router.put('/notificaciones/updateNotificacion/:id', _notificacionesController.updateNotificacion);
router.put('/notificaciones/readNotificacion/:id', _notificacionesController.readNotificacion);
router["delete"]('/notificaciones/deleteNotificacion/:id', _notificacionesController.deleteNotificacion);
router.get('/notificaciones/getNotificaciones', _notificacionesController.getNotificaciones);
router.get('/notificaciones/getNotificacionId/:id', _notificacionesController.getNotificacionId);
router.get('/notificaciones/getNotificacionesEstadoId/:id', _notificacionesController.getNotificacionesEstadoId);
router.get('/notificaciones/getNotificacionesUsuarioId/:id', _notificacionesController.getNotificacionesUsuarioId);
var _default = exports["default"] = router;