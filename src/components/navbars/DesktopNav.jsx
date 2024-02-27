import React, { useEffect, useState } from "react";
import { HomeIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { FaCapsules, FaShare, FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

const navLinks = [
  { Icon: <HomeIcon />, tooltip: "Home" },
  { Icon: <FaCapsules />, tooltip: "Capsules" },
  { Icon: <FaUser />, tooltip: "User" },
  { Icon: <IoBag />, tooltip: "Bag" },
  { Icon: <FaShare />, tooltip: "Share" },
];

export const DesktopNav = () => {
 
  return (
    <div className="w-full h-full flex justify-between flex-col items-center gap-4 p-2">
      <div
        className="btn btn-circle  rounded-full border text-white justify-center items-center relative border-night-black"
        style={{ border: "1px solid  #333" }}
      >
        <div className="w-full absolute top-[35%] left-4">
          <FaShare />
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 justify-between items-center">
        {navLinks.map(({ Icon, tooltip }, i) => (
          <div className="tooltip tooltip-left" data-tip={tooltip} key={i}>
            <div className="group">
              <button className="btn btn-md  dark:bg-transparent dark:hover:bg-primaryDark  text-lg text-white dark:border-night-blackDark     btn-circle p-1 hover:text-secondary flex justify-center items-center ">
                {Icon}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="btn btn-circle  rounded-full border text-white justify-center items-center relative border-night-black"
        style={{ border: "1px solid  #333" }}
      >
        <div className="w-full absolute top-[35%] left-4">
          <FaShare />
        </div>
      </div>
     
    </div>
  );
};
