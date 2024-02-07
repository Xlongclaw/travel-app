import React, { useEffect, useState } from "react";
import { heroBannerDataType } from "../types/type";

const useCurrentBannerIndex = (
  bannerData: Array<heroBannerDataType>
) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  useEffect(() => {
    const nextSlide = () => {
      if (currentBannerIndex !== bannerData.length - 1) {
        setCurrentBannerIndex((x) => x + 1);
      } else {
        setCurrentBannerIndex(0);
      }
    };
    const interval = setInterval(nextSlide, 3900);
    return () => {
      clearInterval(interval);
    };
  }, [currentBannerIndex]);

  return currentBannerIndex;
};

export default useCurrentBannerIndex;
