"use client";
import Image from "next/image";
import React from "react";
import { PageIndicatorFeatured } from "@/app/components";
import { motion } from "framer-motion";

import Link from "next/link";
import { signInSliderDataType } from "@/app/type";
import useCurrentSliderIndex from "../hooks/useCurrentSliderIndex";

const SignInSlider = ({ sliderDataJSON }: { sliderDataJSON: string }) => {
  const bannerData: signInSliderDataType = JSON.parse(sliderDataJSON);
  const index = useCurrentSliderIndex(bannerData);
  return (
    <div className="w-1/2 h-full flex items-center justify-start mt-4 relative overflow-hidden">
      <div
        className={`w-[95%] h-full transition-all duration-500`}
        style={{ transform: `translateY(${index * -100}%)` }}
      >
        {bannerData.map((banner, i) => (
          <Image
            key={i}
            height={1440}
            width={2160}
            className="w-full object-cover h-full hover:scale-105  transition-all duration-1000"
            src={banner.image}
            alt=""
          />
        ))}
      </div>

      <div className="absolute left-16 bottom-16 flex flex-col gap-3">
        <div className="  text-3xl font-semibold text-color9 max-w-[20rem]">
          {bannerData[index].title}
        </div>
        <div className="text-color9 max-w-[20rem] text-sm">
          {bannerData[index].description}
        </div>
        <Link href={"tourpackages"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring" }}
            className="text-color9 cursor-pointer hover:bg-color9 hover:text-color1 border border-color9 mt-2 h-[3rem] text-xs font-semibold flex items-center justify-center w-[10rem]"
          >
            VIEW PACKAGES
          </motion.div>
        </Link>
      </div>
      {/*  */}
    </div>
  );
};

export default SignInSlider;
