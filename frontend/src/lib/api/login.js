import client from "./client"

export const login = async ({ id, pwd }) => {
    return await client.post("/auth/login", { id, pwd });
}