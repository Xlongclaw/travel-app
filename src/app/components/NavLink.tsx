"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLink = ({
  linkJSON,
  active,
}: {
  linkJSON: string;
  active: boolean;
}) => {
  const link = JSON.parse(linkJSON);
  return (
    <Link
      href={link.route}
      className={` ${
        active ? "text-color1" : "text-color2"
      } text-base font-semibold hover:text-color1 cursor-pointer relative py-3`}
    >
      {link.title}
      <div className="flex justify-center">
        {active && (
          <Image
            height={20}
            className="mt-2 w-[70px]"
            src={require("../assets/line1.png")}
            alt=""
          />
        )}
      </div>
    </Link>
  );
};

export default NavLink;
