import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useActiveLink = () => {
  const [activeLink, setActiveLink] = useState("discover");
  const route = usePathname();
  useEffect(() => {
    if (route === "/") setActiveLink("discover");
    else setActiveLink("tourpackages");
  }, [activeLink]);
  return activeLink;
};

export default useActiveLink;
