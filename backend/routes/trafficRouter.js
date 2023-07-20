const express = require("express");
const { listStations, detailStations, listTerminals, detailTerminals, listTrains, listBuses } = require("../controllers/trafficController");

const app = express();
const traffic = express.Router();

traffic.get("/train/info", listStations);

traffic.get("/train/info/:cityCode", detailStations);

traffic.get("/train/result", listTrains);

traffic.get("/bus/info", listTerminals);

traffic.get("/bus/info/:cityCode", detailTerminals);

traffic.get("/bus/result", listBuses);

module.exports = traffic;
