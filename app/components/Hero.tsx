'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../images/joseImage.jpg'; // adjust path to your image

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <p className="text-cyan-400 font-medium mb-4 tracking-wide">Hi, my name is</p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          José Kupeka Muhlanga.
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          I build scalable systems.
        </h2>

        <p className="max-w-xl text-lg text-slate-400 mb-8 leading-relaxed">
          I'm a Full Stack Software Engineer & DevOps Specialist based in Nairobi, Kenya.
          I specialize in designing secure APIs, deploying containerized microservices,
          and building modern frontend applications for health, finance, and government sectors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 
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

      {/* RIGHT — IMAGE */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg shadow-cyan-900/30">
          <Image
            src={profilePic}
            alt="Jose Kupeka Muhlanga"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
