import { NextRequest, NextResponse } from "next/server";

export default function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const publicRoutes = ['/login', '/register', '/public'];
    const isStaticAsset = pathname.startsWith('/_next/') || pathname.startsWith('/static/') || pathname.startsWith('/favicon') || pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|txt|json)$/);

    const isProtected = !publicRoutes.includes(pathname);

    if (!isStaticAsset && isProtected) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}