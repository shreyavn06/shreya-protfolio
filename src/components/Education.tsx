import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { TimelineItem } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface EducationProps {
  items: TimelineItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#7954F6] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#7954F6]" />
            <span>Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Education & Research
          </h2>
          <p className="text-sm text-[#A0A0C0] mt-3">
            Rigorous foundations in Information Science &amp; Engineering, database management, and computer networks.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#087FAD] via-[#7954F6] to-transparent opacity-40 shadow-[0_0_12px_rgba(8,127,173,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.organization + item.period}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Glowing Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080817] border-2 border-[#087FAD] items-center justify-center shadow-[0_0_20px_rgba(8,127,173,0.6)] z-20">
                    <GraduationCap className="w-4 h-4 text-[#087FAD]" />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <SpotlightCard
                        glowColor={isEven ? 'cyan' : 'purple'}
                        className="p-7 sm:p-8"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#087FAD]">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[#A0A0C0]">
                            <Calendar className="w-3.5 h-3.5 text-[#7954F6]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-white mb-1">
                          {item.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-2 text-sm text-[#087FAD] font-medium mb-4">
                          <span>{item.organization}</span>
                          <span className="text-white/20">•</span>
                          <span className="text-[#A0A0C0] text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#7954F6]" />
                            {item.location}
                          </span>
                        </div>

                        <div className="space-y-2 mb-6">
                          {item.description.map((desc, dIdx) => (
                            <p key={dIdx} className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed">
                              {desc}
                            </p>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-white/[0.04] text-[#A0A0C0] border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </SpotlightCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
