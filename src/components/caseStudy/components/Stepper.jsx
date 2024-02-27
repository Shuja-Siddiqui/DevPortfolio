import React, { useState } from "react";
import "./Stepper.css";
import { TiTick } from "react-icons/ti";
export const Stepper = () => {
  const steps = [
    {
      label: "Step One",
      description:
        "adflajdfuncwjuawfcjsdfnhwbnhjawjfklmfvjfwvntrhcmfjsfvndbsvgfskljfhawklcfjl;vf jv fkcjaw",
    },
    {
      label: "Step One",
      description:
        "adflajdfuncwjuawfcjsdfnhwbnhjawjfklmfvjfwvntrhcmfjsfvndbsvgfskljfhawklcfjl;vf jv fkcjaw",
    },
    {
      label: "Step One",
      description:
        "adflajdfuncwjuawfcjsdfnhwbnhjawjfklmfvjfwvntrhcmfjsfvndbsvgfskljfhawklcfjl;vf jv fkcjaw",
    },
    {
      label: "Step One",
      description:
        "adflajdfuncwjuawfcjsdfnhwbnhjawjfklmfvjfwvntrhcmfjsfvndbsvgfskljfhawklcfjl;vf jv fkcjaw",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {[...Array(10).keys()].map((step, index) => (
        <div key={index} className="p-4 ">
          <div className="text-4xl font-bold mb-4 text-secondary flex gap-1 items-baseline justify-start">
            {index + 1}.
            <span className="font-bold text-[18px]  text-white">
              Step {index + 1} Label
            </span>
          </div>
          <div className="text-sm text-primary">
            Description of step {index + 1} goes here...
          </div>
        </div>
      ))}
    </div>
  );
};
