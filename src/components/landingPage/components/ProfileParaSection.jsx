import React from "react";
import { IoIosSend } from "react-icons/io";

import { Features } from "./Features";
import heroImage2 from "../../../assets/img/hero-img-2.png";
import { Carousel } from "./Carousel";
import { Heading } from "../../genralComponents";
import { useData } from "../../../DataContext";
export const ProfileParaSection = () => {
  const {data}= useData();
  const baseURL = process.env.REACT_APP_URL;
  const handleButtonClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full p-8">
      <div className="w-full flex justify-between items-center gap-4 mb-9">
        <div className="w-full xl:w-[50%] flex justify-start items-center">
          <div className="w-full flex justify-start items-start flex-col">
            <Heading prefix={"I Craft The"} postfix={"Digital Landscape"} />
            <div className=" flex flex-wrap mb-5 ">
              {/* <p className="w-full text-primary leading-6 text-sm flex flex-wrap">
                I am a
                <strong className="text-white"> Frontend Developer </strong>
                at heart and, i create feautres that are best suited for the job
                at hand.
              </p> */}
                <p className="w-full text-primary leading-6 text-md flex flex-wrap">
                {data?.intro}
              </p>
            </div>
            <div className="w-full flex justify-start items-start mb-7">
              <Features />
              <Features />
            </div>
            <button onClick={handleButtonClick} className="flex justify-start items-center px-7 py-5 bg-secondary text-white gap-3 uppercase rounded-full ">
              <span>
                <IoIosSend />
              </span>
              hire me
            </button>
          </div>
        </div>
        <div className="w-[50% ] hidden sm:flex justify-start items-center ">
          <div className=" w-full flex justify-start items-center">
            <img src={heroImage2} alt="profle" className="max-h-[350px]" />
          </div>
        </div>
      </div>
      <div className=" relative w-full flex mb-5">
        <div className="hidden md:flex flex-col justify-start items-start  w-[15%] border-l-2 border-l-secondary">
          <p className="text-sm ml-2">Trusted</p>

          <p className="text-sm ml-2">Companies</p>
        </div>
        <div className="w-[85%]">
          <Carousel />
        </div>
      </div>
    </div>
  );
};
