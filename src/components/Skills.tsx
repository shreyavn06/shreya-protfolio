import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Cloud, CheckCircle2, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types';
import { SpotlightCard } from './SpotlightCard';

const categoryIcons = [
  <Cpu key="cpu" className="w-5 h-5 text-[#7954F6]" />,
  <Layers key="layers" className="w-5 h-5 text-[#087FAD]" />,
  <Cloud key="cloud" className="w-5 h-5 text-[#7954F6]" />,
  <CheckCircle2 key="check" className="w-5 h-5 text-[#087FAD]" />,
];

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#7954F6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7954F6]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Technical Stack & Expertise
          </h2>
          <p className="text-sm text-[#A0A0C0] mt-3">
            Constructing reliable production systems using battle-tested libraries, strict typing, and modern standards.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard
                glowColor={idx % 2 === 0 ? 'purple' : 'cyan'}
                className="p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      {categoryIcons[idx % categoryIcons.length]}
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-2xl text-xs font-medium bg-white/[0.03] text-[#A0A0C0] border border-white/10 hover:border-[#7954F6]/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A0A0C0]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FAD]" />
                    Production Verified
                  </span>
                  <span className="text-gradient-accent font-semibold">Enterprise Ready</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
