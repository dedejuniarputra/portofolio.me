'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

/* ─── Count-up hook ─────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, decimals]);

  return { count, setStarted };
}

/* ─── Single stat card ──────────────────────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  target: number;
  decimals?: number;
  label: string;
  triggered: boolean;
  separator?: string; // e.g. "." for thousands display
  index?: number;
}

function StatCard({ icon, target, decimals = 0, label, triggered, separator, index = 0 }: StatCardProps) {
  const { count, setStarted } = useCountUp(target, 1800, decimals);

  useEffect(() => {
    if (triggered) setStarted(true);
  }, [triggered, setStarted]);

  // Format: if separator ".": turn 1555 → "1.555"
  const formatted = separator
    ? Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return (
    <div
      className={`bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-[#13ec7b]/40 transition-all duration-300 ${
        triggered ? 'sr-visible-pop' : 'sr-hidden'
      }`}
      style={triggered ? { animationDelay: `${index * 120}ms` } : undefined}
    >
      <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white font-mono tabular-nums">
          {formatted}<span className="text-[#13ec7b]">+</span>
        </h3>
        <p className="text-xs text-zinc-400 font-mono">{label}</p>
      </div>
    </div>
  );
}

/* ─── Expertise Card with Spotlight Effect ─────────────────────────── */
interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  triggered?: boolean;
  index?: number;
}

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

function ExpertiseCard({ icon, title, desc, triggered = false, index = 0 }: ExpertiseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<StarParticle[]>([]);
  const lastAddRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const now = Date.now();
    if (now - lastAddRef.current > 50) {
      lastAddRef.current = now;
      const newParticle: StarParticle = {
        id: now + Math.random(),
        x,
        y,
        size: Math.floor(Math.random() * 6) + 10, // 10px to 16px
      };
      setSparkles(prev => [...prev.slice(-7), newParticle]);
    }
  };

  const handleMouseLeave = () => {
    setSparkles([]);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-4 backdrop-blur-xl hover:border-[#13ec7b]/50 transition-all duration-300 cursor-default ${
        triggered ? 'sr-visible-pop' : 'sr-hidden'
      }`}
      style={triggered ? { animationDelay: `${index * 120}ms` } : undefined}
    >
      {/* Star Particle Trail Following Cursor */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-0">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute star-trail-particle text-[#13ec7b]"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_8px_rgba(19,236,123,0.9)]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] group-hover:scale-110 group-hover:border-[#13ec7b]/60 transition-all duration-300 relative z-10">
        {icon}
      </div>

      {/* Text */}
      <div className="space-y-1.5 relative z-10">
        <h4 className="text-sm font-semibold text-white group-hover:text-[#13ec7b] transition-colors duration-300">{title}</h4>
        <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Main Section ──────────────────────────────────────────────────── */
export default function About() {
  const { t } = useLanguage();

  // Observe when About section enters the viewport
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full pt-24 pb-16 bg-black text-white overflow-hidden select-none">
      {/* Background Wide Grid Overlay */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10 relative z-10">
        
        {/* Section Header */}
        <div
          className={`flex flex-col gap-3 ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '0ms' } : undefined}
        >

          {/* Code Tag Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec7b]/10 border border-[#13ec7b]/25 text-[#13ec7b] text-xs font-mono tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] animate-pulse inline-block" />
              {t.about.sectionTag}
            </span>
          </div>

          {/* Main Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.about.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.about.titleHighlight}</span>
                {/* Green underline accent */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
              {' '}{t.about.titlePart2}
            </h2>

            {/* Decorative dash line */}
            <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm font-mono tracking-wide">
            {t.about.subtitle}
          </p>

        </div>

        {/* macOS Window Card Frame for Bio Explanation */}
        <div
          className={`bg-zinc-950/60 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl hover:border-[#13ec7b]/30 transition-all duration-300 ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '120ms' } : undefined}
        >
          
          {/* Window Top Bar Header */}
          <div className="px-5 py-3.5 bg-zinc-900/60 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            </div>
            
            <span className="text-xs font-mono text-zinc-400">GetToKnowMe.tsx</span>
          </div>

          {/* Explanation Text Content */}
          <div className="p-6 sm:p-8 space-y-5">

            {/* Bio 1 — Intro */}
            <p className="text-sm sm:text-base text-zinc-200 leading-loose tracking-wide font-normal text-justify">
              {t.about.bio1Prefix}
              <span className="text-[#13ec7b] font-semibold">{t.about.name}</span>
              {t.about.bio1Suffix}
            </p>

            {/* Bio 2 — Background */}
            <p className="text-sm sm:text-base text-zinc-200 leading-loose tracking-wide font-normal text-justify">
              {t.about.bio2}
            </p>

            {/* Bio 3 — Philosophy */}
            <p className="text-sm sm:text-base text-zinc-200 leading-loose tracking-wide font-normal text-justify">
              {t.about.bio3}
            </p>

          </div>

        </div>

        {/* Stats Grid — Count-up animation on scroll */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Stat 1: Projects Built */}
          <StatCard
            triggered={sectionVisible}
            index={0}
            target={7}
            label={t.about.stats.projects}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            }
          />

          {/* Stat 2: Commits */}
          <StatCard
            triggered={sectionVisible}
            index={1}
            target={200}
            label={t.about.stats.commits}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />

          {/* Stat 3: Coffee Cups */}
          <StatCard
            triggered={sectionVisible}
            index={2}
            target={100}
            label={t.about.stats.coffee}
            separator="."
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            }
          />

          {/* Stat 4: Hours Coding */}
          <StatCard
            triggered={sectionVisible}
            index={3}
            target={1000}
            label={t.about.stats.codingHours}
            separator="."
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

        </div>

        {/* ── Expertise Cards ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1 — Web Development */}
          <ExpertiseCard
            triggered={sectionVisible}
            index={0}
            title={t.about.expertise[0].title}
            desc={t.about.expertise[0].desc}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />

          {/* Card 2 — Mobile Development */}
          <ExpertiseCard
            triggered={sectionVisible}
            index={1}
            title={t.about.expertise[1].title}
            desc={t.about.expertise[1].desc}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            }
          />

          {/* Card 3 — REST API & Backend */}
          <ExpertiseCard
            triggered={sectionVisible}
            index={2}
            title={t.about.expertise[2].title}
            desc={t.about.expertise[2].desc}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
          />

          {/* Card 4 — System Analysis */}
          <ExpertiseCard
            triggered={sectionVisible}
            index={3}
            title={t.about.expertise[3].title}
            desc={t.about.expertise[3].desc}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
          />

        </div>

      </div>
    </section>
  );
}
