"use client";
import Hamburger from "hamburger-react";
import { Sun } from "lucide-react";
import React, { useState } from "react";
import CVButton from "../CVButton";
import ThemeSwitch from "./ThemeSwitch";

const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <nav className="absolute left-0 right-0 bg-white dark:bg-gray-950 py-4 shadow-md z-50">
          <ul className="flex flex-col gap-4 font-medium text-gray-600 dark:text-gray-300 px-4">
            <li>
              <a href="#about" className="block group transition duration-200">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
              </a>
            </li>
            <li>
              <a href="#skills" className="block group transition duration-200">
                My skills
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
              </a>
            </li>
            <li>
              <a href="#projects" className="block group transition duration-200">
                Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
              </a>
            </li>
            <li>
              <a href="#contact" className="block group transition duration-200">
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
              </a>
            </li>
          </ul>

          <div className="flex justify-between items-center mt-4 px-4">
            <CVButton />
            <ThemeSwitch />
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
