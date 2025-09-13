"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    degree: "Integrated M.Sc. (IT & CA)",
    institution: "K. S. School of Business Management",
    location: "Ahmedabad",
    duration: "2022 – 2027",
    grade: "Completed B.Sc. (IT & CA) – GPA: 3.99 / 5",
    current: true,
  },
  {
    degree: "12th Commerce",
    institution: "Ultra Vision School",
    location: "Surendranagar",
    duration: "2022",
    grade: "93.14%",
    current: false,
  },
  {
    degree: "10th Standard",
    institution: "Ultra Vision School",
    location: "Surendranagar",
    duration: "2020",
    grade: "83%",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div
                    className={`absolute left-6 w-4 h-4 rounded-full ${
                      edu.current ? "bg-blue-600 animate-pulse" : "bg-gray-400"
                    }`}
                  ></div>

                  <div className="ml-16 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {edu.institution}, {edu.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        {edu.grade}
                      </span>
                      {edu.current && (
                        <span className="inline-block ml-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
