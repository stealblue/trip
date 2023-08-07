import client from "../client"

export const getStyle = async ({ id }) => {
  return await client.get(`/admin/style/${id}`);
}

export const changeStyle = async ({ id, adminStyle }) => {
  return await client.post(`/admin/style/changeStyle/${id}/${adminStyle}`);
}
