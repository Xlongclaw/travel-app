'use client'
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'
import { tourPackageType } from "../types/type";
const PackageWrapper = ({
  tourPackage,
}: {
  tourPackage: tourPackageType
}) => {
  const finalPrice = () => {
    let originalPrice = Number(tourPackage.originalPrice.split(',').join(''))
    return originalPrice-(originalPrice*Number(tourPackage.discount)/100)
  }
  return (
    <motion.div whileHover={{scale:1.05}} className=" p-3 w-[24.3%] shadow2 bg-color9 cursor-pointer flex-shrink-0">
      <Image
        className="w-full h-[17rem]"
        src={tourPackage.image}
        alt=""
      />
      <div className="text-color1 font-bold my-2">
        {tourPackage.name}
      </div>
      <div className="text-color1 font-semibold mt-0 text-sm flex gap-1">
        <h3 className="text-[#33bdbf]">{tourPackage.night}N</h3>
        <h3>{tourPackage.country}</h3>
      </div>
      <h3 className="text-xs font-medium text-color2 my-4">
        {tourPackage.description}
      </h3>
      <div className="flex flex-col">
        <div className=" font-medium text-sm text-color10 relative w-[5.2rem]">
          Rs. {tourPackage.originalPrice}
          <div className="absolute h-[2px] w-full bg-red-500 top-1/2"></div>
        </div>
        <div className="text-color1 text-2xl font-semibold">
          Rs. {finalPrice()} <span className="text-xs">per person</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageWrapper;
