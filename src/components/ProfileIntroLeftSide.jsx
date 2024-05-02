import React, { useEffect, useState } from "react";
import logo from "../assets/img/user-sidebar-thumb.png";
import { Doughnut } from "./charts";
import { FaDownload } from "react-icons/fa";
import Typed from "typed.js";
import { useData } from "../DataContext";
import { AiOutlineCloudDownload } from "react-icons/ai";

import { DoughnutLeft } from "./charts/DoughnutLeft";
export const ProfileIntroLeftSide = () => {
  const [divHeight, setDivHeight] = useState("auto");

  useEffect(() => {
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

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight;
      setDivHeight(`${vh * 0.1}px`); // Adjust this multiplier to change the height proportion
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data } = useData();
  const baseURL = process.env.REACT_APP_URL;
  const handleDownload = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK_HERE' with the sharing link of your PDF file
    const pdfUrl =
      "https://drive.google.com/file/d/1hIDKI2EvHu_LGLe6Jh9XfiafLXzD_Ty1/view?usp=drive_link";
    // Open the PDF in a new tab for the user to download
    window.open(pdfUrl, "_blank");
  };
  return (
    <div
      style={{
        // height: divHeight
        top: divHeight,
      }}
      className="w-full z-20 rounded-2xl bg-primaryDark flex justify-center items-center p-4 overflow-hidden xl:fixed lg:fixed md:fixed sm:relative xs:relative md:max-w-[21rem]"
    >
      <div className="absolute z-20 w-[320px] lg:w-[320px] md:w-[320px] sm:w-[100px] xs:w-[100px] xss:w-[100px] h-[100px] xl:-right-[215px] lg:-right-[215px] md:-right-[215px] sm:right-[15px] xs:right-[15px] xss:right-[5px] top-[-50px] bg-[#18191A] overflow-hidden"></div>

      <div className="absolute z-20 w-[320px] h-[50px] right-[40px] top-[-106px] rotate-45  bg-[#18191A]"></div>
      <div className="flex  w-full flex-col justify-start items-center gap-3 p-1 pt-12">
        <div
          style={{
            backgroundImage: `url(${baseURL}/file/${data?.avatar})`, // Add your image URL here
            backgroundSize: "cover",
            backgroundPosition: "center center",
            width: "130px",
            height: "130px",
          }}
          className="rounded-full relative border-8 border-night-black"
        ></div>
        <div className="w-full flex justify-start items-center flex-col gap-3 min-h-[50px]">
          <h4 className="font-bold">{data?.name}</h4>
          <div id="typed-strings">
            <p>
              <i>MERN</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Vue</i> <strong>Developer</strong>
            </p>
            <p>
              <i>Progressive</i> <strong>Applications</strong>
            </p>
            {/* {data?.skills.length > 0 ??
              data?.skills?.map((i) => (
                <p>
                  <strong>{i?.title?.skillName}</strong>
                </p>
              ))} */}
          </div>
          <div style={{ height: "20px" }}>
            <p className="text-secondary" id="typed"></p>
          </div>
        </div>
        <hr className=" w-full" style={{ borderTop: "2px solid #333" }} />
        <div className=" w-full flex justify-start items-center flex-col  gap-3">
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <span className="text-sm">COUNTRY</span>
            <p className="text-primary text-sm">{data?.country}</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <span className="text-sm">CITY</span>
            <p className="text-primary text-sm">{data?.city}</p>
          </div>
          <div className="w-full flex justify-between items-center gap-2 font-bold">
            <span className="text-sm">AGE</span>
            <p className="text-primary text-sm">{data?.age}</p>
          </div>
        </div>
        {/* <div className="card w-full bg-[#333] shadow-xl mb-5">
          <div style={{ paddingTop: "1rem" }} className="card-body">
            <h2 style={{ fontSize: "0.875rem" }} className="card-title">
              Skills!
            </h2>
            <div className="w-full grid grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 place-content-between text-center mb-5 overflow-hidden">
              {data?.skills?.map((i) => (
                <DoughnutLeft
                  cutout={"95"}
                  height={"60"}
                  width={"60"}
                  skillRate={i?.ratings}
                  skillName={i?.title?.skillName}
                />
              ))}
            </div>
            <div className="w-full flex justify-between items-center gap-4 mb-5 overflow-hidden">
              {data?.skills?.map((i, index) => (
                <div key={index} className="flex justify-center">
                  <DoughnutLeft
                    cutout={"95"}
                    height={"60"}
                    width={"60"}
                    skillRate={i?.ratings}
                    skillName={i?.title?.skillName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <button
          className="w-full flex justify-center uppercase items-center bg-secondary py-4 font-bold px-5 rounded-full"
          onClick={handleDownload}
        >
          <span className="mr-2">Download CV</span>
          <AiOutlineCloudDownload className="text-white text-2xl animate-bounce" />{" "}
          {/* Use the imported icon component */}
        </button>
      </div>
    </div>
  );
};
