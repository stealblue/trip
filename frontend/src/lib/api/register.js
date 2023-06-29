import client from "./client"

export const register = async ({ form }) => {
    console.log(form, "REQUEST");
    await client.post("/auth/register", { form });
}