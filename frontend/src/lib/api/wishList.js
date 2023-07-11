import client from "./client";

export const addWishList = ({ id, contentid }) => {
  return client.post(`/wishList`, { id, contentid });
};

