import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma} from "@/libs/prisma"
import NextAuth from "next-auth";
import authConfig from "./auth.config";


export const {auth, handlers, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    ...authConfig,
    callbacks: {
        jwt({token, user}) {
            if(user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },
        session({token, session, user}) {
            if(token.sub && session.user) {
                session.user.id = token.sub;
                session.user.name = token.name as string;
            }
            return session;
        }
    }
})