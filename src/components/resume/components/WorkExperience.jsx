import React from "react";
import { ExperienceList } from "./ExperienceList";
import { Heading } from "../../genralComponents";

export const WorkExperience = ({ data ,prefix , postfix}) => {
  
  return (
    <div className="px-5 py-8 md:p-8 rounded-2xl  lg:p-10 2xl:p-13">
      <Heading prefix={prefix} postfix={postfix} />
      <p className="text-sm  font-extralight text-primary leading-5 mb-6">
        {data?.description}
      </p>
      <ExperienceList/>
    </div>
  );
};
