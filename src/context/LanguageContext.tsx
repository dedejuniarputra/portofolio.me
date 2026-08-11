'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'ID';

export const translations = {
  EN: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      github: 'GitHub',
      journey: 'Journey',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      badgeText: 'HI, HOW ARE YOU?',
      roles: [
        'Junior Software Engineer & AI Enthusiast',
        'Mobile Developer',
        'Frontend Web Developer',
      ],
      description: 'Specializing in software engineering, frontend web & mobile development, and modern AI integration to build efficient, scalable digital solutions.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Contact Me',
      terminalFile: 'profile.config.tsx',
      copy: 'Copy',
      copied: 'Copied!',
    },
    about: {
      sectionTag: '// ABOUT ME',
      titlePart1: 'Get to',
      titleHighlight: 'Know',
      titlePart2: 'Me',
      subtitle: 'Software Engineer & AI Enthusiast — Universitas Lampung',
      bio1Prefix: "I'm ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", a Software Engineer & AI Enthusiast passionate about building scalable web and mobile applications and transforming real-world requirements into reliable, user-centered digital solutions.",
      bio2: "I’m a Software Engineer & AI Enthusiast with a strong focus on web development and a solid foundation in mobile application development. I hold a Bachelor’s degree in Computer Science from Universitas Lampung, with over 2 years of experience in Web Development and 1 year in Mobile Development. Throughout my journey, I have worked on 7+ digital projects using Laravel, React.js, and Flutter. I have experience building scalable, structured, and user-centered applications, as well as working with REST APIs, database management, Git, system testing, debugging, troubleshooting, and application maintenance.",
      bio3: "I’m passionate about designing modular and maintainable application architectures while paying close attention to performance, usability, and user experience. Beyond technical expertise, I bring strong problem-solving, communication, and adaptability skills, allowing me to work effectively both independently and as part of a team. I enjoy transforming real-world requirements and challenges into effective digital solutions, and I believe great software is not simply about writing code, but about understanding problems, creating meaningful solutions, and delivering real value to users and businesses.",
      stats: {
        projects: 'Projects Built',
        commits: 'Commits (2022 - 2026)',
        coffee: 'Coffee Cups',
        codingHours: 'Hours Coding',
      },
      expertiseTitle: 'What I',
      expertiseTitleHighlight: 'Do',
      expertise: [
        {
          title: 'Web Development',
          desc: 'Building scalable, structured web applications using Laravel and React.js.',
        },
        {
          title: 'Mobile Development',
          desc: 'Crafting cross-platform mobile apps with Flutter for Android & iOS.',
        },
        {
          title: 'REST API & Backend',
          desc: 'Designing and integrating robust REST APIs with clean database management.',
        },
        {
          title: 'System Analysis',
          desc: 'Analyzing business workflows and turning requirements into efficient digital systems.',
        },
      ],
    },
    skills: {
      sectionTag: '// TECH_STACK',
      titlePart1: 'Skills &',
      titleHighlight: 'Technologies',
      subtitle: 'Technologies, tools, and frameworks I use to build robust digital products.',
      codeShowcaseTitle: 'Code Snippets Showcase',
      codeShowcaseSubtitle: 'Interactive preview of how I write clean, structured code across stack technologies.',
      copy: 'Copy',
      copied: 'Copied!',
      categories: [
        {
          label: 'Frontend',
          items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'],
        },
        {
          label: 'Backend',
          items: ['Laravel', 'PHP', 'Node.js', 'REST API'],
        },
        {
          label: 'Mobile',
          items: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'GetX', 'Provider'],
        },
        {
          label: 'Database & Tools',
          items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Postman', 'VS Code'],
        },
      ],
    },
    projects: {
      sectionTag: '// personal_labs',
      titlePart1: 'Featured',
      titleHighlight: 'Projects',
      title: 'Featured Projects',
      subtitle: '"Showcasing my latest web, mobile, and software engineering projects."',
      viewDetails: 'System Architecture & Details',
      liveDemo: 'Live Demo / Repository',
      modalClose: 'Close',
      architectureLabel: 'Architecture & System Flow',
      noteLabel: '*This is an interactive architecture diagram block representing system design and data flow.',
      seeMore: 'See More Projects',
      seeLess: 'See Less',
    },
  },
  ID: {
    nav: {
      about: 'Tentang Saya',
      skills: 'Keahlian',
      projects: 'Proyek',
      github: 'GitHub',
      journey: 'Perjalanan',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },
    hero: {
      badgeText: 'HALO, APA KABAR MU?',
      roles: [
        'Junior Software Engineer & AI Enthusiast',
        'Mobile Developer',
        'Frontend Web Developer',
      ],
      description: 'Berfokus pada rekayasa perangkat lunak, pengembangan web frontend & aplikasi mobile, serta integrasi AI modern untuk membangun solusi digital yang efisien dan responsif.',
      ctaProjects: 'Jelajahi Proyek',
      ctaContact: 'Hubungi Saya',
      terminalFile: 'profile.config.tsx',
      copy: 'Salin',
      copied: 'Tersalin!',
    },
    about: {
      sectionTag: '// TENTANG SAYA',
      titlePart1: 'Kenali',
      titleHighlight: 'Saya',
      titlePart2: 'Lebih Jauh',
      subtitle: 'Software Engineer — Universitas Lampung',
      bio1Prefix: "Saya ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", seorang Software Engineer yang berdedikasi dalam membangun aplikasi web dan mobile yang responsif serta merancang alur sistem digital yang efisien.",
      bio2: "Saya adalah seorang Software Engineer yang berfokus pada pengembangan web dengan fondasi kuat dalam pengembangan aplikasi mobile. Saya memegang gelar Sarjana Komputer (S.Kom) dari Universitas Lampung, dengan pengalaman lebih dari 2 tahun di bidang Web Development dan 1 tahun di Mobile Development. Dalam perjalanan karier saya, saya telah mengerjakan 7+ proyek digital menggunakan Laravel, React.js, dan Flutter. Saya berpengalaman membangun aplikasi yang terstruktur dan berpusat pada pengguna, serta terbiasa bekerja dengan REST API, manajemen basis data, Git, pengujian sistem, debugging, troubleshooting, dan pemeliharaan aplikasi.",
      bio3: "Saya memiliki minat besar dalam merancang arsitektur aplikasi yang modular dan mudah dirawat dengan memperhatikan performa serta kenyamanan pengguna. Selain keahlian teknis, saya memiliki kemampuan penyelesaian masalah, komunikasi, dan adaptasi yang baik untuk bekerja secara mandiri maupun dalam tim. Saya percaya bahwa perangkat lunak yang hebat tidak hanya tentang menulis kode, melainkan tentang memahami masalah dan memberikan solusi digital yang memberikan nilai nyata bagi pengguna dan bisnis.",
      stats: {
        projects: 'Proyek Selesai',
        commits: 'Komit Git (2025 - 2026)',
        coffee: 'Cangkir Kopi',
        codingHours: 'Jam Coding',
      },
      expertiseTitle: 'Yang Saya',
      expertiseTitleHighlight: 'Kerjakan',
      expertise: [
        {
          title: 'Web Development',
          desc: 'Membangun aplikasi web yang terstruktur dan scalable menggunakan Laravel dan React.js.',
        },
        {
          title: 'Mobile Development',
          desc: 'Mengembangkan aplikasi mobile lintas platform dengan Flutter untuk Android & iOS.',
        },
        {
          title: 'REST API & Backend',
          desc: 'Merancang dan mengintegrasikan REST API yang andal dengan manajemen database yang bersih.',
        },
        {
          title: 'Analisis Sistem',
          desc: 'Menganalisis alur bisnis dan mengubah kebutuhan menjadi sistem digital yang efisien.',
        },
      ],
    },
    skills: {
      sectionTag: '// TECH_STACK',
      titlePart1: 'Keahlian &',
      titleHighlight: 'Teknologi',
      subtitle: 'Teknologi, alat, dan framework yang saya gunakan untuk membangun produk digital.',
      codeShowcaseTitle: 'Showcase Kode Interaktif',
      codeShowcaseSubtitle: 'Pratinjau interaktif bagaimana saya menulis kode yang bersih dan terstruktur.',
      copy: 'Salin',
      copied: 'Tersalin!',
      categories: [
        {
          label: 'Frontend',
          items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'],
        },
        {
          label: 'Backend',
          items: ['Laravel', 'PHP', 'Node.js', 'REST API'],
        },
        {
          label: 'Mobile',
          items: ['Flutter', 'Dart', 'Android Studio', 'Firebase', 'GetX', 'Provider'],
        },
        {
          label: 'Database & Tools',
          items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Postman', 'VS Code'],
        },
      ],
    },
    projects: {
      sectionTag: '// personal_labs',
      titlePart1: 'Proyek',
      titleHighlight: 'Pilihan',
      title: 'Proyek Pilihan',
      subtitle: '"Kumpulan proyek pengembangan web, mobile, dan sistem digital terbaik saya."',
      viewDetails: 'Arsitektur Sistem & Detail',
      liveDemo: 'Demo Langsung / Repositori',
      modalClose: 'Tutup',
      architectureLabel: 'Arsitektur & Alur Sistem',
      noteLabel: '*Ini adalah blok diagram arsitektur interaktif yang mewakili desain sistem dan alur data.',
      seeMore: 'Lihat Lebih Banyak Proyek',
      seeLess: 'Tampilkan Lebih Sedikit',
    },
  },
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof translations['EN'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang') as Language;
    if (savedLang && (savedLang === 'EN' || savedLang === 'ID')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'EN' ? 'ID' : 'EN';
    setLanguage(nextLang);
  };

  const value = {
    language,
    toggleLanguage,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
