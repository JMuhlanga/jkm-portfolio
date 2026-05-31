import { Phone, FileText, Server, Database, ShoppingCart, Globe, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DukaFlowPOS",
      desc: "A full-featured Point of Sale system built for small and medium retail businesses, supporting product management, sales tracking, and transaction reporting with an intuitive interface.",
      tags: ["React", "Node.js", "SQLite"],
      icon: <ShoppingCart size={24} />,
      github: "https://github.com/JMuhlanga/DukaFlowPOS",
      live: null,
    },
    {
      title: "NiaJasiri Website",
      desc: "Corporate website for NiaJasiri, built with a modern stack and optimised for content management, performance, and accessibility.",
      tags: ["Next.js", "React", "Node.js", "SQLite"],
      icon: <Globe size={24} />,
      github: null,
      live: "https://niajasiri.org/",
    },
    {
      title: "Mpesa Integration – CHAK HMIS",
      desc: "Developed a secure mobile payment module enabling real-time M-Pesa transactions for patient billing, implementing STK Push workflows and callback handling with seamless integration into existing hospital financial and clinical systems.",
      tags: ["Node.js", "Go", "PHP", "Daraja API"],
      icon: <Phone size={24} />,
      github: null,
      live: null,
    },
    {
      title: "eTIMS Integration",
      desc: "Implemented statutory eTIMS integration to support tax compliance through digital signature configuration, secure invoice submission, and real-time callback processing aligned with Kenya Revenue Authority requirements.",
      tags: ["Node.js", "Go", "PHP", "KRA API"],
      icon: <FileText size={24} />,
      github: null,
      live: null,
    },
    {
      title: "AfyaLink (SHA) Gateway",
      desc: "Designed and delivered an integration gateway connecting HMIS and SHA platforms, enabling automated invoice posting, real-time pre-authorisations, and eligibility verification through secure API orchestration.",
      tags: ["PHP", "JS", "Go", "OAuth2"],
      icon: <Server size={24} />,
      github: null,
      live: null,
    },
    {
      title: "Financial Transaction Gateway",
      desc: "Built a secure full-stack financial transaction system supporting peer-to-peer transfers, user authentication, and transaction reporting, ensuring data integrity and controlled access across payment workflows.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
      icon: <Database size={24} />,
      github: null,
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12">
        <span className="text-cyan-600 dark:text-cyan-400 mr-2">04.</span> Featured Projects
        <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-slate-800 p-8 rounded-lg transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/10 border border-slate-200 dark:border-transparent flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="text-cyan-600 dark:text-cyan-400 p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                {project.icon}
              </div>
              <div className="flex gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    aria-label="View source on GitHub"
                  >
                    <Github size={20} />
                  </a>
                ) : (
                  <span className="text-slate-300 dark:text-slate-700 cursor-default">
                    <Github size={20} />
                  </span>
                )}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    aria-label="Visit live site"
                  >
                    <ExternalLink size={20} />
                  </a>
                ) : (
                  <span className="text-slate-300 dark:text-slate-700 cursor-default">
                    <ExternalLink size={20} />
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-transparent px-2 py-1 rounded dark:p-0">
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
