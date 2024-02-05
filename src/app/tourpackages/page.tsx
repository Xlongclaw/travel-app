import React from "react";
import NavBar from "@/app/components/NavBar";
import HeroBanner from "../components/HeroBanner";

const page = () => {
  return (
    <div className="py-8 px-32 w-full">
      <NavBar />
      <HeroBanner/>
    </div>
  );
};

export default page;
