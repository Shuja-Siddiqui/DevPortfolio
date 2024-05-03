import React, { useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ProjectHerosSection, Stepper, Technologies } from "./components";
import { useLocation } from "react-router-dom";
import { useData } from "../../DataContext";
export const CaseStudy = ({ projectData }) => {
  const location = useLocation();
  const baseURL = process.env.REACT_APP_URL;
  const id = location.pathname.split("/")[2];
  const data = useData();
  const [newData, setNewData] = useState();
  useEffect(() => {
    setNewData(data?.data?.projects?.[id]);
  }, []);

  console.log(projectData, "p");

  return (
    <div className=" w-full flex justify-start items-start flex-col  p-7 border-night-black bg-primaryDark rounded-xl mb-6">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={FcViewDetails} text={"Project Details"} />
        <h2 className="text-[20px] md:text-[30px] font-bold text-white py-2">
          {projectData[id]?.thumbNail}
        </h2>
        <div className="w-full mb-4 py-4">
          <ProjectHerosSection data={newData} img={newData?.hero} />
        </div>
        <div className="mb-5 w-full">
          <Stepper />
          {/* Repeat */}
          <div className="flex justify-between xl:flex-row lg:zflex-row md:flex-row sm:flex-col xs:flex-col">
            {projectData[id]?.gallery?.length > 0 ? (
              projectData[id]?.gallery?.map((e) => (
                <div className="w-full md:w-[48%]  p-4 border border-night-black rounded-2xl relative group">
                  <div
                    style={{
                      backgroundImage: `url(${baseURL}/file/${e})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-full  min-h-[300px] flex justify-center items-start overflow-hidden  rounded-2xl "
                  ></div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="w-full">
          <Technologies data={newData?.technologies} />
        </div>
      </div>
    </div>
  );
};
