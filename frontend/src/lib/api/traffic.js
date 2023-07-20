import client from "./client";

export const listStations = () => {
  return client.get(`/traffic/train/info`);
};

export const detailStations = ({ cityCode }) => {
  return client.get(`/traffic/train/info/${cityCode}`, ({ cityCode }));
};

export const listTrains = async ({ startStation, endStation, dateTrain, pageNoTrain }) => {
  console.log(`startStation : ${startStation} / endStation : ${endStation} / dateTrain : ${dateTrain} / pageNoTrain : ${pageNoTrain}`)
  return await client.get(`/traffic/train/result?startStation=${startStation}&endStation=${endStation}&date=${dateTrain}&pageNo=${pageNoTrain}`);
};

export const listTerminals = () => {
  return client.get(`/traffic/bus/info`);
};

export const detailTerminals = ({ cityCode }) => {
  return client.get(`/traffic/bus/info/${cityCode}`, ({ cityCode }));
};

export const listBuses = async ({ startTerminal, endTerminal, dateBus, pageNoBus }) => {
  const dateStr = dateBus.date;
  console.log('========================================================================================================')
  console.log(`listBuses : /traffic/bus/result?startTerminal=${startTerminal}&endTerminal=${endTerminal}&date=${dateStr}&pageNo=${pageNoBus}`)
  return await client.get(`/traffic/bus/result?startTerminal=${startTerminal}&endTerminal=${endTerminal}&date=${dateStr}&pageNo=${pageNoBus}`);
};

