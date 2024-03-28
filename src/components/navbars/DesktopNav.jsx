import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HomeIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { FaCapsules, FaShare, FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaShareNodes } from "react-icons/fa6";
import { MdHomeRepairService } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { MdMessage } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
const navLinks = [
  { Icon: <IoHomeOutline />, tooltip: "Home", id: "#home" },
  { Icon: <FaRegUser />, tooltip: "About", id: "#about" },
  { Icon: <MdHomeRepairService />, tooltip: "Service", id: "#service" },
  { Icon: <FaGraduationCap />, tooltip: "Skilss", id: "#skills" },
  { Icon: <IoDocumentText />, tooltip: "Resume", id: "#resume" },
  { Icon: <GrWorkshop />, tooltip: "Project", id: "#projects" },
  { Icon: <MdMessage />, tooltip: "testimonial", id: "#testimonial" },
  { Icon: <FaEnvelope />, tooltip: "contact", id: "#contact" },
];

export const DesktopNav = () => {
  const handleButtonClick = (sectionId) => {
   
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-full flex justify-between flex-col items-center gap-3 p-2">
      <div
        className="btn btn-circle  hover:rounded-full border text-white justify-center items-center relative border-night-black"
        style={{ border: "1px solid #333" }}
      >
        <div className="w-full flex justify-center items-center">
          <FaShare />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        {navLinks.map(({ Icon, tooltip }, i) => (
          <div onClick={handleButtonClick(Icon.id)} className="hover:bg-red-400 rounded-full cursor-pointer">
            <button  className="text-xl p-2">
              {Icon}
            </button>
          </div>
        ))}
      </div>
      <div
        className="btn btn-circle  rounded-full border text-white justify-center items-center relative border-night-black"
        style={{ border: "1px solid  #333" }}
      >
        <div className="w-full flex justify-center items-center cursor-pointer">
          <FaShareNodes />
        </div>
      </div>
    </div>
  );
};
