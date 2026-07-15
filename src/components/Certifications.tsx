"use client";

import { motion } from "framer-motion";
import { Award, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    year: "2024",
    link: "https://www.freecodecamp.org/certification/fcc4cf8491f-4f38-44b8-980f-d2156365fe3b/javascript-algorithms-and-data-structures",
    skills: ["Algorithms", "Data Structures", "JavaScript", "Problem Solving"],
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/0ef043091d26",
    skills: [
      "React.js",
      "Frontend Development",
      "Component Design",
      "State Management",
    ],
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    year: "2025",
    link: "https://www.hackerrank.com/certificates/bc09ac06b80b",
    skills: ["Java", "Object-Oriented Programming", "Basic Syntax"],
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-transparent py-16"
    >
      {/* Background layer: grid + radial glow (matches Hero) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
            <Sparkles className="h-3.5 w-3.5" />
            Professional Credentials
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications &amp; Technical Achievements
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-relaxed text-slate-300">
            Industry-recognized certifications demonstrating practical knowledge
            in frontend development, JavaScript, algorithms and software
            engineering.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group relative h-full rounded-2xl focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:ring-offset-2 focus-within:ring-offset-[#0F172A]"
            >
              {/* Card body */}
              <div className="relative flex h-full flex-col rounded-2xl border border-slate-700/50 bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/5">
                {/* Top area */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="rounded-full border border-slate-700/50 bg-slate-800/50 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                      {cert.year}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Verified
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 line-clamp-2 text-base font-semibold leading-snug text-white">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="mb-4 flex items-center gap-1.5 text-sm text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-400/70" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="mb-4 h-px w-full bg-slate-700/50" />

                {/* Skills */}
                <div className="mb-5 flex-1">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    Skills Covered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition-colors duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
