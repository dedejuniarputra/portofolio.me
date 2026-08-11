'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

/* ─── Social Media Vector Logos ──────────────────────────────────────── */
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 fill-current text-white">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 fill-none stroke-current stroke-[1.8] text-white">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 fill-current text-white">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 fill-current text-white">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-16 h-16 sm:w-20 sm:h-20 fill-current text-white">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

/* ─── Interactive Card Wrapper with Cursor Star Trail Particle Effect ─ */
function InteractiveContactCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<StarParticle[]>([]);
  const lastAddRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const now = Date.now();
    if (now - lastAddRef.current > 40) {
      lastAddRef.current = now;
      const newParticle: StarParticle = {
        id: now + Math.random(),
        x,
        y,
        size: Math.floor(Math.random() * 8) + 10,
      };
      setSparkles((prev) => [...prev.slice(-10), newParticle]);
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
      className={className}
      style={style}
    >
      {/* Star Trail Particles Following Cursor */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden z-[1]">
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_10px_rgba(19,236,123,0.9)]">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Floating Twinkling Ambient Stars */}
      <div className="pointer-events-none absolute top-4 left-1/3 text-white/50 animate-pulse z-[1]">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-1/4 text-[#13ec7b]/60 animate-ping z-[1]">
        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {children}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const targetEmail = 'dedejuniarputra00@gmail.com';

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        } else {
          setSectionVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cards = t.contact.cards;

  return (
    <section id="contact" ref={sectionRef} className="relative w-full pt-24 pb-16 bg-black text-white overflow-hidden select-none">
      {/* Background Soft Grid Overlay */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div
          className={`flex flex-col gap-3 max-w-3xl ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '0ms' } : undefined}
        >
          {/* Section Code Tag Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec7b]/10 border border-[#13ec7b]/25 text-[#13ec7b] text-xs font-mono tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] animate-pulse inline-block" />
              {t.contact.sectionTag}
            </span>
          </div>

          {/* Main Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.contact.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.contact.titleHighlight}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
              {' '}{t.contact.titlePart2}
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base font-sans leading-relaxed pt-1">
            {t.contact.subtitle}
          </p>
        </div>

        {/* ── Social Media Bento Cards Grid ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {/* 1. YouTube Card (Full Width Top) */}
          <InteractiveContactCard
            className={`md:col-span-2 group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-red-600 via-red-900 to-zinc-950 border border-red-500/30 hover:border-red-400/60 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(239,68,68,0.25)] transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 ${
              sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
            }`}
            style={sectionVisible ? { animationDelay: '100ms' } : undefined}
          >
            <div className="space-y-3 z-10 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {cards.youtube.title}
              </h3>
              <p className="text-xs sm:text-sm text-red-100/80 font-sans leading-relaxed">
                {cards.youtube.description}
              </p>
              <div className="pt-2">
                <a
                  href={cards.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white font-mono text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group/btn"
                >
                  <span>{cards.youtube.button}</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Large Watermark Icon */}
            <div className="self-end sm:self-auto z-10 group-hover:scale-110 transition-transform duration-500 opacity-90 drop-shadow-xl">
              <YoutubeIcon />
            </div>
          </InteractiveContactCard>

          {/* 2. Instagram Card (Left Row 2) */}
          <InteractiveContactCard
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-amber-500 border border-pink-400/30 hover:border-pink-300/60 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(236,72,153,0.25)] transition-all duration-300 flex flex-col justify-between h-64 sm:h-72 ${
              sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
            }`}
            style={sectionVisible ? { animationDelay: '160ms' } : undefined}
          >
            <div className="space-y-2 z-10 max-w-xs">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {cards.instagram.title}
              </h3>
              <p className="text-xs sm:text-sm text-pink-100/90 font-sans">
                {cards.instagram.description}
              </p>
            </div>

            <div className="flex justify-between items-end z-10">
              <a
                href={cards.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/30 border border-white/25 text-white font-mono text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group/btn"
              >
                <span>{cards.instagram.button}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>

              <div className="group-hover:scale-110 transition-transform duration-500 opacity-90 drop-shadow-xl">
                <InstagramIcon />
              </div>
            </div>
          </InteractiveContactCard>

          {/* 3. LinkedIn Card (Right Row 2) */}
          <InteractiveContactCard
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-sky-600 via-blue-800 to-slate-950 border border-sky-400/30 hover:border-sky-300/60 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(14,165,233,0.25)] transition-all duration-300 flex flex-col justify-between h-64 sm:h-72 ${
              sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
            }`}
            style={sectionVisible ? { animationDelay: '220ms' } : undefined}
          >
            <div className="space-y-2 z-10 max-w-xs">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {cards.linkedin.title}
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 font-sans">
                {cards.linkedin.description}
              </p>
            </div>

            <div className="flex justify-between items-end z-10">
              <a
                href={cards.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/30 border border-white/25 text-white font-mono text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group/btn"
              >
                <span>{cards.linkedin.button}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>

              <div className="group-hover:scale-110 transition-transform duration-500 opacity-90 drop-shadow-xl">
                <LinkedinIcon />
              </div>
            </div>
          </InteractiveContactCard>

          {/* 4. TikTok Card (Left Row 3) */}
          <InteractiveContactCard
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-zinc-800 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col justify-between h-64 sm:h-72 ${
              sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
            }`}
            style={sectionVisible ? { animationDelay: '280ms' } : undefined}
          >
            <div className="space-y-2 z-10 max-w-xs">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {cards.tiktok.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans">
                {cards.tiktok.description}
              </p>
            </div>

            <div className="flex justify-between items-end z-10">
              <a
                href={cards.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group/btn"
              >
                <span>{cards.tiktok.button}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>

              <div className="group-hover:scale-110 transition-transform duration-500 opacity-90 drop-shadow-xl">
                <TiktokIcon />
              </div>
            </div>
          </InteractiveContactCard>

          {/* 5. GitHub Card (Right Row 3) */}
          <InteractiveContactCard
            className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-black border border-indigo-500/30 hover:border-indigo-400/60 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(99,102,241,0.2)] transition-all duration-300 flex flex-col justify-between h-64 sm:h-72 ${
              sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
            }`}
            style={sectionVisible ? { animationDelay: '340ms' } : undefined}
          >
            <div className="space-y-2 z-10 max-w-xs">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {cards.github.title}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200/80 font-sans">
                {cards.github.description}
              </p>
            </div>

            <div className="flex justify-between items-end z-10">
              <a
                href={cards.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white font-mono text-xs font-semibold backdrop-blur-md transition-all duration-300 shadow-md group/btn"
              >
                <span>{cards.github.button}</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>

              <div className="group-hover:scale-110 transition-transform duration-500 opacity-90 drop-shadow-xl">
                <GithubIcon />
              </div>
            </div>
          </InteractiveContactCard>

        </div>

        {/* ── Direct Email Action Bar ──────────────────────────── */}
        <InteractiveContactCard
          className={`bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '400ms' } : undefined}
        >
          <div className="flex items-center gap-4 text-left z-10 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold text-white leading-snug">{t.contact.directEmailTitle}</h4>
              <p className="text-xs font-mono text-zinc-400">{t.contact.directEmailSub}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 z-10 w-full sm:w-auto">
            <a
              href={`mailto:${targetEmail}`}
              className="max-w-full px-4 sm:px-5 py-2.5 rounded-xl bg-[#13ec7b] text-black font-mono text-xs font-bold hover:bg-[#13ec7b]/90 transition-colors shadow-lg flex items-center gap-2 overflow-hidden"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="truncate">{targetEmail}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-[#13ec7b] font-mono text-xs font-medium transition-all cursor-pointer"
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </div>
        </InteractiveContactCard>
      </div>
    </section>
  );
}
