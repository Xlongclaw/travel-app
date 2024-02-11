"use client";
import React from "react";
import Image from "next/image";
import { LocationStrip, NavBar, PageIndicator } from "@/app/components";
import { heroImageCarouselDataType } from "@/app/type";
import { useHeroImageCarouselIndex } from "@/app/hooks";

const HeroImageCarousel = ({
  heroImageCarouselJSON,
}: {
  heroImageCarouselJSON: string;
}) => {
  const heroImageCarouselData: heroImageCarouselDataType = JSON.parse(
    heroImageCarouselJSON
  );
  const imageIndex = useHeroImageCarouselIndex(heroImageCarouselData);
  if (!heroImageCarouselData) return <div>Loading</div>;
  return (
    <div
      style={{
        backgroundImage: `url(${heroImageCarouselData[imageIndex].image})`,
      }}
      className=" bg-top bg-cover w-full h-screen py-16 px-32 flex flex-col relative transition-all duration-500"
    >
      <NavBar />
      <div className="flex flex-col flex-1 justify-center items-center mb-16">
        <div className="text-4xl text-black font-semibold mb-4">
          {heroImageCarouselData[imageIndex].title}
        </div>
        <div className="text-lg text-color3 font-semibold mb-6">
          {heroImageCarouselData[imageIndex].subtitle}
        </div>
        <Image
          width={45}
          height={40}
          alt=""
          src={require("@/app/assets/arrow1.png")}
        />
      </div>
      <LocationStrip
        opacity="100%"
        location={heroImageCarouselData[imageIndex].location}
      />
      <PageIndicator
        imageData={heroImageCarouselData}
        imageIndex={imageIndex}
      />
    </div>
  );
};

export default HeroImageCarousel;
