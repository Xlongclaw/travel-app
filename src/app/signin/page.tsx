import { signIn, useSession } from "next-auth/react";
import React from "react";
import Form from "./components/Form";
import { getSignInSliderData } from "../../../sanity/sanity.query";
import { signInSliderDataType } from "../type";
import { BsArrowLeft } from "react-icons/bs";
import SignInSlider from "./components/SignInSlider";

const page = async () => {
  const signInSliderData: signInSliderDataType = await getSignInSliderData();
  // const session = useSession();
  return (
    <div className="flex px-32 py-12 h-screen relative">
      <Form />
      <SignInSlider sliderDataJSON={JSON.stringify(signInSliderData)} />
      {/* <div
        className=" w-1/2 bg-cover"
        style={{ backgroundImage: `url(${signInSliderData[0].image})` }}
      ></div> */}
      <div className="absolute top-16 left-24">
        <BsArrowLeft size={40} />
      </div>
    </div>
  );
};

export default page;

{
  /* <h2>{session.data?.user?.name}</h2> */
}
