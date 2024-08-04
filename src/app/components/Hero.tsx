import React from "react";
import { MapPin, Dot } from "lucide-react";
import Photo from "./Photo";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <section className="mx-auto h-[calc(100svh-64px)] max-w-7xl px-2">
      <div className="w-full h-full flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center pb-10 px-2">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="font-bold text-gray-900 dark:text-gray-50 text-4xl sm:text-6xl">
              Hi I&#39;m Ahmed &#128075;
            </h2>
            <p className="text-gray-600 dark:text-gray-50 text-sm sm:text-base max-w-[600px]">
              I&#39;m dedicated Software Engineer and Web Developer from Žepče, Bosnia and Herzegovina. I love creating
              innovative and user-friendly web applications, and I&#39;m always excited to tackle new challenges.
              Let&#39;s build something amazing together!
            </p>
          </div>
          <div className="space-y-2">
            <span className="flex gap-2">
              <MapPin className="stroke-[#4b5563] dark:stroke-gray-50" />
              <p className="text-gray-600 dark:text-gray-50 text-sm sm:text-base">Bosnia and Herzegovina</p>
            </span>
            <span className="flex gap-2">
              <Dot strokeWidth={8} color="green" style={{ padding: "0px" }} />
              <p className="text-gray-600  dark:text-gray-50 text-sm sm:text-base">Available for work</p>
            </span>
          </div>
          <SocialLinks />
        </div>
        <Photo />
      </div>
    </section>
  );
};

export default Hero;
