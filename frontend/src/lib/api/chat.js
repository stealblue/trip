import client from "./client";

export const listRooms = (page) => {
  return client.get(`/chat`, { params: { page } });
};

export const readRoom = (_id, password) => {
  return client.get(`/chat/room/:roomId/?password=${password}`, {
    _id,
    password,
  });
};

export const createRoom = async ({ title, owner, max, password }) => {
  return await client.post("/chat/room", { title, owner, max, password });
};

export const insertChat = async ({ room, user, chat }) => {
  return await client.post("/chat/room/:roomId", { room, user, chat });
};
