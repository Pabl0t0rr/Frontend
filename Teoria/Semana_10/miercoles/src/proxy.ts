import { NextRequest, NextResponse } from "next/server";

export const proxy = (req: NextRequest) => {
  // const isValidRoute = req.nextUrl.pathname.startsWith("/importante");
  const isLegal = req.cookies.get("isLegal");

  //   if (isValidRoute && !isLegal) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }

  if (!isLegal) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/importante/:path*"],
};
