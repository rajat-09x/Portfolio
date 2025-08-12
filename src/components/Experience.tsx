'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const ACCENT = '#0066A1';

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setActiveTab(t => (t === 'experience' ? 'education' : 'experience'));
    }
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  // ✅ Only Microsoft experience
  const experiences = [
    {
      id: 1,
      company: 'Microsoft',
      companyLogo: '/icons/microsoft.svg',
      position: 'Software Engineer',
      location: 'Hyderabad, India',
      duration: 'June 2023 – Present',
      bullets: [
        'Led the scaling of Microsoft’s internal security scanner from 40k to 1.5M+ subscriptions, increasing scan throughput from 10k/hr to 300k/hr and enabling seamless multi-tenant coverage.',
        'Reduced Azure resource inventory fetch time from 2–3 hours to 30 minutes by migrating from ARM APIs to Azure Resource Graph (ARG), significantly improving performance and lowering operational costs.',
        'Designed and implemented a scalable centralized authorization system for next-gen Azure security scanner using a pub-sub model with Dapr, enabling seamless RBAC integration across multiple microservices.',
        'Implemented policy-based and data-driven RBAC in the current Azure tenant security scanner, powering secure access control and data isolation across 1.5M Azure subscriptions.',
        'Developed Secure Assist, an AI-powered RAG chatbot for Microsoft’s S360 system, integrating APIs and document search to deliver real-time, context-aware KPI insights and remediation steps, including natural language to KQL translation for security analysts.',
      ],
    },
    {
      id: 2,
      company: 'Microsoft',
      companyLogo: '/icons/microsoft.svg',
      position: 'Software Engineering Intern',
      location: 'Hyderabad, India',
      duration: 'May 2022 – Jul 2022',
      bullets: [
        'Developed a fully automated .NET application to replace PowerShell scripts for individual tasks, streamlining the SAW applications packaging process and significantly improving efficiency.',
        'Automated the manual app packaging workflow, reducing execution time from 5–8 hours to 10–15 minutes, resulting in a drastic increase in operational efficiency.',
      ],
    },
  ];

  // keep your education as-is or trim if you want
  const education = [
    {
      id: 1,
      institution: 'National Institute of Technology, Warangal',
      degree: 'B.Tech in Computer Science and Engineering',
      location: 'Telangana, India',
      duration: 'July 2019 – May 2023',
      desc: 'Graduated with a CGPA of 8.43/10.00.',
    },
    {
      id: 2,
      institution: 'Advance Senior Secondary School',
      degree: 'Senior Secondary (12th Grade)',
      location: 'Jaipur, India',
      duration: 'Completed in 2019',
      desc: 'Achieved 90% in the 12th standard.',
    },
    {
      id: 3,
      institution: 'Gandhi Jyoti Senior Secondary School',
      degree: 'Secondary School (10th Grade)',
      location: 'Bhusawar, India',
      duration: 'Completed in 2017',
      desc: 'Achieved 91% in the 10th standard.',
    },
  ];
  

  return (
    <section id="experience" className="relative py-24 bg-transparent overflow-hidden" aria-labelledby="exp-edu-title">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <h2 id="exp-edu-title" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & <span style={{ color: ACCENT }}>Education</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">My professional journey and educational background.</p>
          <div className="mt-6 flex justify-center">
            <span className="h-1 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
          </div>
        </div>

        {/* Tabs (you can keep both, even if experience is just MS) */}
        <div className="flex justify-center mb-10">
          <div
            className="relative inline-grid grid-cols-2 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow-sm"
            role="tablist"
            aria-label="Experience and Education tabs"
          >
            <span
              aria-hidden
              className="absolute inset-y-1 left-1 w-1/2 rounded-xl transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${activeTab === 'experience' ? '0%' : '100%'})`,
                background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)`,
                boxShadow: `0 8px 24px ${ACCENT}44, inset 0 0 0 1px ${ACCENT}55`,
              }}
            />
            <button
              role="tab"
              id="tab-experience"
              aria-controls="panel-experience"
              aria-selected={activeTab === 'experience'}
              onClick={() => setActiveTab('experience')}
              className={`relative z-10 px-5 py-2.5 rounded-2xl text-sm md:text-base font-semibold focus-visible:outline-none focus-visible:ring-2 ${
                activeTab === 'experience' ? 'text-white' : 'text-slate-700 dark:text-slate-200'
              }`}
              style={{ ['--ring-color' as any]: ACCENT }}
            >
              <span className="inline-flex items-center gap-2">
                <FiBriefcase className="h-4 w-4" aria-hidden />
                Work Experience
              </span>
            </button>
            <button
              role="tab"
              id="tab-education"
              aria-controls="panel-education"
              aria-selected={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
              className={`relative z-10 px-5 py-2.5 rounded-2xl text-sm md:text-base font-semibold focus-visible:outline-none focus-visible:ring-2 ${
                activeTab === 'education' ? 'text-white' : 'text-slate-700 dark:text-slate-200'
              }`}
              style={{ ['--ring-color' as any]: ACCENT }}
            >
              <span className="inline-flex items-center gap-2">
                <FiBook className="h-4 w-4" aria-hidden />
                Education
              </span>
            </button>
          </div>
        </div>

        {/* Panels */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' ? (
            <PanelList key="exp" items={experiences} type="experience" container={container} item={item} accent={ACCENT} />
          ) : (
            <PanelList key="edu" items={education} type="education" container={container} item={item} accent={ACCENT} />
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- subcomponents ---------- */

function PanelList({
  items,
  type,
  container,
  item,
  accent,
}: {
  items: any[];
  type: 'experience' | 'education';
  container: Variants;
  item: Variants;
  accent: string;
}) {
  const pillLabel = type === 'experience' ? 'company' : 'institution';

  return (
    <motion.ul role="tabpanel" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
      {items.map((entry: any) => (
        <motion.li key={entry.id} variants={item} className="group relative">
          <div
            className="relative rounded-2xl p-6 sm:p-7 bg-white/80 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-md backdrop-blur transition-all hover:-translate-y-0.5"
            style={{ boxShadow: `inset 0 0 0 1px ${accent}14` }}
          >
            <div aria-hidden className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: `0 0 0 1px ${accent}22 inset, 0 0 24px ${accent}22` }} />

            <HeaderRow type={type} entry={entry} />

            {/* Company/Institution pill with optional logo */}
                        <p
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold text-white shadow-sm mb-4"
              style={{ background: `linear-gradient(90deg, ${accent}, ${accent}CC)` }}
            >
              {type === 'experience' && entry[pillLabel] === 'Microsoft' && (
                <img
                  src="/images/ms-logo.jpg" // in /public/images
                  alt="Microsoft logo"
                  className="w-4 h-4 object-contain"
                />
              )}

              {type === 'education' && entry[pillLabel] === 'National Institute of Technology, Warangal' && (
                <img
                  src="/images/nitw-logo.png" // in /public/images
                  alt="NIT Warangal logo"
                  className="w-4 h-4 object-contain"
                />
              )}

              {entry[pillLabel]}
            </p>


            {type === 'experience' ? (
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                {entry.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 translate-y-[2px] text-slate-400">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-700 dark:text-slate-300">{entry.desc}</p>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function HeaderRow({ type, entry }: { type: 'experience' | 'education'; entry: any }) {
  const title = type === 'experience' ? entry.position : entry.degree;
  const duration = entry.duration;

  return (
    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        {entry.location && <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{entry.location}</p>}
      </div>
      <span className="text-xs md:text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 dark:bg-white/10 dark:text-slate-200 dark:border-white/10">
        {duration}
      </span>
    </div>
  );
}
