import React from "react";
import { NumberWithSubHead } from "./NumberWithSubHead";
const contactData = [
  {
    key: "185",
    value: "Years Of Experience",
  },
  {
    key: "12",
    value: "Handled Projects",
  },
  {
    key: "5",
    value: "Open Source Libraries",
  },
  {
    key: "18",
    value: "Awards Won",
  },
];
export const AwardsRow = () => {
  return (
    <div
      className="w-full flex  justify-between items-start gap-4 mb-6"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {contactData.map((data, index) => (
        <div key={index}>
          <NumberWithSubHead number={data?.key} subHead={data?.value} />
        </div>
      ))}
    </div>
  );
};
