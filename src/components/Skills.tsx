'use client';

import { motion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaSitemap, FaLock,
  FaProjectDiagram,
} from 'react-icons/fa';
import { RiFlowChart } from 'react-icons/ri';
import { SiTypescript, SiTailwindcss, SiDotnet, SiOpenai } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const ACCENT = '#0066A1';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const skills = [
    // Frontend
    { name: 'React', icon: <FaReact size={16} className="text-sky-500" /> },
    { name: 'TypeScript', icon: <SiTypescript size={16} className="text-blue-600" /> },

    // Backend / Arch / Security
    { name: '.NET APIs', icon: <SiDotnet size={16} className="text-purple-600" /> },
    { name: 'Microservices Architecture', icon: <FaSitemap size={16} className="text-pink-500" /> },
    { name: 'Security', icon: <FaLock size={16} className="text-red-500" /> },

    // Cloud
    { name: 'System Design', icon: <FaSitemap size={16} className="text-indigo-500" /> },
    { name: 'Azure', icon: <VscAzure size={16} className="text-blue-500" /> },
    { name: 'Docker', icon: <FaDocker size={16} className="text-sky-600" /> },
    { name: 'Git', icon: <FaGitAlt size={16} className="text-orange-600" /> },
    { name: 'Data Structures', icon: <FaProjectDiagram size={16} className="text-green-500" /> },
    { name: 'Algorithms', icon: <RiFlowChart size={16} className="text-emerald-600" /> },

    // AI / ML
    { name: 'Gen AI', icon: <SiOpenai size={16} className="text-indigo-500" /> },
    { name: 'LLMs', icon: <SiOpenai size={16} className="text-emerald-600" /> },
    { name: 'MCP', icon: <SiOpenai size={16} className="text-amber-500" /> },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative py-20 bg-transparent overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="skills-title"
            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            My <span style={{ color: ACCENT }}>Skills</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Frontend, backend, cloud, and AI/ML—combined into a lean, real-world toolkit.
          </p>
          <div className="mt-6 flex justify-center">
            <span
              className="h-1 w-28 rounded-full"
              style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
            />
          </div>
        </div>

        {/* Unified skills chips */}
        <motion.ul
          role="list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((s) => (
            <motion.li
              key={s.name}
              variants={item}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg
                         bg-white/90 dark:bg-white/5
                         border border-slate-200/60 dark:border-white/10
                         text-slate-700 dark:text-slate-200
                         text-sm font-medium shadow-sm hover:shadow-md
                         transition backdrop-blur-sm"
            >
              {s.icon}
              <span>{s.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
