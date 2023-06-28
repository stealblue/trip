import client from "./client";

export const listRooms = () => {
  return client.get(`/routes/chat`, {});
};

export const createRoom = async ({ title, owner, max, password }) => {
  await client.post("/chat/room", { title, owner, max, password });
};
