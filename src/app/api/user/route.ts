import connectDB from "@/app/db/connectDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  await connectDB().then(() =>
    console.log("Mongo Database connection succesful")
  );
  const myuser = new User({
    name,
    email,
    password,
  });
  await myuser.save();
  return NextResponse.json({ result: myuser });
}
