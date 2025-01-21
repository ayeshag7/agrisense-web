import * as React from "react";
import { StatisticCard } from "./StatisticCard";
import { ImageCard } from "./ImageCard";

const statisticsData = [
    {
      icon: "/assets/report.svg",
      title: "Over 40% of crops wasted annually",
      description: "Inefficiencies in farming practices and lack of timely interventions lead to significant crop losses in Pakistan.",
      iconAlt: "Crop waste icon"
    },
    {
      icon: "/assets/water.svg",
      title: "Pakistan faces 33% water scarcity",
      description: "Agriculture accounts for 90% of water usage, highlighting the urgent need for optimized irrigation systems.",
      iconAlt: "Water scarcity icon"
    },
    {
      icon: "/assets/ai.svg",
      title: "Low adoption of precision agriculture",
      description: "Only a small percentage of farmers use technology-driven solutions, limiting productivity and sustainability.",
      iconAlt: "Precision agriculture icon"
    }
  ];  

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 1",
    className: "aspect-[1.34]"
  },
  {
    src: "https://images.unsplash.com/photo-1542806136-b50e2a5b006f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 2",
    className: "aspect-[1.5]"
  },
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Image 3",
    className: "aspect-[1.26]"
  }
];

export const StatisticsSection: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-20 bg-white max-md:px-5">
      <div className="flex flex-col justify-center items-center px-20 pt-12 pb-16 max-w-full bg-white w-[1512px] max-md:px-5 max-md:py-24">
        <div className="flex flex-col mb-0 w-full max-w-[1195px] max-md:mb-2.5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                <StatisticCard {...statisticsData[0]} />
              </div>
              <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                <ImageCard {...imageData[0]} />
              </div>
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                <ImageCard {...imageData[1]} />
              </div>
              <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                <StatisticCard {...statisticsData[1]} />
              </div>
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                <StatisticCard {...statisticsData[2]} />
              </div>
              <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                <ImageCard {...imageData[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};