import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink, X, FileCheck, Eye, CheckCircle2, ShieldCheck, BookmarkCheck } from 'lucide-react';
import { EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'certifications' | 'experience' | 'education'>('all');
  const [certSubFilter, setCertSubFilter] = useState<'all' | 'nptel' | 'professional' | 'industrial'>('all');
  const [viewingCert, setViewingCert] = useState<{
    title: string;
    url: string;
    type: 'image' | 'pdf';
  } | null>(null);

  const nptelCerts = CERTIFICATIONS.filter(c => c.category === 'NPTEL');
  const professionalCerts = CERTIFICATIONS.filter(c => c.category === 'Professional');
  const industrialCerts = CERTIFICATIONS.filter(c => c.category === 'Industrial');

  const filteredCerts = CERTIFICATIONS.filter(c => {
    if (certSubFilter === 'nptel') return c.category === 'NPTEL';
    if (certSubFilter === 'professional') return c.category === 'Professional';
    if (certSubFilter === 'industrial') return c.category === 'Industrial';
    return true;
  });

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#070b13] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              04. Journey &amp; Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Certifications, Experience &amp; Education
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Separated credentials spanning official NPTEL specializations in NLP &amp; Reinforcement Learning, professional API testing and data governance, and industrial AI internships.
            </p>
          </div>

          {/* Segmented Filter */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Certifications ({CERTIFICATIONS.length})
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Internships (2 Yrs)
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* DEDICATED SEPARATE CERTIFICATIONS VIEW */}
        {activeTab === 'certifications' && (
          <div className="space-y-10">
            {/* Certifications Sub-Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c121e] border border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-bold text-white">Verified Certifications &amp; Accreditations</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setCertSubFilter('all')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    certSubFilter === 'all'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All ({CERTIFICATIONS.length})
                </button>
                <button
                  onClick={() => setCertSubFilter('nptel')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    certSubFilter === 'nptel'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  NPTEL Specializations ({nptelCerts.length})
                </button>
                <button
                  onClick={() => setCertSubFilter('professional')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    certSubFilter === 'professional'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Professional &amp; Tooling ({professionalCerts.length})
                </button>
                <button
                  onClick={() => setCertSubFilter('industrial')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    certSubFilter === 'industrial'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Industrial Training ({industrialCerts.length})
                </button>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                          {cert.category === 'NPTEL' ? 'NPTEL Examination' : cert.category === 'Professional' ? 'Professional Credential' : 'Industrial Certification'}
                        </span>
                        <span aria-hidden="true" className="text-slate-700">·</span>
                        <span className="text-[11px] font-mono text-slate-400">{cert.date}</span>
                      </div>
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="text-xs font-medium text-slate-300 font-mono">
                      Issuer: <span className="text-cyan-400">{cert.issuer}</span>
                    </div>

                    {cert.description && (
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-400">
                      <span className="text-slate-500 text-[11px]">Key Competencies:</span>
                      {cert.skillsGained.map((sk, idx) => (
                        <React.Fragment key={sk}>
                          <span className="text-slate-300">{sk}</span>
                          {idx < cert.skillsGained.length - 1 && (
                            <span aria-hidden="true" className="text-slate-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed &amp; Validated</span>
                      </span>

                      {cert.certificateUrl && (
                        <button
                          onClick={() => setViewingCert({
                            title: cert.title,
                            url: cert.certificateUrl!,
                            type: cert.certificateType || 'image'
                          })}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 rounded-lg transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTEGRATED TIMELINE LAYOUT (For 'all', 'experience', 'education') */}
        {activeTab !== 'certifications' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Internships & Industry Work (7 cols in all mode) */}
            {(activeTab === 'all' || activeTab === 'experience') && (
              <div className={`${activeTab === 'all' ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-6`}>
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">
                    Industrial Internship Experience (2 Years)
                  </h3>
                </div>

                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {exp.role}
                          </h4>
                          <div className="text-sm font-medium text-cyan-300 mt-0.5">
                            {exp.company}
                          </div>
                        </div>
                        <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Achievements */}
                      <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                        {exp.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Unboxed Tech Footnote & Certificate Launcher */}
                      <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                        <div className="flex flex-wrap items-center gap-1.5 text-slate-400">
                          {exp.technologies.map((t, idx) => (
                            <React.Fragment key={t}>
                              <span className="text-slate-300">{t}</span>
                              {idx < exp.technologies.length - 1 && (
                                <span aria-hidden="true" className="text-slate-700">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        {exp.certificateUrl && (
                          <button
                            onClick={() => setViewingCert({
                              title: `${exp.company} — Certificate`,
                              url: exp.certificateUrl!,
                              type: exp.certificateType || 'image'
                            })}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-lg transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-cyan-400" />
                            <span>View Certificate</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Column 2: Education & Certifications (5 cols or expanded) */}
            {(activeTab === 'all' || activeTab === 'education') && (
              <div className={`${activeTab === 'all' ? 'lg:col-span-5' : 'lg:col-span-12'} space-y-8`}>
                
                {/* Education Block */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">
                      Education &amp; Academic Honors
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {EDUCATION.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white">
                            {edu.degree}
                          </h4>
                        </div>
                        <div className="text-xs font-medium text-cyan-300">
                          {edu.institution}
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                          <span>{edu.period}</span>
                          {edu.score && (
                            <span className="text-cyan-400 font-semibold">{edu.score}</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-1">
                          {edu.description}
                        </p>

                        {edu.coursework && (
                          <div className="pt-2 text-[11px] font-mono text-slate-400">
                            <span className="text-slate-500 block mb-1">Key Coursework:</span>
                            <div className="flex flex-wrap gap-1.5 text-slate-300">
                              {edu.coursework.map((c, i) => (
                                <span key={i} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Quick Highlight within 'all' tab */}
                {activeTab === 'all' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-cyan-400" />
                        <h3 className="text-lg font-bold text-white">
                          Verified Certifications ({CERTIFICATIONS.length})
                        </h3>
                      </div>
                      <button
                        onClick={() => setActiveTab('certifications')}
                        className="text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                      >
                        View All Categorized →
                      </button>
                    </div>

                    <div className="space-y-3">
                      {/* NPTEL Certifications Group */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                            1. NPTEL Specializations
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">2 Certifications</span>
                        </div>
                        {nptelCerts.map((cert) => (
                          <div key={cert.id} className="pt-2 border-t border-slate-800/50 flex items-start justify-between gap-2 text-xs">
                            <div>
                              <div className="font-semibold text-white">{cert.title}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{cert.issuer}</div>
                            </div>
                            <span className="text-[11px] font-mono text-cyan-400 shrink-0">{cert.date}</span>
                          </div>
                        ))}
                      </div>

                      {/* Professional & Technical Certifications Group */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                            2. Professional &amp; API Specializations
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">2 Certifications</span>
                        </div>
                        {professionalCerts.map((cert) => (
                          <div key={cert.id} className="pt-2 border-t border-slate-800/50 flex items-start justify-between gap-2 text-xs">
                            <div>
                              <div className="font-semibold text-white">{cert.title}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{cert.issuer}</div>
                            </div>
                            <span className="text-[11px] font-mono text-cyan-400 shrink-0">{cert.date}</span>
                          </div>
                        ))}
                      </div>

                      {/* Industrial Internship Certificates */}
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                            3. Industrial Internship Certificates
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">2 Verified Docs</span>
                        </div>
                        {industrialCerts.map((cert) => (
                          <div key={cert.id} className="pt-2 border-t border-slate-800/50 flex items-center justify-between gap-2 text-xs">
                            <div>
                              <div className="font-semibold text-white">{cert.title}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{cert.issuer}</div>
                            </div>
                            {cert.certificateUrl && (
                              <button
                                onClick={() => setViewingCert({
                                  title: cert.title,
                                  url: cert.certificateUrl!,
                                  type: cert.certificateType || 'image'
                                })}
                                className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer shrink-0"
                              >
                                <span>Doc</span>
                                <Eye className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

      </div>

      {/* Certificate Viewer Lightbox */}
      {viewingCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0c121e] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#090d16]">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">{viewingCert.title}</span>
              </div>
              <button
                onClick={() => setViewingCert(null)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex items-center justify-center bg-slate-950 min-h-[400px]">
              {viewingCert.type === 'pdf' ? (
                <div className="w-full text-center space-y-4 py-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Nanomatics Technologies Certificate</h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto mt-1">
                      Official 1-Month Internship Certificate in AR/VR Technologies, XR domain, and Voice AI Transformation.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <a
                      href={viewingCert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Original Certificate PDF</span>
                    </a>
                  </div>
                </div>
              ) : (
                <img
                  src={viewingCert.url}
                  alt={viewingCert.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800"
                />
              )}
            </div>

            <div className="px-5 py-3 border-t border-slate-800 bg-[#090d16] flex items-center justify-between text-xs text-slate-400">
              <span>Verified Document from Tharun S K's Credentials</span>
              <a
                href={viewingCert.url}
                download
                className="text-cyan-400 hover:underline"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
