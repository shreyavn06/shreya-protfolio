import React, { useRef, useState, MouseEvent } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: 'aurora' | 'purple' | 'cyan';
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  tilt = false,
  glowColor = 'aurora',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState<number>(0);
  const [transform, setTransform] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);

    if (tilt) {
      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(6px)`);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (tilt) {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    }
  };

  const getGradient = () => {
    if (glowColor === 'purple') {
      return `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(121, 84, 246, 0.22), transparent 70%)`;
    }
    if (glowColor === 'cyan') {
      return `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(8, 127, 173, 0.22), transparent 70%)`;
    }
    return `radial-gradient(550px circle at ${position.x}px ${position.y}px, rgba(121, 84, 246, 0.20), rgba(8, 127, 173, 0.15), transparent 70%)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: tilt ? transform : undefined,
        transition: 'transform 0.22s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s ease',
      }}
      className={`glass-card relative overflow-hidden rounded-3xl transition-shadow duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(121,84,246,0.15)] ${className}`}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: getGradient(),
        }}
      />
      {/* Border subtle shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-0"
        style={{
          opacity: opacity * 0.7,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 60%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
