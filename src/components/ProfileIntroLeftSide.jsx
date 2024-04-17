import React, { useEffect } from "react";
import logo from "../assets/img/user-sidebar-thumb.png";
import { Doughnut } from "./charts";
import { FaDownload } from "react-icons/fa";
import Typed from "typed.js";
import { useData } from "../DataContext";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { DoughnutLeft } from "./charts/DoughnutLeft";
export const ProfileIntroLeftSide = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 30,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const {data}=useData();
  const baseURL = process.env.REACT_APP_URL
  const handleDownload = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK_HERE' with the sharing link of your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/1hIDKI2EvHu_LGLe6Jh9XfiafLXzD_Ty1/view?usp=drive_link';
    // Open the PDF in a new tab for the user to download
    window.open(pdfUrl, '_blank');
  };
  return (
    <div className="w-full z-20 rounded-2xl bg-primaryDark flex justify-center items-center p-4 overflow-hidden relative md:max-w-lg ">
      <div className="absolute z-20 w-[320px] h-[100px] -right-[215px] top-[-50px] bg-[#18191A] overflow-hidden"></div>
      <div className="absolute z-20 w-[320px] h-[50px] right-[40px] top-[-106px] rotate-45  bg-[#18191A]"></div>
      <div className="flex  w-full flex-col justify-start items-center gap-3 p-1 pt-12">
        <div className="w-[150px] h-[150px] rounded-full relative border-8 border-night-black">
          <img
            src={`${baseURL}/file/${data?.avatar}`}
            alt="profile"
            className="absolute inset-0 rounded-full overflow-hidden top-0"
          />
        </div>
        <div className="w-full flex justify-start items-center flex-col gap-3 min-h-[50px] mb-5">
          <h4 className="font-bold">{data?.name}</h4>
          <div id="typed-strings">
            {/* <p>
              <i>MERN</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Vue</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Progressive</i> <strong>Applications</strong>
            </p> */}
            {data?.skills.length > 0 ?? data?.skills?.map((i)=> <p>
              <strong>{i?.title?.skillName}</strong>
            </p>)}
          </div>
          <p className="text-secondary" id="typed"></p>
        </div>
        <hr className=" w-full" style={{ borderTop: "2px solid #333" }} />
        <div className=" w-full flex justify-start items-center flex-col  gap-3">
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <h6>Residence</h6>
            <p className="text-primary">{data?.residence}</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <h6>City</h6>
            <p className="text-primary">{data?.residence}</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <h6>Age</h6>
            <p className="text-primary">{data?.age}</p>
          </div>
        </div>
        <div className="card w-full bg-[#333] shadow-xl mb-5">
          <div className="card-body">
            <h2 className="card-title">Skills!</h2>
            {/* <div className="w-full flex justify-center items-center mb-5">
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"HTML"}
              />
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"CSS"}
              />
              <Doughnut
                cutout={"95"}
                height={"75"}
                width={"75"}
                skillRate={75}
                skillName={"Js"}
              />
            </div> */}
             <div className="w-full grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 text-center mb-5 overflow-hidden" >
              {data?.skills?.map((i)=><DoughnutLeft
                cutout={"95"}
                height={"60"}
                width={"60"}
                skillRate={i?.ratings}
                skillName={i?.title?.skillName}
              />)}
            </div>
          </div>
        </div>

        <button className="w-full flex justify-center uppercase items-center bg-secondary py-4 font-bold px-5 rounded-full" onClick={handleDownload}>
          <span className="mr-2">Download CV</span>
          <AiOutlineCloudDownload className="text-white text-2xl animate-bounce" />{" "}
          {/* Use the imported icon component */}
        </button>
      </div>
    </div>
  );
};
