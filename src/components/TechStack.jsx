import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const TechStack = () => {
  const technologies = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ];

  return (
    <section className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center">
        My Tech Stack
      </h2>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
        Here are the technologies I'm proficient in. Hover or tap on each icon to learn more!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full max-w-[150px]"
          >
            <div className="text-3xl sm:text-4xl mb-2" aria-hidden="true">
              {tech.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

