import React from "react";
import NavLinks from "@/app//components/NavLinks";
import Logo from "@/app/components/Logo";
import { SessionProvider } from "next-auth/react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pr-24">
      <Logo />
      <SessionProvider>
        <NavLinks />
      </SessionProvider>
    </div>
  );
};

export default NavBar;
