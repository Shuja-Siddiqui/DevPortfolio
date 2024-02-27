import React, { useEffect, useState } from "react";
import { Doughnut } from "../../charts";

export const SkillsCarousal = ({ direction, parentClick }) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [directions, setDirections] = useState(direction);

  const handleSlide = () => {
    // Calculate the new slide position based on the direction
    const newSlidePosition =
      direction === "left" ? slidePosition - 200 : slidePosition + 200;

    // Update the slide position within the bounds of the carousel
    setSlidePosition(Math.min(Math.max(newSlidePosition, 0), 600)); // Adjusted based on the total width of slides

    // You can adjust the value 200 based on the width of your carousel items
  };
  useEffect(() => {
    handleSlide();
  }, [directions]);
  return (
    <div className="carousel w-full overflow-hidden relative ease-in-out duration-300">
      <div
        className="carousel-container flex"
        style={{
          transform: `translateX(-${slidePosition}px)`,
          transition: "ease-in-out 1s",
        }}
      >
        <div id="slide1" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Js"}
          />
        </div>
        <div id="slide2" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide3" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide4" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide5" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide6" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide7" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
        <div id="slide8" className="carousel-item relative w-[20%]">
          <Doughnut
            cutout={"99"}
            width={"150"}
            height={"150"}
            fontSize={"18"}
            skillRate={50}
            skillName={"Tailwind"}
          />
        </div>
      </div>

      <div className=" flex lg:hidden  justify-center gap-5 items-center w-full  absolute bottom-0">
        <button
          onClick={() => setDirections("left")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❮
        </button>
        <button
          onClick={() => setDirections("right")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❯
        </button>
      </div>
    </div>
  );
};
