import client from "./client";

export const listRooms = (page) => {
  return client.get(`/room`, { params: { page } });
};

export const readRoom = ({ _id }) => {
  console.log("frontend/api/readRoom : ", _id);
  return client.get(`/room/${_id}`, { _id });
};

export const createRoom = async ({ title, owner, max, password }) => {
  return await client.post("/room", { title, owner, max, password });
};

export const deleteRoom = async (_id) => {
  return await client.delete("/room/:roomId", { _id });
};

export const listChats = async ({ room }) => {
  console.log("room : ", room);
  return await client.get(`/chat/${room}`, { room });
};

export const insertChat = async ({ room, user, content }) => {
  return await client.post(`/chat`, { room, user, content });
};
