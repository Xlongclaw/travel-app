"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginProviderBtn = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <button
      onClick={() => signIn(name.toLowerCase())}
      className="flex justify-center items-center gap-3 py-3
 w-[30rem] border-2 border-color1/30 mt-3 rounded-lg font-semibold"
    >
      {children} Login With {name}
    </button>
  );
};

export default LoginProviderBtn;
