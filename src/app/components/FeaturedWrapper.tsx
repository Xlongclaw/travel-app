import Image from "next/image";
import React from "react";
import {BookNowBtn} from "@/app/components";
import { packageType } from "@/app/type";
import useDiscountPrice from "@/app/hooks/useDiscountPrice";

const FeaturedWrapper = ({packageJSON}:{packageJSON:string}) => {
  const packageData:packageType = JSON.parse(packageJSON)
  const finalPrice = useDiscountPrice(packageData.price,packageData.discount)
  return (
    <div className="flex gap-3">
      <div className=" flex w-[230px] h-[480px] relative overflow-hidden justify-center items-center">
        <Image width={1440} height={2160}
          className=" object-cover hover:scale-110 transition-all duration-500 h-full absolute"
          src={packageData.tourImages[0]}
          alt=""
        />
      </div>
      <div className="flex-flex-col gap-3">
        <div className="flex gap-3">
          <div className=" flex w-[210px] h-[210px] relative overflow-hidden justify-center items-center">
            <Image
            width={600} height={600}
              className=" object-cover hover:scale-110 transition-all duration-500 h-full absolute"
              src={packageData.tourImages[1]}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className=" flex w-[99px] h-[99px] relative overflow-hidden justify-center items-center">
              <Image
              width={210} height={210}
                className=" object-cover hover:scale-110 transition-all duration-500 h-full absolute"
                src={packageData.tourImages[2]}
                alt=""
              />
            </div>
            <div className=" flex w-[99px] h-[99px] relative overflow-hidden justify-center items-center">
              <Image
              width={210} height={210}
                className=" object-cover hover:scale-110 transition-all duration-500 h-full absolute"
                src={packageData.tourImages[3]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <h3 className="text-lg my-2 text-color6 font-semibold cursor-default select-none">
            {packageData.name}
          </h3>
          <h4 className="text-xs font-semibold text-color8">{packageData.night}N/{packageData.day}D</h4>
        </div>
        <h4 className="max-w-[20rem] h-[9rem] text-sm font-medium text-color7 cursor-default select-none">
          {packageData.description}
        </h4>
        <div className="flex mt-6 justify-between">
            <div className="flex flex-col">
                <div className=" font-medium text-color10 relative w-[6.5rem]">Rs. {packageData.price}<div className="absolute h-[2px] w-full bg-red-500 top-1/2"></div></div>
                <div className="text-color9 text-2xl font-semibold">Rs. {Math.round(finalPrice)}</div>
            </div>
            <BookNowBtn link={packageData._id}/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWrapper;
