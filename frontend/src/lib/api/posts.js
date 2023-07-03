import client from "./client";

export const listPosts = (page) => {
  console.log("APIssssssssssssssssssssssss");
  return client.get(`/board`, { params: { page } });
};

export const writePost = ({ title, content }) => {
  console.log("writePostAPIssssssssssssssssssssssss");
  return client.post("/board/write", { title, content });
};

export const readPost = (no) => {
  return client.get(`/board/read/${no}`);
};
