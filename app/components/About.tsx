
const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-2/3">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            <span className="text-cyan-600 dark:text-cyan-400 mr-2">01.</span> About Me
            <span className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 flex-grow ml-4"></span>
          </h2>

          {/* IDE-style file viewer */}
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
              <span className="ml-3 text-xs text-slate-500 dark:text-slate-400 font-mono">about.ts</span>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 font-mono text-sm leading-relaxed space-y-2">
              <p className="text-slate-400 dark:text-slate-600">/**</p>
              <p>
                <span className="text-slate-400 dark:text-slate-600 mr-3 select-none">*</span>
                <span className="text-slate-700 dark:text-slate-300">
                  Hello! I&apos;m José — a Full Stack Engineer who enjoys creating efficient software
                  solutions. With over{' '}
                  <span className="text-cyan-600 dark:text-cyan-400">3+ years of experience</span>,
                  {' '}I&apos;ve honed skills in monolithic and microservice architectures,
                  with a strong foundation in API security and DevOps practices.
                </span>
              </p>
              <p>
                <span className="text-slate-400 dark:text-slate-600 mr-3 select-none">*</span>
                <span className="text-slate-700 dark:text-slate-300">
                  My work spans Healthcare (HMIS), Fintech, Media, and Government infrastructure.
                  Passionate about performance optimisation, clean architecture, and end-to-end delivery.
                </span>
              </p>
              <p>
                <span className="text-slate-400 dark:text-slate-600 mr-3 select-none">*</span>
                <span className="text-cyan-600 dark:text-cyan-400">@languages </span>
                <span className="text-amber-600 dark:text-amber-400">&quot;English · Swahili · French · Portuguese&quot;</span>
              </p>
              <p className="text-slate-400 dark:text-slate-600"> */</p>

              <p className="pt-2">
                <span className="text-purple-500 dark:text-purple-400">export const </span>
                <span className="text-cyan-700 dark:text-cyan-300">engineer</span>
                <span className="text-slate-700 dark:text-slate-300"> = {'{'}</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">location</span>
                <span className="text-slate-600 dark:text-slate-400">: </span>
                <span className="text-amber-600 dark:text-amber-400">&quot;Nairobi, Kenya&quot;</span>
                <span className="text-slate-600 dark:text-slate-400">,</span>
              </p>
              <p className="pl-6">
                <span className="text-blue-600 dark:text-blue-400">openTo</span>
                <span className="text-slate-600 dark:text-slate-400">: </span>
                <span className="text-amber-600 dark:text-amber-400">&quot;remote &amp; on-site opportunities&quot;</span>
                <span className="text-slate-600 dark:text-slate-400">,</span>
              </p>
              <p>
                <span className="text-slate-700 dark:text-slate-300">{'}'}</span>
                <span className="text-slate-600 dark:text-slate-400">;</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <div className="relative group">
            <div className="absolute -inset-1 bg-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-cyan-600 dark:text-cyan-400 font-medium">Bsc. Computer Science</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">Africa Nazarene University</p>
                <p className="text-xs text-slate-500">2017 - 2022</p>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 mt-6">Certifications</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-slate-600 dark:text-slate-400">
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
