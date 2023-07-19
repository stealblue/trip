import client from "./client";

export const listStations = () => {
  return client.get(`/traffic/train/info`);
};

export const detailStations = ({ cityCode }) => {
  return client.get(`/traffic/train/info/${cityCode}`, ({ cityCode }));
};

export const listTrains = async ({ startStation, endStation, date, pageNo }) => {
  // console.log(`start ===> ${startStation} / end ===> ${endStation}`)
  // console.log('date : ', date);
  // console.log('date.date : ', date.date);
  const dateStr = date.date;
  return await client.get(`/traffic/train/result?startStation=${startStation}&endStation=${endStation}&date=${dateStr}&pageNo=${pageNo}`);
};

export const listTerminals = () => {
  return client.get(`/traffic/bus`);
};

export const detailTerminals = ({ cityCode }) => {
  return client.get(`/traffic/bus/${cityCode}`, ({ cityCode }));
};


