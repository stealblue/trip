const express = require("express");
const path = require("path");
const mqtt = require("mqtt");
const { insertChat, listChats } = require("../controllers/chatController");
const { createParticipates } = require("../controllers/participateController");
const { error } = require("console");
const app = express();
const chat = express.Router();

chat.get("/:roomId", listChats);
chat.post("/", insertChat);

module.exports = chat;
