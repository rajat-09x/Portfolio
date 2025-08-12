"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaMedal } from "react-icons/fa";
import {
  FiAward,
  FiCheckCircle,
  FiBookOpen,
  FiExternalLink,
  FiActivity,
  FiCamera,
  FiMusic,
  FiCode,
  FiCoffee,
  FiWind,
  FiHeart,
} from "react-icons/fi";
import { GiShuttlecock } from "react-icons/gi";
import { MdDirectionsBike, MdRunCircle, MdVolunteerActivism } from "react-icons/md";

// Keep in sync with other sections
const ACCENT = "#0066A1";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const item = { hidden: { opacity: 0, y: 10, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1 } };

/* =========================================================
   SECTION 1: Achievements & Hobbies (Personal)
   ========================================================= */
   export default function AchievementsAndHobbies() {
    const achievements = [
      {
        name: 'Institute Merit Scholarship (2020)',
        description: 'Awarded by NIT Warangal for academic excellence.',
        icon: <FaMedal size={18} className="text-yellow-500" />,
      },
    ];
  
    const hobbies = [
      { name: 'Badminton', icon: <GiShuttlecock size={18} className="text-pink-400" /> },
      { name: 'Cycling', icon: <MdDirectionsBike size={18} className="text-sky-500" /> },
      { name: 'Running', icon: <MdRunCircle size={18} className="text-orange-400" /> },
      { name: 'Coding Side Projects', icon: <FaLaptopCode size={18} className="text-green-500" /> },
      { name: 'Volunteering', icon: <MdVolunteerActivism size={18} className="text-red-500" /> },
    ];
  
    return (
      <section
        id="achievements-hobbies"
        aria-labelledby="achievements-hobbies-title"
        className="relative py-20 bg-transparent"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              id="achievements-hobbies-title"
              className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              Achievements &amp; <span style={{ color: ACCENT }}>Hobbies</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A mix of academic milestones and personal passions that keep me motivated.
            </p>
            <div className="mt-6 flex justify-center">
              <span
                className="h-1 w-28 rounded-full"
                style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
              />
            </div>
          </div>
  
          {/* Horizontal layout: Achievements | Divider | Hobbies */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
            {/* Achievements (left) */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center lg:text-left">
                Achievements
              </h3>
  
              <ul className="space-y-4">
                {achievements.map((a) => (
                  <motion.li
                    key={a.name}
                    variants={item}
                    className="group relative rounded-2xl p-5 bg-white/80 dark:bg-white/5
                               border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-md
                               backdrop-blur transition-all hover:-translate-y-0.5"
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: `0 0 0 1px ${ACCENT}22 inset, 0 0 24px ${ACCENT}22` }}
                    />
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow"
                        style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
                      >
                        {a.icon}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                          {a.name}
                        </h4>
                        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
  
            {/* Vertical divider (only on desktop) */}
            <div className="hidden lg:flex justify-center">
              <span className="w-px bg-gradient-to-b from-transparent via-slate-300/50 to-transparent dark:via-white/20" />
            </div>
  
            {/* Hobbies (right) */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6 text-center lg:text-left">
                Hobbies
              </h3>
  
              <ul className="flex flex-wrap gap-3">
                {hobbies.map((h) => (
                  <motion.li
                    key={h.name}
                    variants={item}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                               bg-white/90 dark:bg-white/5
                               border border-slate-200/60 dark:border-white/10
                               text-slate-700 dark:text-slate-200
                               text-sm font-medium shadow-sm hover:shadow-md
                               transition backdrop-blur-sm"
                  >
                    {h.icon}
                    <span>{h.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
  
          {/* Mobile divider between stacks */}
          <div className="lg:hidden mt-12">
            <span className="block h-px w-full bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-white/20" />
          </div>
        </div>
      </section>
    );
  }

/* =========================================================
   SECTION 2: Certifications & Courses (Professional)
   ========================================================= */
   export function CertificationsAndCourses() {
    const certifications = [
      {
        name: 'Introduction to Generative AI for Software Development',
        issuer: 'DeepLearning.AI',
        year: '2025',
        url: 'https://www.coursera.org/account/accomplishments/certificate/7S3OI3IEVFKC',
      },
      {
        name: 'Team Software Engineering with AI',
        issuer: 'DeepLearning.AI',
        year: '2025',
        url: 'https://www.coursera.org/account/accomplishments/certificate/YWE8P59G4TEZ',
      },
      {
        name: 'AI-Powered Software and System Design',
        issuer: 'DeepLearning.AI',
        year: '2025',
        url: 'https://www.coursera.org/account/accomplishments/certificate/K8X2FZRPAOTT',
      },
    ];
  
    return (
      <section id="certifications" aria-labelledby="certifications-title" className="relative py-24 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="certifications-title" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Certifications &amp; <span style={{ color: ACCENT }}>Courses</span>
            </h2>
          </div>
  
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((c, i) => (
              <motion.a
                key={i}
                variants={item}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl p-5 bg-white/80 dark:bg-white/5
                           border border-slate-200/70 dark:border-white/10
                           shadow-sm hover:shadow-md backdrop-blur transition-all hover:-translate-y-0.5"
                aria-label={`${c.name} — ${c.issuer} (${c.year})`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: `0 0 0 1px ${ACCENT}22 inset, 0 0 24px ${ACCENT}22` }}
                />
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow"
                    style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
                  >
                    <FiBookOpen className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
                      {c.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {c.issuer} • {c.year}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium" style={{ color: ACCENT }}>
                      View credential <FiExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

/* =========================================================
   Usage example in a page (optional):
   <AchievementsAndHobbies />
   <CertificationsAndCourses />
   ========================================================= */
