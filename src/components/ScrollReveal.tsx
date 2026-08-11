'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'fade' | 'up' | 'down' | 'left' | 'right' | 'zoom' | 'pop';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;        // ms
  threshold?: number;    // 0–1
  className?: string;
  once?: boolean;        // animate only once (default true)
}

const directionClass: Record<Direction, string> = {
  fade:  'sr-visible-fade',
  up:    'sr-visible',
  down:  'sr-visible-down',
  left:  'sr-visible-left',
  right: 'sr-visible-right',
  zoom:  'sr-visible-zoom',
  pop:   'sr-visible-pop',
};

export default function ScrollReveal({
  children,
  direction = 'pop',
  delay = 0,
  threshold = 0.12,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${visible ? directionClass[direction] : 'sr-hidden'} ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
