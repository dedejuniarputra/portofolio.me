'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

interface FloatingWhatsAppProps {
  phoneNumber?: string; // Format: 628xxxxxxxxxx (without + or 0)
}

export default function FloatingWhatsApp({ phoneNumber = '6282289858037' }: FloatingWhatsAppProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Default pre-filled message tailored for recruitment & project offers
  const defaultMessage = language === 'EN'
    ? 'Hello Dede Juniar Putra, I reviewed your portfolio and would like to discuss a job offer / recruitment opportunity!'
    : 'Halo Dede Juniar Putra, saya melihat portofolio Anda dan tertarik berdiskusi mengenai penawaran kerja / peluang rekrutmen!';

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  useEffect(() => {
    // Entrance animation delay after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Click handler: Directly open WhatsApp in new tab
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none font-sans pointer-events-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onTouchStart={() => setIsOpen(true)}
    >
      
      {/* ── Chat Preview Tooltip Box (Tampil saat disentuh/dihover) ── */}
      <div 
        className={`mb-3 w-72 sm:w-80 bg-zinc-950/95 border border-emerald-500/40 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)] backdrop-blur-xl relative overflow-hidden group transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto shadow-[0_10px_35px_rgba(19,236,123,0.2)]' 
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Top ambient green glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#25D366] to-teal-400" />

        {/* Header row with Avatar & Close Button */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold font-mono text-sm shadow-md">
                D
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-zinc-950 animate-pulse" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-white leading-none">Dede Juniar Putra</h4>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                {language === 'EN' ? 'Available for Hire' : 'Terbuka Rekrutmen & Proyek'}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors focus:outline-none cursor-pointer"
            title="Tutup pratinjau chat"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Bubble Body */}
        <div className="py-3 text-xs text-zinc-300 leading-relaxed font-sans space-y-2">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-2.5 text-zinc-200 shadow-inner">
            <p>
              {language === 'EN'
                ? 'Hi there! 👋 Interested in hiring me for a software engineering role, job position, or project collaboration? Let’s chat on WhatsApp!'
                : 'Halo! 👋 Tertarik merekrut saya untuk posisi Software Engineer, proyek web/mobile, atau peluang kerja? Chat langsung via WhatsApp!'}
            </p>
          </div>
        </div>

        {/* Action Button inside Popover */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(37,211,102,0.4)] group/link cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4 fill-current" />
          <span>{language === 'EN' ? 'Discuss Job Opportunity' : 'Diskusi Peluang Kerja'}</span>
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* ── Main Floating Button Icon ─────────────────────────── */}
      <div className="relative group pointer-events-auto">
        <button
          onClick={handleClick}
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 border border-emerald-400/40 group focus:outline-none cursor-pointer"
          aria-label="Chat via WhatsApp"
        >
          {/* Animated Pulsing Ring */}
          <span className="absolute -inset-1 rounded-2xl bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

          {/* Realtime Online Dot Indicator */}
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-zinc-950 z-10" />

          {/* WhatsApp Vector Logo */}
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.105 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.399.637-1.003 3.666 3.754-1.015.593.379z"/>
    </svg>
  );
}
