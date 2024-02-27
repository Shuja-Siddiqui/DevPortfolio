import React from "react";
import { WorkExperience } from "./components";
const data1 = [
  {
    title: "Work",
    sub: "Experience",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute",
  },
  {
    title: "My",
    sub: "Education",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute",
  },
];

export const Resume = () => {
  return (
    <div>
      <WorkExperience data={data1[0]} />
      <WorkExperience data={data1[1]} />
    </div>
  );
};
