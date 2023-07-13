const { Sequelize } = require('sequelize');
const { busTerminal, busType, trainStation, trainType } = require('../models/mysql');

exports.listStations = async (req, res) => {
  try {
    const stations = await trainStation.findAll({
      attributes: ['cityCode', 'cityName'],
      group: ['cityCode', 'cityName']
    });
    return res.json(stations);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

exports.detailStations = async (req, res) => {
  console.log('detailStations !!!', req.params);
  const { cityCode } = req.params;
  try {
    const stations = await trainStation.findAll({
      where: {
        cityCode
      }
    });
    return res.json(stations);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

exports.listTerminals = async (req, res) => {
  try {
    const terminals = await busTerminal.findAll({
      attributes: ['cityCode', 'cityName'],
      group: ['cityCode', 'cityName']
    });
    return res.json(terminals);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

exports.detailTerminals = async (req, res) => {
  const { cityCode } = req.params;
  try {
    const terminals = await busTerminal.findAll({
      where: {
        cityCode
      }
    });
    return res.json(terminals);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};