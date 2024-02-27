import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import client1 from "../../../assets/img/article1.png";
import client2 from "../../../assets/img/article2.png";

const ratings = [
  {
    id: 1,
    name: "John Doe",
    comment: "Great service, highly recommended!",
    rating: 5,
    image: client1,
    clientDesignation: "CEO Consoledot",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Excellent experience, will come again!",
    rating: 4,
    image: client2,
    clientDesignation: "CEO Consoledot",
  },
  {
    id: 3,
    name: "Jane Smith",
    comment: "Excellent experience, will come again!",
    rating: 4,
    image: client2,
    clientDesignation: "CEO Consoledot",
  },
  {
    id: 4,
    name: "Jane Smith",
    comment: "Excellent experience, will come again!",
    rating: 4,
    image: client2,
    clientDesignation: "CEO Consoledot",
  },
];

export const RatingCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ratings.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ratings.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full relative">
      <div className="overflow-hidden w-full relative">
        <div
          className={`flex transition-transform duration-500 ease-in-out bg-transparent justify-center items-center py-4 px-8 ${
            ratings.length * 50
          }% md:${ratings.length * 25}%`}
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
          }}
        >
          {ratings.map((rating, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-x-4 p-7"
              style={{ flex: "0 0 50%" }}
            >
              <div
                className="w-[100px] h-[100px] rounded-full"
                style={{
                  backgroundImage: `url(${rating.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="rating rating-md rating-half flex items-center mb-4 ">
                {Array.from({ length: 5 }, (_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${rating.id}`}
                    className="mask mask-star-2 bg-orange-400 "
                    checked={i < rating.rating}
                    readOnly
                  />
                ))}
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <h2 className="text-white font-bold">{rating.name}</h2>
                <p className="text-sm text-primary text-center">{rating.comment}</p>
                <p className="text-sm text-gray-600">
                  {rating.clientDesignation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute bottom-[0] hidden  right-[42%] md:flex justify-between gap-7">
        <button
          onClick={goToPreviousSlide}
          className="  z-10 p-2 bg-transparent rounded-full border border-night-black  text-white focus:outline-none"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <button
          onClick={goToNextSlide}
          className="  z-10 p-2 bg-transparent rounded-full border border-night-black  text-white focus:outline-none"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="  inset-x-0 flex  md:hidden justify-center space-x-2">
        {ratings.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full bg-gray-500 ${
              index === currentIndex ? "bg-green" : ""
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};
