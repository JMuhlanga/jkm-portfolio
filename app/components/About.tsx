import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-2/3">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold text-white mb-8">
            <span className="text-cyan-400 mr-2">01.</span> About Me
            <span className="hidden md:block h-px bg-slate-700 flex-grow ml-4"></span>
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              Hello! My name is José and I enjoy creating efficient software solutions that live on the internet. 
              With over <span className="text-cyan-400">3 years of experience</span>, I have honed my skills in both monolithic and 
              microservice architectures.
            </p>
            <p>
              My journey has taken me through diverse sectors including Healthcare (HMIS), Fintech, and Government infrastructure.
              I am passionate about performance optimization, clean architecture, and sustainable digital transformation.
            </p>
            <p>
              I am fluent in <span className="text-white">English and Swahili</span>, with intermediate proficiency in <span className="text-white">French (B2)</span> and basic <span className="text-white">Portuguese (A1)</span>.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-cyan-400 font-medium">Bsc. Computer Science</p>
                <p className="text-sm">Africa Nazarene University</p>
                <p className="text-xs text-slate-500">2017 - 2022</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 mt-6">Certifications</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-400">
                <li>DevOps CI/CD (Moringa School)</li>
                <li>Software Engineering (Moringa)</li>
                <li>Java (Vanderbilt/Coursera)</li>
                <li>CCNA (2019)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;