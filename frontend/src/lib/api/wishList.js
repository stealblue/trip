import client from "./client";

export const addWishList = ({ id, contentid, title }) => {
  return client.post(`/wishList`, { id, contentid, title });
};

