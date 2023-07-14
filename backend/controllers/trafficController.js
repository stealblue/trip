const { Sequelize } = require('sequelize');
const axios = require('axios');
const { busTerminal, busType, trainStation, trainType } = require('../models/mysql');

const { TAGO_BUS_KEY, TAGO_TRAIN_KEY } = process.env;

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

exports.listTrains = async (req, res) => {
  const { startStaion, endStaion } = req.query;
  try {
    const resultTrains = await axios.get(`https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=${TAGO_TRAIN_KEY}&pageNo=1&numOfRows=10&_type=json&depPlaceId=${startStaion}&arrPlaceId=${endStaion}&depPlandTime=20230403`);
    // return res.json({ resultTrains });
    return res.json({ msg: '흠흠' });
  } catch (e) {
    console.log('error : ', e);
    return res.status(400).json(e);
  }
}

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