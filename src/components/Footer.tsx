'use client';

import { useLanguage } from '@/src/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#070709] border-t border-zinc-900/90 py-8 px-6 sm:px-10 lg:px-16 text-xs font-mono text-zinc-400 relative z-20 select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>{t.contact.footerCopyright}</p>
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-[#13ec7b] animate-ping inline-block" />
          <span>Based in Bandar Lampung, Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
