import React from "react";

export const Heading = ({ prefix, postfix, description }) => {
  return (
    <div className=" w-full flex justify-start items-start flex-col">
      <h1 className=" text-[28px] lg:text-[40px] text-white">
        {prefix} <strong className="text-secondary font-bold">{postfix}</strong>
      </h1>
      <p className="text-sm text-primary leading-6 mb-5">{description}</p>
    </div>
  );
};
