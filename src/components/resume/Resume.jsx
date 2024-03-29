import React from "react";
import { useData } from "../../DataContext";
import { WorkExperience } from "./components/WorkExperiance";
import {Education} from "./components/Education"
export const Resume = () => {
  const {data} = useData();
  return (
    <div className="px-8">
      <WorkExperience data={data?.experience} prefix={"Work"} postfix={"Experience"} />
      <Education data={data?.education} prefix={"My"} postfix={"Education"}/>
    </div>
  );
};
