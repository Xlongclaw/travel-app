import React from "react";
import NavBar from "@/app/components/NavBar";
import HeroBanner from "../components/HeroBanner";
import PackageWrapper from "./components/PackageWrapper";
import popularPackagesData from "./constants/popularPackagesData";
import * as Icon from "react-icons/bs";
import Footer from "../components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full bg-color9 ">
      <div className="pt-8 px-32">
        <NavBar />
      </div>
      <div className="px-32 ">
        <HeroBanner />
        <div className="flex flex-col items-center justify-center  mt-6">
          <h3 className="text-xl font-semibold text-color4">
            POPULAR PACKAGES
          </h3>
          <h3 className="text-sm font-medium text-color1">
            Our most popular tour package just for you.
          </h3>
        </div>
        <div className="flex justify-between mt-4 mr-16 relative">
          {popularPackagesData.map((tourPackage, i) => (
            <PackageWrapper key={i} tourPackage={tourPackage} />
          ))}
          <Icon.BsChevronRight
            size={60}
            className="absolute  shadow-xl bg-color9 text-col  p-5 right-[-2rem] top-1/2 rounded-full"
          />
          <Icon.BsChevronLeft
            size={60}
            className="absolute  shadow-xl bg-color9 text-col  p-5 left-[-2rem] top-1/2 rounded-full hidden"
          />
        </div>
        <div className="w-[96%] mt-16 mb-12 border-t-2 border-color1/10 border-dashed"></div>

        <div className="bg-color5 w-full h-[30rem] mb-6 flex gap-24 pr-8 py-10">
          <div className="text-lg font-semibold text-color6 flex justify-center items-center gap-3">
            <span className="bg-color6 h-[2px] w-[6rem]"></span>PLACES YOU MUST
            VISIT
          </div>
          <div className="h-full grid grid-flow-col gap-8 overflow-x-scroll flex-1 custom-scroll my-3">
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg2.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg3.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Japan</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg5.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg6.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>
            <div className="w-[15rem] flex flex-col flex-shrink-0">
              <div className="flex h-[20rem] w-[15rem] justify-center items-center">
                <Image
                  className="h-full object-cover"
                  alt=""
                  src={require("@/app/assets/herobg2.jpg")}
                />
              </div>
              <h3 className="text-color6 font-bold mt-2">Thailand</h3>
              <h3 className="text-color6/90 text-xs ">Starting at Rs. 20,999 per person</h3>
            </div>

          </div>
        </div>

        
        
      <div className="w-[96%] mt-16 mb-12 border-t-2 border-color1/10 border-dashed"></div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default page;
