const express = require("express");
const { listStations, detailStations, listTerminals, detailTerminals, listTrains } = require("../controllers/trafficController");

const app = express();
const traffic = express.Router();

traffic.get("/train/info", listStations);

traffic.get("/train/info/:cityCode", detailStations);

traffic.get("/train/result", listTrains);

traffic.get("/bus", listTerminals);

traffic.get("/bus/:cityCode", detailTerminals);

module.exports = traffic;
