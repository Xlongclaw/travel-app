import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useActiveLink = async () => {
  const [activeLink, setActiveLink] = useState("discover");
  const route = await usePathname();
  useEffect(() => {
    if (route === "/") setActiveLink("discover");
    else setActiveLink("tourpackages");
  }, [activeLink]);
  return activeLink;
};

export default useActiveLink;
