import React from "react";
import { ExperienceList } from "./ExperienceList";
import { Heading } from "../../genralComponents";

export const WorkExperience = ({ data }) => {
  return (
    <div className="px-5 py-8 md:p-8 rounded-2xl  lg:p-10 2xl:p-13">
      <Heading prefix={data?.title} postfix={data?.sub} />
      <p className="text-sm  font-extralight text-primary leading-5 mb-6">
        {data?.description}
      </p>
      <ExperienceList />
    </div>
  );
};
