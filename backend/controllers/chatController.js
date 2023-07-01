const Room = require("../models/mongoDB/room");
const Chat = require("../models/mongoDB/chat");
const Participate = require("../models/mongoDB/participate");
const mqtt = require("mqtt");
const { user } = require("../models/mysql");
const client = mqtt.connect("192.168.10.104:1883");
const Joi = require("joi");

exports.renderMain = async (req, res, next) => {
  try {
    const roomList = await Room.find();
    return res.json(roomList);
  } catch (e) {
    console.log("rooms.find({},{}) 이거 너니>?");
    return res.json(e);
  }
};

exports.renderRoom = (req, res) => {};

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

exports.enterRoom = async (req, res) => {
  const { _id } = req.params;
  const { password } = req.query;
  console.log("id : ", _id, " password : ", password);
  try {
    const room = await Room.findOne({ _id });
    if (!room) return res.redirect("/?error=존재하지 않는 방입니다.");
    if (room.password && room.password !== req.query.password)
      return res.redirect("/?error=비밀번호가 틀렸습니다.");

    const io = req.app.get("io");
    const { rooms } = io.of("/chat").adapter;
    console.log(rooms, rooms.get(req.params.id), rooms.get(req.params.id));
    if (room.max <= rooms.get(req.params.id)?.size) {
      return res.redirect("/?error=허용 인원이 초과하였습니다.");
    }
    const chats = await Chat.find({ room: room._id }).sort("createAt");
    return res.render("chat", {
      room,
      title: room.title,
      chats,
      user: req.session.color || "testAdmin2" || req.user.user,
    });
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
