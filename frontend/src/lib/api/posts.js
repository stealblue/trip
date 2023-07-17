import client from "./client";

// 게시판 목록
export const listPosts = (page) => {
  return client.get(`/board`, { params: { page } });
};

// 글쓰기
export const writePost = ({ title, content, id }) => {
  return client.post("/board/write", { title, content, id });
};

// 글상세페이지
export const readPost = (no) => {
  return client.get(`/board/read/${no}`);
};

// 글 수정
export const updatePost = ({ no, title, content }) => {
  return client.post(`/board/modify`, { title, content, no });
};

//삭제
export const removePost = (no) => {
  return client.post(`/board/remove/${no}`);
};

//좋아요
export const likePost = ({ id, no }) => {
  return client.post(`/board/like`, { id, no });
};

//댓글쓰기
export const replyPost = ({ content, id, bno }) => {
  return client.post(`/board/write/reply/${bno}`, { content, id, bno });
};

//댓글읽기
export const replyReadPosts = (bno) => {
  return client.get(`/board/read/reply/${bno.bno}`);
};

//댓글수정
export const replyModifyPost = ({ no, content }) => {
  // console.log('프론트 엔드 api replyModifyPost ===>', no, "    :    ", content)
  return client.post(`/board/read/reply/modify`, { no, content });
};

//댓글삭제
export const replyRemovePost = (no) => {
  return client.post(`/board/read/reply/remove/${no}`);
};
