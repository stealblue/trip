import client from "./client"

export const getUserList = async () => {
  return await client.get("/admin/user/getUserList");
}

export const getUserDetail = async ({ id }) => {
  return await client.get("/admin/user/detail", {id});
}

export const deleteUser = async ({ id }) => {
  return await client.post("/admin/user/deleteUser", {id});
}