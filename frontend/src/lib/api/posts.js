import client from "./client";

// 게시판 목록
export const listPosts = (page) => {
  console.log("APIssssssssssssssssssssssss");
  return client.get(`/board`, { params: { page } });
};

// 글쓰기
export const writePost = ({ title, content }) => {
  console.log("writePostAPIssssssssssssssssssssssss");
  return client.post("/board/write", { title, content });
};

// 글상세페이지
export const readPost = (no) => {
  return client.get(`/board/read/${no}`);
};

export const updatePost = ({ id, title, content }) => {
  client.patch(`/board/modify`, { title, content });
};
