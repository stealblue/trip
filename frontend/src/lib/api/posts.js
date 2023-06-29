import client from "./client";

export const writePost = ({ title, content }) => {
  return client.post("/board/write", { title, content });
};

// export const listPosts = ({ title, content, nick }) => {
//   return client.get(`/board`, { title, content, nick });
// };

export const listPosts = () => {
  return client.get(`/board`);
};
