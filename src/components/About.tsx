"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiUser, FiMail, FiMapPin, FiCalendar } from "react-icons/fi";

const ACCENT = "#0066A1";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-transparent overflow-hidden"
      aria-labelledby="about-title"
      style={{ ["--accent" as any]: ACCENT }}
    >
      {/* Soft radial glow only (no grid texture) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full blur-3xl opacity-40 transform-gpu will-change-transform"
          style={{ background: `radial-gradient(60% 60% at 50% 40%, ${ACCENT}, transparent 70%)` }}
        />
        {/* corner accents */}
        {/* <div
          className="absolute -bottom-10 -right-10 h-48 w-48 rounded-3xl opacity-20 blur-2xl"
          style={{ background: `linear-gradient(45deg, ${ACCENT}, #60a5fa)` }}
        />
        <div
          className="absolute -top-10 -left-10 h-40 w-40 rounded-3xl opacity-20 blur-2xl"
          style={{ background: `linear-gradient(45deg, #60a5fa, ${ACCENT})` }}
        /> */}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 id="about-title" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] to-sky-400/70">Me</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here you'll find more about me, what I do, and my current skill set.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-1 w-28 rounded-full" style={{ background: `linear-gradient(90deg, var(--accent), transparent)` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm backdrop-blur">
              <Image
                src="/images/About.jpg"
                alt="Portrait of Rajat Goyal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Get to know me!</h3>

            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I'm a <span className="font-semibold text-[var(--accent)]">Software Engineer</span> at Microsoft with a strong foundation in
              data structures, algorithms, and system design. I enjoy architecting scalable solutions, solving complex problems,
              and collaborating with teams to build impactful products.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
            Beyond core engineering, I’m passionate about Artificial Intelligence—particularly Generative AI, LLMs, and AI-driven architectures—exploring ways to blend emerging tech with practical, real-world applications. I actively experiment with AI-enhanced development workflows, retrieval-augmented generation (RAG) systems, and intelligent automation.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Outside work I’m into fitness and travel. I love documenting journeys and recently have been diving into generative AI—
              blending practical applications with emerging tech.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <InfoRow icon={<FiUser className="h-5 w-5" />} label="Name" value="Rajat Goyal" />
              <InfoRow icon={<FiMail className="h-5 w-5" />} label="Email" value="rajat.09x@gmail.com" href="mailto:rajat.09x@gmail.com" />
{/*               <InfoRow icon={<FiMapPin className="h-5 w-5" />} label="Location" value="India" /> */}
{/*               <InfoRow icon={<FiCalendar className="h-5 w-5" />} label="Status" value="Available for work" /> */}
            </div>

            {/* <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white shadow-sm hover:shadow-md transition-all"
              style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
            >
              Download CV <FiDownload className="h-4 w-4" />
            </a> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
        aria-hidden
      >
        {icon}
      </span>
      <div className="text-slate-700 dark:text-slate-200">
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        {href ? (
          <a href={href} className="font-medium" style={{ color: ACCENT }}>
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
