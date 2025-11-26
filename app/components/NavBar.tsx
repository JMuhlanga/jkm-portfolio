'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy
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
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-2xl font-bold text-cyan-400">JKM<span className="text-white">.</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item}
                </button>
              ))}
              <a 
                href="/documents/resume.pdf"
                download
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Resume
              </a>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', ...navLinks].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
              >
                {item}
              </button>
              
            ))}
              <a 
                href="/documents/resume.pdf"
                download
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-cyan-600 rounded-md"
              >
                Resume
              </a>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;