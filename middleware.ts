import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check for user token
    const token = request.cookies.get('userAccessToken')?.value;

    // Define protected routes
    const isDashboardRoute = pathname.startsWith('/dashboard');
    const isAuthRoute = pathname.startsWith('/login') || 
                        pathname.startsWith('/register') || 
                        pathname.startsWith('/forgot-password') || 
                        pathname.startsWith('/reset-password');

    // Redirect to login if accessing dashboard without token
    if (isDashboardRoute && !token) {
        const loginUrl = new URL('/login', request.url);
        // Store the original path to redirect back after login
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Redirect to dashboard if accessing auth routes with a valid token
    if (isAuthRoute && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/login',
        '/register',
        '/forgot-password',
        '/reset-password',
    ],
};
