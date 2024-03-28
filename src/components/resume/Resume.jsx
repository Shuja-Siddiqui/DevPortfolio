import React from "react";
import { Education } from "./components";
import { useData } from "../../DataContext";
import { WorkExperience } from "./components/WorkExperiance";
const data1 = [
  {
    title: "Work",
    sub: "Experience",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute",
  },
  {
    title: "My",
    sub: "Education",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute",
  },
];

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
