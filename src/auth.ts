import NextAuth from "next-auth";
import {MongoDBAdapter} from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import authConfig from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./app/schemas/loginSchema";
import User from "./app/models/User";


export const {auth, handlers, signIn, signOut} = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    ...authConfig,
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

                // if(!user || !user.password || !(await compare(password, user.password))) {
                //   return null;
                // }                

                return user;
            }      
        })
    ],
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