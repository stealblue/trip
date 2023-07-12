const express = require("express");
const { listStations, detailStations, listTerminals, detailTerminals } = require("../controllers/trafficController");

const app = express();
const traffic = express.Router();

traffic.get("/train", listStations);

traffic.get("/train/:cityCode", detailStations);

traffic.get("/bus", listTerminals);

traffic.get("/bus/:cityCode", detailTerminals);

module.exports = traffic;
