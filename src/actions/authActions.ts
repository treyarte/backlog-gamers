'use server';
import User from "@/app/models/User";
import { LoginSchema } from "@/app/schemas/loginSchema";
import { registerSchema, RegisterSchema } from "@/app/schemas/registerSchema";
import { signIn, signOut } from "@/auth";
import { createUserInDb } from "./repos/userRepos";
import { sanitizeInput } from "@/libs/serverSanitizers";

/**
 * Sign In a user
 * @param data 
 * @returns 
 */
export async function signInUser(data:LoginSchema) {
    try {
        const existingUser = await User.findOne({email: data.email});

        if(!existingUser) {return null};

        //TODO check if email is verified

        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: true,
            redirectTo: '/'
        })

        console.info(res);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signOutUser() {
    await signOut({redirectTo: '/'});
  }

/**
 * Register a new user and sanitizes their input
 * @param data 
 */
export async function registerUser(data:RegisterSchema) {
    try {
        const validate = registerSchema.safeParse(data);

        if(!validate.success) {
            throw new Error(validate.error.message);
        }

        const {displayName, email, password} = validate.data;

        const cleanData:RegisterSchema = {
            displayName: sanitizeInput(displayName),
            email: sanitizeInput(email),
            password: sanitizeInput(password),
            passwordConfirm: ""
        }

        const newUser = await createUserInDb(cleanData);
        return newUser;
    } catch (error) {
        console.error(error);
        return null;
    }
}