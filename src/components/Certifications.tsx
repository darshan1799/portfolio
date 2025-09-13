'use client'

import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "#",
    skills: ["Algorithms", "Data Structures", "JavaScript", "Problem Solving"]
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: "2025",
    link: "#",
    skills: ["React.js", "Frontend Development", "Component Design", "State Management"]
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    year: "2025",
    link: "#",
    skills: ["Java", "Object-Oriented Programming", "Basic Syntax"]
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <FaCertificate className="text-3xl text-blue-600 dark:text-blue-400" />
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </Link>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                    {cert.year}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}