import Image from "next/image";
import React from "react";

const FeaturedWrapper = () => {
  const images = [
    require("../assets/herobg5.jpg"),
    require("../assets/herobg6.jpg"),
    require("../assets/herobg2.jpg"),
    require("../assets/herobg8.jpg"),
  ];
  return (
    <div className="flex gap-3">
      <div className=" flex w-[230px] h-[480px] relative overflow-hidden justify-center items-center">
        <Image
          className=" object-cover h-full absolute"
          src={images[0]}
          alt=""
        />
      </div>
      <div className="flex-flex-col gap-3">
        <div className="flex gap-3">
          <div className=" flex w-[210px] h-[210px] relative overflow-hidden justify-center items-center">
            <Image
              className=" object-cover h-full absolute"
              src={images[1]}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex w-[99px] h-[99px] relative overflow-hidden justify-center items-center">
              <Image
                className=" object-cover h-full absolute"
                src={images[2]}
                alt=""
              />
            </div>
            <div className=" flex w-[99px] h-[99px] relative overflow-hidden justify-center items-center">
              <Image
                className=" object-cover h-full absolute"
                src={images[3]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h3 className="text-lg my-2 text-color6 font-semibold">
            Limitless With Dubai
          </h3>
          <h4 className="text-xs font-semibold text-color8">6N/7D</h4>
        </div>
        <h4 className="max-w-[20rem] text-sm font-medium text-color7">
          Experience what it's like to feel on top of the world at the Burj
          Khalifa Enter the grand reception area of the Dubai Mall- the world's
          largest shopping arena and take the 65-metre travelator. Enjoy the
          visual presentation showcasing the wonders of Dubai and Burj Khalifa
          along your way.
        </h4>
        <div className="flex mt-6 justify-between">
            <div className="flex flex-col">
                <div className=" font-medium text-color10 relative w-[6rem]">Rs. 1,07,999 <div className="absolute h-[2px] w-full bg-red-500 top-1/2"></div></div>
                <div className="text-color9 text-2xl font-semibold">Rs. 69,999</div>
            </div>
            <div className="text-sm font-semibold border flex justify-center items-center px-10">BOOK NOW</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWrapper;
