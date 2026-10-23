import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Github,
  FileText,
  Mail,
  Terminal,
  Activity,
  Layers,
  Cpu,
} from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
}

const rolesList = [
  'Backend Engineering Intern',
  'Spring Boot & Java Developer',
  'AI & Cloud Solutions Builder',
  'Information Science Engineer',
  'Full Stack Developer (React & FastAPI)',
];

type ActiveTabType = 'erp' | 'governance' | 'studyforge';

const codeSnippets: Record<
  ActiveTabType,
  {
    filename: string;
    lang: string;
    lines: { num: string; text: string; color?: string }[];
  }
> = {
  erp: {
    filename: 'AcademicERPController.java',
    lang: 'Java / Spring Boot',
    lines: [
      { num: '01', text: '@RestController', color: 'text-[#c084fc]' },
      { num: '02', text: '@RequestMapping("/api/v1/erp")', color: 'text-[#38bdf8]' },
      { num: '03', text: 'public class AcademicERPController {', color: 'text-white' },
      { num: '04', text: '  @Autowired private AssessmentService service;', color: 'text-slate-300' },
      { num: '05', text: '  @Autowired private AmazonS3Client s3Client;', color: 'text-slate-300' },
      { num: '06', text: '  @PostMapping("/results/process")', color: 'text-[#c084fc]' },
      { num: '07', text: '  public ResponseEntity<ResultDTO> process(...) {', color: 'text-[#38bdf8]' },
      { num: '08', text: '    // Secrets Manager auth + async pipeline', color: 'text-purple-400/80 italic' },
      { num: '09', text: '    return ResponseEntity.ok(service.execute());', color: 'text-[#a855f7] font-semibold' },
      { num: '10', text: '  }', color: 'text-white' },
      { num: '11', text: '}', color: 'text-white' },
    ],
  },
  governance: {
    filename: 'smart_governance.py',
    lang: 'Python / FastAPI',
    lines: [
      { num: '01', text: 'from fastapi import FastAPI, UploadFile', color: 'text-[#c084fc]' },
      { num: '02', text: 'from models.multimodal import CivicClassifier', color: 'text-[#38bdf8]' },
      { num: '03', text: 'app = FastAPI(title="SmartGovernanceAI")', color: 'text-white' },
      { num: '04', text: 'classifier = CivicClassifier(cv="yolov8", nlp="roberta")', color: 'text-slate-300' },
      { num: '05', text: '@app.post("/api/issues/route")', color: 'text-[#c084fc]' },
      { num: '06', text: 'async def route_civic_issue(img: UploadFile, text: str):', color: 'text-[#38bdf8]' },
      { num: '07', text: '    category, urgency = await classifier.infer(img, text)', color: 'text-white' },
      { num: '08', text: '    # Real-time automated routing workflow', color: 'text-cyan-400/80 italic' },
      { num: '09', text: '    return {"routed_dept": category, "urgency": urgency}', color: 'text-[#38bdf8] font-semibold' },
      { num: '10', text: '    # Technoverse Top 24 National Finalist', color: 'text-[#c084fc]/90 italic' },
    ],
  },
  studyforge: {
    filename: 'studyforge_agent.py',
    lang: 'Python / Groq LLM',
    lines: [
      { num: '01', text: 'from groq import Groq', color: 'text-[#c084fc]' },
      { num: '02', text: 'from langgraph.graph import StateGraph', color: 'text-[#38bdf8]' },
      { num: '03', text: 'client = Groq(api_key=SECRETS["GROQ_KEY"])', color: 'text-slate-300' },
      { num: '04', text: 'def build_study_assistant(syllabus: str):', color: 'text-white' },
      { num: '05', text: '    workflow = StateGraph(StudyPlanState)', color: 'text-slate-300' },
      { num: '06', text: '    workflow.add_node("plan_gen", generate_plan)', color: 'text-[#38bdf8]' },
      { num: '07', text: '    workflow.add_node("flashcards", build_deck)', color: 'text-[#c084fc]' },
      { num: '08', text: '    # Low-latency streaming: ~480 tok/s', color: 'text-purple-400/80 italic' },
      { num: '09', text: '    return workflow.compile().invoke(syllabus)', color: 'text-[#c084fc] font-semibold' },
      { num: '10', text: '    # JWT Auth + Analytics Dashboard ready', color: 'text-slate-400 italic' },
    ],
  },
};

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeCodeTab, setActiveCodeTab] = useState<ActiveTabType>('erp');

  // Cycling roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const linkedinUrl =
    profile.socials.find((s) => s.icon === 'linkedin')?.url ||
    'https://linkedin.com/in/shreyasetty';
  const githubUrl =
    profile.socials.find((s) => s.icon === 'github')?.url ||
    'https://github.com/shreyasetty';

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Aurora glow perspective floor grid */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080817] via-[#050505]/70 to-transparent pointer-events-none" />
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none opacity-25"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(121, 84, 246, 0.2) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(8, 127, 173, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'bottom center',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Intro text and action buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Hi, I'm */}
          <div className="font-mono text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#38bdf8] bg-clip-text text-transparent mb-2 tracking-tight">
            Hi, I&apos;m
          </div>

          {/* Name Header with Blinking Purple Cursor */}
          <div className="flex items-center justify-center lg:justify-start mb-6 w-full">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              {profile.name}
            </h1>
            <span
              className={`w-2.5 sm:w-3.5 h-10 sm:h-16 bg-[#a855f7] ml-2 inline-block shadow-[0_0_16px_#a855f7] shrink-0 transition-opacity duration-100 ${
                cursorVisible ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Rotating Role with Monospace Prompt */}
          <div className="h-10 flex items-center justify-center lg:justify-start mb-6 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                className="text-xl sm:text-2xl font-mono font-bold tracking-wider text-[#38bdf8] flex items-center gap-2"
              >
                <span className="text-[#c084fc]">&gt;</span>
                <span>{rolesList[roleIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Philosophy / Bio Quote */}
          <p className="text-slate-300 text-base sm:text-lg font-mono leading-relaxed italic max-w-xl mb-10">
            Engineering robust Spring Boot microservices, intelligent AI agents &amp; scalable cloud architectures.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 font-mono text-sm w-full">
            {/* LinkedIn */}
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#8b5cf6]/50 bg-[#8b5cf6]/10 text-[#c084fc] hover:bg-[#8b5cf6]/20 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)] transition-all font-semibold tracking-wider text-xs sm:text-sm"
            >
              <Linkedin className="w-4 h-4 text-[#c084fc]" />
              <span>LINKEDIN</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-[#38bdf8]/50 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)] transition-all font-semibold tracking-wider text-xs sm:text-sm"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GITHUB</span>
            </motion.a>

            {/* Resume Button: Opens in new tab */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#7954F6]/50 bg-gradient-to-r from-[#7954F6]/20 to-[#087FAD]/20 text-white hover:from-[#7954F6]/30 hover:to-[#087FAD]/30 hover:shadow-[0_0_24px_rgba(121,84,246,0.4)] transition-all font-semibold tracking-wider text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4 text-[#c084fc]" />
              <span>RESUME</span>
            </motion.a>

            {/* About Button: Scrolls to #about */}
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#about');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#087FAD]/50 bg-[#087FAD]/15 text-[#38bdf8] hover:bg-[#087FAD]/25 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)] transition-all font-semibold tracking-wider text-xs sm:text-sm"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              <span>ABOUT</span>
            </motion.a>

            {/* Contact */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#7954F6]/50 bg-gradient-to-r from-[#7954F6]/20 to-[#087FAD]/20 text-white hover:from-[#7954F6]/30 hover:to-[#087FAD]/30 hover:shadow-[0_0_24px_rgba(121,84,246,0.4)] transition-all font-semibold tracking-wider text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 text-[#c084fc]" />
              <span>CONTACT</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Aurora Glass Code Console & Floating HUD Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative py-6"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] flex items-center justify-center">
            {/* Ambient Aurora Radial Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7954F6]/30 via-[#8b5cf6]/20 to-[#087FAD]/30 blur-[80px] pointer-events-none" />

            {/* Central Aurora Glass IDE Console Window */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 w-full rounded-2xl bg-[#040614]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.85)] overflow-hidden font-mono"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10">
                {/* macOS / Linux Glass Window Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400/80" />
                  <span className="text-[11px] text-slate-300 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#c084fc]" />
                    <span>shreya@spring-cloud</span>
                  </span>
                </div>

                {/* Status Pill in Purple */}
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 text-[#c084fc] text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
                  <span>BACKEND ACTIVE</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center px-2 pt-2 bg-black/40 border-b border-white/5 text-[11px] gap-1 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveCodeTab('erp')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x ${
                    activeCodeTab === 'erp'
                      ? 'bg-[#040614] border-white/15 text-[#c084fc] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Cpu className="w-3 h-3 text-[#c084fc]" />
                  <span>AcademicERP.java</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('governance')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x ${
                    activeCodeTab === 'governance'
                      ? 'bg-[#040614] border-white/15 text-[#38bdf8] font-semibold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Activity className="w-3 h-3 text-[#38bdf8]" />
                  <span>smart_governance.py</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab('studyforge')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors border-t border-x ${
                    activeCodeTab === 'studyforge'
                      ? 'bg-[#040614] border-white/15 text-white font-semibold'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3 h-3 text-[#a855f7]" />
                  <span>studyforge_agent.py</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 text-[11px] sm:text-xs leading-relaxed space-y-1 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCodeTab}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {codeSnippets[activeCodeTab].lines.map((line) => (
                      <div key={line.num} className="flex items-start gap-3">
                        <span className="text-[#475569] select-none text-[10px] w-4 text-right shrink-0">
                          {line.num}
                        </span>
                        <span
                          className={`${
                            line.color || 'text-slate-200'
                          } font-mono whitespace-pre`}
                        >
                          {line.text}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="px-4 py-2 bg-black/60 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                    <strong className="text-white">Spring Boot 3.2</strong>
                  </span>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <span className="hidden sm:inline">
                    AWS S3: <strong className="text-[#38bdf8]">Connected</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#38bdf8] font-bold">Groq: 480 tok/s</span>
                  <span className="text-[#c084fc]">FastAPI + CV</span>
                </div>
              </div>
            </motion.div>

            {/* Left Floating HUD Widget: "AI SMART GOVERNANCE" in Violet/Purple */}
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              className="absolute -left-10 sm:-left-16 top-10 z-20 w-[145px] p-2.5 rounded-lg bg-[#040614]/95 border border-[#8b5cf6]/50 shadow-[0_0_24px_rgba(139,92,246,0.3)] backdrop-blur-md font-mono text-[9px] leading-tight select-none hidden sm:block"
            >
              {/* Corner bracket markers */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#8b5cf6]" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#8b5cf6]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#8b5cf6]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#8b5cf6]" />

              <div className="text-[#c084fc] font-bold text-[9.5px] mb-1">
                CIVIC GOVERNANCE
              </div>
              <div className="text-[#38bdf8]">&gt; POST /api/civic</div>
              <div className="text-slate-300">&gt; CV: YOLOv8 &amp; NLP</div>
              <div className="text-[#c084fc]">&gt; accuracy: 94.6%</div>
              <div className="text-[#a855f7] mt-0.5">[████████░░] 94%</div>
              <div className="text-[#c084fc] text-[8px] mt-1 font-semibold">
                STATUS: DISPATCHED
              </div>
            </motion.div>

            {/* Top-Right Floating HUD Widget: "STUDYFORGE AI" in Cyan/Violet */}
            <motion.div
              animate={{ y: [0, -7, 0], opacity: [0.85, 1, 0.85] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.1,
              }}
              className="absolute -right-8 sm:-right-14 -top-6 z-20 w-[138px] p-2.5 rounded-lg bg-[#040614]/95 border border-[#087FAD]/50 shadow-[0_0_24px_rgba(8,127,173,0.3)] backdrop-blur-md font-mono text-[9px] leading-tight select-none hidden sm:block"
            >
              {/* Corner bracket markers */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#38bdf8]" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#38bdf8]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#38bdf8]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#38bdf8]" />

              <div className="text-[#38bdf8] font-bold text-[9.5px] mb-1">
                STUDYFORGE AI
              </div>
              <div className="text-[#c084fc]">groq = Groq(key)</div>
              <div className="text-slate-300">&gt; graph.compile()</div>
              <div className="text-[#38bdf8]">&gt; flashcards gen</div>
              <div className="text-[#fbbf24] mt-0.5"># 480 tok/s ✓</div>
            </motion.div>

            {/* Bottom-Right Floating HUD Widget: "Placement Model" in Purple/Cyan */}
            <motion.div
              animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.7,
              }}
              className="absolute -right-10 sm:-right-16 -bottom-6 z-20 w-[140px] p-2 rounded-lg bg-[#040614]/95 border border-[#8b5cf6]/50 shadow-[0_0_24px_rgba(139,92,246,0.3)] backdrop-blur-md font-mono select-none hidden sm:block"
            >
              {/* Corner bracket markers */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#8b5cf6]" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#8b5cf6]" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#8b5cf6]" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#8b5cf6]" />

              <div className="text-[#c084fc] font-bold text-[8.5px] mb-1 text-center">
                Placement Predictor
              </div>
              <svg width="120" height="66" viewBox="0 0 114 72" className="mx-auto">
                {/* Node connection lines */}
                <line x1="57" y1="36" x2="25" y2="15" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
                <line x1="57" y1="36" x2="89" y2="15" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
                <line x1="57" y1="36" x2="14" y2="56" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                <line x1="57" y1="36" x2="100" y2="56" stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                <line x1="57" y1="36" x2="57" y2="66" stroke="#c084fc" strokeWidth="1" opacity="0.6" />
                <line x1="25" y1="15" x2="14" y2="56" stroke="#8b5cf6" strokeWidth="0.7" opacity="0.4" />
                <line x1="89" y1="15" x2="100" y2="56" stroke="#8b5cf6" strokeWidth="0.7" opacity="0.4" />

                {/* Nodes in purple and cyan */}
                <circle cx="57" cy="36" r="6" fill="#a855f7" opacity="0.95" />
                <circle cx="25" cy="15" r="4.5" fill="#38bdf8" opacity="0.85" />
                <circle cx="89" cy="15" r="4.5" fill="#38bdf8" opacity="0.85" />
                <circle cx="14" cy="56" r="4.5" fill="#c084fc" opacity="0.85" />
                <circle cx="100" cy="56" r="4.5" fill="#c084fc" opacity="0.85" />
                <circle cx="57" cy="66" r="4.5" fill="#38bdf8" opacity="0.85" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
