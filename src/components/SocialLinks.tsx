import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      <a
        className="hover:scale-105 transition-all"
        href="https://github.com/SinanovicAhmed"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <Github className="stroke-[#4b5563] dark:stroke-gray-50" />
      </a>
      <a
        className="hover:scale-105 transition-all"
        href="https://www.linkedin.com/in/ahmedsinanovic/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin className="stroke-[#4b5563] dark:stroke-gray-50" />
      </a>
      <a className="hover:scale-105 transition-all" href="mailto:ahmed.sinanovic.20@size.ba" aria-label="Email">
        <Mail className="stroke-[#4b5563] dark:stroke-gray-50" />
      </a>
    </div>
  );
};

export default SocialLinks;
