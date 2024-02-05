import React from "react";
import NavBar from "@/app/components/NavBar";
import HeroBanner from "../components/HeroBanner";
import PackageWrapper from "./components/PackageWrapper";
import popularPackagesData from "./constants/popularPackagesData";
import * as Icon from "react-icons/bs";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="w-full bg-color9">
      <div className="py-8 px-32 ">
        <NavBar />
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
      </div>
      <Footer />
    </div>
  );
};

export default page;
