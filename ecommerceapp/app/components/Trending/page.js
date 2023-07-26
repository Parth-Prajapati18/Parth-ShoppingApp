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

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-10 bg-white">
      <div className="grid grid-cols-5">
        {images.slice(-5,0).map((image, i) => (
          <Image
            key={i}
            src={`/assets/${image}`}
            alt={`Image ${startIndex - 5 + i + 1}`}
            height={250}
            width={250}
            className={`top-0 h-full px-2`}
          />
        ))}
      </div>
    </div>
  );
}
