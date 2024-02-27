import React from "react";
import { SkillRatingsSlider } from "./SkillRatingsSlider";
import html from "../../../assets/img/html.svg";
import css from "../../../assets/img/css.svg";
import js from "../../../assets/img/js.svg";
import tailwind from "../../../assets/img/tailwind.svg";
import figma from "../../../assets/img/figma.svg";

export const Technologies = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="w-full font-bold text-white mb-5">
        Technologies
      </h1>
      <SkillRatingsSlider skillValue={30} skillName={"HTML"} icon={html} />
      <SkillRatingsSlider skillValue={40} skillName={"CSS"} icon={css} />
      <SkillRatingsSlider skillValue={50} skillName={"JS"} icon={js} />
      <SkillRatingsSlider skillValue={60} skillName={"TAILWIND"} icon={tailwind} />
      <SkillRatingsSlider skillValue={70} skillName={"FIGMA"} icon={figma} />
    </div>
  );
};
