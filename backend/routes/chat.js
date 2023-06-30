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

chat.get(
  "/",
  function (req, res, next) {
    console.log("확잉!!!!!!!!!!!");
    next();
  },
  renderMain
);
chat.get("/room", renderRoom);
chat.post("/room", createRoom, createParticipates);
chat.get("/room/:id", enterRoom);
chat.post("/room/:id/chat", sendChat);

module.exports = chat;
