"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";

const LoginProviderBtn = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const googleLogin = async () => {
    await signIn(name.toLowerCase(), {
      callbackUrl: "/signin/new-user-check-google",
      redirect: true,
    });
  };
  return (
    <button
      onClick={() => googleLogin()}
      className="flex justify-center items-center gap-3 py-3
 w-[30rem] border-2 border-color1/30 mt-3 rounded-lg font-semibold"
    >
      {children} Login With {name}
    </button>
  );
};

export default LoginProviderBtn;
