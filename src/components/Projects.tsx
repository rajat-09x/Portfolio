'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ACCENT = '#0066A1';

export default function Projects() {
  const [visible, setVisible] = useState(3);

  const projects = [
    {
      id: 1,
      title: 'Flowify',
      description: 'Flowify is a web app that transforms plain text or documents into interactive, AI-refined diagrams across multiple formats.',
      technologies: ['React', 'TypeScript', '.NET 8', 'Azure', 'Azure Open AI', 'Github Actions CI/CD'],
      image: '/images/flow-icon.png',
      link: 'https://happy-meadow-05f928410.1.azurestaticapps.net',
      github: 'https://github.com/rajat-09x/Flow',
      status: 'live',
    },
    {
      id: 2,
      title: 'SE-WavNet Model for ASR: Feature Learning and Analysis',
      description: 'Implemented SE network integration into Wav2Vec2.0 for speech recognition, with feature analysis using MFCC distance and WER.',
      technologies: ['Python', 'PyTorch', 'Deep Learning', 'Machine Learning', 'Speech Recognition', 'SE Networks'],
      image: '/images/SEWav2vec.png',
      github: 'https://github.com/rajat-09x/Se-WaveNet',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Database Design for Advanced Pharmacy Management',
      description: 'Designed and modeled a normalized relational database supporting online consultations and drone-based medicine delivery, improving efficiency and reducing redundancy.',
      technologies: ['Database Design', 'SQL', 'Relational Modeling', 'ER Diagrams', 'Normalization'],
      image: '/images/pharmacydb.png',
      github: 'https://github.com/rajat-09x/Advanced-Pharmacy-Management-System-Database-Design',
      status: 'completed',
    }
  ];

  const canLoadMore = visible < projects.length;
  const showMore = () => setVisible(v => Math.min(v + 3, projects.length));

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
    }),
    []
  );

  const item = useMemo(
    () => ({
      hidden: { opacity: 0, y: 18, scale: 0.98 },
      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
    }),
    []
  );

  const chipTint = (status?: string) =>
    status === 'live'
      ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:border-emerald-400/20'
      : status === 'wip'
      ? 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:border-amber-400/20'
      : 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-white/5 dark:text-slate-200 dark:border-white/10';

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      {/* Minimalist dividers (top & bottom) */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent dark:via-white/20" />
      {/* <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent dark:via-white/15" /> */}

      {/* Soft accent glow */}
      {/* <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full blur-3xl opacity-25 transform-gpu"
          style={{ background: `radial-gradient(60% 60% at 50% 40%, ${ACCENT}, transparent 70%)` }}
        />
      </div>  */}

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <h2 id="projects-title" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My <span style={{ color: ACCENT }}>Projects</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Things I’ve built to solve real problems and craft delightful experiences.
          </p>
          <div className="mt-6 flex justify-center">
            <span
              className="h-1 w-28 rounded-full"
              style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
            />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.slice(0, visible).map((p, idx) => (
            <motion.article
              key={p.id}
              variants={item}
              className="group relative overflow-hidden rounded-2xl
                         bg-white/70 dark:bg-white/5
                         border border-slate-200/60 dark:border-white/10
                         shadow-sm hover:shadow-md
                         backdrop-blur transition-all duration-300 hover:-translate-y-0.5
                         focus-within:ring-2 focus-within:ring-offset-0"
              style={{ ['--tw-ring-color' as any]: ACCENT }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  priority={idx < 2}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='18' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='18' fill='%23e5e7eb'/%3E%3C/svg%3E"
                />

                {/* Hover veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    {p.link && p.link !== '#' ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/30 text-white/90 hover:text-white hover:border-white transition"
                        aria-label={`Open ${p.title}`}
                      >
                        <FiExternalLink className="h-5 w-5" />
                      </a>
                    ) : (
                      <span />
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/30 text-white/90 hover:text-white hover:border-white transition"
                        aria-label={`View ${p.title} on GitHub`}
                      >
                        <FiGithub className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  {/* {p.status && (
                    <span
                      className={`hidden sm:inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium border ${chipTint(
                        p.status
                      )}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                      {p.status}
                    </span>
                  )} */}
                </div>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium
                                 bg-slate-100 text-slate-700 border border-slate-200
                                 dark:bg-white/5 dark:text-slate-200 dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between">
                  {p.link && p.link !== '#' ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-white hover:opacity-80"
                    >
                      View project <FiExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500 dark:text-slate-400"></span>
                  )}

                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 dark:text-white hover:opacity-80"
                    >
                      Code <FiGithub className="h-4 w-4" />
                    </a>
                  ) : (
                    <span />
                  )}
                </div>

                {/* Make whole card focusable while preserving links */}
                {p.link && p.link !== '#' ? (
                  <Link
                    href={p.link}
                    aria-label={`Open ${p.title}`}
                    className="absolute inset-0 ring-0 focus:outline-none focus-visible:ring-2"
                    tabIndex={-1}
                    style={{ ['--tw-ring-color' as any]: ACCENT }}
                  />
                ) : null}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* {canLoadMore && (
          <div className="mt-12 text-center">
            <button
              onClick={showMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white shadow-sm hover:shadow-md transition"
              style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
            >
              Load more
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}
