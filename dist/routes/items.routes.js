"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _itemsController = require("../controllers/items.controller.js");
var router = (0, _express.Router)();
router.get('/items/getItems', _itemsController.getItems);
var _default = router;
exports["default"] = _default;