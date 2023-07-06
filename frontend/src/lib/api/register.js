import client from "./client"

export const register = async ({ form }) => {
    return await client.post("/auth/register", { form });
}

export const idChk = async ({ id }) => {
    return await client.post("/auth/register/idChk", { id });
}

export const nickChk = async ({ nick }) => {
    return await client.post("/auth/register/nickChk", { nick });
}

export const phoneChk = async ({ phone }) => {
    return await client.post("/auth/register/phoneChk", { phone });
}

export const authNumChk = async ({ authNum, phone }) => {
    return await client.post("auth/register/authNumChk", { authNum, phone });
}
