import React from "react";

export const SendMessage = () => {
  return (
    <div className="w-full flex flex-col gap-7 justify-start items-start mb-5">
      <input
        type="text"
        placeholder="Name"
        className="input bg-transparent input-bordered w-full md:max-w-xs"
      />
      <input
        type="email"
        placeholder="E-Mail"
        className="input bg-transparent input-bordered w-full md:max-w-xs"
      />
      <textarea
        placeholder="Message"
        rows={"5"}
        className="w-full px-5 py-4 border border-night-black md:max-w-xs rounded-lg bg-transparent outline-none  "
      ></textarea>
      <div className="w-full flex justify-start items-center ">
        <button className="py-4 px-7 bg-secondary rounded-full">
          Send Message
        </button>
      </div>
    </div>
  );
};
