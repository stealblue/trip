const express = require("express");
const {addSchedule, getSchedule, changeSchedule, createSchedule, getCompletedList} = require("../controllers/scheduleController");
const app = express();
const schedule = express.Router();

schedule.post("/changeProfile/:id/:contentId", addSchedule);
schedule.get("/getSchedule/:id", getSchedule);
schedule.post("/changeSchedule/:id", changeSchedule);
schedule.post("/createSchedule:id", createSchedule);
schedule.get("/completedList/:id", getCompletedList);



module.exports = schedule;
