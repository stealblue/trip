import client from "./client";

export const listStations = () => {
  return client.get(`/traffic/train/info`);
};

export const detailStations = ({ cityCode }) => {
  return client.get(`/traffic/train/info/${cityCode}`, ({ cityCode }));
};

export const listTrains = async ({ startStation, endStation }) => {
  console.log(`start ===> ${startStation} / end ===> ${endStation}`)
  return await client.get(`/traffic/train/result?start=${startStation}&end=${endStation}`);
};

export const listTerminals = () => {
  return client.get(`/traffic/bus`);
};

export const detailTerminals = ({ cityCode }) => {
  return client.get(`/traffic/bus/${cityCode}`, ({ cityCode }));
};


