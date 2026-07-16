"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  status: "Ongoing" | "Completed";
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl: string;
  // Drop your screenshots into /public and update these paths.
  // Shown as a single carousel — arrows + dots, no matter how many images.
  images: { src: string; alt: string }[];
}

const projects: Project[] = [
  {
    id: "daval-jewels-cms",
    status: "Ongoing",
    title: "Daval Jewels CMS",
    tagline: "Jewellery Content Management Platform",
    description:
      "A full-stack CMS for a jewellery brand with a centralized admin dashboard for managing categories, products, media assets, and homepage visibility — built on Server Components and ISR for fast, production-ready performance.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Supabase"],
    features: [
      "Centralized admin dashboard for categories, products & media",
      "Configurable flags: Active, Featured, Latest, Best Seller",
      "Server Components + Incremental Static Regeneration (ISR)",
      "Supabase Storage for media asset management",
      "Homepage CMS customization (AI image generation planned)",
    ],
    liveUrl: "https://davaljewels.vercel.app",
    githubUrl: "https://github.com/darshan1799/davaljewels",
    images: [
      {
        src: "/images/project/d1.png",
        alt: "Daval Jewels — Product Management",
      },
      {
        src: "/images/project/d2.png",
        alt: "Daval Jewels — Product Management",
      },
      {
        src: "/images/project/d3.png",
        alt: "Daval Jewels — Product Management",
      },
      {
        src: "/images/project/d4.png",
        alt: "Daval Jewels — Product Management",
      },
      {
        src: "/images/project/d5.png",
        alt: "Daval Jewels — Product Management",
      },

      {
        src: "/images/project/d7.png",
        alt: "Daval Jewels — Product Management",
      },
      {
        src: "/images/project/d8.png",
        alt: "Daval Jewels — Product Management",
      },
    ],
  },
  {
    id: "reviewmate-ai",
    status: "Completed",
    title: "ReviewMate AI",
    tagline: "Automated Google Review Response System",
    description:
      "An AI-powered review management platform that helps businesses reply to Google reviews faster, using reusable templates, bulk responses, and a centralized dashboard tied to the Google Business Profile API.",
    tech: ["Next.js", "MongoDB", "OpenAI API", "Google Business Profile API"],
    features: [
      "AI-generated reply suggestions for customer reviews",
      "Reusable response templates & bulk replies",
      "Centralized review tracking dashboard",
      "Google Maps integration",
    ],
    githubUrl: "https://github.com/darshan1799/ReviewMate",
    images: [
      {
        src: "/images/project/r1.png",
        alt: "ReviewMate AI — Review Dashboard",
      },
      {
        src: "/images/project/r2.png",
        alt: "ReviewMate AI — AI Reply Generator",
      },
      {
        src: "/images/project/r3.png",
        alt: "ReviewMate AI — Templates",
      },
      {
        src: "/images/project/r4.png",
        alt: "ReviewMate AI — Analytics",
      },
      {
        src: "/images/project/r5.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r6.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r7.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r8.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r9.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r10.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r11.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r12.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r13.png",
        alt: "ReviewMate AI — Google Reviews",
      },
      {
        src: "/images/project/r14.png",
        alt: "ReviewMate AI — Google Reviews",
      },
    ],
  },
  {
    id: "agrierp",
    status: "Completed",
    title: "AgriERP",
    tagline: "Integrated ERP Solution for Small Farmers in India",
    description:
      "A full-stack ERP built for small farmers to manage operations, finances, and inventory, while tracking real-time weather and APMC market prices to support informed selling decisions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Real-time weather updates & APMC market price search",
      "Search by district, crop, or nearby APMC",
      "10-day price trend visualization",
      "Analytics dashboard for farm activity, finance & inventory",
    ],
    // liveUrl: "https://github.com/darshan1799/agrierp-demo",
    githubUrl: "https://github.com/darshan1799/agrierp-demo",
    images: [
      { src: "/images/project/a1.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a2.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a3.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a4.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a5.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a6.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a7.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a8.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a9.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a10.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a11.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a12.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a13.png", alt: "AgriERP — Dashboard" },
      { src: "/images/project/a14.png", alt: "AgriERP — Dashboard" },
    ],
  },
  {
    id: "rbac-system",
    status: "Completed",
    title: "Role-Based Access Control (RBAC) System",
    tagline: "Backend Authentication & Authorization System",
    description:
      "A secure backend auth system with access & refresh token architecture, dynamic role creation, and middleware-based authorization protecting REST APIs end to end.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "Zod"],
    features: [
      "Access & refresh token authentication architecture",
      "Dynamic role creation & CRUD permission management",
      "Middleware-based route authorization",
      "Request validation with Zod",
    ],
    liveUrl: "https://node-rbac-auth-system.vercel.app/api",
    githubUrl: "https://github.com/darshan1799/node-rbac-auth-system",
    images: [],
  },
];

