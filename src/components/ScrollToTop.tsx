'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

export default function ScrollToTop() {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none font-sans pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showScrollTop
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={handleScrollToTop}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-950/90 border border-zinc-800 hover:border-[#13ec7b]/60 text-zinc-300 hover:text-[#13ec7b] shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(19,236,123,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 active:scale-95 group focus:outline-none cursor-pointer"
          aria-label={language === 'EN' ? 'Scroll to top' : 'Kembali ke atas'}
          title={language === 'EN' ? 'Back to top' : 'Kembali ke atas'}
        >
          <span className="absolute inset-0 rounded-2xl bg-[#13ec7b]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform duration-300 relative z-10 text-zinc-300 group-hover:text-[#13ec7b]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

