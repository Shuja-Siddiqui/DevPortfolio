import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ProjectHerosSection, Stepper, Technologies } from "./components";
export const CaseStudy = () => {
  return (
    <div className=" w-full flex justify-start items-start flex-col  p-7 border-night-black bg-primaryDark rounded-xl mb-6">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={FcViewDetails} text={"Project Details"} />
        <h2 className="text-[20px] md:text-[30px] font-bold text-white mb-5">
          Three wine glasses filled with candies
        </h2>
        <div className="w-full mb-6">
          <ProjectHerosSection />
        </div>
        <div className="mb-5 w-full">
          <Stepper />
        </div>
        <div className="w-full">
          <Technologies />
        </div>
      </div>
    </div>
  );
};