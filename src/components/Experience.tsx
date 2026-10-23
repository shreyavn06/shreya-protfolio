import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, Briefcase, Award } from 'lucide-react';
import { TimelineItem } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ExperienceProps {
  items: TimelineItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  const [filter, setFilter] = useState<'All' | 'Internship' | 'Leadership'>('All');

  const filteredItems = items.filter((item) => {
    if (filter === 'All') return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#087FAD] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#087FAD]" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Work & Leadership Experience
          </h2>
          <p className="text-sm text-[#A0A0C0] mt-3">
            Backend engineering internships, cloud architecture, and organizational leadership.
          </p>

          {/* Filter Pill Switcher */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-white/[0.04] border border-white/10">
            {(['All', 'Internship', 'Leadership'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab
                    ? 'bg-gradient-to-r from-[#7954F6] to-[#087FAD] text-white shadow-md'
                    : 'text-[#A0A0C0] hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Roles' : tab === 'Internship' ? 'Internships' : 'Leadership'}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Glowing Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#7954F6] via-[#087FAD] to-transparent opacity-40 shadow-[0_0_12px_rgba(121,84,246,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.organization + item.period}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Timeline Center Node with Aurora Ring */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080817] border-2 border-[#7954F6] items-center justify-center shadow-[0_0_20px_rgba(121,84,246,0.6)] z-20">
                      {item.type === 'Leadership' ? (
                        <Award className="w-4 h-4 text-[#087FAD]" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-[#7954F6]" />
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-1/2 md:px-8">
                      <SpotlightCard
                        glowColor={isEven ? 'purple' : 'cyan'}
                        className="p-7 sm:p-8"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#7954F6]/20 text-purple-300 border border-[#7954F6]/30">
                              {item.title}
                            </span>
                            {item.type && (
                              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-white/5 text-[#A0A0C0] border border-white/10">
                                {item.type}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-[#A0A0C0]">
                            <Calendar className="w-3.5 h-3.5 text-[#087FAD]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between mt-1 mb-4 gap-2">
                          <h3 className="text-xl font-bold font-heading text-white">
                            {item.organization}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[#A0A0C0]">
                            <MapPin className="w-3.5 h-3.5 text-[#7954F6]" />
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <ul className="space-y-2.5 mb-6">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed flex items-start gap-2.5">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#087FAD] shrink-0" />
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: desc.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-medium">$1</strong>')
                                }}
                              />
                            </li>
                          ))}
                        </ul>

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
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
