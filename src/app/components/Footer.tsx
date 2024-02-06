import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const links = ["About Us", "Events", "FAQs", " The Team"];
  return (
    <div className="bg-color9 px-48 py-8 flex justify-between items-center">
      <div className="text-color5 text-xl font-semibold">
        Adventure Island.
      </div>
      <div className=" flex gap-8 text-sm font-bold text-color1">
        {links.map((link) => (
          <h3>{link}</h3>
        ))}
      </div>
      <div className="text-xs font-semibold">DESIGNED BY <strong>LONGCLAW</strong></div>
    </div>
  );
};

export default Footer;
