import NextAuth from "next-auth";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import authConfig from "./auth.config";

export const {auth, handlers, signIn, signOut} = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    ...authConfig,
    callbacks: {
        jwt({token, user}) {
            if(user) {
                token.id = user.id;
                token.displayName = user.displayName;
            }
            return token;
        },
        session({token, session, user}) {
            if(token.sub && session.user) {
                session.user.id = token.sub;
                session.user.displayName = token.displayName as string;
            }
            return session;
        }
    }
})