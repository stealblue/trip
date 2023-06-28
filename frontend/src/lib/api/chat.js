import client from "./client";

// export const writePost = ({ title, body, tags }) =>
//   client.post("/routes/chat", { title, body, tags });

// export const readPost = (id) => client.get(`/api/posts/${id}`);

// export const listPosts = ({ page, username, tag }) => {
//   return client.get(``, {
//     params: { page, username, tag },
//   });
// };
export const listRooms = () => {
  return client.get(`/routes/chat`, {});
};

export const createRoom = async ({ title, host, max, password }) => {
  console.log("tttttttttttttttttttttttttt");
  await client.post("/chat/room", { title, host, max, password });
};

// export const updatePost = ({ id, title, body, tags }) =>
//   client.patch(`/api/posts/${id}`, {
//     title,
//     body,
//     tags,
//   });

// export const removePost = (id) => client.delete(`/api/posts/${id}`);
