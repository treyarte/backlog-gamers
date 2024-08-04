import NextAuth from "next-auth";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import authConfig from "./auth.config";

export const {auth, handlers, signIn, signOut} = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    ...authConfig
})