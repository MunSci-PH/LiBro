import { NextResponse, type NextRequest } from "next/server";
import { createSSRClient } from "./app/config/server";

export async function middleware(request: NextRequest) {
  const supabase = createSSRClient();

  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;
  if (
    !data.session &&
    !request.nextUrl.pathname.startsWith("/dashboard/auth/login") &&
    !request.nextUrl.pathname.startsWith("/dashboard/auth/register") &&
    !request.nextUrl.pathname.startsWith("/dashboard/auth/success")
  ) {
    return NextResponse.redirect(new URL("/dashboard/auth/login", request.url));
  } else if (
    data.session &&
    request.nextUrl.pathname.startsWith("/dashboard/auth/login") &&
    request.nextUrl.pathname.startsWith("/dashboard/auth/register") &&
    request.nextUrl.pathname.startsWith("/dashboard/auth/success")
  ) {
    return NextResponse.redirect(new URL("/dashboard/", request.url));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
