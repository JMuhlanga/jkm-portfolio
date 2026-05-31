
const Experience = () => {
  const experience = [
    {
      company: "Christian Health Association of Kenya (CHAK)",
      role: "Software Engineer",
      period: "Sep 2023 - Present",
      description: "Leading development of HMIS modules and microservices.",
      achievements: [
        "Maintained and extended HMIS modules using Laravel, JavaScript, and Node.js, improving data accuracy and system reliability by 23%.",
        "Engineered Java- and Go-based microservices for authentication, reporting, and synchronisation, reducing cross-system integration failures by 31%.",
        "Optimised hybrid monolithic and microservice architecture under bandwidth constraints, improving average response performance by 41%.",
        "Delivered secure financial and statutory integrations including M-Pesa mobile payments and eTIMS tax compliance, supporting real-time billing workflows.",
        "Coordinated feature delivery with distributed developers and healthcare stakeholders across multiple counties using asynchronous sprint workflows.",
        "Trained healthcare workers across regions, accelerating user adoption and reducing support dependency."
      ]
    },
    {
      company: "Africa Road Maintenance Fund (ARMFA)",
      role: "Software Engineer (Consultant)",
      period: "Nov 2024 - Sep 2025",
      description: "Infrastructure audit and web development.",
      achievements: [
        "Developed and deployed a Next.js corporate website with CMS integration, increasing content update efficiency by 43%.",
        "Built and launched a Spring Boot learning management system on AWS, reducing internal training delivery time by 37%.",
        "Migrated organisational email and identity services to Microsoft 365, enabling standardised collaboration across departments.",
        "Conducted infrastructure audits and supported device refresh initiatives, improving baseline system reliability by 27%.",
        "Ensured infrastructure alignment with NGO IT and security standards, strengthening compliance posture."
      ]
    },
    {
      company: "Africom Media LTD",
      role: "Software Engineer",
      period: "Jan 2023 - July 2023",
      description: "Fintech API development and integration.",
      achievements: [
        "Developed secure peer-to-peer transaction APIs using Java and Spring Boot, improving transaction processing reliability by 38%.",
        "Standardised API schemas and mock services, cutting integration testing rework by 33%.",
        "Implemented JWT-based authentication and access control mechanisms to secure financial operations.",
        "Supported reporting and reconciliation features essential to transaction visibility."
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
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12">
        <span className="text-cyan-600 dark:text-cyan-400 mr-2">03.</span> Where I've Worked
        <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></span>
      </h2>

      <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 relative">
        {experience.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-2 border-cyan-500 dark:border-cyan-400 bg-white dark:bg-slate-900 flex items-center justify-center">
              <span className="text-cyan-500 dark:text-cyan-400 text-[9px] font-mono leading-none select-none">$</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
              <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400">{job.period}</span>
            </div>
            <h4 className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{job.company}</h4>
            <ul className="space-y-2">
              {job.achievements.map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm md:text-base font-mono">
                  <span className="text-green-500 dark:text-green-400 mr-2 mt-0.5 shrink-0 select-none">+</span>
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