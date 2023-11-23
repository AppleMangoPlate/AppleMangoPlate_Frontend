import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function middleware(req: NextRequest) {
  const accessToken = getCookie("accessToken");

  if (req.nextUrl.pathname.startsWith("/mypage") && !accessToken) {
    return NextResponse.redirect("/auth");
  }

  if (req.nextUrl.pathname.startsWith("/auth") && accessToken) {
    return NextResponse.redirect("/mypage");
  }

  return NextResponse.next();
}
