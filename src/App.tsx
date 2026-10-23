import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundOrbs } from './components/BackgroundOrbs';
import { ThreeAuroraBackground } from './components/ThreeAuroraBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  PROFILE,
  SKILL_CATEGORIES,
  EXPERIENCE_ITEMS,
  EDUCATION_ITEMS,
  PROJECTS,
  AWARDS,
} from './constants';

export const App: React.FC = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
      className="min-h-screen relative bg-[#080817] text-white selection:bg-[#7954F6]/40 selection:text-white antialiased overflow-x-hidden font-body"
    >
      {/* Background Animated Aurora Glow Orbs & 3D WebGL Particle Field */}
      <ThreeAuroraBackground />
      <BackgroundOrbs />

      {/* Floating Glass Pill Navbar with Animated Active Indicator */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero profile={PROFILE} />
        <About profile={PROFILE} />
        <Experience items={EXPERIENCE_ITEMS} />
        <Projects projects={PROJECTS} />
        <Skills categories={SKILL_CATEGORIES} />
        <Education items={EDUCATION_ITEMS} />
        <Awards awards={AWARDS} />
        <Contact profile={PROFILE} />
      </main>

      {/* Footer */}
      <Footer profile={PROFILE} />
    </motion.div>
  );
};

export default App;
