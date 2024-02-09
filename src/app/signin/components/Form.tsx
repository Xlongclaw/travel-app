"use client";
import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Form = () => {
  const [selectedForm, setSelectedForm] = useState("signin");
  const changeForm = (type: string) => {
    setSelectedForm(type);
  };
  return (
    <div className="flex flex-col items-center justify-center w-1/2">
      {selectedForm === "signin" ? (
        <SignInForm changeForm={changeForm} />
      ) : (
        <SignUpForm changeForm={changeForm} />
      )}
    </div>
  );
};

export default Form;
