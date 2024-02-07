'use client'
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'
import { packageType } from "../types/type";
import Link from "next/link";
const PackageWrapper = ({
  tourPackage,
}: {
  tourPackage: packageType
}) => {
  const finalPrice = () => {
    let originalPrice = Number(tourPackage.price.split(',').join(''))
    return originalPrice-(originalPrice*Number(tourPackage.discount)/100)
  }
  return (
    <Link className="w-[24.3%] flex-shrink-0" href={"/viewpackage/" + tourPackage._id}>
    <motion.div whileHover={{scale:1.05}} className=" p-3 pb-6 w-full shadow2 bg-color9 cursor-pointer ">
      <Image
        className="w-full h-[18rem]"
        src={tourPackage.tourImages[0]}
        alt=""
        width={700}
        height={700}
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
        <div className=" font-medium text-sm text-color10 relative w-[5.5rem]">
          Rs. {tourPackage.price}
          <div className="absolute h-[2px] w-full bg-red-500 top-1/2"></div>
        </div>
        <div className="text-color1 text-2xl font-semibold">
          Rs. {finalPrice()} <span className="text-xs">per person</span>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default PackageWrapper;
