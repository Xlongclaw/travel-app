import { signOut } from "next-auth/react";
import React from "react";
import { CgChevronDown } from "react-icons/cg";

const ProfileBtn = ({ userData }: { userData: any }) => {
  return (
    <div
      onClick={() => signOut()}
      className="font-semibold flex gap-2 items-center cursor-pointer pb-4"
    >
      <h3>Hey,</h3>
      {userData.name}
      <CgChevronDown />
    </div>
  );
};

export default ProfileBtn;
