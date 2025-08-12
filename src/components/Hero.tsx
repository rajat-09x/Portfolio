// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, useReducedMotion } from 'framer-motion';
// import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

// const ACCENT = '#0066A1';

// const Hero = () => {
//   const prefersReducedMotion = useReducedMotion();

//   return (
//     <section
//       className="
//         relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden
//         bg-gradient-to-b from-white via-slate-50 to-slate-100
//         dark:from-slate-950 dark:via-slate-900 dark:to-slate-900
//       "
//       style={{ ['--accent' as any]: `var(--accent, ${ACCENT})` }}
//       aria-label="Intro"
//     >
//       {/* Decorative background */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(65%_50%_at_50%_0%,#000_40%,transparent_80%)]"
//       >
//         <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(100,116,139,0.08)_25px),linear-gradient(90deg,transparent_24px,rgba(100,116,139,0.08)_25px)] bg-[size:26px_26px]" />
//         <div
//           className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[52rem] rounded-full blur-3xl opacity-40"
//           style={{ background: 'radial-gradient(60% 60% at 50% 40%, var(--accent), transparent 70%)' }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left: text */}
//           <motion.div
//             className="md:w-1/2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.p
//               className="text-sm font-medium mb-3 text-slate-600 dark:text-slate-300"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.15 }}
//             >
//               Hello, I&apos;m
//             </motion.p>

//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-white"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.25 }}
//             >
//               Rajat Goyal
//               <span
//                 className="block font-bold mt-2 text-2xl lg:text-3xl bg-clip-text text-transparent
//                 bg-gradient-to-r from-[#0066A1] to-[#0066A1]"
//               >
//                 Software Engineer
//               </span>
//             </motion.h1>

//             <motion.p
//               className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.35 }}
//             >
//               I&apos;m a full‑stack developer focused on elegant, scalable systems with clean design and strong performance—building thoughtful, efficient products that make an impact.
//             </motion.p>

//             <motion.div
//               className="flex flex-wrap gap-4 mb-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.45 }}
//             >
//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white
//                   bg-[var(--accent)] hover:brightness-110 transition-all duration-300 text-sm shadow-sm"
//                 aria-label="Contact me"
//               >
//                 Contact Me <FiArrowRight />
//               </Link>

//               <Link
//                 href="#projects"
//                 className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-slate-100
//                   bg-slate-900 hover:bg-slate-800 transition-all duration-300 text-sm"
//                 aria-label="View my work"
//               >
//                 View My Work
//               </Link>
//             </motion.div>

