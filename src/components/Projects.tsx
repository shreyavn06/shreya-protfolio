import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Activity, Layers, Terminal } from 'lucide-react';
import { Project } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
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
            <span>AI Solutions, Backend Systems &amp; Applied ML</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Projects &amp; Technical Architecture
          </h2>
          <p className="text-sm text-[#A0A0C0] mt-3">
            Spring Boot microservices, FastAPI multimodal governance platforms, and Groq LLM agent pipelines.
          </p>
        </motion.div>

        {/* Featured Flagship Bento Cards */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A0A0C0] uppercase">
            <Terminal className="w-4 h-4 text-[#8b5cf6]" />
            <span>Featured Flagship Solutions</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <SpotlightCard
                  tilt
                  glowColor={idx === 0 ? 'purple' : idx === 1 ? 'cyan' : 'aurora'}
                  className="p-8 h-full flex flex-col justify-between border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#8b5cf6]/20 text-[#c084fc] border border-[#8b5cf6]/30">
                        {project.period || '2026'}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub`}
                            className="p-1.5 rounded-lg text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} Live`}
                            className="p-1.5 rounded-lg text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed">
                      {project.description}
                    </p>

                    {project.metrics && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#087FAD]/15 border border-[#087FAD]/30 text-[#38bdf8] font-semibold text-xs">
                        <Activity className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-[#A0A0C0] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-semibold hover:border-[#8b5cf6]/50 hover:text-[#c084fc] transition-all hover:scale-[1.01]"
                      >
                        <span>View Repository</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid (if any) */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A0A0C0] uppercase">
              <Layers className="w-4 h-4 text-[#38bdf8]" />
              <span>Full-Stack &amp; Applied Systems</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <SpotlightCard
                    tilt
                    glowColor={idx % 2 === 0 ? 'cyan' : 'purple'}
                    className="p-7 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-lg font-bold font-heading text-white">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="GitHub Repository"
                              className="text-[#A0A0C0] hover:text-white transition-colors p-1"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Live Demo"
                              className="text-[#A0A0C0] hover:text-white transition-colors p-1"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-white/[0.04] text-[#A0A0C0] border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
