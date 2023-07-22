const express = require("express");
const {addSchedule, getScheduleList} = require("../controllers/scheduleController");
const app = express();
const schedule = express.Router();

schedule.post("/addSchedule/:id", addSchedule);
schedule.get("/getScheduleList/:id", getScheduleList);



module.exports = schedule;
