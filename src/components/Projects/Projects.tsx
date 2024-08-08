import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/constants/projects";
import SectionTitle from "../SectionTitle";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-2 py-24 overflow-hidden">
      <SectionTitle title="My projects" subtitle="Some of the projects I have built" />
      <div className="space-y-14">
        {projects.map((project, index) => (
          <ProjectItem key={project.name} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
