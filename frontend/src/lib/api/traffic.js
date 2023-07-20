import client from "./client";

export const listStations = () => {
  return client.get(`/traffic/train/info`);
};

export const detailStations = ({ cityCode }) => {
  return client.get(`/traffic/train/info/${cityCode}`, ({ cityCode }));
};

export const listTrains = async ({ startStation, endStation, date, pageNo }) => {
  const dateStr = date.date;
  return await client.get(`/traffic/train/result?startStation=${startStation}&endStation=${endStation}&date=${dateStr}&pageNo=${pageNo}`);
};

export const listTerminals = () => {
  return client.get(`/traffic/bus/info`);
};

export const detailTerminals = ({ cityCode }) => {
  return client.get(`/traffic/bus/info/${cityCode}`, ({ cityCode }));
};

export const listBuses = async ({ startTerminal, endTerminal, date, pageNo }) => {
  const dateStr = date.date;
  return await client.get(`/traffic/bus/result?startTerminal=${startTerminal}&endTerminal=${endTerminal}&date=${dateStr}&pageNo=${pageNo}`);
};

