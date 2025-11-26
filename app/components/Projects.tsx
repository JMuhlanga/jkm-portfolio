import React from 'react';
import { Phone, FileText, Server, Database, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mpesa Integration – CHAK HMIS",
      desc: "Secure mobile payment module enabling real-time transactions for patient billing with STK Push.",
      tags: ["Node.js", "Go", "PHP", "Daraja API"],
      icon: <Phone size={24} />
    },
    {
      title: "eTIMS Integration",
      desc: "Tax compliance system featuring digital signatures, invoice submission, and callback processing.",
      tags: ["Node.js", "Go", "PHP", "KRA API"],
      icon: <FileText size={24} />
    },
    {
      title: "AfyaLink (SHA) Gateway",
      desc: "Integration gateway connecting HMIS and SHA platforms for automated invoicing and eligibility.",
      tags: ["PHP", "JS", "Go", "OAuth2"],
      icon: <Server size={24} />
    },
    {
      title: "Financial Transaction Gateway",
      desc: "Full-stack transaction system for P2P transfers and user auth.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
      icon: <Database size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-12">
        <span className="text-cyan-400 mr-2">04.</span> Featured Projects
        <span className="hidden md:block h-px bg-slate-700 flex-grow ml-4"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group bg-slate-800 p-8 rounded-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/10">
            <div className="flex justify-between items-start mb-6">
              <div className="text-cyan-400 p-2 bg-slate-700/50 rounded-lg">
                {project.icon}
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;