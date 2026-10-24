import React from 'react';
import { Brain, Code, Target, Compass, Award, GraduationCap, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
            01. Background &amp; Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Pioneering Intelligent Systems &amp; Web Architectures
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging the gap between state-of-the-art machine learning models and fluid, user-first web applications.
          </p>
        </div>

        {/* 2-Column Story & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic &amp; Engineering Focus</span>
              </h3>
              <p>
                Currently pursuing a <span className="text-white font-medium">Bachelor of Engineering (B.E.) in Computer Science and Engineering</span> specializing in <span className="text-cyan-300 font-medium">Artificial Intelligence and Machine Learning</span> at the Faculty of Engineering and Technology, Annamalai University (2024–2028).
              </p>
              <p>
                My educational journey began with strong academic discipline from 6th to 12th standard at <span className="text-white font-medium">K. C. Sankaralingam Nadar Higher Secondary School</span>, cultivating rigorous analytical fundamentals in algorithms, linear algebra, and computational logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span>Dual Passion: AI/ML &amp; Web Development</span>
              </h3>
              <p>
                While many developers specialize in either machine learning notebooks or pure frontend layouts, my ambition lies in <span className="text-white font-semibold">cohesive end-to-end integration</span>. I design systems where LLMs and computer vision don't stay trapped in scripts, but power reactive web applications that users love.
              </p>
              <p>
                From building <span className="text-cyan-300 font-medium">THARUN OS (Jarvis)</span> with real-time speech synthesis, custom accents, and live camera vision, to architecting <span className="text-cyan-300 font-medium">Nova AI</span> on Google Gemini and constructing clean social platforms like the <span className="text-cyan-300 font-medium">Instagram Clone</span>, I craft solutions that perform reliably at every layer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Career Goals &amp; Problem Solving</span>
              </h3>
              <p>
                <span className="text-white font-medium">Career Goal:</span> {PERSONAL_INFO.careerGoal}
              </p>
              <p>
                <span className="text-white font-medium">Problem-Solving Approach:</span> {PERSONAL_INFO.problemSolvingPhilosophy}
              </p>
            </div>
          </div>

          {/* Core Pillars Bento (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Multimodal AI &amp; Speech</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Hands-on with Gemini API, voice modulation, speech recognition, and XR transformations explored during research at Nanomatics Technologies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-blue-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Modern Full-Stack Engineering</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                React.js, Vue.js, Tailwind CSS, Python FastAPI, and Node.js for high-throughput, latency-optimized client and server architectures.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Systems Operations &amp; Data</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Trained in enterprise AI operations at SyberGate Technologies, data governance, relational modeling (MySQL/PostgreSQL), and Docker workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0c121e] border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Continuous Growth &amp; Rigor</h4>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                NPTEL Deep Learning certified, high academic standing (GPA 8.13/10.00), and rapid learner driven by teamwork and tangible impact.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
