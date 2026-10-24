import React, { useState } from 'react';
import { X, Printer, Download, RefreshCw, Edit3, Check, FileText, Sparkles } from 'lucide-react';
import { INITIAL_RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { EditableResumeData } from '../types/portfolio';

interface ResumeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeStudioModal: React.FC<ResumeStudioModalProps> = ({ isOpen, onClose }) => {
  const [resumeData, setResumeData] = useState<EditableResumeData>(INITIAL_RESUME_DATA);
  const [activePane, setActivePane] = useState<'preview' | 'editor'>('preview');
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen) return null;

  const handleReset = () => {
    setResumeData(INITIAL_RESUME_DATA);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-6xl bg-[#0c121e] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Non-Printable) */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d16]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Modifiable Resume Studio</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                  Print-Ready ATS
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Modify content below for professional printing, or download the original PDF.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View switcher on smaller screens */}
            <div className="flex md:hidden items-center p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setActivePane('preview')}
                className={`px-2.5 py-1 rounded ${activePane === 'preview' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'}`}
              >
                Preview
              </button>
              <button
                onClick={() => setActivePane('editor')}
                className={`px-2.5 py-1 rounded ${activePane === 'editor' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'}`}
              >
                Edit
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Tharun_SK_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Original PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Content Grid */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Form Editor (5 cols, hidden on mobile if preview active) */}
            <div className={`no-print lg:col-span-5 space-y-4 ${activePane === 'preview' ? 'hidden lg:block' : 'block'}`}>
              <div className="p-4 rounded-xl bg-[#0c121e] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5 font-mono">
                    <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Customize Resume Fields</span>
                  </h3>
                  <button
                    onClick={handleReset}
                    className="text-[11px] font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
                    title="Reset to default resume data"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Full Name & Target Role */}
                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={resumeData.fullName}
                      onChange={(e) => setResumeData({ ...resumeData, fullName: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Target Job Title / Specialization
                    </label>
                    <input
                      type="text"
                      value={resumeData.targetRole}
                      onChange={(e) => setResumeData({ ...resumeData, targetRole: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={resumeData.phone}
                      onChange={(e) => setResumeData({ ...resumeData, phone: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-400 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="text"
                      value={resumeData.email}
                      onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Street &amp; City Location
                  </label>
                  <input
                    type="text"
                    value={resumeData.location}
                    onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Professional Summary */}
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Professional Summary
                  </label>
                  <textarea
                    rows={4}
                    value={resumeData.summary}
                    onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
                  />
                </div>

                {/* Technical Skills */}
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Technical Skills (Line by line)
                  </label>
                  <textarea
                    rows={4}
                    value={resumeData.skillsText}
                    onChange={(e) => setResumeData({ ...resumeData, skillsText: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
                  />
                </div>

                {/* Experience & Projects */}
                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Internship Experience Highlights
                  </label>
                  <textarea
                    rows={4}
                    value={resumeData.experienceText}
                    onChange={(e) => setResumeData({ ...resumeData, experienceText: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-slate-400 block mb-1">
                    Featured Projects
                  </label>
                  <textarea
                    rows={4}
                    value={resumeData.projectsText}
                    onChange={(e) => setResumeData({ ...resumeData, projectsText: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
                  />
                </div>

              </div>
            </div>

            {/* Right Column: High-Fidelity Printable Document Canvas (7 cols) */}
            <div className={`lg:col-span-7 ${activePane === 'editor' ? 'hidden lg:block' : 'block'}`}>
              
              {/* Document Container */}
              <div 
                id="printable-resume" 
                className="printable-resume-container bg-white text-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl border border-slate-200 font-sans text-left selection:bg-cyan-100"
                style={{ minHeight: '800px' }}
              >
                
                {/* Header */}
                <div className="border-b-2 border-slate-900 pb-4 mb-4 text-center">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                    {resumeData.fullName}
                  </h1>
                  <div className="text-xs font-semibold text-slate-700 tracking-wide mt-1">
                    {resumeData.targetRole}
                  </div>
                  <div className="text-[11px] text-slate-600 mt-2 flex flex-wrap items-center justify-center gap-2">
                    <span>{resumeData.location}</span>
                    <span>|</span>
                    <span>{resumeData.phone}</span>
                    <span>|</span>
                    <a href={`mailto:${resumeData.email}`} className="text-blue-800 underline">
                      {resumeData.email}
                    </a>
                    <span>|</span>
                    <span>{resumeData.linkedin}</span>
                    <span>|</span>
                    <span>{resumeData.github}</span>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Professional Summary
                  </h2>
                  <p className="text-xs text-slate-800 leading-relaxed text-justify">
                    {resumeData.summary}
                  </p>
                </div>

                {/* Education */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Education
                  </h2>
                  <div className="text-xs text-slate-800 space-y-2 whitespace-pre-line leading-relaxed">
                    {resumeData.educationText}
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Technical Skills
                  </h2>
                  <div className="text-xs text-slate-800 space-y-1 whitespace-pre-line leading-relaxed">
                    {resumeData.skillsText}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Internship &amp; Industry Experience
                  </h2>
                  <div className="text-xs text-slate-800 space-y-2 whitespace-pre-line leading-relaxed">
                    {resumeData.experienceText}
                  </div>
                </div>

                {/* Featured Projects */}
                <div className="mb-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Projects Showcase
                  </h2>
                  <div className="text-xs text-slate-800 space-y-2 whitespace-pre-line leading-relaxed">
                    {resumeData.projectsText}
                  </div>
                </div>

                {/* Certifications & Languages Footnote */}
                <div className="mb-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
                    Certifications &amp; Languages
                  </h2>
                    <p>• <strong>NPTEL:</strong> Deep Learning with NLP (April 2026) · Reinforcement Learning (October 2026)</p>
                    <p>• <strong>Professional:</strong> Dataprep &amp; Strategy (Python for Data Governance - Jan 2026) · API Development, Testing &amp; Automation with Postman (Sept 2026)</p>
                    <p>• <strong>Industrial:</strong> SyberGate Technologies AI Operations (June 2026) · Nanomatics Technologies XR &amp; Voice AI (July 2025)</p>
                    <p>• <strong>Languages:</strong> Tamil (Native / Fluent) · English (Professional Working)</p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-[#090d16] text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-mono">Tip:</span>
            <span>Use browser &quot;Save as PDF&quot; in destination during print dialog for crisp vector output.</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
