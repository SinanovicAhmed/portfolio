import React from "react";
import { Sun } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import CVButton from "../CVButton";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="z-40 sticky top-0 w-full bg-white dark:bg-gray-950 shadow-sm">
      <div className="relative h-16 flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
        <h2 className="font-logoFont font-black text-gray-800 dark:text-gray-100 text-xl">sinanovic</h2>

        <MobileNavbar />

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6 font-medium text-gray-600 dark:text-gray-100">
              <li>
                <a href="#about" className="group transition duration-200 text-center">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600 dark:bg-gray-100"></span>
                </a>
              </li>
              <li>
                <a href="#skills" className="group transition duration-200">
                  My skills
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600 dark:bg-gray-100"></span>
                </a>
              </li>
              <li>
                <a href="#projects" className="group transition duration-200">
                  Projects
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600 dark:bg-gray-100"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group transition duration-200">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600 dark:bg-gray-100"></span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="h-6 w-[0.15rem] bg-gray-100 dark:bg-gray-800"></div>

          <div className="flex gap-4 items-center">
            <ThemeSwitch />
            <CVButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
