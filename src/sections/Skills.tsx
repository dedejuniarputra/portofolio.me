'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

/* ─── Custom Vector SVG Icons ────────────────────────────────────────── */
const ChatGPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#10a37f]" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0811 4.7792-2.7582a.7944.7944 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4954 4.495zm-9.6607-4.1254a4.4707 4.4707 0 0 1-.5355-3.0137l.142.0859 4.7839 2.7582a.7705.7705 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3401 8.5956a4.466 4.466 0 0 1 2.3655-1.9728V12.2a.7657.7657 0 0 0 .3879.6765l5.8143 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8314-2.7867A4.4997 4.4997 0 0 1 2.34 8.5956zm16.0993 3.8558l-5.8428-3.3685 2.02-1.1686a.0757.0757 0 0 1 .071 0l4.8314 2.7867a4.4954 4.4954 0 0 1-.6869 8.1131v-5.687a.7944.7944 0 0 0-.3927-.6757zm2.0104-3.0232l-.1419-.0859-4.7744-2.7582a.7753.7753 0 0 0-.7854 0L8.9053 9.9527V7.6203a.0757.0757 0 0 1 .0332-.0615l4.8314-2.7867a4.5 4.5 0 0 1 6.6809 4.6603zm-12.6401-4.135a4.4707 4.4707 0 0 1 2.8764 1.0408l-.1419.0811-4.7792 2.7582a.7944.7944 0 0 0-.3927.6813v6.7369L3.3444 15.34a.071.071 0 0 1-.038-.052V9.7054a4.5045 4.5045 0 0 1 4.4954-4.495zM12 14.3753l-2.6174-1.5112a.0804.0804 0 0 1-.038-.0663V9.769a.0804.0804 0 0 1 .038-.0663L12 8.1915l2.6174 1.5112a.0804.0804 0 0 1 .038.0663v3.0288a.0804.0804 0 0 1-.038.0663z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6" fill="#D97757">
    <path d="M49.2 11.5c1.8-.2 3.1 3.5 3.7 8.3.6 4.8.4 10.7 0 15.6 4.2-3.6 9.4-6.8 14.4-9.1 5-2.3 8.8-1.7 8.6 0-.2 1.7-3.9 4.6-9.1 7.9-5.2 3.3-10.9 6.9-15.5 9.7 4.6 1.8 10.3 3.8 15.4 5.9 5.1 2.1 7.5 4.2 6.3 5.3-1.2 1.1-4.5.3-9.7-1.7-5.2-2-10.8-4.7-15.2-7.3 2.9 4.5 5.9 9.7 8.1 14.6 2.2 4.9 2.3 8.6.9 8.9-1.4.3-3.8-2.8-6.5-7.6-2.7-4.8-5.3-10.7-6.8-15.8-1.4 5.1-3.7 11-6.5 15.8-2.7 4.8-5.1 7.9-6.5 7.6-1.4-.3-1.3-4.1.9-8.9 2.2-4.9 5.2-10.1 8.1-14.6-4.4 2.6-10 5.3-15.2 7.3-5.2 2-8.5 2.8-9.7 1.7-1.2-1.1 1.2-3.2 6.3-5.3 5.1-2.1 10.8-4.1 15.4-5.9-4.6-2.8-10.3-6.4-15.5-9.7-5.2-3.3-8.9-6.2-9.1-7.9-.2-1.7 3.6-2.3 8.6 0 5 2.3 10.2 5.5 14.4 9.1-.4-4.9-.6-10.8 0-15.6.6-4.8 1.9-8.5 3.7-8.3z" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <defs>
      <linearGradient id="gemini-grad-icon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4e87f5" />
        <stop offset="50%" stopColor="#9b72cb" />
        <stop offset="100%" stopColor="#d96570" />
      </linearGradient>
    </defs>
    <path
      fill="url(#gemini-grad-icon)"
      d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
    />
  </svg>
);

const AntigravityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6">
    <defs>
      <linearGradient id="antigravity-grad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="30%" stopColor="#06B6D4" />
        <stop offset="55%" stopColor="#10B981" />
        <stop offset="80%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <path
      fill="url(#antigravity-grad)"
      d="M50 18c-5.5 0-13 11-20.5 32-3.2 9-7 15.5-12 19.5-2.5 2-4.5 3-6.5 4-1.8.9-2.5 1.8-1.5 2.5 1 .7 3 0 6.2-1.2 5.2-2 9.2-7 14.2-15.2 5.8-9.8 11.5-22.5 20.1-22.5s14.3 12.7 20.1 22.5c5 8.2 9 13.2 14.2 15.2 3.2 1.2 5.2 1.9 6.2 1.2 1-.7.3-1.6-1.5-2.5-2-1-4-2-6.5-4-5-4-8.8-10.5-12-19.5C63 29 55.5 18 50 18z"
    />
  </svg>
);

const HostingerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect x="9.7" y="1" width="4.6" height="9.1" rx="0.8" fill="#673DE6" />
    <rect x="9.7" y="13.9" width="4.6" height="9.1" rx="0.8" fill="#673DE6" />
    <rect x="2.8" y="7.4" width="4.6" height="9.1" rx="0.8" fill="#673DE6" />
    <rect x="16.6" y="7.4" width="4.6" height="9.1" rx="0.8" fill="#673DE6" />
  </svg>
);

const GetXIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <rect width="24" height="24" rx="6" fill="#8E44AD" />
    <path d="M7 7l10 10M17 7L7 17" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
  </svg>
);

const ProviderIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#54C5F8" d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8L12 11.8 5.2 8 12 4.2zM5 9.4l6 3.3v6.3l-6-3.3V9.4zm8 9.6v-6.3l6-3.3v6.3l-6 3.3z"/>
  </svg>
);

const CUSTOM_ICONS: Record<string, React.ReactNode> = {
  'ChatGPT': <ChatGPTIcon />,
  'Claude': <ClaudeIcon />,
  'Gemini': <GeminiIcon />,
  'Antigravity': <AntigravityIcon />,
  'GetX': <GetXIcon />,
  'Provider': <ProviderIcon />,
};

/* ─── Brand logo map — uses Simple Icons & Devicon CDN ───────────────── */
interface SkillMeta {
  iconUrl: string;   // CDN URL or empty string for fallback
  bg: string;        // icon container background
  fallback: string;  // text shown if no icon URL
}

