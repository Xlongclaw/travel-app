import React, { useEffect, useState } from "react";
import { signInSliderDataType } from "@/app/type";

const useCurrentSliderIndex = (sliderData: signInSliderDataType) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
  useEffect(() => {
    const nextSlide = () => {
      if (currentSliderIndex !== sliderData.length - 1) {
        setCurrentSliderIndex((x) => x + 1);
      } else {
        setCurrentSliderIndex(0);
      }
    };
    const interval = setInterval(nextSlide, 3900);
    return () => {
      clearInterval(interval);
    };
  }, [currentSliderIndex]);

  return currentSliderIndex;
};

export default useCurrentSliderIndex;
