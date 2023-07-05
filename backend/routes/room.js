const express = require("express");
const path = require("path");
const mqtt = require("mqtt");
const {
  renderMain,
  createRoom,
  enterRoom,
  temporary
} = require("../controllers/chatController");
const { createParticipates } = require("../controllers/participateController");
const app = express();
const room = express.Router();

room.get("/", renderMain);
room.get("/:roomId", enterRoom);
room.post("/", createRoom);
room.post("/temporary",temporary);

module.exports = room;
