import React from "react";
import Image from "next/image";

interface Props {
  imageUrl: string;
  name: string;
}

const SkillItem = ({ imageUrl, name }: Props) => {
  return (
    <div className="flex flex-col items-center hover:scale-105">
      <div className="w-16 h-16 mb-2 relative">
        <Image src={imageUrl} alt="Icon" layout="fill" objectFit="contain" />
      </div>
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-base">{name}</p>
    </div>
  );
};

export default SkillItem;
