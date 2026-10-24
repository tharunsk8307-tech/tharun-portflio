import React from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#0c121e] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              {project.category} · Project Deep Dive
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <div className="text-sm font-medium text-cyan-300 mt-1">
                {project.subtitle}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>View Repository</span>
              </a>
            </div>
          </div>

          {/* Project Screenshot Container */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[460px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Technologies Unboxed Bar */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 uppercase tracking-wider text-[11px] font-semibold mr-2">
              Technology Stack:
            </span>
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-cyan-300">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-slate-700">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Overview & Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Detailed Overview */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Project Description &amp; Scope</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right: Key Features */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Key Engineered Features</span>
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-cyan-400 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Architecture Highlights if present */}
          {project.architecture && (
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architectural Components</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-950/60 border border-slate-800/80">
                    <span className="text-cyan-400">0{idx + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-[#090d16] text-xs text-slate-400">
          <div className="flex items-center gap-2 font-mono">
            <span>Repository:</span>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>{project.githubUrl.replace('https://github.com/', '')}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
