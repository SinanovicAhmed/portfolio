import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative flex justify-center mb-16">
      <h2 className=" text-gray-200 dark:text-gray-900 dark:text-opacity-20 text-3xl md:text-4xl font-black tracking-widest">
        {title.toUpperCase()}
      </h2>
      <h4 className="absolute px-4 -bottom-1 text-gray-700 dark:text-gray-300 font-black border-b-2 border-gray-700 dark:border-gray-300">
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
