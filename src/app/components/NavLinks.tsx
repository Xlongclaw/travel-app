"use client";
import React from "react";
import NavLink from "./NavLink";
import navLinks from "../constants/navLinks";
import { usePathname } from "next/navigation";
import ProfileBtn from "./ProfileBtn";

const NavLinks: React.FC = () => {
  const userData = null;
  const currentRoute = usePathname();

  return (
    <div className="flex gap-10">
      {navLinks.map((link, index) => (
        <NavLink
          active={currentRoute == link.route}
          key={index}
          linkJSON={JSON.stringify(link)}
        />
      ))}
      {!userData ? (
        <NavLink
          active={currentRoute == "signin"}
          linkJSON={JSON.stringify({ title: "Sign In", route: "signin" })}
        />
      ) : (
        <ProfileBtn />
      )}
    </div>
  );
};

export default NavLinks;
