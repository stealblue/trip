const express = require("express");
const { areaSearch } = require("../controllers/areaController");

const app = express();
const search = express.Router();

search.get("/:keyword", areaSearch);

module.exports = search;
