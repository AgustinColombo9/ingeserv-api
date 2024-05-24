"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _condicionController = require("../controllers/condicion.controller.js");
var router = (0, _express.Router)();
router.get('/condicion/getCondiciones', _condicionController.getCondiciones);
var _default = exports["default"] = router;