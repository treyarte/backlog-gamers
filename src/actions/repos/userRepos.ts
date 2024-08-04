import User from "@/app/models/User";
import { RegisterSchema } from "@/app/schemas/registerSchema";
import dbConnect from "@/libs/dbConnect";

export const createUserInDb = async (user:RegisterSchema) => {
    await dbConnect();
    try {
        const t = await User.create({...user});
        return t;
    } catch (error) {
        console.error(error);
        return null;
    }
}
