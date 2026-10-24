import React, { useState } from 'react';
import { Search, Sparkles, Terminal, Code2, Database, Cpu, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(s => ({ ...s, category: cat.title }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'aiml' && skill.category.includes('AI & Machine Learning')) ||
      (activeTab === 'frontend' && skill.category.includes('Frontend')) ||
      (activeTab === 'backend' && skill.category.includes('Backend')) ||
      (activeTab === 'database' && skill.category.includes('Databases')) ||
      (activeTab === 'tools' && skill.category.includes('Tools')) ||
      (activeTab === 'basics' && skill.category.includes('Basics'));

    const matchesSearch = searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#070b13] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              02. Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills, Frameworks &amp; Intelligence Stacks
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Curated technologies applied across production AI models, interactive clients, and back-end systems.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Gemini, React, Docker)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-900 border border-slate-800 focus:border-cyan-500 rounded-xl text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800/80 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Skills ({allSkills.length})
          </button>
          <button
            onClick={() => setActiveTab('aiml')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'aiml'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI &amp; Machine Learning
          </button>
          <button
            onClick={() => setActiveTab('frontend')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'frontend'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'backend'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab('database')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'database'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Databases
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'tools'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tools &amp; DevOps
          </button>
          <button
            onClick={() => setActiveTab('basics')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'basics'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Core Basics (C, C++, Java)
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 group-hover:border-cyan-500/50 transition-all">
                      <TechIcon name={skill.name} className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  {/* Clean unboxed level label with dot separator */}
                  <div className="text-right whitespace-nowrap shrink-0">
                    <span className="text-[11px] font-mono text-cyan-400">
                      {skill.level}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {skill.description}
                </p>
              </div>

              {/* Quiet unboxed category footer */}
              <div className="pt-2.5 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skill.category}</span>
                <span className="text-slate-600">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 p-8 rounded-2xl bg-slate-900/30 border border-slate-800 text-slate-400">
            No matching skills found for &quot;{searchQuery}&quot;. Try searching for &quot;Python&quot;, &quot;Gemini&quot;, or &quot;React&quot;.
          </div>
        )}

      </div>
    </section>
  );
};
