"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavLink = ({ link }: { link: string }) => {
  return (
    <div className={` ${link === 'Discover' ?"text-color1":"text-color2"} text-base font-semibold hover:text-color1 cursor-pointer relative pb-3`}>
      {link}
      {link === "Discover" && (
        <Image width={70} height={20} className="mt-2" src={require('../assets/line1.png')} alt="" />
        // <div className="absolute h-[3px] w-full bg-color1 bottom-0 rounded-tr-[50%/100px]"></div>
      )}
    </div>
  );
};

export default NavLink;
// border-radius: 50%/100px 100px 0 0;
