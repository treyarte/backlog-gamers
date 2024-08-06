import User from "@/app/models/User";
import { RegisterSchema } from "@/app/schemas/registerSchema";
import { hashPassword } from "@/libs/bcryptHelper";
import dbConnect from "@/libs/dbConnect";

/**
 * Creates a new user in the database
 * @param user 
 * @returns 
 */
export const createUserInDb = async (user:RegisterSchema) => {
    await dbConnect();
    try {
        const hashedPw = await hashPassword(user.password.trim());
        const newUser = await User.create({
                displayName: user.displayName,               
                email: user.email,
                password:hashedPw,
                image:"" //TODO implement images
        });
        return newUser;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
