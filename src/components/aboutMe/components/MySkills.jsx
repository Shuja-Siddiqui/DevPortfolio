import React from "react";
import { Heading, TransparentButton } from "../../genralComponents";
import { ContectMe } from "./ContectMe";
import { useData } from "../../../DataContext";

export const MySkills = () => {
  const {data}=useData();
  
  return (
    <div>
      <div className="w-full flex flex-col justify-start items-start mb-5">
        <Heading prefix={"About"} postfix={"Me"} />
        {/* <p className="text-primary text-sm leading-7 tracking-wider">
          Hi, my name is{" "}
          <strong className="text-white text-sm">Brown Reddick </strong>and I
          began using WordPress when first began. spent most of my waking hours
          for the last ten years designing, programming and operating WordPress
          sites go beyond with exclusive designer
        </p> */}
        <p className="text-primary text-sm leading-7 tracking-wider">
         {data?.about}
        </p>
      </div>

      <div className="w-full flex justify-start items-start flex-col md:flex-row">
       {data?.skills.map((i)=> <TransparentButton text={i?.title?.skillName} rating={`${i?.ratings}%`} />)}
        {/* <TransparentButton text={"Bootstrap"} rating={"98%"} />
        <TransparentButton text={"TailwindCss"} rating={"98%"} /> */}
      </div>
      <div className="mb-6">
        <ContectMe />
      </div>
    </div>
  );
};
