const express = require("express");
const path = require("path");
const mqtt = require("mqtt");
const {
  renderMain,
  renderRoom,
  createRoom,
  enterRoom,
  sendChat,
} = require("../controllers/chatController");
const { createParticipates } = require("../controllers/participateController");
const { error } = require("console");
const app = express();
const chat = express.Router();

chat.get("/", renderMain);
chat.post("/", createRoom);
chat.get("/:id", enterRoom);
chat.post("/:id/chat", sendChat);

module.exports = chat;
