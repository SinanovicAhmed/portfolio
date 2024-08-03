import React from "react";
import { Sun } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import CVButton from "./CVButton";

const Header = () => {
  return (
    <header className="relative w-full bg-white">
      <div className="h-16 flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
        <h2 className="font-black text-gray-800 text-2xl">&lt;SA/&gt;</h2>

        <MobileNavbar />

        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6 font-medium text-gray-600">
              <li>
                <a href="#about" className="group transition duration-200">
                  About
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
                </a>
              </li>
              <li>
                <a href="#skills" className="group transition duration-200">
                  My skills
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
                </a>
              </li>
              <li>
                <a href="#projects" className="group transition duration-200">
                  Projects
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group transition duration-200">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-gray-600"></span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="h-6 w-[0.15rem] bg-gray-100"></div>

          <div className="flex gap-4 items-center">
            <Sun width={24} height={24} />
            <CVButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
