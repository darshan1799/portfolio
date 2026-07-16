"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import Link from "next/link";

const highlights = [
  "MERN Stack",
  "Next.js",
  "TypeScript",
  "REST APIs",
  "MongoDB",
];

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const codeLines = [
  {
    indent: 0,
    content: (
      <>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-sky-300">developer</span>{" "}
        <span className="text-slate-400">=</span>{" "}
        <span className="text-slate-400">{"{"}</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-sky-300">name</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-emerald-400">&quot;Darshan Sutariya&quot;</span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-sky-300">role</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-emerald-400">
          &quot;Full Stack Developer&quot;
        </span>
        <span className="text-slate-400">,</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-sky-300">stack</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-slate-400">[</span>
        <span className="text-emerald-400">&quot;React&quot;</span>
        <span className="text-slate-400">,</span>{" "}
        <span className="text-emerald-400">&quot;Next.js&quot;</span>
        <span className="text-slate-400">,</span>{" "}
        <span className="text-emerald-400">&quot;Node&quot;</span>
        <span className="text-slate-400">],</span>
      </>
    ),
  },
  {
    indent: 1,
    content: (
      <>
        <span className="text-sky-300">available</span>
        <span className="text-slate-400">:</span>{" "}
        <span className="text-purple-400">true</span>
      </>
    ),
  },
  { indent: 0, content: <span className="text-slate-400">{"};"}</span> },
];

const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  if (!isMobile) {
    e.preventDefault();
    const message = encodeURIComponent(
      "Hi Darshan, I came across your portfolio. Could you please send me your resume?",
    );
    window.open(
      `https://wa.me/919313444195?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/darshan1799",
    label: "GitHub profile",
    icon: <FaGithub className="text-lg" />,
    onClick: undefined,
  },
  {
    href: "https://linkedin.com/in/darshan-sutariya-10a9382b6",
    label: "LinkedIn profile",
    icon: <FaLinkedin className="text-lg" />,
    onClick: undefined,
  },
  {
    href: "mailto:darshan.k.sutariya@gmail.com",
    label: "Send email",
    icon: <FaEnvelope className="text-lg" />,
    onClick: undefined,
  },
  {
    href: "tel:+919313444195",
    label: "Call phone number",
    icon: <FaPhone className="text-lg" />,
    onClick: handlePhoneClick,
  },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  const handleScrollToProjects = (section_name: string) => {
    document.getElementById(section_name)?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen overflow-hidden bg-[#0F172A] flex items-center pt-3 sm:pt-0"
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, #000 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#3B82F6]/20 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="text-center lg:text-left">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for Internship
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 text-sm font-medium uppercase tracking-widest text-[#64748B]"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            Darshan Sutariya
          </motion.h1>

          <motion.h2
            {...fadeUp(0.25)}
            className="mt-3 text-xl font-semibold text-[#3B82F6] sm:text-2xl"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            {...fadeUp(0.35)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg lg:mx-0"
          >
            I build scalable web applications using React, Next.js, Node.js,
            Express, MongoDB and TypeScript. I&apos;m currently pursuing an
            Integrated M.Sc. in IT and actively looking for Full Stack Developer
            internship opportunities.
          </motion.p>

          <motion.ul
            {...fadeUp(0.45)}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            aria-label="Core skills"
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/[0.08] bg-[#1E293B] px-3 py-1 text-xs font-medium text-[#94A3B8]"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Link
              href={"/"}
              onClick={() => handleScrollToProjects("projects")}
              className="group inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href="/resume/cv_darshan_sutariya.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.65)}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  onClick={link.onClick}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/5 text-[#94A3B8] transition-colors hover:border-[#3B82F6]/50 hover:text-[#3B82F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
                >
                  {link.icon}
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right column — code editor card */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mx-auto w-full max-w-md"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#1E293B]/90 shadow-2xl shadow-black/40 backdrop-blur-xl"
            role="img"
            aria-label="Code editor showing a summary of Darshan's developer profile"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-[#64748B]">
                developer.ts
              </span>
            </div>

            <div className="px-6 py-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  className="whitespace-pre"
                >
                  {line.content}
                </div>
              ))}
              <div className="flex items-center gap-1 pl-0 pt-1">
                <span
                  className={
                    shouldReduceMotion
                      ? "h-4 w-2 bg-[#3B82F6]/70"
                      : "h-4 w-2 animate-pulse bg-[#3B82F6]/70"
                  }
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute sm:block hidden bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="/"
          onClick={() => handleScrollToProjects("skills")}
          aria-label="Scroll to About section"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/5 text-[#94A3B8] transition-colors hover:text-[#3B82F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
        >
          <motion.span
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
