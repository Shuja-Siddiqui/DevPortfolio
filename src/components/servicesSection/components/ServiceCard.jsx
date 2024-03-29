import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
export const ServiceCard = ({ title, index, description }) => {
  return (
    <div className="w-full  lg:h-[400px] xl:h-[400px] 2xl:h-[400px] 3xl:h-[400px] h-auto justify-start items-start flex-col p-4 cursor-pointer group border rounded-xl overflow-hidden border-night-black " >
      <div className="w-full flex justify-between items-center  mb-3">
        <h1 className="text-[72px] font-bold text-primary group-hover:text-white transition ease-in-out delay-100">
          {index}
        </h1>
        <SiAffinitydesigner className="text-2xl text-secondary group-hover:rotate-45 transition ease-in-out delay-100" />
      </div>
      <div>
        <h1 className="text-white text-2xl mb-3">{title}</h1>
        <p className="text-md text-primary leading-6 ">{description}</p>
      </div>
    </div>
  );
};
