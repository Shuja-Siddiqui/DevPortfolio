import React from "react";

export const Heading = ({ prefix, postfix, description }) => {
  return (
    <div className=" w-full flex justify-start items-start flex-col">
      <h1 className="font-bold lg:text-[50px] text-white text-[2.5rem]">
        {prefix}  <strong className="text-secondary font-bold ">{postfix}</strong>
      </h1>
      <p className="text-lg text-primary leading-6 mb-5">{description}</p>
    </div>
  );
};
