'use client';

import { useLanguage } from '@/src/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full pt-24 pb-16 bg-black text-white overflow-hidden select-none">
      {/* Background Wide Grid Overlay */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-left">
          <span className="text-xs font-mono text-[#13ec7b] tracking-widest uppercase">
            {t.about.sectionTag}
          </span>
        </div>

        {/* macOS Window Card Frame for Bio Explanation */}
        <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl hover:border-[#13ec7b]/30 transition-all duration-300">
          
          {/* Window Top Bar Header (Gambar 2 Style) */}
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
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {t.about.bio1Prefix}
              <span className="text-[#13ec7b] font-semibold">{t.about.name}</span>
              {t.about.bio1Suffix}
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {t.about.bio2}
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
              {t.about.bio3}
            </p>
          </div>

        </div>

        {/* Clean Stats Grid (Translucent Glassmorphism Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat 1: Projects Built */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-[#13ec7b]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-mono">
                7<span className="text-[#13ec7b]">+</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">{t.about.stats.projects}</p>
            </div>
          </div>

          {/* Stat 2: Commits */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-[#13ec7b]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-mono">
                200<span className="text-[#13ec7b]">+</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">{t.about.stats.commits}</p>
            </div>
          </div>

          {/* Stat 3: Coffee Cups */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-[#13ec7b]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-mono">
                1.555<span className="text-[#13ec7b]">+</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">{t.about.stats.coffee}</p>
            </div>
          </div>

          {/* Stat 4: Hours Coding */}
          <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-[#13ec7b]/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white font-mono">
                3.999<span className="text-[#13ec7b]">+</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono">{t.about.stats.codingHours}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
