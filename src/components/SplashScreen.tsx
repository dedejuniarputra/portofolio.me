'use client';

import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedSubtext, setTypedSubtext] = useState('> INITIALIZING SYSTEM CORE...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const subtextSequence = [
    "> INITIALIZING SYSTEM CORE...",
    "> LOADING DEVELOPER PROFILE...",
    "> WELCOME TO THE WORKSPACE"
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      window.history.replaceState(null, '', '#');
      document.body.style.overflow = 'hidden';
    }

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
    // Typewriter effect for console subtext
    let delayTimer: NodeJS.Timeout;
    if (currentTextIndex < subtextSequence.length) {
      const fullText = subtextSequence[currentTextIndex];
      let charIdx = 0;

      const typeInterval = setInterval(() => {
        if (charIdx <= fullText.length) {
          setTypedSubtext(fullText.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          delayTimer = setTimeout(() => {
            if (currentTextIndex < subtextSequence.length - 1) {
              setCurrentTextIndex((prev) => prev + 1);
            }
          }, 350);
        }
      }, 30);

      return () => {
        clearInterval(typeInterval);
        clearTimeout(delayTimer);
      };
    }
  }, [currentTextIndex]);

  useEffect(() => {
    // When progress hits 100%, trigger smooth fade out
    if (progress >= 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 300);

      const hideTimeout = setTimeout(() => {
        setIsDone(true);
        if (typeof window !== 'undefined') {
          document.body.style.overflow = '';
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          window.history.replaceState(null, '', '#');
        }
        if (onComplete) onComplete();
      }, 1000);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(hideTimeout);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black text-white font-mono flex flex-col items-center justify-center px-4 sm:px-6 transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a15_1px,transparent_1px),linear-gradient(to_bottom,#0f172a15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Glassmorphic Central Box */}
      <div className="relative z-10 w-full max-w-[calc(100vw-2rem)] sm:max-w-2xl bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 sm:p-12 backdrop-blur-xl shadow-[0_0_40px_rgba(19,236,123,0.12)] flex flex-col items-center text-center">
        
        {/* Top Header Tag */}
        <div className="flex items-center gap-2 px-3 py-1 bg-[#052615] border border-[#13ec7b]/30 rounded-full text-[10px] sm:text-xs font-mono text-[#13ec7b] mb-4 sm:mb-6 shadow-[0_0_10px_rgba(19,236,123,0.2)] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#13ec7b] animate-ping flex-shrink-0" />
          <span>SYSTEM_INIT // PORTOFOLIO_ME</span>
        </div>

        {/* Big Name Reveal */}
        <h1 className="text-xl min-[400px]:text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#13ec7b] drop-shadow-[0_0_25px_rgba(19,236,123,0.3)] mb-3 sm:mb-4 whitespace-nowrap max-w-full text-center">
          DEDE JUNIAR PUTRA
        </h1>

        {/* Subtitle / Role Tag */}
        <p className="text-[10px] min-[400px]:text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest text-zinc-400 uppercase mb-6 sm:mb-8 whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
          Junior Software Engineer & AI Enthusiast
        </p>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-md bg-zinc-900/90 h-2 rounded-full overflow-hidden border border-zinc-800 mb-5 sm:mb-6 relative">
          <div 
            className="h-full bg-gradient-to-r from-[#13ec7b]/60 to-[#13ec7b] rounded-full transition-all duration-75 shadow-[0_0_12px_#13ec7b]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Console Typewriter Line & Percentage */}
        <div className="flex items-center justify-between w-full max-w-md text-[10px] sm:text-xs font-mono text-zinc-400 px-1 gap-2">
          <div className="flex items-center gap-1.5 text-[#13ec7b] font-medium min-h-[20px] whitespace-nowrap overflow-hidden text-ellipsis">
            <span>{typedSubtext}</span>
            <span className="w-2 h-3.5 bg-[#13ec7b] animate-pulse inline-block shadow-[0_0_8px_#13ec7b] flex-shrink-0" />
          </div>
          <span className="text-[#13ec7b] font-bold flex-shrink-0">{progress}%</span>
        </div>

      </div>
    </div>
  );
}
