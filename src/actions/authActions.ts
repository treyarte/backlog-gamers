'use server';
import { loginSchema, LoginSchema } from "@/app/schemas/loginSchema";
import { registerSchema, RegisterSchema } from "@/app/schemas/registerSchema";
import { auth, signIn, signOut } from "@/auth";
import { sanitizeInput } from "@/libs/serverSanitizers";
import { ActionResults } from "@/types";
import { AuthError } from "next-auth";
import { UserRepo } from "./repos/userRepos";
import { User } from "@prisma/client";
import { hashPassword } from "@/libs/bcryptHelper";
import { convertDateToUtc } from "@/libs/dateHelpers";

const userRepo = new UserRepo();

export async function getAuthUserId() : Promise<string> {
    try {
        const session = await auth();
        const userId = session?.user?.id;

        if(!userId) {
            throw new Error("Unauthorized");
        }

        return userId;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

/**
 * Sign In a user
 * @param data 
 * @returns 
 */
export async function signInUser(data:LoginSchema) : Promise<ActionResults<string>> {
    try {
        const validated = loginSchema.safeParse(data);

        if(!validated.success) {
            return {status: "error", error: validated.error.errors};
        }
        
        const {email, password} = validated.data;

        const sanitizeEmail = sanitizeInput(email);
        const sanitizePassword = sanitizeInput(password);

        const existingUser = await userRepo.findUserByEmail(sanitizeEmail)

        if(!existingUser) {return {status: "error", error: "Invalid Credentials"}};

        // if(!existingUser.emailVerified) {return {status: "error", error: "Please verify your email"}}

        const _ = await signIn('credentials', {
            email: sanitizeEmail,
            password: sanitizePassword,
            redirect: false,            
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
export async function registerUser(data:RegisterSchema) : Promise<ActionResults<User>> {
    try {
        
        const validated = registerSchema.safeParse(data);

        if(!validated.success) {
            return {status: 'error', error: validated.error?.errors};
        }

        let {displayName, email, password} = validated.data;

        displayName = sanitizeInput(displayName.trim());
        email = sanitizeInput(email.trim());
        password = sanitizeInput(password).trim();

        const passwordHash = await hashPassword(password)

        const userData:User = {
            id:"",
            name:displayName,
            email,
            passwordHash,
            image:"",
            emailVerified:convertDateToUtc(new Date()) as unknown as Date,
            updatedAt:  convertDateToUtc(new Date()) as unknown as Date,
            createdAt: convertDateToUtc(new Date()) as unknown as Date,
        }

        //TODO check if email exists

        const newUser = await userRepo.createUser(userData);

        //TODO send verification email

        return {status: "success", data:newUser};
    } catch (error) {
        console.error(error);
        return {status: "error", error: "Something went wrong"};
    }
}
