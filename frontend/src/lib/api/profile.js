import client from "./client"

export const getProfile = async ({id}) => {
    return await client.post("/profile/:id", {id});
}
