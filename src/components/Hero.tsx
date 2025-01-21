"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const Hero = () => {
  const images = [
    "/assets/hero-img-1.png",
    "/assets/hero-img-2.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row justify-between pb-12 pt-20 max-md:pt-32">
      {/* text div */}
      <div className="flex flex-col mt-8 md:mt-32 px-4 md:px-16">
        <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
        AI for Smarter, Sustainable <br />
        Farming
        </h1>
        <p className="text-lg text-black w-48 md:w-[480px]">
        Discover the future of agriculture with AgriSense. Our platform combines drone technology, IoT sensors, and advanced AI to help farmers make data-driven decisions, reduce waste, and maximize productivity.
        </p>
        <button className="bg-[#81B622] text-white hover:bg-green-600 font-bold text-lg py-2 px-4 rounded-lg mt-8 w-48">
          Learn More
        </button>
      </div>
      {/* image div */}
      <div className="w-64 h-[576px] md:w-[480px] md:h-[584px] rounded-lg mt-8 mb-12 overflow-hidden relative md:mr-16">
        <Image
          src={images[currentImageIndex]}
          alt="event"
          fill
          style={{ objectFit: "contain" }}
          className="absolute inset-0 block w-64 h-[576px] md:w-[480px] md:h-[584px]"
        />
      </div>
    </div>
  );
};