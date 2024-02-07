"use client";
import Image from "next/image";
import React from "react";
import PageIndicatorFeatured from "./PageIndicatorFeatured";
import { motion } from "framer-motion";
import useCurrentBannerIndex from "../tourpackages/hooks/useCurrentBannerIndex";
import { heroBannerDataType } from "../tourpackages/types/type";

const HeroBanner = ({bannerData,height}:{bannerData:Array<heroBannerDataType>,height:Number}) => {
  const index = useCurrentBannerIndex(bannerData)
  return (
    <div style={{height:`${height}px`}} className="w-full flex items-center justify-start mt-4 relative overflow-hidden">
      <div
        className={`w-[95%] h-full transition-all duration-500`}
        style={{transform:`translateY(${index*-height}px)`}}
      >
        {
          bannerData.map((banner,i)=>(

            <Image key={i}
            height={1440}
            width={2160}
              className="w-full object-cover h-full"
              src={banner.image}
              alt=""
            />
          ))
        }
      </div>

      <div className="absolute right-36 bottom-12 flex flex-col gap-3">
        <div className="  text-3xl font-semibold text-color9">
          Explore <strong>{bannerData[index].location}</strong>{" "}
        </div>
        <div className="text-color9 max-w-[20rem] text-sm">GET 20% off and cashback upto Rs.5000 on your first booking.</div>
        <motion.div
          onClick={() => {}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring" }}
          className="text-color9 cursor-pointer hover:bg-color9 hover:text-color1 border border-color9 mt-2 h-[3rem] text-xs font-semibold flex items-center justify-center w-[10rem]"
        >
          VIEW PACKAGES
        </motion.div>
      </div>
      <PageIndicatorFeatured
        bannerData={bannerData}
        selected={index}
      />
    </div>
  );
};

export default HeroBanner;
