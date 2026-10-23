import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Globe2, Sparkles, BookOpen } from 'lucide-react';
import { ProfileData } from '../types';
import { SpotlightCard } from './SpotlightCard';

const highlights = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#8b5cf6]" />,
    title: "Spring Boot & Backend Engineering",
    text: "Architecting modular RESTful microservices, migrating legacy services to Java Spring Boot, and handling complex high-volume business logic."
  },
  {
    icon: <Zap className="w-5 h-5 text-[#38bdf8]" />,
    title: "AWS Cloud & Secure Infrastructure",
    text: "AWS Cloud Practitioner certified. Seamlessly orchestrating Amazon S3 object pipelines and AWS Secrets Manager for zero-leak credential storage."
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#c084fc]" />,
    title: "Applied AI, Vision & LLMs",
    text: "Integrating multimodal Computer Vision (YOLOv8) with NLP, building low-latency Groq LLM study assistants, and LangGraph workflows."
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#38bdf8]" />,
    title: "Leadership & Civic Governance",
    text: "Co-founded MUNSOC Bengaluru, served as Vice President, DSI MUN 3.0 UNHRC delegate, and departmental Placement Coordinator at JSSATE."
  }
];

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#38bdf8] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Background &amp; Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Backend Rigor &amp; Applied AI Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <SpotlightCard className="p-8 sm:p-10 border-white/10">
              <div className="flex items-center gap-2 mb-4 text-[#c084fc] text-sm font-semibold">
                <BookOpen className="w-4 h-4 text-[#38bdf8]" />
                <span>JSS Academy of Technical Education, Bengaluru • Information Science</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
                Engineering reliable systems from code to cloud.
              </h3>

              {profile.bioParagraphs.map((para, i) => (
                <p key={i} className="text-[#A0A0C0] leading-relaxed mb-4 last:mb-0 text-sm sm:text-base">
                  {para}
                </p>
              ))}

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="block text-2xl sm:text-3xl font-heading font-bold text-white">9.1</span>
                  <span className="text-xs text-[#A0A0C0] mt-0.5 block">CGPA (B.E. ISE)</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-heading font-bold text-[#c084fc]">Top 24</span>
                  <span className="text-xs text-[#A0A0C0] mt-0.5 block">Technoverse Finalist</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-heading font-bold text-[#38bdf8]">Rizzle Tech</span>
                  <span className="text-xs text-[#A0A0C0] mt-0.5 block">Backend Intern</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-heading font-bold text-white">5+</span>
                  <span className="text-xs text-[#A0A0C0] mt-0.5 block">Certifications</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <SpotlightCard key={index} className="p-6 border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold font-heading text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A0A0C0] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
