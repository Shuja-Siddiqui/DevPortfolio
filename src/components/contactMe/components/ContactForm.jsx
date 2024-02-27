import React from "react";
import { ContactIcons } from "./ContactIcons";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SendMessage } from "./SendMessage";

export const ContactForm = () => {
  return (
    <div className="w-full flex md:flex-row flex-col justify-start items-start">
      <div className="w-full md:w-[50%] flex flex-col justify-start items-start  md:mt-5 mb-5 gap-7">
        <ContactIcons
          title={"Location"}
          sub={"Melburn Street. No-20"}
          Icon={IoLocationOutline}
        />
        <ContactIcons
          title={"Email"}
          sub={"shuja@gmail.com"}
          Icon={AiOutlineMail}
        />
        <ContactIcons title={"Phone"} sub={"03106030609"} Icon={FiPhoneCall} />
      </div>
      <div className="w-full md:w-[50%]  flex flex-col gap-7 justify-start items-start mb-5">
        <SendMessage />
      </div>
    </div>
  );
};
