import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">05. What's Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
        I'm currently open to new opportunities in Full Stack Engineering and DevOps. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex justify-center gap-6 mb-12">
         <a href="mailto:muhlangakupeka@outlook.com" className="bg-transparent border border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-400/10 px-8 py-4 rounded-md font-bold transition-all">
          Say Hello
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-slate-50 dark:bg-slate-800/30 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-slate-700 p-3 rounded-full text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none">
            <Mail />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <p className="text-slate-900 dark:text-white font-medium">muhlangakupeka@outlook.com</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="bg-white dark:bg-slate-700 p-3 rounded-full text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none">
            <Phone />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="text-slate-900 dark:text-white font-medium">+254 113 771 641</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="bg-white dark:bg-slate-700 p-3 rounded-full text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none">
            <Linkedin />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
            <a href="https://www.linkedin.com/in/josekmuhlanga" target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400">in/josekmuhlanga</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
           <div className="bg-white dark:bg-slate-700 p-3 rounded-full text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none">
            <Github />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
            <a href="https://www.github.com/JMuhlanga" target="_blank" rel="noreferrer" className="text-slate-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400">JMuhlanga</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;