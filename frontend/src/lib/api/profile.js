import client from "./client"

///user profile
export const getProfile = async ({id}) => {
    return await client.get(`/profile/${id}`);
}

export const changeImage = async ({id}) => {
    return await client.post("/profile/changeImage/:id", {id});
}

export const onModify = async ({id}) => {
    return await client.post("/profile/onModify/:id", {id});
}

export const onWithdraw = async ({id}) => {
    return await client.delete("/profile/onWithdraw/:id", {id});
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
  console.log(no,"============");
    return await client.delete(`/profile/deleteLike/${no}`);
}
///wishList
export const getWishList = async ({id}) => {
  return await client.get(`/profile/getWishList/${id}`);
}

export const deleteWish = async ({no}) => {
    return await client.delete(`/profile/deleteWish/${no}`);
}
