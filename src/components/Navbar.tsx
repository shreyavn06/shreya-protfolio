import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Briefcase, User, Box, Award, SlidersHorizontal, Sparkles } from 'lucide-react';
import { PROFILE } from '../constants';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface NavbarProps {
  customName?: string;
  onOpenCustomize?: () => void;
}

const navItems = [
  { label: 'HOME', href: '#home', prefix: '>_' },
  { label: 'ABOUT', href: '#about', icon: Sparkles },
  { label: 'EXP', href: '#experience', icon: Briefcase },
  { label: 'PROJECTS', href: '#projects', icon: Box },
  { label: 'SKILLS', href: '#skills', icon: User },
  { label: 'EDU', href: '#education', icon: BookOpen },
  { label: 'AWARDS', href: '#awards', icon: Award },
];

export const Navbar: React.FC<NavbarProps> = ({ customName, onOpenCustomize }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'awards', 'contact'];
  const activeId = useScrollSpy(sectionIds, 140);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayName = customName || PROFILE.name;

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3 pointer-events-none">
      <nav className="pointer-events-auto relative flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-2.5 rounded-2xl bg-[#080817]/90 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
        {/* Brand: Boxed Cyber Badge with Violet/Purple theme */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center px-3.5 py-1.5 rounded-lg border border-[#8b5cf6]/50 bg-[#8b5cf6]/10 text-[#c084fc] font-mono font-bold tracking-widest text-xs uppercase shadow-[0_0_15px_rgba(139,92,246,0.25)] hover:bg-[#8b5cf6]/20 transition-all hover:scale-[1.02]"
        >
          {displayName.toUpperCase()}
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeId === id;
            const IconComponent = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'border border-[#8b5cf6]/60 bg-[#8b5cf6]/20 text-white shadow-[0_0_12px_rgba(139,92,246,0.3)] font-bold'
                    : 'text-[#A0A0C0] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {item.prefix && <span className="text-[#a855f7]">{item.prefix}</span>}
                {IconComponent && <IconComponent className="w-3.5 h-3.5 text-[#a855f7]/80" />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Status Indicator: Violet / Cyan Aurora */}
        <div className="flex items-center gap-3">
          {onOpenCustomize && (
            <button
              onClick={onOpenCustomize}
              title="Customize Portfolio"
              className="hidden sm:inline-flex p-1.5 rounded-lg border border-white/10 text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#c084fc] px-2.5 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a855f7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b5cf6]" />
            </span>
            <span className="text-[11px] font-bold">ONLINE</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/5"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-md mx-auto p-4 rounded-2xl bg-[#080817]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-1.5 md:hidden font-mono z-50"
          >
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeId === id;
              const IconComponent = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-[#8b5cf6]/20 text-white border border-[#8b5cf6]/40 font-bold'
                      : 'text-[#A0A0C0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.prefix && <span className="text-[#a855f7]">{item.prefix}</span>}
                  {IconComponent && <IconComponent className="w-4 h-4 text-[#a855f7]" />}
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="mt-2 text-center text-xs font-bold py-2.5 rounded-xl bg-gradient-to-r from-[#7954F6] to-[#087FAD] text-white"
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
