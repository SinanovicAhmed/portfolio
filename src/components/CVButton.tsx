import React from "react";

const CVButton = () => {
  return (
    <a href="/documents/cv.pdf" target="_blank" rel="noopener noreferrer">
      <button className="rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-900 font-semibold py-2 px-4 transition duration-100 ease-in-out transform hover:bg-gray-800 active:scale-[0.98] select-none">
        Download CV
      </button>
    </a>
  );
};

export default CVButton;
