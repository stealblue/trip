const Joi = require("joi");
const Room = require("../models/mongoDB/room");
const Participate = require("../models/mongoDB/participate");

exports.createParticipates = async (req, res) => {
  console.log("createPaticipates===================");
  console.log("req.body : ", req.body);
  try {
    const { title, owner, max, password } = req.body;
    const roomInfo = await Room.find({ title, owner });
    console.log("roomIfno : ", roomInfo);
    const validateRoom = {
      roomId: roomInfo[0]._id,
      max: roomInfo[0].max,
      current: 1,
      users: roomInfo[0].owner,
    };
    const participateSchema = Joi.object().keys({
      roomId: Joi.string().trim().allow("").required(),
      max: Joi.number().required(),
      current: Joi.number().required(),
      users: Joi.array().required(),
    });
    console.log("check11111111111111111111111111111111111111111111");
    const result = participateSchema.validate(validateRoom);
    console.log("check22222222222222222222222222222222222222222222");
    console.log("result : ", result);
    if (result.error) return res.status(400).json(result.error);
    const newParticipate = await Participate.create({ validate });
    return res.json(newParticipate);
  } catch (error) {
    console.error(error);
  }
};
