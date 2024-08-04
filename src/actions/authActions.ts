'use server';
import User from "@/app/models/User";
import { LoginSchema } from "@/app/schemas/loginSchema";
import { signIn } from "@/auth";

export async function signInUser(data:LoginSchema) {
    try {
        const existingUser = await User.findOne({email: data.email});

        if(!existingUser) {return null};

        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        console.info(res);
    } catch (error) {
        console.error(error);
        throw error;
    }
}