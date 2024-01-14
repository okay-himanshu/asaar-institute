import React, { useState, useEffect } from "react";
import { picOne, picTwo, picThree, picFour } from "../assets/images";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const images = [
  { name: "pic-1", src: picOne },
  { name: "pic-2", src: picTwo },
  { name: "pic-3", src: picThree },
  { name: "pic-4", src: picFour },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className=" relative mx-auto overflow-hidden">
      <div
        className=" w-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full select-none"
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <IoIosArrowBack
        className="prev-button absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray  text-base sm:text-2xl md:text-5xl"
        onClick={handlePrev}
      ></IoIosArrowBack>
      <IoIosArrowForward
        className="next-button absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-color_gray text-base sm:text-2xl md:text-5xl"
        onClick={handleNext}
      ></IoIosArrowForward>
    </div>
  );
}