//             <motion.div
//               className="flex items-center gap-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.55 }}
//             >
//               <a
//                 href="https://github.com/rajat09x"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
//                 aria-label="GitHub"
//               >
//                 <FiGithub size={22} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/rajat09x"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <FiLinkedin size={22} />
//               </a>
//               <a
//                 href="https://twitter.com/rajat09x"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
//                 aria-label="Twitter / X"
//               >
//                 <FiTwitter size={22} />
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: portrait */}
//           <motion.div
//             className="md:w-1/2 flex justify-center"
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <div className="relative w-72 h-72 md:w-96 md:h-96">
//               <div
//                 aria-hidden
//                 className="absolute inset-0 rounded-full opacity-25 blur-2xl"
//                 style={{ background: 'linear-gradient(45deg, var(--accent), #60a5fa)' }}
//               />
//               <motion.div
//                 className="relative w-full h-full rounded-full border-4 border-white/70 dark:border-white/10 shadow-xl overflow-hidden"
//                 animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
//                 transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 6, ease: 'easeInOut' }}
//               >
//                 <Image
//                   src="/images/profile.jpg"
//                   alt="Portrait of Rajat Goyal"
//                   fill
//                   className="object-cover rounded-full"
//                   priority
//                   sizes="(max-width: 768px) 18rem, 24rem"
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.button
//         type="button"
//         aria-label="Scroll to About section"
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         onClick={() => {
//           const nextSection = document.querySelector<HTMLElement>('#about');
//           nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }}
//       >
//         <div className="flex flex-col items-center">
//           <span className="text-slate-500 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
//           <motion.div
//             className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1"
//             animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
//             transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 1.5 }}
//           >
//             <div className="w-1.5 h-1.5 bg-slate-500 dark:bg-slate-300 rounded-full" />
//           </motion.div>
//         </div>
//       </motion.button>
//     </section>
//   );
// };

// export default Hero;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiPlay, FiInstagram } from 'react-icons/fi';

const ACCENT = '#0066A1';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="
        relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden
        bg-gradient-to-b from-white via-slate-50 to-slate-100
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-900
      "
      style={{ ['--accent' as any]: `var(--accent, ${ACCENT})` }}
      aria-label="Intro"
    >
      {/* Clean background: soft accent glow (no grid) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[52rem] rounded-full blur-3xl opacity-35"
          style={{ background: 'radial-gradient(60% 60% at 50% 40%, var(--accent), transparent 70%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.p
              className="text-sm font-medium mb-3 text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Hello, I&apos;m
            </motion.p> */}

            {/* <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Rajat Goyal
              <span
                className="block font mt-2 text-2xl lg:text-3xl bg-clip-text text-transparent
                bg-gradient-to-r from-[#0066A1] to-[#0066A1]"
              >
                Software Engineer
              </span>
            </motion.h2> */}
            <motion.p
              className="text-base md:text-lg font-medium mb-3 text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 leading-tight text-slate-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              Rajat Goyal
              <span
                className="block mt-2 text-2xl lg:text-3xl bg-clip-text text-transparent
                bg-gradient-to-r from-[#0066A1] to-[#0066A1] font-bold"
              >
                Software Engineer
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              I build scalable, elegant systems with clean design and strong performance.
              Lately, I&apos;ve been blending <span className="font-semibold text-slate-900 dark:text-white">Generative AI</span>,{' '}
              <span className="font-semibold text-slate-900 dark:text-white">LLMs</span>, and AI-assisted workflows with
              practical product engineering to ship real impact.
            </motion.p>

            {/* CTAs — more visible */}
            <motion.div
              className="flex flex-wrap gap-3 mb-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Link
                href="#contact"
                className="
                  inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold
                  text-white shadow-md transition-all
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0
                "
                style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
                aria-label="Contact me"
              >
                Contact Me <FiArrowRight className="translate-x-[0.5px]" />
              </Link>

              <Link
                href="#projects"
                className="
                  inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold
                  text-slate-900 dark:text-white bg-white/90 dark:bg-white/5
                  border border-slate-200/70 dark:border-white/10
                  hover:bg-white dark:hover:bg-white/10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[--accent]
                  transition-all shadow-sm
                "
                aria-label="View my work"
              >
                <FiPlay className="opacity-80" />
                View My Work
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <a
                href="https://github.com/rajat09x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/rajat09x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href="https://instagram.com/_rg__200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-[var(--accent)] dark:text-slate-300 transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full opacity-25 blur-2xl"
                style={{ background: 'linear-gradient(45deg, var(--accent), #60a5fa)' }}
              />
              <motion.div
                className="relative w-full h-full rounded-full border-4 border-white/70 dark:border-white/10 shadow-xl overflow-hidden"
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={prefersReducedMotion ? {} : { repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/temp6.jpg"
                  alt="Portrait of Rajat Goyal"
                  fill
                  className="object-cover rounded-full"
                  priority
                  sizes="(max-width: 768px) 18rem, 24rem"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={() => {
          const nextSection = document.querySelector<HTMLElement>('#about');
          nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-slate-500 dark:text-slate-400 text-sm mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 rounded-full flex justify-center p-1 border-2"
            style={{ borderColor: 'color-mix(in srgb, var(--accent) 55%, transparent)' as any }}
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;
