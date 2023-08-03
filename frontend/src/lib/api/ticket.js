import client from "./client";

export const findVacancy = async ({ category, type, startPlace, endPlace, startDate, endDate }) => {
  return await client.get(`/ticket/findVacancy?category=${category}&type=${type}&startPlace=${startPlace}&endPlace=${endPlace}&startDate=${startDate}&endDate=${endDate}`);
};

export const createTicket = async ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats }) => {
  console.log('createTicket 프론트 api');
  return await client.post("/ticket/createTicket", { category, uno, type, price, startPlace, startDate, endPlace, endDate, seats });
}