import React from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  name: string;
  index: number;
}

const SkillItem = ({ imageUrl, name, index }: Props) => {
  return (
    <div data-aos="fade" data-aos-delay={index * 50}>
      <div className="flex flex-col items-center hover:scale-105 drop-shadow-md hover:drop-shadow-lg">
        <div className="w-16 h-16 mb-2 relative">
          <Image src={imageUrl} alt="Icon" fill sizes="64px" style={{ objectFit: "contain" }} loading="lazy" />
        </div>
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">{name}</p>
      </div>
    </div>
  );
};

export default SkillItem;
