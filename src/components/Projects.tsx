"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
  {
    title: "AgriERP",
    description:
      "An integrated ERP solution for small farmers in India using MERN stack. Includes modules for farm management, crop planning, sales, and inventory tracking.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "http://agrierp.farm/",
    highlights: [
      "Complete farm management system",
      "Crop planning and tracking",
      "Sales and inventory management",
      "User authentication with JWT",
    ],
  },
  {
    title: "Google Auto Review Reply Bot",
    description:
      "A Next.js application that automates replying to Google reviews with AI-powered responses, saving time and ensuring consistent customer engagement.",
    tech: ["Next.js", "TypeScript", "AI Integration", "REST API"],
    highlights: [
      "Automated review response generation",
      "AI-powered sentiment analysis",
      "Customizable response templates",
      "Real-time Google Reviews integration",
    ],
  },
  {
    title: "Coastal Threat Alert System",
    description:
      "Developed during HackOut 25 at DA-IICT. A platform enabling government authorities to send real-time alerts for coastal threats to specific regions.",
    tech: ["React.js", "Node.js", "WebSockets", "Maps API"],
    github: "https://github.com/darshan1799/hackathon-project",
    highlights: [
      "Real-time alert broadcasting",
      "Region-specific targeting",
      "Government authority dashboard",
      "Emergency notification system",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                      </Link>
                    )}

                    {project.live && (
                      <Link
                        href={project.live}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
