import * as React from "react";
export interface ImageCardProps {
    src: string;
    alt: string;
    className?: string;
  }

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={`object-cover w-full rounded-2xl border-2 border-[#59981A] ${className}`}
    />
  );
};