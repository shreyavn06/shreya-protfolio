import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy } from 'lucide-react';
import { TimelineItem } from '../types';

interface EducationProps {
  items: TimelineItem[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  const accentColors = [
    { border: '#087FAD', gradient: 'from-[#087FAD] to-[#087FAD]', glow: 'rgba(8,127,173,0.3)' },
    { border: '#7954F6', gradient: 'from-[#7954F6] to-[#7954F6]', glow: 'rgba(121,84,246,0.3)' },
    { border: '#7954F6', gradient: 'from-[#7954F6] to-[#087FAD]', glow: 'rgba(121,84,246,0.3)' },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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

        {/* Cards Stack */}
        <div className="space-y-6 sm:space-y-6">
          {items.map((item, index) => {
            const colors = accentColors[index % accentColors.length];
            const accentColorValue = colors.border;

            return (
              <motion.div
                key={item.organization + item.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative group"
              >
                {/* Card Container */}
                <div
                  className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-300"
                  style={{
                    borderLeft: `4px solid ${accentColorValue}`,
                    boxShadow: `0 0 24px ${colors.glow}`,
                  }}
                >
                  {/* Accent Glow on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${colors.glow} 0%, transparent 50%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top Row: Dot + Title + Score Badge */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4 mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        {/* Small Dot */}
                        <div
                          className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: accentColorValue }}
                        />

                        {/* Institution Name */}
                        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                          {item.organization}
                        </h3>
                      </div>

                      {/* Score Badge */}
                      {item.score && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-sm shrink-0"
                          style={{
                            boxShadow: `0 0 16px ${colors.glow}`,
                          }}
                        >
                          <Trophy className="w-4 h-4 text-[#FACC15]" />
                          <span className="text-lg font-bold text-white">{item.score}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* Course/Board */}
                    <div className="mb-2 ml-5.5">
                      <p
                        className="text-lg sm:text-xl font-semibold"
                        style={{ color: accentColorValue }}
                      >
                        {item.title}
                      </p>
                    </div>

                    {/* Date Range with Dot */}
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A0A0C0] mb-4 ml-5.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A0A0C0]" />
                      <span>{item.period}</span>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] bg-white/[0.08] mb-4" />

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                      {item.description.map((desc, dIdx) => (
                        <p
                          key={dIdx}
                          className="text-sm text-white/70 leading-relaxed"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] text-[#A0A0C0] border border-white/[0.1]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
