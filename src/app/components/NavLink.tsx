"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }: { link: { title: string; route: string } }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.route}
      className={` ${
        link.route === pathname ? "text-color1" : "text-color2"
      } text-base font-semibold hover:text-color1 cursor-pointer relative pb-3`}
    >
      {link.title}
      <div className="flex justify-center">
        {link.route === pathname && (
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
