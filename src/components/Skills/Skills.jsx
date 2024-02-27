import React, { useState } from "react";
import { SkillsCarousal } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaGraduationCap } from "react-icons/fa";

export const Skills = () => {
  const [direction, setDirection] = useState("");

  const handleClick = (direction) => {
    setDirection(direction);
  };

  return (
    <div className="w-full flex justify-start items-start flex-col p-5 relative">
      <ButtonWithIcon Icon={FaGraduationCap} text={"Skills"} />
      <Heading prefix={"My"} postfix={"Adventages"} />
      <p className="text-sm text-primary leading-6 mb-5">
        I design products that are more than pretty. I make them shippable and
        usable, tempor non mollit dolor et do aute
      </p>
      <div className="absolute hidden lg:flex  justify-between items-center w-full top-16">
        <button
          onClick={() => handleClick("left")}
          className="btn btn-circle bg-transparent  border-white"
        >
          ❮
        </button>
        <button
          onClick={() => handleClick("right")}
          className="btn btn-circle bg-transparent  border-white"
        >
          ❯
        </button>
      </div>
      <SkillsCarousal direction={direction} onClick={handleClick} />
    </div>
  );
};
