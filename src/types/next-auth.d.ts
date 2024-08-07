import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface User {        
        displayName:string;
    }

    interface Session {
        user: {
            displayName:string
        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        displayName
    }
}
