import React from "react";
import { ProjectCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ImStatsBars2 } from "react-icons/im";
import { useData } from "../../DataContext";
export const FeaturedProjects = () => {
  const { data } = useData();
  const baseUrl = process.env.REACT_APP_URL;

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
          {data?.projects?.map((i, index) => (
            <ProjectCard
              data={data?.projects[index]?.gallery}
              projectName={data?.projects[index]?.projectName}
              id={index}
            />
          ))}
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
