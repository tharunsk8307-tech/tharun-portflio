import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, Github, ExternalLink, Mail, Phone, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeStudio }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              TS
            </div>
            <span>THARUN S K</span>
          </a>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Header Quick Contact Icons Strip */}
          <div className="hidden xl:flex items-center gap-1.5 pl-3 border-l border-slate-800/80 shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title={`Email: ${PERSONAL_INFO.email}`}
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title={`Call: ${PERSONAL_INFO.phone}`}
              aria-label="Call Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Tharun_SK_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Download original PDF resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
            <button
              onClick={onOpenResumeStudio}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable Resume</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeStudio}
              className="px-2.5 py-1.5 text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c121e]/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 mt-2 space-y-3 shadow-2xl">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Experience & Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeStudio();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Interactive &amp; Printable Resume</span>
            </button>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Tharun_SK_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download Original PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
