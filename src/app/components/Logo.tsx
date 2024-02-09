import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link
      href={"/"}
      className="font-bold text-lg text-color1 mb-4 cursor-pointer hover:text-color5 flex gap-3 items-center"
    >
      <Image
        className="w-8 h-8"
        src={require("@/app/assets/icons8-adventure-100.png")}
        alt=""
      />
      Adventure Island.
    </Link>
  );
};

export default Logo;
