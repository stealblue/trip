import client from "./client";

export const findVacancy = ({ category, type, startPlace, endPlace, startDate, endDate }) => {
  return client.get(`/ticket/findVacancy&category=${category}&type=${type}&startPlace=${startPlace}&endPlace=${endPlace}&startDate=${startDate}&endDate=${endDate}`);
};

export const createTicket = ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats }) => {
  return client.post("/ticket/createTicket", { category, uno, type, price, startPlace, startDate, endPlace, endDate, seats });
}