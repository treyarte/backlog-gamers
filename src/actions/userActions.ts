import { sanitizeInput } from "@/libs/serverSanitizers";
import { UserRepo } from "./repos/userRepos";
import { ActionResults } from "@/types";
import { User } from "@prisma/client";

const userRepo = new UserRepo();
/**
 * Finds a single user by email using the userRepo and sanitize the email field
 * @param email 
 * @returns 
 */
export const findUserByEmail = async (email:string) : Promise<ActionResults<User>> => {
    try {
        const sanitizedEmail = sanitizeInput(email.trim()); 
        const foundUser = await userRepo.findUserByEmail(sanitizedEmail);

        if(foundUser) {
            return {status: "success", data:foundUser}
        }
        
        return {status: "error", error: "User not found"}            
        
    } catch (error) {
        return {status: "error", error: "Something went wrong"}
    }
}