import React from "react";
import NavBar from "@/app/components/NavBar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import TitleText from "./components/TitleText";
import PackagesContainer from "./components/PackagesContainer";
import DashedLine from "./components/DashedLine";
import MustVisitContainer from "./components/MustVisitContainer";
import bannerData from "./constants/bannerData";

const page = () => {
  return (
    <div className="w-full bg-color9 ">
      <div className="pt-8 px-32">
        <NavBar />
      </div>
      <div className="px-32 ">
        <HeroBanner bannerData={bannerData} height={400} />
        <TitleText
          title="POPULAR PACKAGES"
          subtitle="Our most popular tour package just for you"
        />
        <PackagesContainer />
        <DashedLine />
        <MustVisitContainer />
        <DashedLine />
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default page;
