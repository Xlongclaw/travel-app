"use client";
import Image from "next/image";
import React from "react";
import { PageIndicatorFeatured } from "@/app/components";
import { motion } from "framer-motion";
import useCurrentBannerIndex from "../hooks/useCurrentBannerIndex";
import { heroBannerDataType } from "../types/type";
import Link from "next/link";

const HeroBanner = ({
  bannerDataJSON,
  height,
}: {
  bannerDataJSON: string;
  height: Number;
}) => {
  const bannerData: Array<heroBannerDataType> = JSON.parse(bannerDataJSON);
  const index = useCurrentBannerIndex(bannerData);
  return (
    <div
      style={{ height: `${height}px` }}
      className="w-full flex items-center justify-start mt-4 relative overflow-hidden"
    >
      <div
        className={`w-[95%] h-full transition-all duration-500`}
        style={{ transform: `translateY(${index * -height}px)` }}
      >
        {bannerData.map((banner, i) => (
          <Image
            key={i}
            height={1440}
            width={2160}
            className="w-full object-cover h-full hover:scale-105 hover:-translate-x-10 transition-all duration-1000"
            src={banner.image}
            alt=""
          />
        ))}
      </div>

      <div className="absolute right-36 bottom-12 flex flex-col gap-3">
        <div className="  text-3xl font-semibold text-color9">
          Explore <strong>{bannerData[index].location}</strong>{" "}
        </div>
        <div className="text-color9 max-w-[20rem] text-sm">
          {bannerData[index].description}
        </div>
        <Link
          href={"/tourpackages/" + bannerData[index].location.toLowerCase()}
        >
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
      <PageIndicatorFeatured
        bannerDataJSON={JSON.stringify(bannerData)}
        selected={index}
      />
    </div>
  );
};

export default HeroBanner;
