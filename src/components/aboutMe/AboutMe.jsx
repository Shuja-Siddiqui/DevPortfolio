import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ButtonWithIcon } from "../genralComponents";
import { AwardsRow, MySkills } from "./components";
export const AboutMe = () => {
  return (
    <div className=" w-full flex justify-start items-start flex-col  p-5 border-night-black bg-primaryDark rounded-xl mb-6">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={FaUserCircle} text={"About ME"} />
        <div className="w-full">
          <MySkills />
        </div>
        <div className="w-full">
          <AwardsRow />
        </div>
      </div>
    </div>
  );
};
