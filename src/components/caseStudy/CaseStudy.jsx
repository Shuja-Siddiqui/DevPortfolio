import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ProjectHerosSection, Stepper, Technologies } from "./components";
import { useLocation } from "react-router-dom";
import { useData } from "../../DataContext";
export const CaseStudy = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const data= useData();
  const [newData, setNewData] = useState();
  useEffect(()=>{
    setNewData(data?.data?.projects?.[id])
  },[])
  
  return (
    <div className=" w-full flex justify-start items-start flex-col  p-7 border-night-black bg-primaryDark rounded-xl mb-6">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={FcViewDetails} text={"Project Details"} />
        <h2 className="text-[20px] md:text-[30px] font-bold text-white mb-5">
          Three wine glasses filled with candies
        </h2>
        <div className="w-full mb-6">
          <ProjectHerosSection data={newData} img={newData?.hero}/>
        </div>
        <div className="mb-5 w-full">
          <Stepper />
        </div>
        <div className="w-full">
          <Technologies data={newData?.technologies}/>
        </div>
      </div>
    </div>
  );
};
