import client from "../client"

export const changePhoto = async ({ id, formData }) => {
  //header 설정 해야함.
  return await client.post(`/admin/terms/changePhoto/${id}`, formData, { header: { "content-type": "multipart/form-data" } })
}

export const getAdmin = async ({ id }) => {
  return await client.get(`/admin/terms/${id}`);
}

export const changeInform = async ({ id, businessName, nick, phone, addr1, addr2 }) => {
  return await client.post(`/admin/terms/changeInform/${id}`, {businessName, nick, phone, addr1, addr2 });
}