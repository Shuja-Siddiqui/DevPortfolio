import React, { useState } from "react";
import { Introduce } from "../components/landingPage";
import {
  AboutMe,
  WorkExperience,
  ServicesSection,
  Skills,
  Resume,
  FeaturedProjects,
  Testimonial,
  ContactMe,
} from "../components";

export const CenterContent = () => {
  return (
    <div className=" w-full flex justify-start items-start flex-col py-5 xl:py-3 ">
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <Introduce />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <AboutMe />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <ServicesSection />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <Skills />
      </div>
      <div id="resume" className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <Resume />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <FeaturedProjects />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <Testimonial />
      </div>
      <div className="w-full bg-primaryDark  rounded-2xl mb-7 ">
        <ContactMe />
      </div>
    </div>
  );
};
