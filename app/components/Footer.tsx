import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/JMuhlanga" className="hover:text-cyan-400"><Github size={20} /></a>
        <a href="https://linkedin.com/in/josekmuhlanga" className="hover:text-cyan-400"><Linkedin size={20} /></a>
      </div>
      <p>Designed & Built by José Kupeka Muhlanga</p>
      <p className="mt-2 text-xs">Based in Nairobi, Kenya</p>
    </footer>
  );
};

export default Footer;