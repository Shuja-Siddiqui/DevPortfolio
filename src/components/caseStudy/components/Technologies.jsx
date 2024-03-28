import React from "react";
import { SkillRatingsSlider } from "./SkillRatingsSlider";
import html from "../../../assets/img/html.svg";
import css from "../../../assets/img/css.svg";
import js from "../../../assets/img/js.svg";
import tailwind from "../../../assets/img/tailwind.svg";
import figma from "../../../assets/img/figma.svg";

export const Technologies = ({data}) => {
  console.log(data)
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="w-full font-bold text-white mb-5">
        Technologies
      </h1>
      {data?.map((i)=><SkillRatingsSlider skillValue={30} skillName={i?.name?.skillName} />)}
      {/* <SkillRatingsSlider skillValue={40} skillName={"CSS"} icon={css} />
      <SkillRatingsSlider skillValue={50} skillName={"JS"} icon={js} />
      <SkillRatingsSlider skillValue={60} skillName={"TAILWIND"} icon={tailwind} />
      <SkillRatingsSlider skillValue={70} skillName={"FIGMA"} icon={figma} /> */}
    </div>
  );
};