function ProjectImage({
  images,
  activeIndex,
  setActiveIndex,
  onOpenLightbox,
}: {
  images: Project["images"];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  onOpenLightbox: () => void;
}) {
  const goTo = (i: number) =>
    setActiveIndex((i + images.length) % images.length);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-slate-700/50 bg-slate-900">
        <div className="text-center">
          <ImageIcon className="mx-auto h-12 w-12 text-slate-500" />
          <p className="mt-3 text-sm text-slate-400">
            No project screenshots available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950">
      <button
        type="button"
        onClick={onOpenLightbox}
        aria-label={`Open ${images[activeIndex].alt} full size`}
        className="absolute inset-0 h-full w-full cursor-zoom-in"
      >
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={95}
          className="object-contain"
        />
        {/* Hover hint that the image is clickable */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-200 group-hover:bg-slate-950/20 group-hover:opacity-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-white backdrop-blur">
            <Maximize2 className="h-4 w-4" />
          </span>
        </div>
      </button>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

      {images.length > 1 && (
        <>
          {/* Prev / next arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(activeIndex - 1);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/60 text-white opacity-0 backdrop-blur transition-opacity duration-200 hover:bg-slate-950/80 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(activeIndex + 1);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/60 text-white opacity-0 backdrop-blur transition-opacity duration-200 hover:bg-slate-950/80 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Counter */}
          <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] font-medium text-slate-200 backdrop-blur">
            {activeIndex + 1}/{images.length}
          </span>

          {/* Dot navigation — stays compact regardless of image count */}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/50 px-2 py-1 backdrop-blur">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                aria-label={`Show ${img.alt}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeIndex === i
                    ? "w-4 bg-blue-400"
                    : "w-1.5 bg-slate-500/70 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectImageLightbox({
  images,
  activeIndex,
  setActiveIndex,
  onClose,
}: {
  images: Project["images"];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  onClose: () => void;
}) {
  const goTo = (i: number) =>
    setActiveIndex((i + images.length) % images.length);

  // Escape to close, arrow keys to navigate, and lock page scroll while open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, images.length]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-sm sm:p-10 w-full"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white transition-colors duration-200 hover:bg-slate-700 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Image stage — padded overlay above gives the breathing room */}
      <motion.div
        key={images[activeIndex].src}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-full"
      >
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          sizes="100vw"
          quality={100}
          className="object-contain"
        />
      </motion.div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(activeIndex - 1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/80 text-white transition-colors duration-200 hover:bg-slate-700 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(activeIndex + 1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-800/80 text-white transition-colors duration-200 hover:bg-slate-700 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-800/80 px-2.5 py-1.5 sm:bottom-6"
          >
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${img.alt}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  activeIndex === i
                    ? "w-5 bg-blue-400"
                    : "w-1.5 bg-slate-500/70 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>,
    document.body,
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 p-4 shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-slate-600/60 sm:p-5 lg:p-6"
    >
      {/* Status badge */}
      <span
        className={`absolute right-4 top-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium sm:right-5  ${
          project.status === "Ongoing"
            ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
            : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
        }`}
      >
        {project.status === "Ongoing" ? (
          <Clock className="h-3 w-3" />
        ) : (
          <CheckCircle2 className="h-3 w-3" />
        )}
        {project.status}
      </span>

      <div
        className={`grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 py-4 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Screenshots */}
        <ProjectImage
          images={project.images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onOpenLightbox={() => setLightboxOpen(true)}
        />

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-blue-400">
            {project.tagline}
          </p>
          <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
            {project.title}
          </h3>

          <p className="mb-3 text-[13px] leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/50 bg-slate-800/50 px-2 py-0.5 text-[10px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="mb-4 space-y-1">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-[13px] text-slate-300"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2.5">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-3.5 py-2 text-[13px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-600 hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </Link>
            )}
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/40 px-3.5 py-2 text-[13px] font-medium text-slate-200 transition-all duration-300 hover:border-blue-500/40 hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <ProjectImageLightbox
            images={project.images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden  py-12">
      {/* Background layer: grid + radial glow (matches Hero) */}
      <div className="pointer-events-none absolute inset-0 bg-[#0F172A] ">
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
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <span className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Featured Work
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-slate-300">
            A selection of full-stack projects covering CMS platforms, AI
            tooling, ERP systems, and backend authentication architecture.
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
