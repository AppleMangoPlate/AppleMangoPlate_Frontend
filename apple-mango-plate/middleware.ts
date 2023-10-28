import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const session = await getToken({ req, secret, raw: true });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/auth") || pathname.startsWith("/customlogin")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/auth", "/customlogin"],
};
