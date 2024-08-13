import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface User {        
        name:string;
    }

    interface Session {
        user: {
            name:string
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        name
    }
}
