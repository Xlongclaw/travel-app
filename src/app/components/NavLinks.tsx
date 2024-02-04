import React from "react";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  const navLinks = [ "Discover", "Tour Packages", "Contact us", "Sign in"];
  return (
    <div className="flex gap-12">
      {navLinks.map((link, index) => (
        <NavLink key={index} link={link}/>
      ))}
    </div>
  );
};

export default NavLinks;
