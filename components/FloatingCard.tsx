// components/FloatingCard.tsx
'use client';

import React, { useState } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
  glowColor?: 'teal' | 'gold' | 'none';
}

export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  className = '',
  intensity = 'medium',
  glowColor = 'teal',
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const intensityMap = {
    subtle: 5,
    medium: 10,
    strong: 15,
  };

  const maxRotation = intensityMap[intensity];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  const glowColors = {
    teal: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    gold: 'hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]',
    none: '',
  };

  return (
    <div
      className={`
        transition-all duration-300 ease-out
        ${glowColors[glowColor]}
        ${className}
      `}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(10px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
