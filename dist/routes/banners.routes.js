"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bannersController = require("../controllers/banners.controller.js");
var router = (0, _express["default"])();
router.put('/banners/newBanner', _bannersController.newBanner);
router.put('/banners/updateBanner/:id', _bannersController.updateBanner);
router["delete"]('/banners/deleteBanner/:id', _bannersController.deleteBanner);
router.get('/banners/getBanners/:id', _bannersController.getBanners);
router.get('/banners/getBannerId/:id', _bannersController.getBannerId);
router.get('/banners/getBannersEstadoId/:id', _bannersController.getBannersEstadoId);
router.get('/banners/getVentanas', _bannersController.getVentanas);
var _default = exports["default"] = router;