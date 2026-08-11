'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

/* ─── Company / Organization SVG Logos ───────────────────────────────── */
function DiskominfoLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1.5 shrink-0 shadow-md">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Simplified Komdigi / Diskominfo Geometric Emblem */}
        <rect x="15" y="15" width="32" height="32" rx="6" fill="#0052cc" />
        <rect x="53" y="15" width="32" height="32" rx="6" fill="#ffd700" />
        <rect x="15" y="53" width="32" height="32" rx="6" fill="#0052cc" />
        <circle cx="69" cy="69" r="16" fill="#0080ff" />
      </svg>
    </div>
  );
}

function UnilaLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center p-1.5 shrink-0 shadow-md">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Simplified Universitas Lampung Shield Emblem */}
        <path d="M50 8 L85 25 L85 60 C85 78 50 92 50 92 C50 92 15 78 15 60 L15 25 Z" fill="#ffd700" stroke="#0033aa" strokeWidth="4" />
        <circle cx="50" cy="50" r="22" fill="#0033aa" />
        <path d="M50 32 L54 44 L66 44 L56 52 L60 64 L50 56 L40 64 L44 52 L34 44 L46 44 Z" fill="#ffffff" />
      </svg>
    </div>
  );
}

function HimakomLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 border border-amber-400/40 flex items-center justify-center p-1.5 shrink-0 shadow-md">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* HIMAKOM Shield Badge Logo */}
        <path d="M50 10 L85 28 L85 65 C85 80 50 90 50 90 C50 90 15 80 15 65 L15 28 Z" fill="#111111" stroke="#ffd700" strokeWidth="5" />
        <text x="50" y="58" textAnchor="middle" fill="#ffd700" fontSize="32" fontWeight="bold" fontFamily="monospace">H</text>
      </svg>
    </div>
  );
}

function FreelanceLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-amber-200 border border-amber-300 flex items-center justify-center p-1 shrink-0 shadow-md">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Cool Red Mascot with Glasses Avatar */}
        <rect x="25" y="20" width="50" height="55" rx="12" fill="#ef4444" />
        {/* Horns */}
        <path d="M25 25 L15 10 L30 20 Z" fill="#dc2626" />
        <path d="M75 25 L85 10 L70 20 Z" fill="#dc2626" />
        {/* Sunglasses */}
        <rect x="30" y="38" width="18" height="12" rx="3" fill="#111" />
        <rect x="52" y="38" width="18" height="12" rx="3" fill="#111" />
        <line x1="48" y1="42" x2="52" y2="42" stroke="#111" strokeWidth="3" />
        {/* Vest */}
        <path d="M30 65 L70 65 L65 75 L35 75 Z" fill="#1f2937" />
      </svg>
    </div>
  );
}

function getLogo(id: string) {
  switch (id) {
    case 'diskominfo':
      return <DiskominfoLogo />;
    case 'asdos-amp':
    case 'asdos-mat':
      return <UnilaLogo />;
    case 'himakom':
      return <HimakomLogo />;
    case 'freelance':
    default:
      return <FreelanceLogo />;
  }
}

export default function Journey() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="journey" ref={sectionRef} className="relative w-full pt-24 pb-20 bg-black text-white overflow-hidden select-none">
      {/* Background Soft Grid Overlay */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">

        {/* ── Section Header ─────────────────────────────────── */}
        <div
          className={`flex flex-col gap-3 ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '0ms' } : undefined}
        >
          {/* Section Code Tag Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec7b]/10 border border-[#13ec7b]/25 text-[#13ec7b] text-xs font-mono tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] animate-pulse inline-block" />
              {t.journey.sectionTag}
            </span>
          </div>

          {/* Main Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.journey.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.journey.titleHighlight}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
              {' '}{t.journey.titlePart2}
            </h2>

            {/* Accent divider line */}
            <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm font-mono tracking-wide">
            {t.journey.subtitle}
          </p>
        </div>

        {/* ── Timeline & Experience List ──────────────────────── */}
        <div className="relative pl-6 sm:pl-10 space-y-6 border-l border-zinc-800/80">

          {t.journey.items.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`relative group ${
                  sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
                }`}
                style={sectionVisible ? { animationDelay: `${120 + index * 120}ms` } : undefined}
              >
                {/* Timeline Pulsing Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#052615] border-2 border-[#13ec7b] shadow-[0_0_12px_rgba(19,236,123,0.8)] group-hover:scale-125 transition-transform duration-300">
                  <span className="absolute inset-0 rounded-full bg-[#13ec7b] opacity-40 animate-ping" />
                </div>

                {/* Experience Card Frame */}
                <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 backdrop-blur-xl hover:border-zinc-700/80 hover:bg-zinc-900/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 space-y-4">
                  
                  {/* Card Main Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Left side: Logo + Role + Company + Meta */}
                    <div className="flex items-start gap-4">
                      {getLogo(item.id)}

                      <div className="space-y-1">
                        {/* Role Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#13ec7b] transition-colors duration-300 leading-snug">
                          {item.role}
                        </h3>

                        {/* Company & Location */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                          <span className="font-semibold text-zinc-200 uppercase tracking-wider">{item.company}</span>
                          {item.location && (
                            <>
                              <span className="text-zinc-600">•</span>
                              <span className="flex items-center gap-1 text-zinc-400">
                                <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {item.location}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Date, Duration & Work Type */}
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#13ec7b] pt-1">
                          <span className="font-semibold">{item.period}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-zinc-300 font-bold uppercase">{item.duration}</span>
                          {item.workType && (
                            <>
                              <span className="text-zinc-600">•</span>
                              <span className="text-zinc-400 uppercase">{item.workType}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right side: Type Badge */}
                    <div className="shrink-0 self-start">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#052615] border border-[#13ec7b]/30 text-[#13ec7b] text-[11px] font-mono tracking-wider font-bold uppercase shadow-sm">
                        {item.type}
                      </span>
                    </div>

                  </div>

                  {/* Skills Summary (for Freelance / item if present) */}
                  {item.skills && (
                    <div className="flex items-center gap-2 pt-1 text-xs font-mono text-zinc-300 border-t border-zinc-900/90">
                      <svg className="w-4 h-4 text-[#13ec7b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      <span>{item.skills}</span>
                    </div>
                  )}

                  {/* Accordion Details Toggle Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-[#13ec7b] transition-colors cursor-pointer group/btn"
                    >
                      <svg
                        className={`w-4 h-4 text-zinc-500 group-hover/btn:text-[#13ec7b] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#13ec7b]' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span>{isExpanded ? t.journey.hideDetails : t.journey.showDetails}</span>
                    </button>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-zinc-800/80 space-y-2 animate-[sr-pop_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
