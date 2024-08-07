import bcrypt from "bcryptjs";

/**
 * Salts and hashes a password
 * @param pw 
 * @returns 
 */
export async function hashPassword(pw:string) : Promise<string> {
    const hashedPw = await bcrypt.hash(pw, 11);
    return hashedPw;
}