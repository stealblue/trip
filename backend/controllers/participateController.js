const Joi = require("joi");
const Room = require("../models/mongoDB/room");
const Participate = require("../models/mongoDB/participate");

exports.createParticipates = async (req, res) => {
  console.log("createPaticipates===================");
  console.log("req.body : ", req.body);
  // try {
  //   const { roomId, userId } = req.body;
  //   const roomInfo = await Room.find({ _id: roomId });
  //   const validateRoom = {
  //     roomId,
  //     max: roomInfo.max,
  //     current: 1,
  //     users: [userId],
  //   };
  //   const participateSchema = Joi.object().keys({
  //     roomId: Joi.string().trim().allow("").required(),
  //     max: Joi.number().required(),
  //     current: Joi.number().required(),
  //     users: Joi.array[string]().trim().allow("").required(),
  //   });
  //   const result = participateSchema.validate(validateRoom);
  //   if (result.error) return res.status(400).json(result.error);
  //   const newParticipate = await Participate.create({ validate });
  //   return res.json(newParticipate);
  // } catch (error) {
  //   console.error(error);
  // }
};
