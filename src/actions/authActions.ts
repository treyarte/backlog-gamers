'use server';
import User from "@/app/models/User";
import { LoginSchema } from "@/app/schemas/loginSchema";
import { registerSchema, RegisterSchema } from "@/app/schemas/registerSchema";
import { signIn, signOut } from "@/auth";
import { sanitizeInput } from "@/libs/serverSanitizers";
import { ActionResults } from "@/types";
import { AuthError } from "next-auth";
import { createUserInDb } from "./repos/userRepos";
import dbConnect from "@/libs/dbConnect";

/**
 * Sign In a user
 * @param data 
 * @returns 
 */
export async function signInUser(data:LoginSchema) : Promise<ActionResults<string>> {
    try {
        //TODO add this to a repo
        await dbConnect();
        const existingUser:IUser | null = await User.findOne({email: data.email}).exec();

        if(!existingUser) {return {status: "error", error: "Invalid Credentials"}};

        if(!existingUser.emailVerified) {return {status: "error", error: "Please verify your email"}}

        const res = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: true,
            redirectTo: '/'
        });

        return {status: "success", data: "Login Success"};
        
    } catch (error) {
        console.error(error);
        if(error instanceof AuthError) {
            return {status: "error", error: "Invalid Credentials"};
        }
        return {status: "error", error: "Something went wrong"};
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