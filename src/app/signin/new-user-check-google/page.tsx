import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  await axios.post("/api/check-new-user", {
    email: session?.user?.email,
    name: session?.user?.name,
    image: session?.user?.image,
    authType: "google",
  });
  redirect("/");
  return <div>Redirecting ...</div>;
};

export default page;
