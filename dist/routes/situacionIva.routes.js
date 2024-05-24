"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _situacionIvaController = require("../controllers/situacionIva.controller.js");
var router = (0, _express.Router)();
router.get('/situacionIVA/getSituacionesIVA', _situacionIvaController.getSituacionesIVA);
var _default = exports["default"] = router;