"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaDocker,
} from "react-icons/fa";

import {
  SiAuth0,
  SiExpress,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpenapiinitiative,
  SiPandas,
  SiPostman,
  SiReacthookform,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import { RiShieldCheckLine } from "react-icons/ri";
import {
  Monitor,
  Server,
  Database as DatabaseIcon,
  Code2,
  Wrench,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: IconType;
}

interface Category {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Query", icon: SiReactquery },
      // { name: "React Hook Form", icon: SiReacthookform },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiOpenapiinitiative },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "NextAuth.js", icon: SiNextdotjs },
      { name: "Bcrypt", icon: SiAuth0 }, // or use a Lock icon
      { name: "Zod", icon: SiZod },
      { name: "Yup", icon: RiShieldCheckLine }, // no official icon
    ],
  },
  {
    title: "Database",
    icon: DatabaseIcon,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: SiMysql },
      { name: "Mongoose", icon: SiMongodb },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: FaPython },
      { name: "Java (Basic)", icon: FaJava },
    ],
  },
  {
    title: "Tools & Libraries",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: FaDocker },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-0 lg:min-h-screen lg:flex lg:items-center  bg-[#0F172A] overflow-hidden"
    >
      {/* Subtle grid pattern — matches Hero / Projects background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
        }}
      />
      {/* Ambient glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-5">
            Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Technologies and tools I use to build modern, scalable,
            production-ready web applications.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <CategoryIcon size={16} strokeWidth={2} />
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-gray-300 transition-all duration-300 hover:border-blue-500/40 hover:text-white hover:bg-blue-500/10"
                      >
                        <SkillIcon className="text-sm text-blue-400" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
