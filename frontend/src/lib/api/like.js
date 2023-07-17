import client from "./client";

export const isLike = async ({ bno, id }) => {
  return client.get(`/like/${bno}?id=${id}`);
};

