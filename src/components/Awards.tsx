import React from 'react';
import { Award as AwardIcon, Sparkles } from 'lucide-react';
import { Award } from '../types';

interface AwardsProps {
  awards: Award[];
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  // Duplicate list for infinite smooth marquee looping
  const marqueeItems = [...awards, ...awards, ...awards];

  return (
    <section id="awards" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#7954F6] font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#7954F6]" />
          <span>Industry Recognition</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
          Honors &amp; Certifications
        </h2>
        <p className="text-sm text-[#A0A0C0] mt-3 max-w-lg mx-auto">
          National hackathon final round achievements and verified AWS cloud certifications.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient py-4">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((award, i) => (
            <div
              key={`${award.title}-${i}`}
              className="glass-card w-[320px] sm:w-[380px] p-6 sm:p-7 rounded-3xl shrink-0 flex flex-col justify-between border border-white/10 hover:border-[#7954F6]/50 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7954F6]/20 to-[#087FAD]/20 border border-[#7954F6]/30 flex items-center justify-center text-[#7954F6] shadow-sm">
                    <AwardIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-[#A0A0C0] border border-white/10">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-1.5 leading-snug">
                  {award.title}
                </h3>
                <span className="text-xs text-gradient-accent font-semibold block mb-3">
                  {award.issuer}
                </span>

                <p className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed">
                  {award.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A0A0C0]">
                <span>Verified distinction</span>
                <span className="text-[#38bdf8]">Industry Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
