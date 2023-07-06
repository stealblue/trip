const express = require("express");
const {areaList,testArea} = require("../controllers/areaController");

const app = express();
const area = express.Router();

area.get("/:areaCode", areaList);

module.exports = area;
