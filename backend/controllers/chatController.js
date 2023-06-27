const Room = require("../models/mongoDB/room");
// const { removeRoom: removeRoomService } = require("../services");
const Chat = require("../models/mongoDB/chat");
const mqtt = require("mqtt");

const client = mqtt.connect("192.168.10.104:1883");

exports.renderMain = async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    res.json({ rooms, title: "GIF 채팅방" });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.renderRoom = (req, res) => {
  res.render("room", { title: "GIF 채팅방 생성" });
};

exports.createRoom = async (req, res, next) => {
  console.log("createRoom에 들어왔나");
  try {
    const newRoom = await Room.create({
      title: req.body.title,
      max: req.body.max,
      owner: req.body.host,
      password: req.body.password,
    });
    const io = req.app.get("io");
    io.of("/room").emit("newRoom", newRoom);
    // if (req.body.password) {
    //   // 비밀번호가 있는 방이면
    //   res.redirect(`/room/${newRoom._id}?password=${req.body.password}`);
    // } else {
    //   res.redirect(`/room/${newRoom._id}`);
    // }
    res.json(newRoom);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.enterRoom = async (req, res, next) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });
    if (!room) {
      return res.redirect("/?error=존재하지 않는 방입니다.");
    }
    if (room.password && room.password !== req.query.password) {
      return res.redirect("/?error=비밀번호가 틀렸습니다.");
    }
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
      user: req.session.color,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
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
