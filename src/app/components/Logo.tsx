import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-lg text-color1 mb-4 cursor-pointer hover:text-color5"
    >
      Adventure Island.
    </Link>
  );
};

export default Logo;
