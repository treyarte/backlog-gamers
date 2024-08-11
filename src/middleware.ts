import { auth } from "@/auth";
import { authRoutes, publicRoutes } from "./routes";
import { NextResponse } from "next/server";

// import authConfig from "./auth.config";
// import NextAuth from "next-auth";

// export const { auth: middleware } = NextAuth(authConfig);

export default auth((req) => {
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isPublic = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isPublic) {        
        return NextResponse.next();
    }
    
    if(isAuthRoute) {
        if(isLoggedIn) {
            return NextResponse.redirect(new URL('/', nextUrl));
        }

        return NextResponse.next();
    }
    
    if(!isPublic && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }