import client from "./client"

export const addSchedule = async ({ id,
        contentId,
        title,
        contentTypeId, }) => {
    return await client.post("/schedule/addSchedule/:id", { id,
        contentId,
        title,
        contentTypeId, });
}

export const getScheduleList = async ({ id }) => {
    return await client.get(`/schedule/getScheduleList/${id}`);
}

export const saveList = async ({ id, subject, scheduleList }) => {
    return await client.post(`/schedule/saveList/${id}`, {id, subject, scheduleList});
}

export const getSavedList = async ({ id }) => {
    return await client.get(`/schedule/getSavedList/${id}`);
}