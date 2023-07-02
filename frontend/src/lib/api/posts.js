import client from "./client";

export const writePost = ({ title, content }) => {
  return client.post("/board/write", { title, content });
};

export const readPost = (no) => {
  return client.get(`/board/read/${no}`);
};

export const listPosts = () => {
  return client.get(`/board`);
};
