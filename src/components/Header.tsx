'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const ACCENT = '#0066A1';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // optional: lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80
        border-b border-slate-200/70 shadow-sm
        ${scrolled ? 'py-3' : 'py-5'}
      `}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-slate-900">
          Rajat Goyal<span style={{ color: ACCENT }}>.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="
                    relative font-medium text-slate-800 hover:text-slate-900 transition-colors
                  "
                >
                  {item.name}
                  <span
                    className="absolute left-0 right-0 -bottom-1 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    style={{ background: ACCENT }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile trigger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile"
            className="md:hidden bg-white/98 backdrop-blur border-b border-slate-200/70"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <ul className="flex flex-col py-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-slate-800 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
