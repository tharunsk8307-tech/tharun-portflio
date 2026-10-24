import React from 'react';

export const MarqueeDivider: React.FC = () => {
  const items = [
    "GOOGLE GEMINI API",
    "LARGE LANGUAGE MODELS",
    "VOICE SYNTHESIS & SPEECH AI",
    "REACT.JS & VUE.JS",
    "PYTHON & FASTAPI",
    "COMPUTER VISION (OPENCV)",
    "RAG PIPELINES",
    "MYSQL & POSTGRESQL",
    "AUGMENTED & VIRTUAL REALITY (XR)",
    "DOCKER & DEV TOOLS"
  ];

  return (
    <div className="relative py-4 border-y border-slate-800/80 bg-slate-950/70 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.concat(items).map((item, index) => (
          <div key={index} className="inline-flex items-center gap-4 mx-6 text-xs font-mono font-semibold tracking-wider text-slate-400 hover:text-cyan-400 transition-colors">
            <span>{item}</span>
            <span aria-hidden="true" className="text-cyan-500/60">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
