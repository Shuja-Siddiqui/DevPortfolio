import React, { useState } from "react";
import { ProjectCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { ImStatsBars2 } from "react-icons/im";
import { useData } from "../../DataContext";

export const FeaturedProjects = () => {
  const { data } = useData();
  const baseUrl = process.env.REACT_APP_URL;
  
  // State to manage the number of projects to display
  const [displayedProjects, setDisplayedProjects] = useState(1);
  
  // Handler for displaying more projects
  const handleMoreProjects = () => {
    setDisplayedProjects(data?.projects?.length);
  };
  
  // Handler for displaying fewer projects
  const handleLessProjects = () => {
    setDisplayedProjects(1);
  };

  return (
    <div className="w-full flex justify-start items-start flex-col p-5 border-night-black bg-primaryDark rounded-xl mb-6">
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
          {/* Mapping only for the first 'displayedProjects' */}
          {data?.projects?.slice(0, displayedProjects).map((project, index) => (
            <ProjectCard
              key={index}
              data={project.gallery}
              projectName={project.projectName}
              id={index}
            />
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          {displayedProjects < data?.projects?.length ? (
            <button
              className="py-4 px-7 bg-secondary rounded-full"
              onClick={handleMoreProjects}
            >
              More Projects
            </button>
          ) : (
            <button
              className="py-4 px-7 bg-secondary rounded-full"
              onClick={handleLessProjects}
            >
              Less Projects
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
