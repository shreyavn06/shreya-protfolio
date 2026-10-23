import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-[#080817]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold font-heading text-white mb-1">
            <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#7954F6] to-[#087FAD] flex items-center justify-center text-white">
              <Sparkles className="w-2.5 h-2.5" />
            </span>
            <span>{profile.name}</span>
          </div>
          <p className="text-xs text-[#A0A0C0]">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-[#A0A0C0]/60 mt-1">
            Aurora Glass Portfolio • React 19 • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-2xl glass-card hover:bg-white/10 hover:border-white/20 text-[#A0A0C0] hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
