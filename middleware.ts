import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token
        const isAuth = !!token
        const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup")

        if (isAuthPage) {
            if (isAuth) {
                return NextResponse.redirect(new URL("/dashboard", req.url))
            }
            return null
        }

        // Role-based protection
        if (req.nextUrl.pathname.startsWith("/admin") && token?.role !== "admin") {
            return NextResponse.redirect(new URL("/login", req.url))
        }

        if (req.nextUrl.pathname.startsWith("/dashboard") && !isAuth) {
            return NextResponse.redirect(new URL("/login", req.url))
        }

        return null
    },
    {
        callbacks: {
            async authorized() {
                // This is a check for the middleware itself. 
                // We handle logic inside the middleware function above.
                return true
            },
        },
    }
)

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
}
