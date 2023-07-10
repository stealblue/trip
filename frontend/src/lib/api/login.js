import client from "./client"

export const login = async ({ id, pwd }) => {
    return await client.post("/auth/login", { id, pwd });
}

export const logout = async () => {
    return await client.get("/auth/logout");
}

export const check = async () => {
    console.log('체크ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ')
    return await client.get("/auth/check");
}