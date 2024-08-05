import React from "react";
import Photo from "./Photo";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-2 pb-24">
      <SectionTitle title="About me" />
      <div className="w-full h-full flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center px-2">
        <Photo flip={true} />
        <div className="">
          <h2 className="font-bold text-gray-900 dark:text-gray-50 text-2xl sm:text-3xl pb-6">Curious about me?</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-[600px]">
            Hello! I&#39;m Ahmed Sinanović, a dedicated Software Engineer and Web Developer from Žepče, Bosnia and
            Herzegovina. <br />
            <br />
            With Bachelor&#39;s degree in software engineering and a strong foundation in both frontend and backend
            technologies, I strive to deliver high-quality, responsive solutions that meet the evolving needs of users.
            Whether it&#39;s working on a dynamic web project or exploring the latest industry trends, I&#39;m always
            eager to learn and grow in the ever-changing world of technology.
            <br />
            <br />
            Welcome to my portfolio, where you can explore my work and get to know more about my journey in the tech
            world.
            <br />
            <br />
            One last thing, I&#39;m available for work, so feel free to reach out and say hello! I promise I don&#39;t
            bite 😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
