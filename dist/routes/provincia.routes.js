"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _provinciaController = require("../controllers/provincia.controller.js");
var router = (0, _express.Router)();
router.put('/provincia/newProvincia', _provinciaController.newProvincia);
router.put('/provincia/updateProvincia/:id', _provinciaController.updateProvincia);
router.get('/provincia/getProvincias', _provinciaController.getProvincias);
var _default = exports["default"] = router;