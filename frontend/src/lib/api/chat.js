import client from "./client";

export const listRooms = (page) => {
  return client.get(`/chat`, { params: { page } });
};

export const readRoom = ({ _id, password }) => {
  return client.get(`/chat/:roomId/?password=${password}`, {
    _id,
    password,
  });
};

export const createRoom = async ({ title, owner, max, password }) => {
  return await client.post("/chat", { title, owner, max, password });
};

export const deleteRoom = async (_id) => {
  return await client.delete("/chat/:roomId", { _id });
};

export const insertChat = async ({ room, user, chat }) => {
  return await client.post("/chat/:roomId/chat", { room, user, chat });
};
