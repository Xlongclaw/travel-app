import connectDB from "@/app/db/connectDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectDB().then(() =>
    console.log("Mongo Database connection succesful")
  );
  const myuser = new User({
    name: "sfsa",
    email: "sfds",
    password: "sfsdf",
  });
  await myuser.save();
  return NextResponse.json({ result: myuser });
}
