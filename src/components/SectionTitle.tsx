import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-14 text-center space-y-4">
      <div className="relative flex justify-center">
        <h2 className=" text-gray-200 dark:text-gray-900 dark:text-opacity-20 text-3xl md:text-4xl font-black tracking-widest">
          {title.toUpperCase()}
        </h2>
        <h4 className="absolute px-4 -bottom-1 text-gray-700 dark:text-gray-300 font-black border-b-2 border-gray-700 dark:border-gray-300">
          {title}
        </h4>
      </div>
      <h6 className="text-gray-600 dark:text-gray-300 text-sm dark:border-gray-300">{subtitle}</h6>
    </div>
  );
};

export default SectionTitle;
