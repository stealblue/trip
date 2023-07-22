const express = require("express");
const {addSchedule, getScheduleList, changeProcedure} = require("../controllers/scheduleController");
const app = express();
const schedule = express.Router();

schedule.post("/addSchedule/:id", addSchedule);
schedule.get("/getScheduleList/:id", getScheduleList);
schedule.post("/changeProcedure/:id", changeProcedure);



module.exports = schedule;
