'use client'
import Image from "next/image";
import React from "react";
import PageIndicatorFeatured from "./PageIndicatorFeatured";
import {motion} from 'framer-motion'

const HeroBanner = () => {
  return (
    <div className="w-full h-[20rem] overflow-hidden flex items-center justify-center mt-4 relative">
      <Image className="w-[95%]" src={require("../assets/herobg7.jpg")} alt="" />
      <div className="absolute left-16 bottom-12 flex flex-col">
        <div className="  text-3xl font-semibold text-color6">
          Explore <strong>AFRICA</strong>{" "}
        </div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{type:"spring"}} className="text-color6 cursor-pointer hover:bg-color6 hover:text-color1 border border-color6 mt-2 h-[3rem] text-xs font-semibold flex items-center justify-center w-[10rem]">
          VIEW PACKAGES
        </motion.div>
        
      </div>
      <PageIndicatorFeatured/>
    </div>
  );
};

export default HeroBanner;
