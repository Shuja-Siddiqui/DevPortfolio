import React from "react";

export const ButtonWithIcon = ({ text, Icon }) => {
  return (
    <div className="w-full mb-5">
      <button className="btn bg-transparent  py-2 px-6 text-white rounded-full border-night-black uppercase">
        <span>
          <Icon className="text-secondary" />
        </span>
        {text}
      </button>
    </div>
  );
};
