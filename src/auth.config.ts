import { loginSchema } from "@/app/schemas/loginSchema";
import { compare } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByEmail } from "./actions/userActions";
import { ActionResults } from "./types";
import { User } from "@prisma/client";
import { UserRepo } from "./actions/repos/userRepos";

const userRepo = new UserRepo();

export default {
    providers: [      
        Credentials({
            name: 'credentials',         
            async authorize(credentials, req) {
                const validated = loginSchema.safeParse(credentials);

                if(!validated.success) {
                  return null;
                }

                const {email, password} = validated.data;

                const user = await userRepo.findUserByEmail(email);

               if(await checkUserValid(user, password)) {                    
                    return user
               }
                
               return null;
            }      
        })
    ]
} satisfies NextAuthConfig;

/**
 * Checks to see if a User results is valid
 * @param userResults 
 * @param password 
 * @returns 
 */
const checkUserValid = async (user:User|null, password:string) : Promise<boolean> => {
    if(!user) {
        return false;
    }

    const {passwordHash: userPwHash} = user;

    if(!userPwHash || !(await compare(password, userPwHash))) {
        return false;
    }

    return true;
}