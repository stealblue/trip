const Room = require("../models/mongoDB/room");
const Chat = require("../models/mongoDB/chat");
const Participate = require("../models/mongoDB/participate");
const mqtt = require("mqtt");
const { user } = require("../models/mysql");
const client = mqtt.connect("192.168.10.104:1883");
const Joi = require("joi");

exports.renderMain = async (req, res, next) => {
  console.log("check!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
  try {
    const roomList = await Room.find();
    console.log("roomList : ", roomList);
    roomList.map((room) => {
      console.log("room : ", room);
    });
    return res.json(roomList);
  } catch (e) {
    return res.json(e);
  }
};

exports.renderRoom = (req, res) => {};

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
    next();
  } catch (error) {
    return res.json(error);
  }
};

exports.enterRoom = async (req, res, next) => {};

exports.removeRoom = async (req, res, next) => {};

exports.sendChat = async (req, res, next) => {};

exports.sendGif = async (req, res, next) => {};
