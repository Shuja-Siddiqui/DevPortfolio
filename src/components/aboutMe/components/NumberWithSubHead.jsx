import React from "react";

export const NumberWithSubHead = ({ number, subHead }) => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-2">
      <h1 className="text-secondary font-bold">{number}+</h1>
      <p className="text-start text-primary text-sm">{subHead}</p>
    </div>
  );
};
