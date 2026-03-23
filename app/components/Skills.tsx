import React from 'react';
import { Server, Code, Cloud, Terminal, Database } from 'lucide-react';
import { 
  FaJava, FaPhp, FaPython, FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs, FaDocker, FaJenkins, FaAws, FaLinux, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiGo, SiJavascript, SiKotlin, SiDart, SiGnubash, SiNextdotjs, SiTailwindcss, SiFlutter, SiSpringboot, SiExpress, SiGraphql, SiKubernetes, SiGooglecloud, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiApachekafka, SiRabbitmq 
} from 'react-icons/si';
import { TbBrandCSharp, TbBrandAzure } from 'react-icons/tb';

const allTechs = [
  { name: 'Java', icon: <FaJava size={40} className="text-[#007396]" /> },
  { name: 'PHP', icon: <FaPhp size={40} className="text-[#777BB4]" /> },
  { name: 'Go', icon: <SiGo size={40} className="text-[#00ADD8]" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#F7DF1E]" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-[#3776AB]" /> },
  { name: 'Kotlin', icon: <SiKotlin size={40} className="text-[#7F52FF]" /> },
  { name: 'C#', icon: <TbBrandCSharp size={40} className="text-[#239120]" /> },
  { name: 'Dart', icon: <SiDart size={40} className="text-[#0175C2]" /> },
  { name: 'Bash', icon: <SiGnubash size={40} className="text-[#4EAA25]" /> },
  { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#06B6D4]" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
  { name: 'Flutter', icon: <SiFlutter size={40} className="text-[#02569B]" /> },
  { name: 'Spring Boot', icon: <SiSpringboot size={40} className="text-[#6DB33F]" /> },
  { name: 'Laravel', icon: <FaLaravel size={40} className="text-[#FF2D20]" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" /> },
  { name: 'Express', icon: <SiExpress size={40} className="text-black dark:text-white" /> },
  { name: 'GraphQL', icon: <SiGraphql size={40} className="text-[#E10098]" /> },
  { name: 'Docker', icon: <FaDocker size={40} className="text-[#2496ED]" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={40} className="text-[#326CE5]" /> },
  { name: 'Jenkins', icon: <FaJenkins size={40} className="text-[#D24939]" /> },
  { name: 'AWS', icon: <FaAws size={40} className="text-[#232F3E] dark:text-white" /> },
  { name: 'GCP', icon: <SiGooglecloud size={40} className="text-[#4285F4]" /> },
  { name: 'Azure', icon: <TbBrandAzure size={40} className="text-[#0078D4]" /> },
  { name: 'Linux', icon: <FaLinux size={40} className="text-black dark:text-white" /> },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-[#F05032]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-[#4169E1]" /> },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-[#4479A1]" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
  { name: 'Redis', icon: <SiRedis size={40} className="text-[#DC382D]" /> },
  { name: 'Kafka', icon: <SiApachekafka size={40} className="text-black dark:text-white" /> },
  { name: 'RabbitMQ', icon: <SiRabbitmq size={40} className="text-[#FF6600]" /> },
];

const Skills = () => {
  const skills = {
    languages: ['Java', 'PHP', 'Go', 'JavaScript', 'Python', 'Kotlin', 'C#', 'Dart', 'Bash'],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Flutter'],
    backend: ['Spring Boot', 'Laravel', 'Node.js', 'Express', 'GraphQL'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Linux', 'Git'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ']
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12">
        <span className="text-cyan-600 dark:text-cyan-400 mr-2">02.</span> Tech Stack
        <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Backend */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
          <div className="flex items-center mb-4 text-cyan-600 dark:text-cyan-400">
            <Server className="mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{skill}</span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
          <div className="flex items-center mb-4 text-cyan-600 dark:text-cyan-400">
            <Code className="mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{skill}</span>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
          <div className="flex items-center mb-4 text-cyan-600 dark:text-cyan-400">
            <Cloud className="mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">DevOps & Cloud</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.devops.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{skill}</span>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
          <div className="flex items-center mb-4 text-cyan-600 dark:text-cyan-400">
            <Terminal className="mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{skill}</span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-transparent shadow-sm dark:shadow-none">
          <div className="flex items-center mb-4 text-cyan-600 dark:text-cyan-400">
            <Database className="mr-2" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data & Messaging</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-sm rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Carousel */}
      <div className="mt-20 relative w-full overflow-hidden flex flex-col items-center">
        <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-8 text-center uppercase tracking-widest text-sm">
          Technologies & Tools
        </h3>
        
        {/* Gradients to fade out the edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex overflow-hidden w-full group">
          <div className="flex w-max min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused] gap-12 py-4 pr-12">
            {allTechs.map((tech, index) => (
              <div key={`set1-${index}`} className="flex flex-col items-center justify-center gap-4 w-28 group/item cursor-pointer">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover/item:scale-110 group-hover/item:-translate-y-2 group-hover/item:shadow-lg group-hover/item:dark:shadow-cyan-900/20 transition-all duration-300 w-20 h-20 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors text-center opacity-80 group-hover/item:opacity-100">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex w-max min-w-full shrink-0 animate-marquee group-hover:[animation-play-state:paused] gap-12 py-4 pr-12" aria-hidden="true">
            {allTechs.map((tech, index) => (
              <div key={`set2-${index}`} className="flex flex-col items-center justify-center gap-4 w-28 group/item cursor-pointer">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700/50 group-hover/item:scale-110 group-hover/item:-translate-y-2 group-hover/item:shadow-lg group-hover/item:dark:shadow-cyan-900/20 transition-all duration-300 w-20 h-20 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors text-center opacity-80 group-hover/item:opacity-100">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;