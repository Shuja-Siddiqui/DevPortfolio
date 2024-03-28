import React from "react";
import { useData } from "../../DataContext";
import { WorkExperience } from "./components/WorkExperiance";
import {Education} from "./components/Education"
export const Resume = () => {
  const {data} = useData();
  return (
    <div>
      <WorkExperience data={data?.experience} prefix={"Work"} postfix={"Experience"} />
      <div className="flex w-full justify-center items-center">
      <div className=" bg-primary " style={{display:"flex", width:"80%", justifyContent:"center", alignItems:"center", height:"1px"}}></div></div>
      <Education data={data?.education} prefix={"My"} postfix={"Education"}/>
    </div>
  );
};
