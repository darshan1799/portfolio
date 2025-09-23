"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center 
             bg-gradient-to-b from-gray-50 to-white 
             dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m currently pursuing an Integrated M.Sc. in Computer
              Applications & Information Technology at K. S. School of Business
              Management, Ahmedabad. With a GPA of 3.99/5 and a strong
              foundation in web development, I aim to gain practical experience
              and contribute to impactful projects.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Skilled in React.js, Next.js, Node.js, MongoDB, and MERN stack
              development, I&apos;m passionate about creating scalable web
              solutions that solve real-world problems. My journey in tech has
              been driven by curiosity and a desire to build applications that
              make a difference.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  3.99
                </div>
                <div className="text-gray-600 dark:text-gray-400">GPA</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  3+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  4+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
