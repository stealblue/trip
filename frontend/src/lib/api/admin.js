import client from "./client"

export const getUserList = async () => {
  return await client.get("/admin/user/getUserList");
}

export const getUserDetail = async ({ id }) => {
  return await client.post("/admin/user/getUserDetail", {id});
}

export const deleteUser = async ({ id }) => {
  return await client.delete(`/admin/user/deleteUser/${id}`);
}

export const getBoardList = async () => {
	return await client.get("/admin/board/getBoardList");
}

export const getBoardDetail = async ({ no }) => {
  return await client.post("/admin/user/getBoardDetail", {no});
}

export const deleteBoard = async ({ no }) => {
	return await client.delete(`/admin/board/deleteBoard/${no}`);
}