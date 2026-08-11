'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

export default function Certificates() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

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

  const visibleItems = showAll
    ? t.certificates.items
    : t.certificates.items.slice(0, 8);

  return (
    <section id="certificates" ref={sectionRef} className="relative w-full pt-24 pb-20 bg-black text-white overflow-hidden select-none">
      {/* Background Soft Grid Overlay */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-10 relative z-10">

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
              {t.certificates.sectionTag}
            </span>
          </div>

          {/* Main Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.certificates.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.certificates.titleHighlight}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
              {' '}{t.certificates.titlePart2}
            </h2>

            {/* Accent divider line */}
            <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm font-mono tracking-wide">
            {t.certificates.subtitle}
          </p>
        </div>

        {/* ── Certificate Cards Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visibleItems.map((item, index) => {
            const hasValidUrl = item.url && item.url !== '#';

            return (
              <div
                key={item.id}
                className={`group relative bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-xl hover:border-zinc-700/80 hover:bg-zinc-900/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center justify-between gap-4 ${
                  sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
                }`}
                style={sectionVisible ? { animationDelay: `${(index % 4) * 40}ms` } : undefined}
              >
                {/* Left Badge Ribbon Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] group-hover:scale-110 group-hover:border-[#13ec7b]/60 transition-all duration-300 shrink-0">
                  <svg className="w-5 h-5 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                {/* Middle Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white group-hover:text-[#13ec7b] transition-colors duration-300 truncate leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 font-medium truncate pt-0.5">
                    {item.issuer} <span className="text-zinc-600">•</span> {item.date}
                  </p>
                </div>

                {/* Right External Link Button */}
                <a
                  href={item.url}
                  target={hasValidUrl ? '_blank' : undefined}
                  rel={hasValidUrl ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (!hasValidUrl) e.preventDefault();
                  }}
                  className={`p-2 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 text-zinc-400 hover:text-[#13ec7b] shrink-0 ${
                    !hasValidUrl ? 'cursor-default opacity-80' : 'cursor-pointer'
                  }`}
                  title={hasValidUrl ? t.certificates.viewCredential : 'Credential Link (Customizable)'}
                >
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── See More / See Less Toggle Button ──────────────── */}
        {t.certificates.items.length > 8 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-300 shadow-lg cursor-pointer group"
            >
              <span>{showAll ? t.certificates.seeLess : t.certificates.seeMore}</span>
              <svg
                className={`w-4 h-4 text-[#13ec7b] transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
