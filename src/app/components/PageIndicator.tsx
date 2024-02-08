import React from "react";
import { heroImageCarouselDataType } from "../type";

const PageIndicator = ({
  imageData,
  imageIndex,
}: {
  imageData: heroImageCarouselDataType;
  imageIndex: Number;
}) => {
  return (
    <div className="flex justify-center items-center gap-4 absolute rotate-90 right-[5rem] top-[20rem]">
      {imageData.map((data, i) => (
        <div
          key={data.title}
          style={
            imageIndex !== i
              ? { width: "5px", height: "5px" }
              : { width: "9px", height: "9px" }
          }
          className="bg-color4 transition-all duration-300 rounded-full"
        ></div>
      ))}
    </div>
  );
};

export default PageIndicator;
