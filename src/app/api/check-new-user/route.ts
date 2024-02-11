import connectDB from "@/app/db/connectDB";
import User from "@/app/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, name, image, authType } = await request.json();
  await connectDB();
  let user = await User.findOne({ email: email });
  if (!user) {
    await User.create({
      email,
      name,
      image,
      authType,
    });
    return NextResponse.json({ message: "Added User" }, { status: 200 });
  }
  return NextResponse.json({ message: "User Already exists" });
}
