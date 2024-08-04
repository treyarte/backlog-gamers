'use server';
import { RegisterSchema } from "@/app/schemas/registerSchema";
import { createUserInDb } from "./repos/userRepos";

export const createUser = async (user:RegisterSchema) => {
    const res = await createUserInDb(user);
    return JSON.parse(JSON.stringify(res));
}