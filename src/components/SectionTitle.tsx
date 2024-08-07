import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="mb-14 space-y-4 text-center">
      <h4 className="text-lg text-gray-900 dark:text-gray-300 font-black border-b-[1px] border-gray-300 dark:border-gray-700">
        {title}
      </h4>

      <h6 className="text-gray-600 dark:text-gray-300 text-sm dark:border-gray-300">{subtitle}</h6>
    </div>
  );
};

export default SectionTitle;
