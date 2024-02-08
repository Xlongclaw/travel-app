import React from "react";
import { NavBar, Footer } from "@/app/components";
import {
  HeroBanner,
  TitleText,
  PackagesContainer,
  DashedLine,
  MustVisitContainer,
  QuoteStrip,
} from "@/app/tourpackages/components";
import * as Icon from "react-icons/bs";
import {
  getHeroBannerData,
  getPackagesByCategory,
} from "../../../sanity/sanity.query";
import { heroBannerDataType, packageType } from "@/app/type";

const page = async () => {
  const popularPackages: Array<packageType> = await getPackagesByCategory("Popular");
  const bannerData: Array<heroBannerDataType> = await getHeroBannerData();

  return (
    <div className="w-full bg-[#ffffff] relative ">
      <div className="pt-8 pl-32 pr-16">
        <NavBar />
      </div>
      <QuoteStrip quote="JUST LIVE YOUR DREAMS AND FLY HIGH" />
      <div className="pl-32 pr-16 ">
        <HeroBanner bannerDataJSON={JSON.stringify(bannerData)} height={500} />
        <div className="flex justify-between items-center mt-10 pr-20 pl-8">
          <TitleText
            title="Our Popular "
            strong="PACKAGES"
            subtitle="Our most popular tour package just for you."
          />
          <div className="text-sm font-bold flex gap-4 items-center">
            VIEW ALL <Icon.BsArrowRight className="gap-4" />
          </div>
        </div>
        <PackagesContainer packagesJSON={JSON.stringify(popularPackages)} />
        <MustVisitContainer />
        <DashedLine />
      </div>

      <Footer />
    </div>
  );
};

export default page;
