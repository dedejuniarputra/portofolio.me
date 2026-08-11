'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

interface GitHubStats {
  publicRepos: number;
  annualContributions: number;
  followers: number;
  totalStars: number;
}

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

/* ─── Count-up hook ─────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, decimals = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || target <= 0) return;
    let animationFrameId: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started, target, duration, decimals]);

  return { count, setStarted };
}

/* ─── Stat Card Component with Count-Up ────────────────────────────── */
interface StatCardProps {
  icon: React.ReactNode;
  target: number;
  label: string;
  triggered: boolean;
  loading: boolean;
  index: number;
}

function StatCard({ icon, target, label, triggered, loading, index }: StatCardProps) {
  const { count, setStarted } = useCountUp(target, 1800, 0);

  useEffect(() => {
    if (triggered && !loading) {
      setStarted(true);
    }
  }, [triggered, loading, target, setStarted]);

  return (
    <div
      className={`group bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4 backdrop-blur-xl hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300 ${
        triggered ? 'sr-visible-pop' : 'sr-hidden'
      }`}
      style={triggered ? { animationDelay: `${260 + index * 120}ms` } : undefined}
    >
      <div className="w-10 h-10 rounded-xl bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] group-hover:scale-110 group-hover:border-[#13ec7b]/60 transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white font-mono tabular-nums flex items-center gap-1 group-hover:text-[#13ec7b] transition-colors duration-300">
          {loading ? (
            <span className="w-10 h-6 bg-zinc-800 animate-pulse rounded inline-block" />
          ) : (
            <>
              <span>{Math.floor(count)}</span>
              <span className="text-[#13ec7b]">+</span>
            </>
          )}
        </h3>
        <p className="text-xs text-zinc-400 font-mono">{label}</p>
      </div>
    </div>
  );
}

export default function Github() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [sectionVisible, setSectionVisible] = useState(false);
  const [sparkles, setSparkles] = useState<StarParticle[]>([]);
  const lastAddRef = useRef(0);

  // Live GitHub Stats State
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 36,
    annualContributions: 35,
    followers: 25,
    totalStars: 88,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubStats = async () => {
      try {
        const res = await fetch('/api/github');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data) {
            setStats({
              publicRepos: typeof data.publicRepos === 'number' ? data.publicRepos : 36,
              annualContributions: typeof data.annualContributions === 'number' ? data.annualContributions : 35,
              followers: typeof data.followers === 'number' ? data.followers : 25,
              totalStars: typeof data.totalStars === 'number' ? data.totalStars : 88,
            });
          }
        }
      } catch (err) {
        console.error('Failed to fetch realtime GitHub stats:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Spotlight Sparkle Mouse Movements
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
        size: Math.floor(Math.random() * 6) + 10,
      };
      setSparkles(prev => [...prev.slice(-8), newParticle]);
    }
  };

  const handleMouseLeave = () => {
    setSparkles([]);
  };

  return (
    <section id="github" ref={sectionRef} className="relative w-full pt-24 pb-20 bg-black text-white overflow-hidden select-none">
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
              {t.github.sectionTag}
            </span>
          </div>

          {/* Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.github.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.github.titleHighlight}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
              {' '}{t.github.titlePart2}
            </h2>

            {/* Accent divider line */}
            <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm font-mono tracking-wide">
            {t.github.subtitle}
          </p>

        </div>

        {/* ── Main GitHub Contribution Container ───────────────── */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`group relative overflow-hidden bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-5 sm:p-7 backdrop-blur-xl hover:border-zinc-700/80 hover:shadow-2xl transition-all duration-500 space-y-6 ${
            sectionVisible ? 'sr-visible-pop' : 'sr-hidden'
          }`}
          style={sectionVisible ? { animationDelay: '140ms' } : undefined}
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

          {/* Card Top Header */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#13ec7b] font-bold tracking-wider uppercase">
              {/* Activity Pulse Wave Icon */}
              <svg className="w-4 h-4 text-[#13ec7b] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{t.github.contributionTitle}</span>
            </div>

            {/* Profile CTA Link */}
            <a
              href="https://github.com/dedejuniarputra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>@dedejuniarputra</span>
              <svg className="w-3.5 h-3.5 ml-0.5 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* GitHub Contribution Grid Snake Animation */}
          <div className="relative z-10 w-full overflow-x-auto py-2 flex justify-center items-center">
            <picture className="w-full flex justify-center items-center min-w-[700px]">
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg"
              />
              <source
                media="(prefers-color-scheme: light)"
                srcSet="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake.svg"
              />
              <img
                alt="github contribution grid snake animation"
                src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg"
                className="w-full h-auto max-w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </picture>
          </div>

        </div>

        {/* ── Realtime GitHub Stats Cards Row with Count-up Animation ────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Stat 1: Realtime Public Repositories */}
          <StatCard
            triggered={sectionVisible}
            loading={loading}
            index={0}
            target={stats.publicRepos}
            label={t.github.repositories}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            }
          />

          {/* Stat 2: Realtime Annual Contributions */}
          <StatCard
            triggered={sectionVisible}
            loading={loading}
            index={1}
            target={stats.annualContributions}
            label={t.github.contributions}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />

          {/* Stat 3: Realtime Followers */}
          <StatCard
            triggered={sectionVisible}
            loading={loading}
            index={2}
            target={stats.followers}
            label={t.github.followers}
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />

          {/* Stat 4: Realtime Total Stars */}
          <StatCard
            triggered={sectionVisible}
            loading={loading}
            index={3}
            target={stats.totalStars}
            label={t.github.stars}
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            }
          />

        </div>

      </div>
    </section>
  );
}
