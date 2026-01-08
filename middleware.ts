import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value
    const { pathname } = request.nextUrl

    // Public routes
    const publicRoutes = ['/', '/login', '/verify-otp', '/social-connect']
    const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

    // API routes that don't need auth
    const publicApiRoutes = ['/api/auth', '/api/cities', '/api/parties', '/api/representatives', '/api/analytics']
    const isPublicApi = publicApiRoutes.some(route => pathname.startsWith(route))

    if (isPublicRoute || isPublicApi) {
        return NextResponse.next()
    }

    // Protected routes - require authentication
    if (!token && pathname.startsWith('/issues')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
