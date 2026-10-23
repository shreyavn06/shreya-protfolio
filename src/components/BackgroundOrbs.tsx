import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const BackgroundOrbs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[12%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-[#7954F6]/15 blur-[140px]" />
        <div className="absolute top-[45%] right-[8%] w-[42vw] h-[42vw] max-w-[600px] max-h-[600px] rounded-full bg-[#087FAD]/15 blur-[150px]" />
        <div className="absolute -bottom-[5%] left-[25%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-[#7954F6]/12 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] left-[10%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full bg-[#7954F6]/20 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#087FAD]/20 blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 50, 0],
          scale: [0.95, 1.12, 0.98, 0.95],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-[15%] left-[20%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-[#7954F6]/15 blur-[140px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
    </div>
  );
};
