"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "P1.jpg",
  "P2.jpg",
  "P3.jpg",
  "P4.jpg",
  "P5.jpg",
  "P6.jpg",
  "P7.jpg",
  "P8.jpg",
];

export default function Trending() {
  const [startIndex, setStartIndex] = useState(5);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const subArray = [];

  useEffect(() => {
    let interval;

    if (isAutomatic) {
      interval = setInterval(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [isAutomatic]);


  for (let i = startIndex; i < startIndex + 5; i++) {
    subArray.push(images[i % images.length])
  }

  
  const handlePrev = () => {
    setIsAutomatic(false); // Stop automatic motion on button click
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIsAutomatic(false); // Stop automatic motion on button click
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsAutomatic(false); // Stop automatic motion on button hover
  };

  const handleMouseLeave = () => {
    setIsAutomatic(true); // Start automatic motion when the mouse leaves the buttons
  };

  return (
    <div className=" mx-1 md:mx-4 xl:mx-16 2xl:mx-24 bg-white py-12">

      {/* Greater than medium - Start*/}
      <div className="hidden md:grid grid-cols-5 gap-4 flex flex-col items-center justify-center ml-8 lg:ml-14 xl:ml-20">
        {subArray.map((image, i) => (
          <Image
            key={i}
            src={`/assets/${image}`}
            alt={`Image ${startIndex - 5 + i + 1}`}
            height={200}
            width={200}
            className={`top-0 h-full px-2 ease-in-out ${i === 2 ? "scale-125 lg:scale-150" : null}`}
            // style={{
            //   transform: `translateX(${(i - 2) * 200}px)`, // Slide effect based on the current index
            //   transition: "transform 0.5s ease-in-out", // Smooth sliding animation
            // }}
          />
        ))}
      </div>
      {/* Greater than medium - End*/}

      {/* Less than medium - Start*/}
      <div className="md:hidden flex justify-center">
          <Image
            src={`/assets/${images[startIndex]}`}
            alt={`Image ${startIndex}`}
            height={200}
            width={200}
            className={`top-0 h-full px-2 scale-150`}
          />
      </div>
      {/* Less than medium - End*/}

      <div className="flex justify-center mt-12 md:mt-8 lg:mt-12 text-3xl lg:text-5xl">
        <button
          className="bg-transparent hover:bg-e2e9e9 text-e2e9e9 border border-black-900 font-bold py-2 px-8 lg:px-12 rounded-full focus:outline-none mx-6"
          onClick={handlePrev}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          &#8592;
        </button>
        <button
          className="bg-transparent hover:bg-e2e9e9 text-e2e9e9 border border-black-900 font-bold py-2 px-8 lg:px-12 rounded-full focus:outline-none mx-6"
          onClick={handleNext}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
