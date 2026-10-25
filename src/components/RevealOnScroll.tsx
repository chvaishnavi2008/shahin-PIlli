import React from 'react';
import { useScrollReveal, ScrollDirection } from '../hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: ScrollDirection;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
}) => {
  const { ref, style } = useScrollReveal<HTMLDivElement>({
    delayMs,
    direction,
  });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

