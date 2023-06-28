import client from "./client"

export const register = async ({ value, key }) => {
    console.log(value, key, "REQUEST");
    await client.post("/auth/register", { value, key });
}