"use client";
import React from "react";
import LoginProviderBtn from "./LoginProviderBtn";
import Image from "next/image";

const SignInForm = ({ changeForm }: { changeForm: (type: string) => void }) => {
  return (
    <div>
      <div className="mb-6 flex flex-col items-center ">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <h3 className="text-sm font-medium text-color2">
          Let&apos;s get ready to fly high above the sky
        </h3>
      </div>
      <LoginProviderBtn name="Google">
        {
          <Image
            className="h-7 w-7"
            src={require("@/app/assets/google.png")}
            alt=""
          />
        }
      </LoginProviderBtn>
      <LoginProviderBtn name="Github">
        {
          <Image
            className="h-7 w-7"
            src={require("@/app/assets/github.png")}
            alt=""
          />
        }
      </LoginProviderBtn>
      <div className=" w-[30rem] mt-6">
        <h5 className="text-sm font-semibold text-color1 p-1">
          Email
          <span className="text-red-700"> *</span>
        </h5>
        <input
          className="border-2 border-color1/50 px-2 py-3 w-full rounded-lg"
          type="email"
          placeholder="Enter your Email"
        />
      </div>
      <div className=" w-[30rem] mt-4">
        <h5 className="text-sm font-semibold text-color1 p-1">
          Password <span className="text-red-700">*</span>
        </h5>
        <input
          className="border-2 border-color1/50 px-2 py-3 w-full rounded-lg"
          type="password"
          placeholder="Enter your Password"
        />
      </div>
      <div className="flex pt-6 gap-2 items-center">
        <input className="w-4 h-4" type="checkbox" name="" id="" />
        <h5 className="text-sm font-semibold">
          I agree all Term,Privacy Policy and Fees
        </h5>
      </div>
      <button className="py-4 w-[30rem] bg-color4 font-semibold text-color9 mt-5 rounded-lg">
        Sign in
      </button>
      <h3
        onClick={() => changeForm("signup")}
        className="text-sm font-semibold my-2 cursor-pointer"
      >
        New User? Create an Account.
      </h3>
    </div>
  );
};

export default SignInForm;
