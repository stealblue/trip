const express = require("express");
const {addSchedule, getScheduleList, saveList, getSavedList} = require("../controllers/scheduleController");
const app = express();
const schedule = express.Router();

schedule.post("/addSchedule/:id", addSchedule);
schedule.get("/getScheduleList/:id", getScheduleList);
schedule.post("/saveList/:id", saveList);
schedule.get("/getSavedList/:id", getSavedList);



module.exports = schedule;
