import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { setCookie } from "@/utils/generateToken";
import { validateRegister } from "@/utils/validation";
import { cookies } from "next/headers";
import { RegisterUser } from "@/utils/types";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterUser;
    const { error } = validateRegister(body);
    if (error) {
      return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }
    const user = await prisma.user.findUnique({ where: { email: body.email.trim() } });
    if (user) return NextResponse.json({ message: "تم إستخدام هذا البريد الإلكتروني في حساب آخر" }, { status: 400 });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password.trim(), salt);
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        role: body.role,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true
      }
    });
    const cookie = setCookie({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role });
    (await cookies()).set("jwtToken", JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role }), {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    })
    return NextResponse.json({ ...newUser, message: "تم إنشاء الحساب بنجاح" }, { status: 201, headers: { "Set-Cookie": cookie } });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" + error }, { status: 500 });
  }
}
