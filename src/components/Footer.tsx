import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeStudio }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="no-print border-t border-slate-800/80 bg-[#060910] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              Tharun S K
            </div>
            <div className="text-xs text-slate-400">
              AI/ML Developer · Full Stack Developer · Annamalai University
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <button
              onClick={onOpenResumeStudio}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Resume Studio
            </button>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/40 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Tharun S K. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
