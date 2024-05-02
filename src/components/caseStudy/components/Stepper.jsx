import React, { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
import { useData } from "../../../DataContext";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";

export const Stepper = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data } = useData();
  const sanitizedDescription = DOMPurify.sanitize(
    data?.projects?.[id]?.description
  );

  return (
    <div className="w-full gap-4">
      <div className="p-4 w-full">
        <div className="text-4xl font-bold mb-4 text-secondary flex gap-1 items-baseline justify-start">
          Description:
        </div>
        <div
          className="text-sm text-primary"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        ></div>
      </div>
    </div>
  );
};
