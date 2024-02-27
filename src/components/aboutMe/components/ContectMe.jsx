import React from "react";
const contactData = [
  {
    key: "Phone",
    value: "+(2)870174302 ",
  },
  {
    key: "Skype",
    value: "shuja@yahoo.ocom ",
  },
  {
    key: "Language",
    value: "English , Urdu , German ",
  },
  {
    key: "Email",
    value: "hr@consoledot.com ",
  },
  {
    key: "Github",
    value: "github.com/shuja_coder ",
  },
];
export const ContectMe = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start gap-4">
      {contactData.map((data, index) => (
        <div
          key={index}
          className="w-full lg:w-[48%] flex justify-between items-start mb-2"
        >
          {/* Each pair of key and value is wrapped inside a container */}
          <p className="w-full md:w-[50%] text-sm text-primary">
            {data?.key} :
          </p>
          <p className="w-full md:w-[50%] text-sm text-white">{data?.value}</p>
        </div>
      ))}
    </div>
  );
};
