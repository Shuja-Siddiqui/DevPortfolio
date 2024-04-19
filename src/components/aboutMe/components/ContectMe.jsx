import React from "react";
import { useData } from "../../../DataContext";
const contactData = [
  {
    key: "Phone",
    value: "+(2)870174302 ",
  },
  {
    key: "Skype",
    value: "shuja@yahoo.ocom ",
  },
  {
    key: "Language",
    value: "English , Urdu , German ",
  },
  {
    key: "Email",
    value: "hr@consoledot.com ",
  },
  {
    key: "Github",
    value: "github.com/shuja_coder ",
  },
];
export const ContectMe = () => {
  const {data}=useData();
  const getLink=(links)=>{
     const a =links && links?.filter((i)=> i.title ==="github" || i.title==="Github")
    return a?.[0]?.url;
    }  
    
  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-4">
      <div className="w-full lg:w-[48%] flex justify-between items-start mb-2">
        {/* Each pair of key and value is wrapped inside a container */}
        <p className="w-full md:w-[50%] text-md text-primary">Phone No</p>
        <p className="w-full md:w-[50%] text-md text-primary">:</p>
        <p className="w-full md:w-[50%] text-md text-white">{data?.phoneNo}</p>
      </div>
      <div className="w-full lg:w-[48%] flex justify-between items-start mb-2">
        {/* Each pair of key and value is wrapped inside a container */}
        <p className="w-full md:w-[50%] text-md text-primary">Skype</p>
        <p className="w-full md:w-[50%] text-md text-primary">:</p>
        <p className="w-full md:w-[50%] text-md text-white">{data?.skype}</p>
      </div>
      
      <div className="w-full lg:w-[48%] flex justify-between items-start mb-2">
        {/* Each pair of key and value is wrapped inside a container */}
        <p className="w-full md:w-[50%] text-md text-primary">Email</p>
        <p className="w-full md:w-[50%] text-md text-primary">:</p>
        <p className="w-full md:w-[50%] text-md text-white">{data?.email}</p>
      </div>
      <div className="w-full lg:w-[48%] flex justify-between items-start mb-2">
        {/* Each pair of key and value is wrapped inside a container */}
        <p className="w-full md:w-[50%] text-md text-primary">Language</p>
        <p className="w-full md:w-[50%] text-md text-primary">:</p>
        <div className="w-full md:w-[50%] flex flex-wrap">{data?.languages?.map((i)=> <span className="w-full md:w-[50%] text-md text-white">{`${i},`}</span>)}</div>
      </div>
      <div className="w-full lg:w-[48%] flex justify-between items-start mb-2">
        {/* Each pair of key and value is wrapped inside a container */}
        <p className="w-full md:w-[50%] text-md text-primary">Github</p>
        <p className="w-full md:w-[50%] text-md text-primary">:</p>
        <p className="w-full md:w-[50%] text-md text-white">{getLink(data?.links)}</p>
      </div>
    </div>
  );
};
