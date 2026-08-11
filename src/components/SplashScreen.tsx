'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedSubtext, setTypedSubtext] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const subtextSequence = [
    "> INITIALIZING SYSTEM CORE...",
    "> LOADING DEVELOPER PROFILE...",
    "> WELCOME TO THE WORKSPACE"
  ];

  useEffect(() => {
    setMounted(true);

    // Smooth progress counter 0 to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Typewriter effect for console subtext
    if (currentTextIndex < subtextSequence.length) {
      const fullText = subtextSequence[currentTextIndex];
      let charIdx = 0;

      const typeInterval = setInterval(() => {
        if (charIdx <= fullText.length) {
          setTypedSubtext(fullText.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            if (currentTextIndex < subtextSequence.length - 1) {
              setCurrentTextIndex((prev) => prev + 1);
            }
          }, 350);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentTextIndex, mounted]);

  useEffect(() => {
    if (!mounted) return;

    // When progress hits 100%, trigger smooth fade out
    if (progress >= 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 800);

      const hideTimeout = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 1400);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(hideTimeout);
      };
    }
  }, [progress, onComplete, mounted]);

  if (!mounted || isDone) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black text-white font-mono flex flex-col items-center justify-center px-6 transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Glassmorphic Central Box */}
      <div className="relative z-10 w-full max-w-2xl bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_40px_rgba(19,236,123,0.12)] flex flex-col items-center text-center">
        
        {/* Top Header Tag */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#052615] border border-[#13ec7b]/30 rounded-full text-xs font-mono text-[#13ec7b] mb-6 shadow-[0_0_10px_rgba(19,236,123,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#13ec7b] animate-ping" />
          <span>SYSTEM_INIT // PORTOFOLIO_ME</span>
        </div>

        {/* Big Name Reveal */}
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#13ec7b] drop-shadow-[0_0_25px_rgba(19,236,123,0.3)] mb-4">
          DEDE JUNIAR PUTRA
        </h1>

        {/* Subtitle / Role Tag */}
        <p className="text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-8">
          Junior Software Engineer & AI Enthusiast
        </p>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-md bg-zinc-900/90 h-2 rounded-full overflow-hidden border border-zinc-800 mb-6 relative">
          <div 
            className="h-full bg-gradient-to-r from-[#13ec7b]/60 to-[#13ec7b] rounded-full transition-all duration-75 shadow-[0_0_12px_#13ec7b]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Console Typewriter Line & Percentage */}
        <div className="flex items-center justify-between w-full max-w-md text-xs font-mono text-zinc-400 px-1">
          <div className="flex items-center gap-1.5 text-[#13ec7b] font-medium min-h-[20px]">
            <span>{typedSubtext}</span>
            <span className="w-2 h-3.5 bg-[#13ec7b] animate-pulse inline-block shadow-[0_0_8px_#13ec7b]" />
          </div>
          <span className="text-[#13ec7b] font-bold">{progress}%</span>
        </div>

      </div>
    </div>
  );
}
