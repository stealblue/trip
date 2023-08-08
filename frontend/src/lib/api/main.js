import client from "./client";

// 게시판 목록
export const mainListPosts = (page) => {
  return client.get(`/boardlist`, { params: { page } });
};

export const getMainStyle = async () => {
  return await client.get("/getMainStyle");
};
