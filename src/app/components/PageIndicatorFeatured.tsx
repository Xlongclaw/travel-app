import React from "react";
import { motion } from "framer-motion";
import { heroBannerDataType } from "@/app/type";

const PageIndicatorFeatured = ({
  bannerDataJSON,
  selected,
}: {
  bannerDataJSON: string;
  selected: Number;
}) => {
  const bannerData:Array<heroBannerDataType> = JSON.parse(bannerDataJSON)
  return (
    <div className="flex justify-center items-center gap-4 absolute w-[10%] rotate-90 right-[-3rem] top-1/2">
      {bannerData.map((banner, index) => (
        <motion.div
          key={banner.location}
          animate={
            selected == index
              ? { width: 9, height: 9 }
              : { width: 5, height: 5 }
          }
          className="bg-color1 rounded-full"
        ></motion.div>
      ))}
    </div>
  );
};

export default PageIndicatorFeatured;
