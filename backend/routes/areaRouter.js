const express = require("express");
const {areaList,testArea, listDetail} = require("../controllers/areaController");

const app = express();
const area = express.Router();

area.get("/:areaCode", areaList);
area.get("/detail/:contentId/:contentTypeId", listDetail);

module.exports = area;
