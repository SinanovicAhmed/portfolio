import React from "react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div data-aos="fade" data-aos-duration="200" className="mb-14 text-center">
      <h4 className="text-lg text-gray-900 dark:text-gray-300 font-black ">{title.toUpperCase()}</h4>

      <h6 className="text-gray-600 dark:text-gray-300 dark:border-gray-300">{subtitle}</h6>
    </div>
  );
};

export default SectionTitle;
