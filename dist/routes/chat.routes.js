"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _chatController = require("../controllers/chat.controller.js");
var router = (0, _express.Router)();
router.get('/chat/getChatsUsuarioId/:id', _chatController.getChatsUsuarioId);
router.put('/chat/newChatGroup', _chatController.newChatGroup);
router.put('/chat/updateChatGroup/:id', _chatController.updateChatGroup);
router["delete"]('/chat/deleteChatGroup/:id', _chatController.deleteChatGroup);
router.get('/chat/getChatsContainerId/:id', _chatController.getChatsContainerId);
router.put('/chat/newChatMessage', _chatController.newChatMessage);
router.put('/chat/deleteChatMessage/:id', _chatController.deleteChatMessage);
router.put('/chat/readMessage/:id', _chatController.readMessage);
var _default = exports["default"] = router;