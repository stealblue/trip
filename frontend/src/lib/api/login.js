import client from "./client"

export const login = async ({ id, pwd }) => {
    return await client.post("/auth/login", { id, pwd });
}

export const logout = () => {
    return client.post("/auth/logout");
}

export const check = async () => {
    return client.get("/auth/check");
}