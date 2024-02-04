import React from "react";
import FeaturedWrapper from "./FeaturedWrapper";

const FeaturedSection = () => {
  return (
    <div className="h-[55rem] bg-color5 text-color6 px-[9rem] py-[6.4rem]">
      <div className=" mb-[7.2rem]">
        <h2 className="text-5xl font-medium">Let's start your journey</h2>
        <h2 className="text-color7 text-xl font-medium mt-3">
          Journey to the mysterious island.
        </h2>
      </div>
      <div className="flex justify-between items-center">
        <FeaturedWrapper/>
        <div className="h-[25rem] w-[1px] bg-color1"></div>
        <FeaturedWrapper/>
      </div>
    </div>
  );
};

export default FeaturedSection;
