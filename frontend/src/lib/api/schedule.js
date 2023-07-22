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

export const changeProcedure = async ({ id, scheduleList }) => {
    return await client.post(`/schedule/changeProcedure/${id}`, {scheduleList});
}
