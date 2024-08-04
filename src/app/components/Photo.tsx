"use client";
import React from "react";

const Photo = ({ flip }: { flip?: boolean }) => {
  return (
    <div className="relative inline-block mr-8 shadow-xl">
      <div className="absolute -bottom-8 -right-8 w-full h-full bg-gray-900 dark:bg-gray-700 z-[-1]" />
      <div
        className={`hidden md:block w-80 h-80 lg:w-96 lg:h-96 bg-image_light dark:bg-image_dark bg-cover bg-center shadow-md ${
          flip ? "transform -scale-x-100" : ""
        }`}
        aria-label="Profile photo"
        role="img"
      />
    </div>
  );
};

export default Photo;
