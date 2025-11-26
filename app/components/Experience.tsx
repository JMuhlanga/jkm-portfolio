import React from 'react';

const Experience = () => {
  const experience = [
    {
      company: "Christian Health Association of Kenya (CHAK)",
      role: "Software Engineer",
      period: "Sep 2023 - Present",
      description: "Leading development of HMIS modules and microservices.",
      achievements: [
        "Maintain and extend core HMIS modules using Laravel, JavaScript, and Node.js.",
        "Design microservices in Java and Go for reporting and auth.",
        "Train healthcare workers across multiple counties.",
        "Optimize system performance in low-resource environments."
      ]
    },
    {
      company: "Africa Road Maintenance Fund (ARMFA)",
      role: "Software Engineer (Consultant)",
      period: "Nov 2024 - Sep 2025",
      description: "Infrastructure audit and web development.",
      achievements: [
        "Developed organization website using Next.js with CMS integration.",
        "Built and deployed Spring Boot-based LMS on AWS.",
        "Conducted IT infrastructure audits and device deployment.",
        "Migrated domain emails to Microsoft 365."
      ]
    },
    {
      company: "Africom Media LTD",
      role: "Software Engineer",
      period: "Jan 2023 - July 2023",
      description: "Fintech API development and integration.",
      achievements: [
        "Developed secure peer-to-peer transaction APIs using Java Spring Boot.",
        "Collaborated on React/React Native frontend integration.",
        "Improved testing pipelines with mock services.",
        "Managed end-to-end product delivery cycles."
      ]
    },
    {
      company: "Alliance Française",
      role: "Software Engineer - Intern",
      period: "Sep 2021 - Feb 2022",
      description: "IT Support and Data Analysis.",
      achievements: [
        "Provided technical support for office infrastructure.",
        "Designed digital feedback surveys and analyzed data for insights."
      ]
    },
    {
      company: "Kenya Revenue Authority",
      role: "Software Engineer - Attaché",
      period: "May 2021 - Aug 2021",
      description: "Data Engineering and Workflow Automation.",
      achievements: [
        "Built batch data processing models using Apache NiFi (JS/MongoDB).",
        "Contributed to Apache Kafka streaming pipelines.",
        "delivered live demos of open-source data pipelines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-12">
        <span className="text-cyan-400 mr-2">03.</span> Where I've Worked
        <span className="hidden md:block h-px bg-slate-700 flex-grow ml-4"></span>
      </h2>

      <div className="space-y-12 border-l-2 border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 relative">
        {experience.map((job, index) => (
          <div key={index} className="relative">
            <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-cyan-500"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{job.role}</h3>
              <span className="text-sm font-mono text-cyan-400">{job.period}</span>
            </div>
            <h4 className="text-lg text-slate-400 font-medium mb-4">{job.company}</h4>
            <ul className="space-y-2">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start text-slate-400 text-sm md:text-base">
                  <span className="text-cyan-400 mr-2 mt-1.5">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;