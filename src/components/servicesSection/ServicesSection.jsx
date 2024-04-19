import React from "react";
import { ServiceCard } from "./components";
import { ButtonWithIcon, Heading } from "../genralComponents";
import { FaShoppingBag } from "react-icons/fa";
import { useData } from "../../DataContext";
// const data = [
//   {
//     title: "UI/Ux Desing",
//     description:
//       "I design products that are more than pretty. I make them shippable.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "I design products that are more than pretty. I make them shippable.",
//   },
//   {
//     title: "SEO / Marketing",
//     description:
//       "I design products that are more than pretty. I make them shippable.",
//   },
//   {
//     title: "Branding & Strategy",
//     description:
//       "I design products that are more than pretty. I make them shippable.",
//   },
// ];

export const ServicesSection = () => {
  const { data } = useData();
  return (
    <div className="w-full flex justify-start items-start flex-col xl:px-16 lg:px-16 md:px-16 sm:px-5 xs:px-5 xss:px-5 py-4">
      <ButtonWithIcon Icon={FaShoppingBag} text={"Services"} />
      <Heading prefix={"My"} postfix={"Services"} />
      <p className="text-md text-primary leading-6 mb-5">
        I design products that are more than pretty. I make them shippable and
        usable, tempor non mollit dolor et do aute
      </p>
      <div className="w-full flex flex-col justify-start  items-start md:flex-row flex-wrap gap-5">
        {data?.services?.map((obj, index) => (
          <div className="w-full flex  lg:w-[48%] justify-start items-start">
            <ServiceCard
              title={obj?.name}
              description={obj?.description}
              index={index + 1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
