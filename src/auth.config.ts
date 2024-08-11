import { loginSchema } from "@/app/schemas/loginSchema";
import {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "./app/models/User";
// import { compare } from "bcryptjs";

export default {
    providers: [      

    ]
} satisfies NextAuthConfig