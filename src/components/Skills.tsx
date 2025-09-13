"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiJsonwebtokens,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skills = {
  "Front-End": [
    { name: "React.js", icon: FaReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  ],
  "Back-End": [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-600 dark:text-gray-400",
    },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-500" },
    {
      name: "NextAuth.js",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
    },
  ],
  Database: [{ name: "MongoDB", icon: SiMongodb, color: "text-green-600" }],
  Languages: [
    { name: "Java (Basic)", icon: FaJava, color: "text-red-600" },
    { name: "C", icon: TbBrandCpp, color: "text-blue-600" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-gray-800 dark:text-gray-200",
    },
    { name: "REST APIs", icon: SiExpress, color: "text-indigo-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {category}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <Icon className={`text-3xl ${skill.color}`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
