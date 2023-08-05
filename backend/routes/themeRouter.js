const express = require("express");
const { areaSearch } = require("../controllers/areaController");
const { listTheme, listThemes } = require('../controllers/themeController');

const app = express();
const search = express.Router();

search.get("/:keyword", listTheme, areaSearch);
search.get('/listThemes/', listThemes);

module.exports = search;
