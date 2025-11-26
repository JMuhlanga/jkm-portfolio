import React from 'react';
import { Server, Code, Cloud, Terminal, Database } from 'lucide-react';

const Skills = () => {
  const skills = {
    languages: ['Java', 'PHP', 'Go', 'JavaScript', 'Python', 'Kotlin', 'C#', 'Dart', 'Bash'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Flutter'],
    backend: ['Spring Boot', 'Laravel', 'Node.js', 'Express', 'GraphQL'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Linux', 'Git'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ']
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto bg-slate-900/50">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-12">
        <span className="text-cyan-400 mr-2">02.</span> Tech Stack
        <span className="hidden md:block h-px bg-slate-700 flex-grow ml-4"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center mb-4 text-cyan-400">
            <Server className="mr-2" />
            <h3 className="text-xl font-bold text-white">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300">{skill}</span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center mb-4 text-cyan-400">
            <Code className="mr-2" />
            <h3 className="text-xl font-bold text-white">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300">{skill}</span>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center mb-4 text-cyan-400">
            <Cloud className="mr-2" />
            <h3 className="text-xl font-bold text-white">DevOps & Cloud</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.devops.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300">{skill}</span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center mb-4 text-cyan-400">
            <Terminal className="mr-2" />
            <h3 className="text-xl font-bold text-white">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300">{skill}</span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
          <div className="flex items-center mb-4 text-cyan-400">
            <Database className="mr-2" />
            <h3 className="text-xl font-bold text-white">Data & Messaging</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-700 text-sm rounded-full text-slate-300">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;