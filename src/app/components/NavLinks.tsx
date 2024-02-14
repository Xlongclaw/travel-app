"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import navLinks from "../constants/navLinks";
import { usePathname } from "next/navigation";
import ProfileBtn from "./ProfileBtn";
import axios from "axios";

const NavLinks: React.FC = () => {
  const currentRoute = usePathname();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    axios.get("/api/get-user").then((res) => {
      setUserData(res.data);
    });
    console.log(userData);
  }, [userData]);

  return (
    <div className="flex gap-10 ">
      {navLinks.map((link, index) => (
        <NavLink
          active={currentRoute == link.route}
          key={index}
          linkJSON={JSON.stringify(link)}
        />
      ))}
      {userData ? (
        <ProfileBtn userData={userData} />
      ) : (
        <NavLink
          active={currentRoute == "signin"}
          linkJSON={JSON.stringify({ title: "Sign In", route: "signin" })}
        />
      )}
    </div>
  );
};

export default NavLinks;
