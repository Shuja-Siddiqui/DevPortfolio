import React, { useEffect, useState } from "react";
import { Doughnut } from "../../charts";
import { useData } from "../../../DataContext";

export const SkillsCarousal = ({ direction, parentClick }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleSlide = (direction) => {
    const newSlidePosition =
      direction === "left" ? slidePosition - 240 : slidePosition + 240;

    setSlidePosition(Math.min(Math.max(newSlidePosition, 0), 900));
  };

  useEffect(() => {
    if (direction) {
      handleSlide(direction);
      parentClick("");
    }
  }, [direction, parentClick]);
  const { data } = useData();
  return (
    <div className="carousel w-full overflow-hidden relative ease-in-out duration-300">
      <div
        className="carousel-container flex w-full justify-around"
        style={{
          transform: `translateX(-${slidePosition}px)`,
          transition: "ease-in-out 1s",
        }}
      >
        {data?.skills?.map((i) => (
          <div id="slide1" className="carousel-item relative ">
            <Doughnut
              cutout={"99"}
              width={"150"}
              height={"150"}
              fontSize={"26"}
              skillRate={i?.ratings}
              skillName={i?.title?.skillName}
            />
          </div>
        ))}
        {/* <div id="slide2" className="carousel-item relative w-[20%]">
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
        </div> */}
      </div>

      <div className="  flex lg:hidden  justify-center gap-5 items-center w-full  absolute bottom-0">
        <button
          onClick={() => handleSlide("left")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❮
        </button>
        <button
          onClick={() => handleSlide("right")}
          className="btn btn-circle bg-transparent  border-secondary "
        >
          ❯
        </button>
      </div>
    </div>
  );
};
