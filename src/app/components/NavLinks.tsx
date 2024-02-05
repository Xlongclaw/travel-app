import React from "react";
import NavLink from "./NavLink";

const NavLinks: React.FC = () => {
  const navLinks = [
    {
      title:'Discover',
      route:''
    }, 
    {
      title:'Tour Packages',
      route:'tourpackages'
    }, 
    {
      title:'Contact us',
      route:'contactus'
    }, 
    {
      title:'Sign in',
      route:'signin'
    }, 
  ];
  return (
    <div className="flex gap-10">
      {navLinks.map((link, index) => (
        <NavLink key={index} link={link}/>
      ))}
    </div>
  );
};

export default NavLinks;
