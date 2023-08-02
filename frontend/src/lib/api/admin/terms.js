import client from "../client"

export const changePhoto = async ({ id, formData }) => {
  //header 설정 해야함.
  return await client.post(`/admin/terms/changePhoto/${id}`, formData, { header: { "content-type": "multipart/form-data" } })
}
