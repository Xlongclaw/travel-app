import React from "react";
import NavLink from "./NavLink";
import navLinks from "../constants/navLinks";

const NavLinks: React.FC = () => {
 
  return (
    <div className="flex gap-10">
      {navLinks.map((link, index) => (
        <NavLink key={index} link={link}/>
      ))}
    </div>
  );
};

export default NavLinks;
