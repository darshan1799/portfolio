"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-16"
    >
      {/* ---------- Background layers (matches Hero) ---------- */}
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

      <div className="relative mx-auto max-w-5xl px-6">
        {/* ---------- Section header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Let&apos;s Connect
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interested in working together?
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            I&apos;m actively looking for Software Engineer Internships and Full
            Stack opportunities. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {/* Info card */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <FaMapMarkerAlt className="text-xs" />
                </span>
                <p className="text-sm font-medium text-slate-200">
                  Ahmedabad, Gujarat
                </p>
              </div>

              <div className="my-4 h-px bg-slate-700/50" />

              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500">availability</span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                  </span>
                  open to internships
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-500">response_time</span>
                <span className="text-slate-300">~24 hours</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Software Engineer", "Full Stack", "Backend"].map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Social row */}
            <div className="grid grid-cols-5 gap-3">
              {[
                {
                  href: "mailto:darshan.k.sutariya@gmail.com",
                  icon: FaEnvelope,
                  label: "Email",
                  onClick: undefined,
                },
                {
                  href: "tel:+919313444195",
                  icon: FaPhone,
                  label: "Phone",
                  onClick: handlePhoneClick,
                },
                {
                  href: "https://github.com/darshan1799",
                  icon: FaGithub,
                  label: "GitHub",
                  onClick: undefined,
                },
                {
                  href: "https://linkedin.com/in/darshan-sutariya-10a9382b6",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  onClick: undefined,
                },
                {
                  href: "https://leetcode.com/u/cAibDenhxH/",
                  label: "LeetCode",
                  icon: SiLeetcode,
                  onClick: undefined,
                },
              ].map(({ href, icon: Icon, label, onClick }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={onClick}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  title={label}
                  className="group flex flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-700/50 bg-slate-900/40 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/10"
                >
                  <Icon className="text-base text-slate-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                  <span className="text-[10px] text-slate-500">{label}</span>
                </Link>
              ))}
            </div>

            {/* Quick note */}
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-slate-300">
                <span className="font-semibold text-white">
                  Let&apos;s build something amazing —{" "}
                </span>
                I&apos;d love to hear from you.
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN — FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 shadow-sm backdrop-blur-xl sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full rounded-lg border border-slate-700/50 bg-slate-800/40 px-4 pb-2 pt-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                  />
                  <label
                    htmlFor="name"
                    className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-slate-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-400"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full rounded-lg border border-slate-700/50 bg-slate-800/40 px-4 pb-2 pt-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                  />
                  <label
                    htmlFor="email"
                    className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-slate-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder=" "
                    className="peer w-full resize-none rounded-lg border border-slate-700/50 bg-slate-800/40 px-4 pb-2 pt-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-500 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                  />
                  <label
                    htmlFor="message"
                    className="pointer-events-none absolute left-4 top-1.5 text-xs font-medium text-slate-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-400"
                  >
                    Message
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 text-sm font-medium text-white shadow-md transition-shadow duration-300 ${
                    isSubmitting
                      ? "cursor-not-allowed bg-slate-700"
                      : "bg-blue-500 hover:shadow-blue-500/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" />
                      Send Message
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
