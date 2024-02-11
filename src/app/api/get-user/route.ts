import connectDB from "@/app/db/connectDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import { signIn, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";

export async function GET(request: Request) {
  let user = null;
  const session = await getServerSession(authOptions);
  await connectDB();
  user = await User.findOne({ email: session?.user?.email });
  return NextResponse.json(user);

  // if (status == "authenticated") {
  //   user = await User.findOne({ email: session?.user?.email });
  //   return NextResponse.json(user);
  // }
  // return NextResponse.json(user);
}
