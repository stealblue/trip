const Room = require("../models/mongoDB/room");
const Chat = require("../models/mongoDB/chat");
const Participate = require("../models/mongoDB/participate");
const mqtt = require("mqtt");
const { user } = require("../models/mysql");
const client = mqtt.connect("192.168.10.104:1883");
const Joi = require("joi");
const { isNull } = require("lodash");
exports.renderMain = async (req, res, next) => {
  try {
    const Users = await user.findAll();
    for (const User of Users) {
      console.log(User._previousDataValues);
    }
    res.json(Users);
  } catch (e) {
    console.log("에러 이유 : ", e);
    res.json(e);
  }
};

exports.renderRoom = (req, res) => {
  res.render("room", { title: "GIF 채팅방 생성" });
};
exports.createRoom = async (req, res, next) => {
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
    console.log("end>>>");
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.enterRoom = async (req, res, next) => {
  // try {
  //   const room = await Room.findOne({ _id: req.params.id });
  //   if (!room) {
  //     return res.redirect("/?error=존재하지 않는 방입니다.");
  //   }
  //   if (room.password && room.password !== req.query.password) {
  //     return res.redirect("/?error=비밀번호가 틀렸습니다.");
  //   }
  //   const io = req.app.get("io");
  //   const { rooms } = io.of("/chat").adapter;
  //   console.log(rooms, rooms.get(req.params.id), rooms.get(req.params.id));
  //   if (room.max <= rooms.get(req.params.id)?.size) {
  //     return res.redirect("/?error=허용 인원이 초과하였습니다.");
  //   }
  //   const chats = await Chat.find({ room: room._id }).sort("createAt");
  //   return res.render("chat", {
  //     room,
  //     title: room.title,
  //     chats,
  //     user: req.session.color,
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return next(error);
  // }
};

exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);
    res.send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.sendChat = async (req, res, next) => {
  try {
    const chat = await Chat.create({
      room: req.params.id,
      user: req.session.color,
      chat: req.body.chat,
    });
    req.app.get("io").of("/chat").to(req.params.id).emit("chat", chat);
    res.send("ok");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.sendGif = async (req, res, next) => {
  try {
    const chat = await Chat.create({
      room: req.params.id,
      user: req.session.color,
      gif: req.file.filename,
    });
    req.app.get("io").of("/chat").to(req.params.id).emit("chat", chat);
    res.send("ok");
  } catch (e) {
    console.error(e);
    next(e);
  }
};

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
