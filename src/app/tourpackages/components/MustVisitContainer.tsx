import Image from "next/image";
import React from "react";
import PlaceWrapper from "./PlaceWrapper";
import mustVisitPlaceData from "../constants/mustVisitPlaceData";

const MustVisitContainer = () => {
  return (
    <div className="bg-color5 w-ful mb-6 flex flex-col pr-16 py-16 pl-16 my-16 mr-16">
      <div className="flex justify-between items-center">
        <div>

      <h2 className="text-color9 text-3xl">
        <strong>PLACES</strong> you must vist.
      </h2>
      <h3 className="text-sm text-color2 font-medium max-w-[40rem] mb-12">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi
        distinctio eos minus.
      </h3>
        </div>
<div className="text-color6 font-semibold text-sm">SEE MORE</div>
      </div>
      <div className="h-full grid grid-flow-col gap-6 overflow-x-scroll custom-scroll mb-3">
        {mustVisitPlaceData.map((place, i) => (
          <PlaceWrapper key={i} place={place} />
        ))}
      </div>
    </div>
  );
};

export default MustVisitContainer;
