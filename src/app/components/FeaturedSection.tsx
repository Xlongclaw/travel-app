import React from "react";
import { FeaturedWrapper } from "@/app/components";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { packageType } from "@/app/type";

const FeaturedSection = ({
  featuredPackagesData,
}: {
  featuredPackagesData: string;
}) => {
  const featuredPackages: Array<packageType> = JSON.parse(featuredPackagesData);
  return (
    <div className="h-[55rem] bg-color5 text-color6 px-[9rem] py-[6.4rem] shadow-2xl shadow-black">
      <div className="flex justify-between items-center">
        <div className=" mb-[4rem]">
          <h2 className="text-5xl font-medium cursor-default select-none">
            Let's start your journey
          </h2>
          <h2 className="text-color7 text-xl font-medium mt-3 cursor-default select-none">
            Journey to the mysterious island.
          </h2>
        </div>
        <Link
          href={"/tourpackages"}
          className="font-medium flex items-center gap-4 hover:underline py-1"
        >
          SEE MORE <BsArrowRight />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <FeaturedWrapper packageJSON={JSON.stringify(featuredPackages[0])} />
        <div className="h-[25rem] w-[1px] bg-color1"></div>
        <FeaturedWrapper packageJSON={JSON.stringify(featuredPackages[1])} />
      </div>
    </div>
  );
};

export default FeaturedSection;
