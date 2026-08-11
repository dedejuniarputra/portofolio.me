'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' });

  // Typewriter State
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const roles = t.hero.roles;

  useEffect(() => {
    const fullText = roles[currentRoleIndex] || roles[0];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  };

  const handleCopyCode = () => {
    const infoString = `Dede Juniar Putra | Junior Software Engineer`;
    navigator.clipboard.writeText(infoString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-4rem)] bg-black text-white flex items-center justify-center py-16 overflow-hidden select-none">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Intro & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
          
          {/* Status Pill Badge */}
          {/* Computer Intro Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-zinc-950/80 rounded-full font-mono text-[#13ec7b] text-xs sm:text-sm tracking-[0.2em] uppercase">
            {/* Animated Clean Computer Icon */}
            <svg className="w-5 h-5 text-[#13ec7b] drop-shadow-[0_0_8px_rgba(19,236,123,0.6)] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{t.hero.badgeText}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#13ec7b] drop-shadow-[0_0_20px_rgba(19,236,123,0.3)]">
              Dede Juniar Putra
            </span>
          </h1>

          {/* Role Subtitle with Typewriter Animation & Description */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-mono text-[#13ec7b] font-semibold tracking-wide min-h-[2rem] flex items-center">
              <span>{currentText}</span>
              <span className="inline-block w-2.5 h-5 ml-1 bg-[#13ec7b] shadow-[0_0_8px_#13ec7b] animate-pulse" />
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-xl">
              {t.hero.description}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-[#13ec7b] text-black font-semibold text-sm rounded-2xl hover:bg-[#10d46e] transition-all duration-200 shadow-[0_0_20px_rgba(19,236,123,0.35)] hover:shadow-[0_0_25px_rgba(19,236,123,0.55)] cursor-pointer whitespace-nowrap"
            >
              {t.hero.ctaProjects}
            </a>

            <a
              href="#"
              download
              className="px-6 py-3.5 bg-zinc-900/90 text-white font-semibold text-sm rounded-2xl border border-zinc-700/80 hover:border-[#13ec7b]/50 hover:text-[#13ec7b] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 bg-zinc-950/80 text-white font-semibold text-sm rounded-2xl border border-zinc-800/80 hover:border-[#13ec7b]/50 hover:text-[#13ec7b] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3 pt-6 w-full">
            <a
              href="https://github.com/dedejuniarputra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-[#13ec7b] hover:border-[#13ec7b]/50 hover:shadow-[0_0_15px_rgba(19,236,123,0.2)] transition-all cursor-pointer"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/dedejuniarputraaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-[#13ec7b] hover:border-[#13ec7b]/50 hover:shadow-[0_0_15px_rgba(19,236,123,0.2)] transition-all cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a
              href="mailto:dedejuniarputra00@gmail.com"
              className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-[#13ec7b] hover:border-[#13ec7b]/50 hover:shadow-[0_0_15px_rgba(19,236,123,0.2)] transition-all cursor-pointer"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/dezxz__?igsh=MWY0Y294YW1pZmF3Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-[#13ec7b] hover:border-[#13ec7b]/50 hover:shadow-[0_0_15px_rgba(19,236,123,0.2)] transition-all cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Right Column: Clean Photo Terminal Card with Floating Badges */}
        <div className="lg:col-span-6 flex justify-center items-center w-full py-6">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-[410px]">
            
            {/* Floating Pill Card 1: WEBSITE */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-5 z-30 px-3 py-1.5 bg-zinc-950/90 border border-zinc-800/90 rounded-xl shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-float-slow hover:border-[#13ec7b]/60 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-[#13ec7b] shadow-[0_0_8px_#13ec7b]" />
              <span className="text-[11px] font-mono font-bold tracking-wider text-white">WEBSITE</span>
            </div>

            {/* Floating Pill Card 2: MOBILE */}
            <div className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 z-30 px-3 py-1.5 bg-zinc-950/90 border border-zinc-800/90 rounded-xl shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-float-reverse hover:border-sky-400/60 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span className="text-[11px] font-mono font-bold tracking-wider text-white">MOBILE</span>
            </div>

            {/* Floating Pill Card 3: AI Enthusiast */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 z-30 px-3 py-1.5 bg-zinc-950/90 border border-zinc-800/90 rounded-xl shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-float-delayed hover:border-purple-400/60 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
              <span className="text-[11px] font-mono font-bold tracking-wider text-white">AI Enthusiast</span>
            </div>

            {/* Terminal Photo Card */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchMove={(e) => {
                if (e.touches[0]) {
                  const touch = e.touches[0];
                  handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as any);
                }
              }}
              onTouchEnd={handleMouseLeave}
              style={tiltStyle}
              className="relative w-full bg-zinc-950 border border-zinc-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-2xl transition-transform duration-200 ease-out"
            >
            {/* macOS Traffic Lights Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/70 mb-3.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.8)]" />
                <span className="ml-2.5 text-[11px] font-mono text-zinc-400">{t.hero.terminalFile}</span>
              </div>

              {/* Copy Info Button */}
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-[#13ec7b] transition-colors focus:outline-none"
              >
                {copied ? (
                  <>
                    <span className="text-[#13ec7b]">{t.hero.copied}</span>
                    <svg className="w-3 h-3 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>{t.hero.copy}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative w-full h-[300px] sm:h-[355px] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 flex items-center justify-center group">
              <img
                src="/images/dedee.png"
                alt="Dede Juniar Putra"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

          </div>
          </div>
        </div>

      </div>
    </section>
  );
}
