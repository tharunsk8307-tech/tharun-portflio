import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, Copy, Check, MessageSquare, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResumeStudio: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeStudio }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Inquiry from ${senderName || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Tharun, I came across your portfolio. My name is ${senderName || 'Recruiter/Visitor'}. ${message ? `Regarding: ${message}` : 'I would like to connect!'}`
    );
    window.open(`https://wa.me/917200901942?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            05. Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Connect &amp; Collaborate
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Actively open for AI/ML engineering internships, full-stack developer roles, and high-impact software projects.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact with Logo Only / Logo-First Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Direct Contact Hub
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Select any logo to connect instantly or copy details.
                  </p>
                </div>
                {copiedField && (
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/60 px-2 py-1 rounded-lg">
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </span>
                )}
              </div>

              {/* Prominent Logo-First Grid */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* 1. Gmail Logo Card */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-red-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-red-500/10 cursor-pointer"
                  title={`Email: ${PERSONAL_INFO.email}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Official Gmail Logo SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">Gmail</span>
                </a>

                {/* 2. WhatsApp Logo Card */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-emerald-500/10 cursor-pointer"
                  title="Chat on WhatsApp (+91 7200901942)"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Official WhatsApp Logo SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.476-.15-.677.15-.2.302-.777.98-.953 1.18-.175.201-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.201-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.587-.494-.508-.677-.517-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.053 1.03-1.053 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.72.229 1.376.197 1.895.12.578-.087 1.782-.728 2.033-1.431.25-.703.25-1.305.175-1.43-.075-.126-.275-.201-.576-.351zM12.04 2C6.51 2 2.025 6.485 2.025 12.015c0 1.84.5 3.568 1.376 5.065L2 22l5.08-1.332a9.97 9.97 0 0 0 4.96 1.347h.004c5.529 0 10.015-4.485 10.015-10.015C22.059 6.485 17.573 2 12.04 2z" fill="#25D366"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">WhatsApp</span>
                </a>

                {/* 3. Phone / Call Logo Card */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10 cursor-pointer"
                  title={`Call Phone: ${PERSONAL_INFO.phone}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Modern Phone Dial SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">Phone</span>
                </a>

                {/* 4. LinkedIn Official Logo Card */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-blue-500/10 cursor-pointer"
                  title="LinkedIn Profile"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Official LinkedIn Logo SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" fill="#0A66C2"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
                </a>

                {/* 5. GitHub Official Logo Card */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-slate-500/10 cursor-pointer"
                  title="GitHub Profile"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Official GitHub Logo SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">GitHub</span>
                </a>

                {/* 6. Instagram Official Logo Card */}
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-pink-500/50 flex flex-col items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-pink-500/10 cursor-pointer"
                  title="Instagram Profile (@ft__.thxrun_.19)"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-2 shadow-inner group-hover:scale-110 transition-transform">
                    {/* Official Instagram Logo SVG */}
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="ig-grad-contact" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#F58529"/>
                          <stop offset="0.5" stopColor="#DD2A7B"/>
                          <stop offset="1" stopColor="#8134AF"/>
                        </linearGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad-contact)" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" stroke="url(#ig-grad-contact)" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad-contact)"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-white">Instagram</span>
                </a>

              </div>

              {/* Quick Copy Coordinates (Clean single-click copy buttons) */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono">
                  <span className="text-slate-400 truncate mr-2">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-1 text-cyan-400 hover:text-cyan-300 rounded cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono">
                  <span className="text-slate-400">{PERSONAL_INFO.phone}</span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-1 text-cyan-400 hover:text-cyan-300 rounded cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Resume Download Action Cluster */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <a
                  href={PERSONAL_INFO.resumePdfUrl}
                  download="Tharun_SK_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume PDF</span>
                </a>

                <button
                  onClick={onOpenResumeStudio}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-800/50 rounded-xl transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Printable Resume Studio</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Inquiry Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-slate-800 shadow-2xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill out the parameters below to launch your email client or trigger an instant WhatsApp message.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. AI/ML Engineering Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1.5">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, role, requirements or meeting proposition..."
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors leading-relaxed resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-xl transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
