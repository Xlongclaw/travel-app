import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import React from "react";
import TitleText from "../components/TitleText";
import * as Icon from "react-icons/bs";
import PackageWrapper from "../components/PackageWrapper";
import {
  getPackageDataByPlace,
  getPlaceDataByName,
} from "../../../../sanity/sanity.query";
import { packageType, placeDataType } from "../types/type";
import DashedLine from "../components/DashedLine";
import Footer from "@/app/components/Footer";

const page = async ({ params }: { params: { location: string } }) => {
  const currentPlaceName =
    params.location.charAt(0).toUpperCase() + params.location.slice(1);
  const placeData: placeDataType = await getPlaceDataByName(currentPlaceName);
  const packages: Array<packageType> = await getPackageDataByPlace(
    currentPlaceName
  );
  if (!placeData)
    return (
      <div className=" flex flex-col px-32 py-8 h-screen">
        <NavBar />
        <div className="w-full flex-1 overflow-hidden flex relative my-4">
          <Image
            width={2160}
            height={1440}
            className="object-cover w-full hover:scale-110 transition-all duration-1000"
            src={require('@/app/assets/herobg1.jpg')}
            alt=""
          />
          <div className="absolute top-1/3 right-1/2 flex flex-col items-center">
            <div className="  text-4xl font-medium text-color1">
              Comming Soon in <strong className="text-5xl">{params.location.toUpperCase()}</strong>{" "}
            </div>
            <div className="text-color1 font-medium max-w-[20rem]">
             We are sorry for your inconvienience!
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="px-32 pt-8">
      <NavBar />
      <div className="w-full h-[15rem] overflow-hidden flex relative mt-4">
        <Image
          width={2160}
          height={1440}
          className="object-cover w-full hover:scale-110 transition-all duration-1000"
          src={placeData.image}
          alt=""
        />
        <div className="absolute right-36 bottom-[38%] flex flex-col">
          <div className="  text-4xl font-medium text-color9">
            Explore <strong className="text-5xl">{placeData.name}</strong>{" "}
          </div>
          <div className="text-color6 font-medium max-w-[20rem]">
            {placeData.subtitle}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 pr-8 pl-2">
        <TitleText
          title="Packages "
          strong={placeData.name.toUpperCase()}
          subtitle={`${placeData.name} tour package just for you.`}
        />
        <div className="text-sm font-bold flex gap-4 items-center">
          VIEW ALL <Icon.BsArrowRight className="gap-4" />
        </div>
      </div>
      <div className="flex gap-2 mt-8 flex-wrap">
        {packages.map((tourPackage, i) => (
          <PackageWrapper tourPackage={tourPackage} key={i} />
        ))}
      </div>
      <DashedLine />
      <Footer />
    </div>
  );
};

export default page;
