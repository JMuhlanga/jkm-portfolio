'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import profilePic from '../images/joseImage.jpg';

const PHRASES = [
  'I build scalable systems.',
  'I design microservices.',
  'I ship critical APIs.',
  'I bridge health & tech.',
];

const Hero = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];

    if (!deleting) {
      if (charIdx < phrase.length) {
        const t = setTimeout(() => setCharIdx(c => c + 1), 75);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => setCharIdx(c => c - 1), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % PHRASES.length);
      }
    }
  }, [charIdx, deleting, phraseIdx]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto
                 flex flex-col-reverse md:flex-row items-center justify-between
                 min-h-[90vh] gap-10"
    >
      {/* LEFT — TEXT */}
      <div className="flex-1 text-left">
        <p className="text-cyan-600 dark:text-cyan-400 font-mono mb-4 tracking-wide text-sm">
          <span className="opacity-50">&gt;_</span> Hi, my name is
        </p>

        <h1
          className="glitch text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
          data-text="José Kupeka Muhlanga."
        >
          José Kupeka Muhlanga.
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-6 min-h-[1.2em]">
          {PHRASES[phraseIdx].slice(0, charIdx)}
          <span className="text-cyan-500 animate-pulse">|</span>
        </h2>

        <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Full Stack Software Engineer with 3+ years of experience building scalable web platforms
          and distributed backend systems across the health, finance, media, and government sectors.
          Proven track record delivering mission-critical systems including payment gateways,
          tax compliance integrations, and cloud-deployed platforms supporting national-scale operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10
                       px-6 py-3 rounded-md font-medium transition-all"
          >
            Check out my work
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-md
                       font-medium transition-all shadow-lg shadow-cyan-900/20"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* RIGHT — IMAGE + decorative terminal */}
      <div className="flex-1 flex flex-col items-center md:items-end gap-6">
        <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg shadow-cyan-900/30">
          <Image
            src={profilePic}
            alt="Jose Kupeka Muhlanga"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Decorative terminal window */}
        <div className="hidden md:block w-64 font-mono text-xs rounded-lg border border-slate-200 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
            <span className="ml-2 text-slate-400 text-[10px] tracking-widest">bash</span>
          </div>
          <div className="p-3 space-y-1.5 text-[11px]">
            <p className="text-slate-500 dark:text-slate-400">
              <span className="text-cyan-500">~</span> <span className="text-green-500">$</span> ./deploy.sh --env prod
            </p>
            <p className="text-slate-400 dark:text-slate-500 pl-2">▸ Building containers...</p>
            <p className="text-green-500 dark:text-green-400"><span className="mr-1">✓</span>Health checks passed</p>
            <p className="text-green-500 dark:text-green-400"><span className="mr-1">✓</span>API gateway online</p>
            <p className="text-green-500 dark:text-green-400"><span className="mr-1">✓</span>3 microservices running</p>
            <p className="text-slate-500 dark:text-slate-400">
              <span className="text-cyan-500">~</span> <span className="text-green-500">$</span> <span className="animate-pulse">▋</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
