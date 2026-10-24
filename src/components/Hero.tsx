import React from 'react';
import { Download, Github, Mail, ArrowRight, FileText, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeStudio }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial glow & geometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker (Zero-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
              <span className="font-mono">ANNAMALAI UNIVERSITY</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>B.E. ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2024–2028</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Tharun S K
              </h1>
              <div className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.shortTitle}
              </div>
            </div>

            {/* Enhanced Self Introduction */}
            <div className="space-y-3.5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Hello! I am <span className="text-white font-semibold">Tharun S K</span>, an AI/ML Developer and Full-Stack Software Engineer currently pursuing my Bachelor of Engineering in Computer Science &amp; Engineering (<span className="text-cyan-300 font-medium">Artificial Intelligence &amp; Machine Learning</span>) at <span className="text-white font-medium">Annamalai University</span> (Faculty of Engineering &amp; Technology, Cumulative GPA: <span className="text-cyan-400 font-mono font-semibold">8.13 / 10.00</span>), building on rigorous foundational schooling from <span className="text-white font-medium">K. C. Sankaralingam Nadar Higher Secondary School</span>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base">
                With <span className="text-cyan-300 font-semibold">2 years of industrial internship experience</span> spanning <span className="text-white font-medium">SyberGate Technologies</span> (AI system operations &amp; software design) and <span className="text-white font-medium">Nanomatics Technologies</span> (AR/VR XR applications &amp; AI voice modulation), I specialize in transforming complex machine learning models into intuitive, production-grade web applications.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                I am the creator of <span className="text-slate-200 font-medium">THARUN OS Mark VII</span> (multimodal AI voice assistant with live camera HUD), <span className="text-slate-200 font-medium">Nova AI</span> (conversational engine on Google Gemini), an interactive <span className="text-slate-200 font-medium">Instagram Clone</span>, and full-stack <span className="text-slate-200 font-medium">Student Management Systems</span>. Dedicated to first-principles problem-solving and rapid innovation.
              </p>
            </div>

            {/* Quick Unboxed Engineering Focus Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-cyan-400">
              <span className="p-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50">✦ Multimodal AI &amp; Voice Synthesis</span>
              <span className="p-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50">✦ Full-Stack React &amp; FastAPI</span>
              <span className="p-1 px-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50">✦ 2 Years Industrial Research</span>
            </div>

            {/* Action Buttons Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Direct PDF Resume Download */}
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Tharun_SK_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Modifiable Resume Studio Button */}
              <button
                onClick={onOpenResumeStudio}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Customize &amp; Print</span>
              </button>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub Profile</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Unboxed Tech Micro-Specs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <span className="text-slate-500 uppercase tracking-wider text-[11px]">Core Stack</span>
              <span className="text-slate-300">Python</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">Gemini API</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">React.js</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">FastAPI</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">MySQL</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="text-slate-300">C++</span>
            </div>

          </div>

          {/* Right Column: Profile Visual & Interactive Terminal Anchor (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />
              
              {/* Profile Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0c121e] border border-slate-800 shadow-2xl p-3 sm:p-4">
                
                {/* Photo Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/4.2] bg-slate-900 border border-slate-800/80">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Tharun S K - AI/ML & Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle lighting gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-70" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-[#090d16]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AI/ML Engineer</span>
                  </div>

                  {/* Bottom Info Bar inside image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#090d16]/90 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Tharun S K</div>
                      <div className="text-[11px] text-slate-400">Chennai, Tamil Nadu, India</div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-mono font-semibold">B.E. AI &amp; ML</div>
                      <div className="text-[10px] text-slate-500">GPA 8.13 / 10.00</div>
                    </div>
                  </div>
                </div>

                {/* Micro Live Spec Strip */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300">Active Specialization</span>
                  </div>
                  <span className="text-cyan-400 font-medium">Multimodal &amp; Full Stack</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Full-Width 4-Column Proof & Key Metrics Strip (Below Hero Split) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">4+</div>
            <div className="text-sm font-semibold text-cyan-400 mt-1">Production Projects</div>
            <div className="text-xs text-slate-400 mt-0.5">Jarvis OS, Nova AI, Instagram Clone, Student Portal</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">2 Years</div>
            <div className="text-sm font-semibold text-cyan-400 mt-1">Internship Experience</div>
            <div className="text-xs text-slate-400 mt-0.5">SyberGate Technologies &amp; Nanomatics Tech</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">8.13</div>
            <div className="text-sm font-semibold text-cyan-400 mt-1">Academic GPA / 10.00</div>
            <div className="text-xs text-slate-400 mt-0.5">Annamalai University CSE (AI &amp; ML)</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">6</div>
            <div className="text-sm font-semibold text-cyan-400 mt-1">Verified Certifications</div>
            <div className="text-xs text-slate-400 mt-0.5">NPTEL (NLP, RL), Postman API, Data Governance, AI Ops</div>
          </div>

        </div>

      </div>
    </section>
  );
};
