import client from "./client"

export const login = async ({ value, key }) => {
    console.log(value, key, "REQUEST");
    await client.post("/auth/login", { value, key });
}