'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeMenuId, setActiveMenuId] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewsCount, setViewsCount] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchViews = async () => {
      try {
        const hasVisited = sessionStorage.getItem('portfolio_visited');
        const endpoint = hasVisited ? '/api/views?peek=true' : '/api/views';
        
        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === 'number') {
            setViewsCount(data.count);
            if (!hasVisited) {
              sessionStorage.setItem('portfolio_visited', 'true');
            }
          }
        }
      } catch (err) {
        console.error('Failed to fetch realtime views:', err);
      }
    };

    fetchViews();

    // Live polling every 10 seconds to update count in real-time when new visitors view the site
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/views?peek=true');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && typeof data.count === 'number') {
            setViewsCount(data.count);
          }
        }
      } catch {
        // Silent error handling for background polling
      }
    }, 10000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // ── Scroll blur & ScrollSpy & Hash Sync ───────────────────────────
  useEffect(() => {
    // Handle initial hash routing on page load
    if (typeof window !== 'undefined' && window.location.hash) {
      const initialHash = window.location.hash;
      try {
        const targetElement = document.querySelector(initialHash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      } catch {
        // Ignore invalid selectors
      }
    }

    const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'certificates', 'contact'];

    const handleScrollSpy = () => {
      setScrolled(window.scrollY > 12);

      const viewportThreshold = window.innerHeight * 0.45;
      let currentActiveId = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active candidate if section top has reached or passed the viewport focal area
          if (rect.top <= viewportThreshold) {
            currentActiveId = id;
          }
        }
      }

      if (currentActiveId) {
        setActiveMenuId(currentActiveId);
        if (typeof window !== 'undefined') {
          const newHash = currentActiveId === 'hero' ? '#' : `#${currentActiveId}`;
          if (window.location.hash !== newHash) {
            setTimeout(() => {
              window.history.replaceState(null, '', newHash);
            }, 0);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  const menuItems = [
    { id: 'about', name: t.nav.about, href: '#about' },
    { id: 'skills', name: t.nav.skills, href: '#skills' },
    { id: 'projects', name: t.nav.projects, href: '#projects' },
    { id: 'github', name: t.nav.github, href: '#' },
    { id: 'journey', name: t.nav.journey, href: '#journey' },
    { id: 'certificates', name: t.nav.certificates, href: '#certificates' },
    { id: 'contact', name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { id: string; name: string; href: string }) => {
    setActiveMenuId(item.id);
    if (item.href.startsWith('#')) {
      e.preventDefault();
      if (item.href.length > 1) {
        try {
          const targetElement = document.querySelector(item.href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            if (typeof window !== 'undefined') {
              window.history.pushState(null, '', item.href);
            }
          }
        } catch {
          // Prevent runtime exception on invalid query selectors
        }
      }
    }
  };

  return (
    <nav
      className={`w-full text-zinc-300 sticky top-0 z-50 font-sans select-none
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? 'bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/30'
            : 'bg-black/20 backdrop-blur-sm border-b border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveMenuId('hero');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (typeof window !== 'undefined') {
                window.history.pushState(null, '', '#');
              }
            }}
            className="flex items-center gap-1.5 cursor-pointer group shrink-0"
          >
            <span className="text-zinc-500 text-xl font-bold font-mono group-hover:text-[#13ec7b] transition-colors">&lt;</span>
            <div className="relative flex flex-col justify-center px-0.5">
              <div className="flex items-baseline gap-1 text-2xl font-black italic tracking-tighter">
                <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">WHUSZ</span>
                <span className="text-[#13ec7b] drop-shadow-[0_0_15px_rgba(19,236,123,0.6)]">.ME</span>
              </div>
              {/* Circuit Underline Graphic */}
              <div className="absolute -bottom-1.5 left-0 w-full h-3 overflow-visible pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                  <path 
                    d="M 25 3 H 70 L 82 8 H 96" 
                    stroke="#13ec7b" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                  />
                  <circle cx="70" cy="3" r="1.5" fill="#13ec7b" />
                  <circle cx="96" cy="8" r="1.8" fill="#13ec7b" />
                </svg>
              </div>
            </div>
            <span className="text-zinc-500 text-xl font-bold font-mono group-hover:text-[#13ec7b] transition-colors">&gt;</span>
          </a>

          {/* Navigation Links + Language & Visitor Counter (Desktop) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
            {menuItems.map((item) => {
              const isActive = activeMenuId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-[#13ec7b] font-semibold' 
                      : 'text-zinc-400 hover:text-[#13ec7b]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#13ec7b] rounded-full shadow-[0_0_8px_#13ec7b] animate-[sr-pop_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]" />
                  )}
                </a>
              );
            })}

            {/* Glassmorphism Capsule for Language & Realtime Views */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-xl backdrop-blur-md shadow-2xl hover:border-[#13ec7b]/40 transition-all duration-300">
              {/* Globe / EN & ID Switcher */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-[#13ec7b] text-xs font-medium transition-colors cursor-pointer focus:outline-none"
                title="Switch Language (EN / ID)"
              >
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8"/>
                  <path strokeWidth="1.8" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z"/>
                </svg>
                <span className="font-mono text-xs font-bold tracking-wider">{language}</span>
              </button>

              {/* Vertical Line Separator */}
              <div className="h-3.5 w-[1px] bg-zinc-800/90" />

              {/* Realtime Visitor Counter Badge */}
              <div className="flex items-center gap-1.5 text-zinc-300 cursor-default" title="Realtime Website Views">
                <div className="relative flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ec7b] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#13ec7b]" />
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  {viewsCount !== null ? viewsCount.toLocaleString() : '0'}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-[#13ec7b] rounded-lg hover:bg-zinc-900 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-zinc-900 px-4 pt-2 pb-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = activeMenuId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#052615] text-[#13ec7b] border-l-2 border-[#13ec7b]'
                    : 'text-zinc-400 hover:bg-[#052615]/40 hover:text-[#13ec7b]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between px-3">
            <div className="flex items-center gap-2.5 px-3 py-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-xl backdrop-blur-md">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-[#13ec7b] text-xs font-medium"
              >
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.8"/>
                  <path strokeWidth="1.8" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z"/>
                </svg>
                <span className="font-mono font-bold text-xs">{language}</span>
              </button>

              <div className="h-3.5 w-[1px] bg-zinc-800/90" />

              <div className="flex items-center gap-1.5 text-zinc-300">
                <div className="relative flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13ec7b] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#13ec7b]" />
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-zinc-200">
                  {viewsCount !== null ? viewsCount.toLocaleString() : '0'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
