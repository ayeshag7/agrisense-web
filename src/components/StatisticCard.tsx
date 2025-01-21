import * as React from "react";

export interface StatisticCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({
  icon,
  title,
  description,
  iconAlt = "",
}) => {
  return (
    <div className="flex flex-col grow items-start px-10 pt-8 pb-6 w-full rounded-2xl border-2 border-[#ECF87F] border-solid bg-[#59981A] max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        alt={iconAlt}
        className="object-contain w-8 aspect-square"
      />
      <div className="mt-8 text-3xl font-bold leading-10 text-[#ECF87F] max-md:mt-10">
        {title}
      </div>
      <div className="mt-3.5 text-2xl leading-10 text-white">
        {description}
      </div>
    </div>
  );
};
