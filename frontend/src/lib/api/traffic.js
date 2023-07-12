import client from "./client";

export const listStations = () => {
  console.log('frontEnd > src > lib > api > traffic.js > listStations!')
  return client.get(`/traffic/train`);
};

export const detailStations = ({ cityCode }) => {
  return client.get(`/traffic/train/${cityCode}`, ({ cityCode }));
};

export const listTerminals = () => {
  return client.get(`/ traffic / bus`);
};

export const detailTerminals = ({ cityCode }) => {
  return client.get(`/ traffic / bus / ${cityCode}`, ({ cityCode }));
};


