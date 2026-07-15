"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

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
    <section
      id="education"
      className="relative overflow-hidden bg-transparent py-10"
    >
      {/* Background layer: grid + radial glow — matches Hero */}
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

        <div className="absolute left-1/2 top-0 h-[380px] w-[820px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-56 w-56 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-5 max-w-xl text-center"
        >
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-sm">
            <FaGraduationCap className="h-3.5 w-3.5" />
            Academic Journey
          </div>

          <h2 className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Education &amp; Learning
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-balance text-sm leading-relaxed text-slate-400 md:text-base">
            My academic foundation in Information Technology, software
            engineering and continuous technical learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px overflow-hidden md:left-8">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-500/60 to-slate-600 opacity-80"
            />
          </div>

          <div className="space-y-5">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 -translate-x-1/2 md:left-8">
                  {edu.current ? (
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                    </span>
                  ) : (
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600 ring-4 ring-[#0F172A]" />
                    </span>
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative ml-14 w-full rounded-2xl md:ml-20"
                >
                  <div
                    className={`relative rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 group-hover:shadow-xl md:p-5 ${
                      edu.current
                        ? "border-blue-500/30 bg-slate-800/40 shadow-lg shadow-blue-500/5 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10"
                        : "border-slate-700/50 bg-slate-800/40 group-hover:border-slate-600/60"
                    }`}
                  >
                    <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            edu.current
                              ? "bg-blue-500 shadow-md shadow-blue-500/25"
                              : "bg-slate-700/60"
                          }`}
                        >
                          <FaGraduationCap
                            className={`text-lg ${
                              edu.current ? "text-white" : "text-slate-400"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                            {edu.degree}
                          </h3>
                          <p className="mt-1 flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
                            <span>{edu.institution}</span>
                            <span className="text-slate-600">•</span>
                            <span className="inline-flex items-center gap-1">
                              <FaMapMarkerAlt className="h-3 w-3 text-blue-400/70" />
                              {edu.location}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300">
                        <FaCalendarAlt className="h-3 w-3 text-slate-500" />
                        {edu.duration}
                      </div>
                    </div>

                    <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-slate-700/50 px-3 py-1 text-xs font-medium text-slate-300">
                        {edu.grade}
                      </span>
                      {edu.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white shadow-sm shadow-blue-500/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                          </span>
                          Currently Pursuing
                        </span>
                      )}
                      {!edu.current && (
                        <span className="inline-flex items-center rounded-full bg-slate-700/40 px-3 py-1 text-xs font-medium text-slate-400">
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Academic highlights — only for the integrated program */}
                    {edu.current && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Expected Post Graduation 2027"].map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                          >
                            <span className="text-blue-400">✔</span>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
