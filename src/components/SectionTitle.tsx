import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-14 text-center space-y-4">
      <h4 className="px-4 inline-block text-gray-700 dark:text-gray-300 font-black border-b-2 border-gray-700 dark:border-gray-300">
        {title}
      </h4>

      <h6 className="text-gray-600 dark:text-gray-300 text-sm dark:border-gray-300">{subtitle}</h6>
    </div>
  );
};

export default SectionTitle;
