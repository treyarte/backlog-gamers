import { RegisterSchema } from "@/app/schemas/registerSchema";
import { hashPassword } from "@/libs/bcryptHelper";
import { convertDateToUtc } from "@/libs/dateHelpers";
import { prisma } from "@/libs/prisma";
import { User } from "@prisma/client";

/**
 * Creates a new user in the database
 * @param user 
 * @returns 
 */
// export const createUserInDb = async (user:RegisterSchema) => {
//     await dbConnect();
//     try {
//         const hashedPw = await hashPassword(user.password.trim());
//         const newUser = await User.create({
//                 displayName: user.displayName,               
//                 email: user.email,
//                 password:hashedPw,
//                 image:"" //TODO implement images
//         });
//         return newUser;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

/**
 * Handles communication with the users collection in the database
 */
export class UserRepo {
    
    /**
     * Finds a single user by their email
     * @param email 
     * @returns 
     */
    public async findUserByEmail(email:string) {
        try {
            const foundUser = await prisma.user.findUnique({
                where: {email}
            });

            return foundUser;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    public async createUser(user:User) {
        const {email, passwordHash, name, updatedAt} = user;
        try {
             return prisma.user.create({
                data: {
                    name,
                    email,
                    passwordHash,
                    image:"",                    
                    updatedAt
                }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}