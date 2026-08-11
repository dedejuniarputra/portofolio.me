'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

/* ─── Brand logo map — uses Simple Icons CDN ────────────────────────── */
interface SkillMeta {
  iconUrl: string;   // CDN URL or empty string for fallback
  bg: string;        // icon container background
  fallback: string;  // text shown if no icon URL
}

const SKILL_META: Record<string, SkillMeta> = {
  // ── Frontend ──────────────────────────────────────────────────────────
  'React.js':       { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',                 bg: '#61DAFB15', fallback: '⚛' },
  'Next.js':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',               bg: '#ffffff12', fallback: '▲' },
  'TypeScript':     { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',       bg: '#3178C615', fallback: 'TS' },
  'Tailwind CSS':   { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',     bg: '#06B6D415', fallback: '~' },
  'JavaScript':     { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',       bg: '#F7DF1E15', fallback: 'JS' },
  'HTML & CSS':     { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',                 bg: '#E34F2615', fallback: '</>' },
  // ── Backend ───────────────────────────────────────────────────────────
  'Laravel':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',             bg: '#FF2D2015', fallback: 'Lv' },
  'PHP':            { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',                     bg: '#8892BF15', fallback: 'PHP' },
  'Node.js':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',               bg: '#33993315', fallback: '⬡' },
  'REST API':       { iconUrl: '',                                                                                                    bg: '#13ec7b15', fallback: '⇄' },
  // ── Mobile ────────────────────────────────────────────────────────────
  'Flutter':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',             bg: '#54C5F815', fallback: '◆' },
  'Dart':           { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',                   bg: '#0175C215', fallback: 'D' },
  'Android Studio': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',bg: '#3DDC8415', fallback: '🤖' },
  'Firebase':       { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',           bg: '#FFCA2815', fallback: '🔥' },
  'GetX':           { iconUrl: '',                                                                                                    bg: '#9B59B615', fallback: 'Gx' },
  'Provider':       { iconUrl: '',                                                                                                    bg: '#79554815', fallback: 'Pv' },
  // ── Database & Tools ──────────────────────────────────────────────────
  'MySQL':          { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',                 bg: '#4479A115', fallback: 'My' },
  'PostgreSQL':     { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',       bg: '#4169E115', fallback: 'Pg' },
  'Git':            { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',                     bg: '#F0503215', fallback: '⎇' },
  'GitHub':         { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',              bg: '#ffffff0c', fallback: '⊙' },
  'Postman':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',             bg: '#FF6C3715', fallback: '📮' },
  'VS Code':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',              bg: '#007ACC15', fallback: '</>' },
};


/* ─── Single Skill Card ─────────────────────────────────────────────── */
function SkillPill({ name }: { name: string }) {
  const meta = SKILL_META[name] ?? { iconUrl: '', bg: '#ffffff0e', fallback: '?' };

  return (
    <div className="flex-shrink-0 group flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl
                    bg-zinc-900/50 border border-zinc-800/60
                    hover:bg-zinc-800/50 hover:border-zinc-600/50
                    transition-all duration-300 cursor-default">

      {/* Brand icon container */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                   group-hover:scale-110 transition-transform duration-300"
        style={{ background: meta.bg }}
      >
        {meta.iconUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={meta.iconUrl}
            alt={name}
            width={22}
            height={22}
            className="object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-bold text-zinc-300">{meta.fallback}</span>
        )}
      </div>

      {/* Skill name */}
      <span className="text-sm font-semibold text-zinc-300 group-hover:text-white
                       transition-colors duration-200 whitespace-nowrap tracking-wide">
        {name}
      </span>
    </div>
  );
}

/* ─── Marquee Row ───────────────────────────────────────────────────── */
interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

function MarqueeRow({ items, reverse = false, speed = 28 }: MarqueeRowProps) {
  const tripled = [...items, ...items, ...items];
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden w-full py-1 cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-scroll${reverse ? '-reverse' : ''} ${speed}s linear infinite`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {tripled.map((item, i) => (
          <SkillPill key={`${item}-${i}`} name={item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Skills Section ────────────────────────────────────────────────── */
export default function Skills() {
  const { t } = useLanguage();

  // ── Scroll-reveal state ──────────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

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

  return (
    <>
      {/* Inject keyframe animations */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-scroll-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes smooth-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes star-trail-fade {
          0% {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.2) rotate(35deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.25) rotate(70deg);
          }
        }
        .reveal-hidden  { opacity: 0; transform: translateY(24px); }
        .reveal-visible { animation: smooth-slide-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .star-trail-particle { animation: star-trail-fade 0.75s ease-out forwards; }
      `}</style>

      <section id="skills" ref={sectionRef} className="relative w-full pt-24 pb-20 bg-black text-white overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

        <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">

          {/* ── Section Header ─────────────────────────────────── */}
          <div
            className={`flex flex-col gap-3 ${
              sectionVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >

            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec7b]/10 border border-[#13ec7b]/25 text-[#13ec7b] text-xs font-mono tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] animate-pulse inline-block" />
                {t.skills.sectionTag}
              </span>
            </div>

            {/* Title */}
            <div className="flex items-end gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {t.skills.titlePart1}{' '}
                <span className="relative inline-block">
                  <span className="text-[#13ec7b]">{t.skills.titleHighlight}</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
                </span>
              </h2>
              <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
                <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-500 text-sm font-mono tracking-wide">
              {t.skills.subtitle}
            </p>
          </div>

            {/* ── Skill Category Rows ─────────────────────────────── */}
          <div className="space-y-6">
            {t.skills.categories.map((cat, index) => (
              <div
                key={cat.label}
                className={`space-y-3 ${
                  sectionVisible ? 'reveal-visible' : 'reveal-hidden'
                }`}
                style={sectionVisible ? { animationDelay: `${(index + 1) * 120}ms` } : {}}
              >

                {/* Category label */}
                <div className="flex items-center gap-2 px-1">
                  <div className="w-7 h-7 rounded-lg bg-[#052615] border border-[#13ec7b]/30 flex items-center justify-center text-[#13ec7b] shrink-0">
                    {index === 0 && (
                      // Frontend — code brackets
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {index === 1 && (
                      // Backend — server rack
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <rect x="2" y="3" width="20" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="2" y="10" width="20" height="5" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="18" cy="5.5" r="0.8" fill="currentColor" />
                        <circle cx="18" cy="12.5" r="0.8" fill="currentColor" />
                      </svg>
                    )}
                    {index === 2 && (
                      // Mobile — smartphone
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                    {index === 3 && (
                      // Database & Tools — cylinder database
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                        <ellipse cx="12" cy="5" rx="8" ry="3" strokeLinecap="round" />
                        <path strokeLinecap="round" d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5" />
                        <path strokeLinecap="round" d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 font-mono tracking-widest uppercase">
                    {cat.label}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800/60" />
                </div>

                {/* Marquee row — alternating direction */}
                <MarqueeRow
                  items={cat.items}
                  reverse={index % 2 !== 0}
                  speed={20 + index * 5}
                />
              </div>
            ))}
          </div>

          {/* ── Interactive Code Snippets Showcase ─────────────── */}
          <CodeShowcase visible={sectionVisible} />

        </div>
      </section>
    </>
  );
}

/* ─── Code Snippets Showcase ────────────────────────────────────────── */
type LanguageTab = 'Python' | 'Dart' | 'PHP';

const RAW_CODE: Record<LanguageTab, string> = {
  Python: `# Python
arr = ["Dede", "Juniar", "Putra"]

def greeting():
    name = next((item for item in arr if item == "Dede"), None)
    return f"Hello, I Am {name}!"

print(greeting())  # Hello, I Am Dede!`,

  Dart: `// Dart / Flutter
void main() {
  final arr = ["Dede", "Juniar", "Putra"];
  final name = arr.firstWhere((item) => item == "Dede", orElse: () => "");
  print("Hello, I Am $name!"); // Hello, I Am Dede!
}`,

  PHP: `<?php
// PHP / Laravel
$arr = ["Dede", "Juniar", "Putra"];

function greeting(array $arr): string {
    $name = current(array_filter($arr, fn($item) => $item === "Dede"));
    return "Hello, I Am {$name}!";
}

echo greeting($arr); // Hello, I Am Dede!`
};

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

function CodeShowcase({ visible }: { visible: boolean }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LanguageTab>('Python');
  const [copied, setCopied] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<StarParticle[]>([]);
  const lastAddRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const now = Date.now();
    if (now - lastAddRef.current > 50) {
      lastAddRef.current = now;
      const newParticle: StarParticle = {
        id: now + Math.random(),
        x,
        y,
        size: Math.floor(Math.random() * 8) + 10, // 10px to 18px
      };
      setSparkles(prev => [...prev.slice(-9), newParticle]);
    }
  };

  const handleMouseLeave = () => {
    setSparkles([]);
  };

  const handleCopy = () => {
    const code = RAW_CODE[activeTab];
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tabs: LanguageTab[] = ['Python', 'Dart', 'PHP'];

  const getFileExtension = (tab: LanguageTab) => {
    switch (tab) {
      case 'Python': return 'greeting.py';
      case 'Dart': return 'greeting.dart';
      case 'PHP': return 'greeting.php';
    }
  };

  return (
    <div
      className={`w-full pt-6 space-y-6 ${
        visible ? 'reveal-visible' : 'reveal-hidden'
      }`}
      style={visible ? { animationDelay: '600ms' } : undefined}
    >
      {/* Pills Tab Switcher */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md shadow-xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCopied(false);
                }}
                className={`px-5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#13ec7b]/10 border border-[#13ec7b]/40 text-[#13ec7b] font-semibold shadow-[0_0_15px_rgba(19,236,123,0.12)]'
                    : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-800/50'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Code Window Box */}
      <div
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-[#0d0d0e] border border-zinc-800/70 hover:border-[#13ec7b]/40 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl transition-all duration-500"
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

        {/* Top Header Bar */}
        <div className="relative z-10 px-5 py-3 bg-[#131316]/90 border-b border-zinc-800/60 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          </div>

          <span className="text-xs font-mono text-zinc-400 font-medium tracking-wide">
            {getFileExtension(activeTab)}
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer select-none"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-[#13ec7b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#13ec7b] font-bold">{t.skills.copied}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{t.skills.copy}</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Editor Area */}
        <div className="relative z-10 p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-200">
          {renderCodeLines(activeTab)}
        </div>

      </div>
    </div>
  );
}

function renderCodeLines(tab: LanguageTab) {
  switch (tab) {
    case 'Python':
      return (
        <div className="space-y-1">
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">1</span><span className="text-[#13ec7b] font-medium"># Python</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">2</span><span><span className="text-blue-300">arr</span> = [<span className="text-[#13ec7b]">&quot;Dede&quot;</span>, <span className="text-[#13ec7b]">&quot;Juniar&quot;</span>, <span className="text-[#13ec7b]">&quot;Putra&quot;</span>]</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">3</span><span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">4</span><span><span className="text-purple-400">def</span> <span className="text-yellow-300">greeting</span>():</span></div>
          <div className="flex bg-[#13ec7b]/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-0.5 border-l-2 border-[#13ec7b]"><span className="w-8 shrink-0 text-zinc-500 text-right pr-4 select-none">5</span><span>    name = <span className="text-yellow-300">next</span>((item <span className="text-purple-400">for</span> item <span className="text-purple-400">in</span> arr <span className="text-purple-400">if</span> item == <span className="text-[#13ec7b]">&quot;Dede&quot;</span>), <span className="text-orange-300">None</span>)</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">6</span><span>    <span className="text-purple-400">return</span> <span className="text-[#13ec7b]">f&quot;Hello, I Am {'{name}'}!&quot;</span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">7</span><span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">8</span><span><span className="text-yellow-300">print</span>(<span className="text-yellow-300">greeting</span>())  <span className="text-zinc-500"># Hello, I Am Dede!</span></span></div>
        </div>
      );

    case 'Dart':
      return (
        <div className="space-y-1">
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">1</span><span className="text-[#13ec7b] font-medium">// Dart / Flutter</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">2</span><span><span className="text-purple-400">void</span> <span className="text-yellow-300">main</span>() {'{'}</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">3</span><span>  <span className="text-purple-400">final</span> <span className="text-blue-300">arr</span> = [<span className="text-[#13ec7b]">&apos;Dede&apos;</span>, <span className="text-[#13ec7b]">&apos;Juniar&apos;</span>, <span className="text-[#13ec7b]">&apos;Putra&apos;</span>];</span></div>
          <div className="flex bg-[#13ec7b]/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-0.5 border-l-2 border-[#13ec7b]"><span className="w-8 shrink-0 text-zinc-500 text-right pr-4 select-none">4</span><span>  <span className="text-purple-400">final</span> <span className="text-blue-300">name</span> = <span className="text-blue-300">arr</span>.<span className="text-yellow-300">firstWhere</span>((<span className="text-orange-300">item</span>) =&gt; <span className="text-orange-300">item</span> == <span className="text-[#13ec7b]">&apos;Dede&apos;</span>, orElse: () =&gt; <span className="text-[#13ec7b]">&apos;&apos;</span>);</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">5</span><span>  <span className="text-yellow-300">print</span>(<span className="text-[#13ec7b]">&quot;Hello, I Am $name!&quot;</span>); <span className="text-zinc-500">// Hello, I Am Dede!</span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">6</span><span>{'}'}</span></div>
        </div>
      );

    case 'PHP':
      return (
        <div className="space-y-1">
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">1</span><span className="text-purple-400">&lt;?php</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">2</span><span className="text-[#13ec7b] font-medium">// PHP / Laravel</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">3</span><span><span className="text-blue-300">$arr</span> = [<span className="text-[#13ec7b]">&quot;Dede&quot;</span>, <span className="text-[#13ec7b]">&quot;Juniar&quot;</span>, <span className="text-[#13ec7b]">&quot;Putra&quot;</span>];</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">4</span><span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">5</span><span><span className="text-purple-400">function</span> <span className="text-yellow-300">greeting</span>(<span className="text-blue-400">array</span> <span className="text-blue-300">$arr</span>): <span className="text-blue-400">string</span> {'{'}</span></div>
          <div className="flex bg-[#13ec7b]/5 -mx-4 sm:-mx-6 px-4 sm:px-6 py-0.5 border-l-2 border-[#13ec7b]"><span className="w-8 shrink-0 text-zinc-500 text-right pr-4 select-none">6</span><span>    <span className="text-blue-300">$name</span> = <span className="text-yellow-300">current</span>(<span className="text-yellow-300">array_filter</span>(<span className="text-blue-300">$arr</span>, <span className="text-purple-400">fn</span>(<span className="text-orange-300">$item</span>) =&gt; <span className="text-orange-300">$item</span> === <span className="text-[#13ec7b]">&quot;Dede&quot;</span>));</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">7</span><span>    <span className="text-purple-400">return</span> <span className="text-[#13ec7b]">&quot;Hello, I Am {'{$name}'}!&quot;</span>;</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">8</span><span>{'}'}</span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">9</span><span></span></div>
          <div className="flex"><span className="w-8 shrink-0 text-zinc-600 text-right pr-4 select-none">10</span><span><span className="text-purple-400">echo</span> <span className="text-yellow-300">greeting</span>(<span className="text-blue-300">$arr</span>); <span className="text-zinc-500">// Hello, I Am Dede!</span></span></div>
        </div>
      );
  }
}
