import Link from "next/link";
import React from "react";

const Footer:React.FC = () => {
  const links = ["About Us", "Events", "FAQs", " The Team"];
  return (
    <div className="bg-color9 px-48 py-8 flex justify-between items-center">
      <Link href={'/'} className="text-color5 text-xl font-semibold cursor-pointer">
        Adventure Island.
      </Link>
      <div className=" flex gap-8 text-sm font-bold text-color1">
        {links.map((link) => (
          <Link href={link}>{link}</Link>
        ))}
      </div>
      <div className="text-xs font-semibold select-none">DESIGNED BY <strong>LONGCLAW</strong></div>
    </div>
  );
};

export default Footer;
