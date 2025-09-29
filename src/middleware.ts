import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

import { authRoutes, publicRoutes, protectedRoutes } from "@/lib/routes";

export async function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);
    const { pathname } = request.nextUrl;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (authRoutes.includes(pathname)) {
        if (sessionCookie) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
        return NextResponse.next();
    }

    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!sessionCookie) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return NextResponse.next();
    }

    if (!sessionCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};