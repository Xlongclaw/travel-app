import { Logo } from "@/app/components";
import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      <h1>
        <Logo />
      </h1>
      <h2 className="text-3xl font-bold">Welcome Back!</h2>
    </div>
  );
};

export default Form;
