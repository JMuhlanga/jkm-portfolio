'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',      num: '01' },
  { label: 'Skills',     num: '02' },
  { label: 'Experience', num: '03' },
  { label: 'Projects',   num: '04' },
  { label: 'Contact',    num: '05' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 dark:border-white/10 shadow-sm shadow-black/5 dark:shadow-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">JKM<span className="text-slate-900 dark:text-white">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.label.toLowerCase())}
                  className={`${
                    activeSection === item.label.toLowerCase()
                      ? 'text-cyan-500 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  } px-2 py-2 text-sm font-medium transition-colors`}
                >
                  <span className="text-cyan-500 dark:text-cyan-400 text-xs font-mono mr-1">{item.num}.</span>
                  {item.label}
                </button>
              ))}
              <a
                href="/documents/resume.pdf"
                download
                className="border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10 px-4 py-1.5 rounded text-sm font-medium transition-colors font-mono"
              >
                resume.pdf
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40 dark:border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[{ label: 'Home', num: '00' }, ...navLinks].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.label.toLowerCase())}
                className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <span className="text-cyan-500 dark:text-cyan-400 text-xs font-mono mr-2">{item.num}.</span>
                {item.label}
              </button>
            ))}
            <a
              href="/documents/resume.pdf"
              download
              className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-cyan-600 dark:text-cyan-400 border border-cyan-600 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10 font-mono mt-2"
            >
              resume.pdf
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
