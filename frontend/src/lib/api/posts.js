import client from "./client";

// 게시판 목록
export const listPosts = (page) => {
  console.log("APIssssssssssssssssssssssss");
  return client.get(`/board`, { params: { page } });
};

// 글쓰기
export const writePost = ({ title, content, id }) => {
  console.log("writePostAPIssssssssssssssssssssssss");
  return client.post("/board/write", { title, content, id });
};

// 글상세페이지
export const readPost = (no) => {
  return client.get(`/board/read/${no}`);
};

// 수정 : 안됨
export const updatePost = ({ no, title, content }) => {
  return client.post(`/board/modify`, { title, content, no });
};

//삭제
export const removePost = (no) => {
  return client.post(`/board/remove/${no}`);
};
