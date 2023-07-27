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
  const subArray = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);


  for (let i = startIndex; i < startIndex + 5; i++) {
    subArray.push(images[i % images.length])
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className=" mx-1 md:mx-4 xl:mx-16 2xl:mx-24 bg-white py-12 lg:py-20">

      {/* Greater than medium - Start*/}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {subArray.map((image, i) => (
          <Image
            key={i}
            src={`/assets/${image}`}
            alt={`Image ${startIndex - 5 + i + 1}`}
            height={200}
            width={200}
            className={`top-0 h-full px-2 ${i === 2 ? "scale-125 lg:scale-150" : null}`}
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

    </div>
  );
}
