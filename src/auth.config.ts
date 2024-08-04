import { loginSchema } from "@/app/schemas/loginSchema";
import {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "./app/models/User";

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

                const user = await User.findOne({email});

                if(!user) {
                  return null;
                }

                return user;
            }      
        })
    ]
} satisfies NextAuthConfig