const SKILL_META: Record<string, SkillMeta> = {
  // ── Frontend ──────────────────────────────────────────────────────────
  'HTML':           { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',                 bg: '#E34F2615', fallback: 'HTML' },
  'React.js':       { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',                 bg: '#61DAFB15', fallback: '⚛' },
  'Next.js':        { iconUrl: 'https://cdn.simpleicons.org/nextdotjs/white',                                                         bg: '#ffffff15', fallback: '▲' },
  'Bootstrap':      { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',         bg: '#7952B315', fallback: 'BS' },
  'Tailwind CSS':   { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',     bg: '#06B6D415', fallback: '~' },

  // ── Backend & Database ────────────────────────────────────────────────
  'Laravel':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',             bg: '#FF2D2015', fallback: 'Lv' },
  'MySQL':          { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',                 bg: '#4479A115', fallback: 'My' },
  'Firebase':       { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',           bg: '#FFCA2815', fallback: '🔥' },
  'PostgreSQL':     { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',       bg: '#4169E115', fallback: 'Pg' },
  'Node.js':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',               bg: '#33993315', fallback: '⬡' },

  // ── Mobile ────────────────────────────────────────────────────────────
  'Android Studio': { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',bg: '#3DDC8415', fallback: '🤖' },
  'Flutter':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',             bg: '#54C5F815', fallback: '◆' },
  'Kotlin':         { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',               bg: '#7F52FF15', fallback: 'K' },
  'Dart':           { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',                   bg: '#0175C215', fallback: 'D' },
  'GetX':           { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',             bg: '#9B59B615', fallback: 'Gx' },
  'Provider':       { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',             bg: '#79554815', fallback: 'Pv' },

  // ── Tools & Hosting ──────────────────────────────────────────────────
  'VS Code':        { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', bg: '#007ACC15', fallback: '</>' },
  'Antigravity':    { iconUrl: '', bg: '#13ec7b15', fallback: 'AG' },
  'Git':            { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', bg: '#F0503215', fallback: '⎇' },
  'GitHub':         { iconUrl: 'https://cdn.simpleicons.org/github/white', bg: '#ffffff15', fallback: '⊙' },
  'Laragon':        { iconUrl: 'https://cdn.simpleicons.org/laragon/00A9E0', bg: '#00A9E015', fallback: 'Lg' },
  'Vercel':         { iconUrl: 'https://cdn.simpleicons.org/vercel/white', bg: '#ffffff15', fallback: '▲' },
  'Hostinger':      { iconUrl: 'https://cdn.simpleicons.org/hostinger/673DE6', bg: '#673DE615', fallback: 'H' },
  'Figma':          { iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', bg: '#F24E1E15', fallback: 'Fg' },

  // ── AI Tools ──────────────────────────────────────────────────────────
  'ChatGPT':        { iconUrl: '', bg: '#74aa9c15', fallback: 'AI' },
  'Claude':         { iconUrl: '', bg: '#D9775715', fallback: 'Cl' },
  'Gemini':         { iconUrl: '', bg: '#8E75FF15', fallback: 'Ge' },
};


/* ─── Single Skill Card Component ───────────────────────────────────── */
function SkillCard({ name }: { name: string }) {
  const meta = SKILL_META[name] ?? { iconUrl: '', bg: '#ffffff0e', fallback: '?' };
  const [imgError, setImgError] = useState(false);
  const customIcon = CUSTOM_ICONS[name];

  return (
    <div className="group relative bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center justify-center gap-2.5 backdrop-blur-xl hover:bg-zinc-900/60 hover:border-[#13ec7b]/50 hover:shadow-[0_0_20px_rgba(19,236,123,0.12)] transition-all duration-300 cursor-default">
      {/* Brand Icon Box */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-zinc-800/80 group-hover:border-[#13ec7b]/40 shadow-inner overflow-hidden"
        style={{ background: meta.bg }}
      >
        {customIcon ? (
          customIcon
        ) : meta.iconUrl && !imgError ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={meta.iconUrl}
            alt={name}
            width={26}
            height={26}
            className="w-6 h-6 object-contain filter drop-shadow"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-[#13ec7b] font-mono">{meta.fallback}</span>
        )}
      </div>

      {/* Name label */}
      <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200 text-center tracking-wide line-clamp-1">
        {name}
      </span>
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

      <section id="skills" ref={sectionRef} className="relative w-full pt-24 pb-20 bg-black text-white overflow-hidden select-none">
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

          {/* ── Skills Split Container (Reference Image 2 & 3) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column — Stat Circle Badge & Description */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              
              {/* Glowing Circular Tech Badge */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative group mb-6">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#13ec7b]/25 via-zinc-900 to-black border-2 border-[#13ec7b]/40 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(19,236,123,0.18)] group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight drop-shadow-[0_0_15px_rgba(19,236,123,0.5)]">
                      {t.skills.totalBadgeCount}
                    </span>
                    <span className="text-[10px] font-mono text-[#13ec7b] tracking-widest font-bold uppercase mt-1">
                      {t.skills.totalBadgeLabel}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
                      STACK & TOOLS
                    </span>
                  </div>
                  {/* Outer Ring Pulse */}
                  <div className="absolute inset-0 rounded-full border border-[#13ec7b]/20 animate-ping pointer-events-none opacity-40" />
                </div>

                {/* Side Explanation */}
                <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed max-w-sm">
                  {t.skills.sideDescription}
                </p>
              </div>

            </div>

            {/* Right Column — Categorized Tech Grids */}
            <div className="lg:col-span-8 space-y-10">
              {t.skills.categories.map((cat, catIdx) => (
                <div
                  key={cat.label}
                  className={`space-y-4 ${
                    sectionVisible ? 'reveal-visible' : 'reveal-hidden'
                  }`}
                  style={sectionVisible ? { animationDelay: `${(catIdx + 1) * 100}ms` } : {}}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#13ec7b] font-mono text-xs sm:text-sm font-extrabold tracking-widest">
                      {cat.num}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-200 tracking-widest uppercase font-mono">
                      {cat.label}
                    </h3>
                    <div className="flex-1 h-px bg-zinc-800/80" />
                  </div>

                  {/* Grid of Skill Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                    {cat.items.map((itemName) => (
                      <SkillCard key={itemName} name={itemName} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

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
