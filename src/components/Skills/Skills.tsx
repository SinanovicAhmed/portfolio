import React from "react";
import SkillItem from "./SkillItem";
import { skills } from "@/constants/skills";
import SectionTitle from "../SectionTitle";

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-2 py-24">
      <SectionTitle title="My skills" subtitle="The skills, tools and technologies I used" />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 px-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} imageUrl={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
