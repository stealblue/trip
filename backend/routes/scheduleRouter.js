const express = require("express");
const {addSchedule, getScheduleList, saveList, getSavedList,deleteSavedList, getSavedListDetail, getDuplicateCheck} = require("../controllers/scheduleController");
const app = express();
const schedule = express.Router();

schedule.post("/addSchedule/:id", addSchedule);
schedule.get("/getScheduleList/:id", getScheduleList);
schedule.post("/saveList/:id", saveList);
schedule.get("/getSavedList/:id", getSavedList);
schedule.post("/deleteSavedList/:id/:_id", deleteSavedList);
schedule.get("/getSavedListDetail/:id/:subject", getSavedListDetail);
schedule.get("/getDuplicateCheck/:id/:subject", getDuplicateCheck);

module.exports = schedule;
