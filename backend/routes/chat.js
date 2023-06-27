const express = require("express");
// const fs = require("fs");
const path = require("path");
const mqtt = require("mqtt");
const {
  renderMain,
  renderRoom,
  createRoom,
  enterRoom,
  sendChat,
} = require("../controllers/chatController");
const { error } = require("console");

// try{

// }catch(e){
//   console.error('폴더가 없어서 폴더를 재생성합니다.'+e);
// fs.mkdirSync('../../')
// }

const app = express();
const chat = express.Router();
// const client = mqtt.connect("mqtt://test.mosquitto.org");

chat.get("/", renderMain);
chat.get("/room", renderRoom);
chat.post("/room", createRoom);
chat.get("/room/:id", enterRoom);
// chat.delete("/room/:id", removeRoom);
chat.post("/room/:id/chat", sendChat);

// client.on("connect", () => {
//   client.subscribe("presence", (err) => {
//     if (!err) client.publish("presence", "Hello mqtt");
//   });
// });

// client.on("message", (topic, message) => {
//   console.log(message.toString());
//   client.end();
// });

// client.on("close", () => {
//   client.end();
// });

module.exports = chat;
