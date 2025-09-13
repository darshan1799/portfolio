"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Darshan Sutariya
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aspiring Full-Stack Developer | Passionate About Building Scalable
            Web Solutions
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://github.com/darshan1799"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/darshan-sutariya-10a9382b6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </Link>

            <Link
              href="mailto:darshan.k.sutariya@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <FaEnvelope className="text-xl" />
              <span>Email</span>
            </Link>

            <Link
              href="tel:+919313444195"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              <FaPhone className="text-xl" />
              <span>+91 9313444195</span>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#about"
              className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
