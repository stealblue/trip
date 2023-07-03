const Room = require("../models/mongoDB/room");
const Chat = require("../models/mongoDB/chat");
const Participate = require("../models/mongoDB/participate");
const mqtt = require("mqtt");
const { user } = require("../models/mysql");
const client = mqtt.connect("192.168.10.104:1883");
const Joi = require("joi");

// 채팅방 리스트 출력
exports.renderMain = async (req, res, next) => {
  try {
    const roomList = await Room.find();
    return res.json(roomList);
  } catch (e) {
    console.log("rooms.find({},{}) 이거 너니>?");
    return res.json(e);
  }
};

// 채팅방 생성
exports.createRoom = async (req, res) => {
  console.log("createRoom에 들어왔는지 확인");
  try {
    const roomSchema = Joi.object().keys({
      title: Joi.string().trim().allow("").required(),
      max: Joi.number().required(),
      owner: Joi.string().trim().allow("").required(),
      password: Joi.string().trim().allow(""),
    });
    const result = roomSchema.validate(req.body);
    const { title, max, owner, password } = req.body;
    if (result.error) return res.status(400).json(result.error);
    let newRoom;
    if (password === "") {
      newRoom = await Room.create({ title, max, owner });
    } else {
      newRoom = await Room.create({ title, max, owner, password });
    }
    return res.json(newRoom);
  } catch (error) {
    return res.json(error);
  }
};

// 특정 채팅방 출력
exports.enterRoom = async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await Room.findById({ _id: roomId });
    return res.json(room);
  } catch (error) {
    console.error(error);
  }
};

exports.removeRoom = async (req, res, next) => {};

exports.sendChat = async (req, res) => {
  try {
    const chat = await Chat.create({
      room: req.params.id,
      user: req.session.color || "testAdmin2" || req.user.user,
      chat: req.body.chat,
    });
    req.app.get("io").of("/chat").to(req.params.id).emit("chat", chat);
    res.send("ok");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.sendGif = async (req, res, next) => {};
