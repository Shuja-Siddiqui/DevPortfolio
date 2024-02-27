import React from "react";

export const TransparentButton = ({ text, rating }) => {
  return (
    <div className="w-full mb-5">
      <button className="btn bg-transparent py-1 px-6 rounded-full text-sm text-primary border-night-black border-dashed">
        {`${text} (${rating})`}
      </button>
    </div>
  );
};
