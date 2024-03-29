import React from "react";
import { IoIosDoneAll } from "react-icons/io";
export const Features = () => {
  return (
    <div className="w-full flex justify-start items-center gap-3">
      <span>
        <IoIosDoneAll className="text-secondary text-lg" />
      </span>
      <p className="text-sm text-primary">Available for Work </p>
    </div>
  );
};
