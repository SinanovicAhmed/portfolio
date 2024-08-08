import React from "react";
import { Github, Youtube, Link } from "lucide-react";
import Image from "next/image";

interface Props {
  project: {
    name: string;
    image: string;
    description: string;
    technologies: string[];
    gitLink: string;
    videoLink: string;
    liveLink?: string;
  };
  reverse: boolean;
}

const ProjectItem = ({ project, reverse }: Props) => {
  return (
    <div data-aos={reverse ? "fade-right" : "fade-left"} data-aos-offset="200">
      <div
        className={`flex flex-col lg:flex-row ${
          reverse && "lg:flex-row-reverse"
        } gap-6 px-4 py-8 w-full rounded-md bg-gray-50 dark:bg-gray-900 drop-shadow-md hover:drop-shadow-xl hover:scale-[101%] transition-all  duration-75 border border-gray-300 dark:border-transparent`}
      >
        <div className="relative lg:w-1/2 w-full aspect-[16/9] h-auto overflow-hidden rounded-md">
          <Image
            src={project.image}
            alt={project.name}
            fill
            style={{ objectFit: "contain" }}
            loading="lazy"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        <div className="h-[2px] lg:w-[2px] lg:h-auto bg-gray-200 dark:bg-gray-800"></div>

        <div className="flex flex-col gap-6 justify-between lg:w-1/2">
          <h2 className="text-gray-900 dark:text-gray-50 text-xl font-medium">{project.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((technology) => {
              return (
                <p
                  key={technology}
                  className="rounded-full px-2 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {technology}
                </p>
              );
            })}
          </div>

          <div className="flex gap-6">
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer" aria-label="Project on GitHub">
              <Github className="stroke-gray-500 dark:stroke-gray-50" />
            </a>
            <a href={project.videoLink} target="_blank" rel="noopener noreferrer" aria-label="Project on Youtube">
              <Youtube className="stroke-gray-500 dark:stroke-gray-50" />
            </a>
            {project.liveLink && (
              <a href={project?.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                <Link className="stroke-gray-500 dark:stroke-gray-50" width={25} height={22} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
