import client from "./client"

///user profile
export const getProfile = async ({id}) => {
  return await client.get(`/profile/${id}`);
}

export const changePhoto = async ({ id, img }) => {
  console.log(img.get("img"),"===========");
  return await client.post(`/profile/changePhoto/${id}`, {img});
}

export const nickChk = async ({ nick }) => {
  return await client.post("/profile/nickChk/:nick", { nick });
}

export const changeProfile = async ({ id, nick }) => {
  return await client.post("/profile/changeProfile/:id", {id, nick});
}

export const withdraw = async ({ id }) => {
  return await client.delete(`/profile/withdraw/${id}`);
}

///board
export const getBoardList = async ({id}) => {
  return await client.get(`/profile/getBoardList/${id}`);
}

export const deleteBoard = async ({ no }) => {
    return await client.delete(`/profile/deleteBoard/${no}`);
}
///reply
export const getReplyList = async ({id}) => {
  return await client.get(`/profile/getReplyList/${id}`);
}

export const deleteReply = async ({no}) => {
    return await client.delete(`/profile/deleteReply/${no}`);
}
///like
export const getLikeList = async ({id}) => {
  return await client.get(`/profile/getLikeList/${id}`);
}

export const deleteLike = async ({ no }) => {
    return await client.delete(`/profile/deleteLike/${no}`);
}
///wishList
export const getWishList = async ({id}) => {
  return await client.get(`/profile/getWishList/${id}`);
}

export const deleteWish = async ({no}) => {
    return await client.delete(`/profile/deleteWish/${no}`);
}
