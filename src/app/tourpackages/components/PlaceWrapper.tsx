import Image from "next/image";
import React from "react";

const PlaceWrapper = ({
  place,
}: {
  place: {
    name: string;
    subtitle: string;
    image: any;
    link: string;
  };
}) => {
  return (
    <div className="w-[15rem] flex flex-col flex-shrink-0 ">
      <div className="flex h-[20rem] w-[15rem] justify-center items-center">
        <Image
          width={400}
          height={600}
          className="h-full object-cover rounded-2xl"
          alt=""
          src={place.image}
        />
      </div>
      <h3 className="text-color9 font-bold mt-2">{place.name}</h3>
      <h3 className="text-color6/90 text-xs ">{place.subtitle}</h3>
    </div>
  );
};

export default PlaceWrapper;
