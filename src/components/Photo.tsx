"use client";
import React from "react";

interface Props {
  flip?: boolean;
  size: "small" | "large";
}

const Photo = ({ flip, size }: Props) => {
  const flipClass = flip ? "transform -scale-x-100" : "";
  const sizeClass =
    size === "large" ? "hidden md:block w-80 h-80 lg:w-96 lg:h-96" : "hidden sm:block w-40 h-40 sm:w-48 sm:h-48";
  const positionClass = size === "large" ? "-bottom-8 -right-8" : "-bottom-4 -right-4";

  return (
    <div data-aos="fade">
      <div className={`relative inline-block mr-8 shadow-xl ${flipClass}`}>
        <div className={`absolute w-full h-full bg-gray-900 dark:bg-gray-700 z-[-1] ${positionClass}`} />
        <div
          className={`bg-image_light dark:bg-image_dark bg-cover bg-center shadow-md grayscale-[60%] ${sizeClass}`}
          aria-label="Profile photo"
          role="img"
        />
      </div>
    </div>
  );
};

export default Photo;
