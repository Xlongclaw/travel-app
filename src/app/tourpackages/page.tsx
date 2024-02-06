import React from "react";
import NavBar from "@/app/components/NavBar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import TitleText from "./components/TitleText";
import PackagesContainer from "./components/PackagesContainer";
import DashedLine from "./components/DashedLine";
import MustVisitContainer from "./components/MustVisitContainer";
import bannerData from "./constants/bannerData";
import * as Icon from "react-icons/bs";


const page = () => {
  return (
    <div className="w-full bg-[#ffffff] relative ">
      <div className="pt-8 pl-32 pr-16">
        <NavBar />
      </div>
      <div className="flex gap-5 justify-center items-center -rotate-90 absolute left-[-8rem] top-[18rem]">
        <div className="h-[1px] w-[6rem] bg-color3/50"></div>
        <div className="text-color3/50 text-sm font-semibold">
          JUST LIVE YOUR DREAMS AND FLY HIGH
        </div>
      </div>
      <div className="pl-32 pr-16 ">
        <HeroBanner bannerData={bannerData} height={500} />
        <div className="flex justify-between items-center mt-10 pr-20 pl-8">
          {/* <div>HELLO</div> */}
          <TitleText
            title="Our Popular "
            strong = "PACKAGES"
            subtitle="Our most popular tour package just for you."
          />
          <div className="text-sm font-bold flex gap-4 items-center">VIEW ALL <Icon.BsArrowRight className="gap-4"/></div>
        </div>
        <PackagesContainer />
        <MustVisitContainer />
        <DashedLine />
      </div>

      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default page;
