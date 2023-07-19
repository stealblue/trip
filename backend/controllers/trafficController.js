const { Sequelize, DATE } = require('sequelize');
const axios = require('axios');
const dotenv = require('dotenv');
const { busTerminal, busType, trainStation, trainType } = require('../models/mysql');
dotenv.config();
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
  // console.log('listTrains');
  // console.log('request : ', req.body);
  // console.log('request : ', req.params);
  // console.log('request : ', req.query);
  const { startStation, endStation, date, pageNo } = req.query;
  // console.log('date =====> ', typeof date, date);
  // console.log('date.date : ', date.toString());
  // const targetDate = new Date(date.date);
  // console.log('targetDate : ', targetDate);
  // const fullYear = targetDate.getFullYear();
  // const month = (targetDate.getMonth() > 10 ? targetDate.getMonth() : "0" + targetDate.getMonth());
  // const todate = (targetDate.getDate() > 10 ? targetDate.getDate() : "0" + targetDate.getDate());
  // const wantDate = `${fullYear}${month}${todate}`;
  // console.log(typeof wantDate);
  // console.log('wantDate : ', wantDate);
  try {
    // console.log('startStation : ', startStation);
    // console.log('endStation : ', endStation);
    // console.log('date : ', date);
    // console.log('date.date : ', date.date);
    console.log('page : ', pageNo);
    console.log('TAGO_TRAIN_KEY : ', TAGO_TRAIN_KEY);
    const originData = await axios.get(`https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=${TAGO_TRAIN_KEY}&pageNo=${pageNo}&numOfRows=10&_type=json&depPlaceId=${startStation}&arrPlaceId=${endStation}&depPlandTime=${date}`);
    console.log('만들어졌니???')
    const resultTrains = originData.data;
    // console.log('data : ', originData);
    console.log('result : ', resultTrains);
    return res.json(resultTrains);
    // return resultTrains;
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