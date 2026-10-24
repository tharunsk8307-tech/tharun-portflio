import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, Mic, Bot, Instagram, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const jarvisProject = PROJECTS.find(p => p.id === 'jarvis-os')!;
  const novaProject = PROJECTS.find(p => p.id === 'nova-ai')!;
  const instaProject = PROJECTS.find(p => p.id === 'instagram-clone')!;
  const studentProject = PROJECTS.find(p => p.id === 'student-management')!;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              03. Featured Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered Applications &amp; AI Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Real code repositories and live screenshots spanning autonomous voice OS, Gemini chat models, and full-stack platforms.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500">
            Total 4 Production Repositories
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. Flagship Wide Card: Jarvis Voice Assistant (Full 12 cols or 7 cols) */}
          <div className="lg:col-span-12 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/50 shadow-2xl overflow-hidden transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Media Preview (7 cols) */}
              <div 
                className="lg:col-span-7 relative bg-slate-950 overflow-hidden cursor-pointer min-h-[320px] lg:min-h-[420px]"
                onClick={() => setSelectedProject(jarvisProject)}
              >
                <img
                  src={jarvisProject.image}
                  alt={jarvisProject.title}
                  className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0c121e] opacity-80" />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center gap-2">
                  <Mic className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Flagship AI Operating System</span>
                </div>
              </div>

              {/* Text & Details (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold mb-2">
                    <span>AI/ML</span>
                    <span aria-hidden="true">·</span>
                    <span>Gemini API &amp; Multimodal Vision</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(jarvisProject)}
                    className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {jarvisProject.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {jarvisProject.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                    {jarvisProject.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-4 space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Speech synthesis with multiple accent personas (Jarvis, Friday, Charon)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Real-time camera feed vision inspection via Gemini multimodal reasoning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-cyan-400">✓</span>
                      <span>Instant directive automation for Gmail and WhatsApp</span>
                    </li>
                  </ul>
                </div>

                {/* Tech & Actions */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-slate-200">Python</span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span className="text-slate-200">Gemini API</span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span className="text-slate-200">Voice Synthesis</span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span className="text-slate-200">OpenCV Vision</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={jarvisProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>View GitHub Code</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(jarvisProject)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 2. Nova AI Chatbot (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden transition-all flex flex-col justify-between group">
            <div>
              <div 
                className="relative bg-slate-950 aspect-[16/9] overflow-hidden cursor-pointer border-b border-slate-800/80"
                onClick={() => setSelectedProject(novaProject)}
              >
                <img
                  src={novaProject.image}
                  alt={novaProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Conversational Gemini Assistant</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                  <span>AI/ML</span>
                  <span aria-hidden="true">·</span>
                  <span>React &amp; Google Gemini</span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(novaProject)}
                  className="text-xl font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {novaProject.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {novaProject.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {novaProject.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-200">React.js</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">Gemini API</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">Tailwind CSS</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">Local Storage</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <a
                  href={novaProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(novaProject)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Instagram Clone Web App (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden transition-all flex flex-col justify-between group">
            <div>
              <div 
                className="relative bg-slate-950 aspect-[16/9] overflow-hidden cursor-pointer border-b border-slate-800/80"
                onClick={() => setSelectedProject(instaProject)}
              >
                <img
                  src={instaProject.image}
                  alt={instaProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Social Platform Clone</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                  <span>Full Stack Frontend</span>
                  <span aria-hidden="true">·</span>
                  <span>React.js Architecture</span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(instaProject)}
                  className="text-xl font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {instaProject.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {instaProject.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {instaProject.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-slate-200">React.js</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">JavaScript ES6+</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">Tailwind CSS</span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-slate-200">Dynamic State</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <a
                  href={instaProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(instaProject)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 4. Student Management System (12 cols full width spotlight) */}
          <div className="lg:col-span-12 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/50 shadow-xl overflow-hidden transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image Preview (5 cols) */}
              <div 
                className="lg:col-span-5 relative bg-slate-950 overflow-hidden cursor-pointer h-64 lg:h-full min-h-[260px]"
                onClick={() => setSelectedProject(studentProject)}
              >
                <img
                  src={studentProject.image}
                  alt={studentProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Academic Database Portal</span>
                </div>
              </div>

              {/* Text Description (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                  <span>Database / System</span>
                  <span aria-hidden="true">·</span>
                  <span>Python &amp; Relational MySQL</span>
                </div>

                <h3 
                  onClick={() => setSelectedProject(studentProject)}
                  className="text-2xl font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  {studentProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {studentProject.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {studentProject.description} Designed for academic institutions to administer student admission workflows, record test evaluations, calculate aggregate marks, and export analytical transcripts.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-slate-200">Python</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="text-slate-200">MySQL Database</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="text-slate-200">Relational Modeling</span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="text-slate-200">Academic Grading</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                  <a
                    href={studentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>View Repository on GitHub</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(studentProject)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/20 px-3 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Database Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Modal Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
