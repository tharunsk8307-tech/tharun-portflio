/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeDivider } from './components/MarqueeDivider';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeStudioModal } from './components/ResumeStudioModal';

export default function App() {
  const [isResumeStudioOpen, setIsResumeStudioOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Portfolio Application Interface */}
      <div className="portfolio-screen">
        <Navbar onOpenResumeStudio={() => setIsResumeStudioOpen(true)} />

        <main>
          <Hero onOpenResumeStudio={() => setIsResumeStudioOpen(true)} />
          <MarqueeDivider />
          <About />
          <Skills />
          <Projects />
          <ExperienceEducation />
          <Contact onOpenResumeStudio={() => setIsResumeStudioOpen(true)} />
        </main>

        <Footer onOpenResumeStudio={() => setIsResumeStudioOpen(true)} />
      </div>

      {/* Interactive, Modifiable & Printable Resume Modal */}
      <ResumeStudioModal
        isOpen={isResumeStudioOpen}
        onClose={() => setIsResumeStudioOpen(false)}
      />
    </div>
  );
}
