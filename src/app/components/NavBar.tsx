import React from 'react'
import NavLinks from "@/app//components/NavLinks";
import Logo from "@/app/components/Logo";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pr-24">
          <Logo />
          <NavLinks />
        </div>
  )
}

export default NavBar