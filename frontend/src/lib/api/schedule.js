import client from "./client"

export const addSchedule = async ({ id, contentId }) => {
  return await client.post(`/schedule/changeProfile/${id}/${contentId}`);
}

export const getSchedule = async ({ id }) => {
    console.log(id);
    return await client.get(`/schedule/getSchedule/${id}/`)
}

export const changeSchedule = async ({id}) => {
  return await client.post(`/schedule/changeSchedule/${id}`);
}

export const createSchedule = async ({id}) => {
  return await client.post(`/schedule/createSchedule/${id}`);
}

export const getCompletedList = async ({id}) => {
  return await client.get(`/schedule/completedList/${id}`);
}