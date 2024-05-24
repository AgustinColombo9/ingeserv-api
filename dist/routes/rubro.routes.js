"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rubroController = require("../controllers/rubro.controller.js");
var router = (0, _express.Router)();
router.get('/rubro/getRubros', _rubroController.getRubros);
var _default = exports["default"] = router;