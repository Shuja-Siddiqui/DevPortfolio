import React from "react";
import { ProjectCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ImStatsBars2 } from "react-icons/im";
export const FeaturedProjects = () => {
  return (
    <div className=" w-full flex justify-start items-start flex-col  p-5 border-night-black bg-primaryDark rounded-xl mb-6">
      <div className="w-full flex justify-start items-start flex-col">
        <ButtonWithIcon Icon={ImStatsBars2} text={"Portfolio"} />
        <Heading
          prefix={"Featured"}
          postfix={"Projects"}
          description={
            "I design products that are more than prettyI make them shippable and usable, ttempor non mollit dolor et do aute"
          }
        />
        <div className="w-full mb-6">
          <ProjectCard />
        </div>
        <div className="w-full flex justify-center items-center ">
          <button className="py-4 px-7 bg-secondary rounded-full">
            More Projects
          </button>
        </div>
      </div>
    </div>
  );
};
