import React, { useState, useEffect } from 'react';
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
import { CustomizeModal } from './components/CustomizeModal';
import {
  PROFILE,
  SKILL_CATEGORIES,
  EXPERIENCE_ITEMS,
  EDUCATION_ITEMS,
  PROJECTS,
  AWARDS,
} from './constants';
import { ProfileData } from './types';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('aurora_portfolio_profile_v5');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name === PROFILE.name && parsed.email === PROFILE.email) {
          return parsed;
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
    return PROFILE;
  });

  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('aurora_portfolio_profile_v5', JSON.stringify(profile));
    } catch {
      // Ignore storage errors
    }
  }, [profile]);

  const handleResetProfile = () => {
    setProfile(PROFILE);
    try {
      localStorage.removeItem('aurora_portfolio_profile_v5');
    } catch {
      // Ignore
    }
  };

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
      <Navbar
        customName={profile.name}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero profile={profile} />
        <About profile={profile} />
        <Experience items={EXPERIENCE_ITEMS} />
        <Projects projects={PROJECTS} />
        <Skills categories={SKILL_CATEGORIES} />
        <Education items={EDUCATION_ITEMS} />
        <Awards awards={AWARDS} />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Interactive Customization Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSave={(updated) => setProfile(updated)}
        onReset={handleResetProfile}
      />
    </motion.div>
  );
};

export default App;
