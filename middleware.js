import assets from "./assets.json";
import { NextResponse } from "next/server";

export async function middleware(req, res) {
  try {
    const cookie = req.cookies.get("token");
    const body = { token: cookie.value || "tidak ada token" };
    const responseToken = await fetch(assets.API + "/user/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const dataToken = await responseToken.json();

    if (dataToken.msg === "Harap login dulu")
      return NextResponse.redirect(new URL("/login", req.url));
    return NextResponse.next();
  } catch (err) {
    console.log({ err });
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/berita/:path*",
    "/dashboard",
    "/kegiatan/:path*",
    "/penduduk/:path*",
    "/pengurus/:path*",
    "/detail",
  ],
};
