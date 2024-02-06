import Image from "next/image";
import React from "react";
import PlaceWrapper from "./PlaceWrapper";
import mustVisitPlaceData from "../constants/mustVisitPlaceData";

const MustVisitContainer = () => {
  return (
    <div className="bg-color5 w-full h-[30rem] mb-6 flex gap-24 pr-8 py-10">
      <div className="text-lg font-semibold text-color6 flex justify-center items-center gap-3">
        <span className="bg-color6 h-[2px] w-[6rem]"></span>PLACES YOU MUST
        VISIT
      </div>
      <div className="h-full grid grid-flow-col gap-8 overflow-x-scroll flex-1 custom-scroll my-3">
        {mustVisitPlaceData.map((place, i) => (
          <PlaceWrapper key={i} place={place} />
        ))}
      </div>
    </div>
  );
};

export default MustVisitContainer;
