'use client'
import React from "react";
import NavLink from "./NavLink";
import navLinks from "../constants/navLinks";
import { usePathname } from "next/navigation";

const NavLinks: React.FC = () => {
  const currentRoute = usePathname()
 
  return (
    <div className="flex gap-10">
      {navLinks.map((link, index) => (
        <NavLink active={currentRoute == link.route} key={index} linkJSON={JSON.stringify(link)}/>
      ))}
    </div>
  );
};

export default NavLinks;
