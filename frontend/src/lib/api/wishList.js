import client from "./client";

export const addWishList = ({ id, contentid, title, contenttypeid }) => {
  return client.post(`/wishList`, { id, contentid, title, contenttypeid });
};

