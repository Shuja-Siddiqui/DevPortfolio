import React from "react";
import gal1 from "../../../assets/img/article1.png";
export const ProjectHerosSection = () => {
  return (
    <div className="w-full flex justify-start items-center flex-col">
      <div className="w-full  rounded-2xl mb-7 ">
        <div
          className="w-full min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl"
          style={{
            backgroundImage: `url(${gal1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-full flex justify-between items-start">
        <div className="w-full flex justify-between items-start flex-col">
          <h2 className="text-white text-[18px] ">CLient:</h2>
          <p className="text-primary text-sm">Envato Theme</p>
        </div>
        <div className="w-full flex justify-start items-start flex-col">
          <h2 className="text-white text-[18px] ">Services:</h2>
          <p className="text-primary text-sm">Tips & Tricks, Design</p>
        </div>
        <div className="w-full flex justify-end items-start flex-col">
          <h2 className="text-white text-[18px] ">Duration:</h2>
          <p className="text-primary text-sm">Envato Theme</p>
        </div>
      </div>
    </div>
  );
};
