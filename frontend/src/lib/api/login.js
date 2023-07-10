import client from "./client"

export const login = async ({ id, pwd }) => {
    return await client.post("/auth/login", { id, pwd });
}

export const logout = async () => {
    return await client.get("/auth/logout");
}

export const check = async () => {
    return await client.get("/auth/check");
}

export const searchId = async ({email, phone}) => {
    return await client.get("/auth/searchId", {email, phone});
}

export const searchPwd = async ({email, phone}) => {
    return await client.get("/auth/searchPwd", {email, phone});
}