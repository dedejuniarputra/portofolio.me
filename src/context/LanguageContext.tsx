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
        'Junior Software Engineer & System Analyst',
        'Mobile Developer',
        'Frontend Web Developer',
        'Workflow & System Analyst',
      ],
      description: 'Specializing in modern web & mobile app development and system analysis to transform complex business workflows into seamless digital solutions.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Contact Me',
      terminalFile: 'profile.config.tsx',
      copy: 'Copy',
      copied: 'Copied!',
    },
    about: {
      sectionTag: '// ABOUT ME',
      bio1Prefix: "I'm ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", a Software Engineer & System Analyst passionate about building scalable web and mobile applications and transforming real-world requirements into reliable, user-centered digital solutions.",
      bio2: "I’m a Software Engineer with a strong focus on web development and a solid foundation in mobile application development. I hold a Bachelor’s degree in Computer Science from Universitas Lampung, with over 2 years of experience in Web Development and 1 year in Mobile Development. Throughout my journey, I have worked on 7+ digital projects using Laravel, React.js, and Flutter. I have experience building scalable, structured, and user-centered applications, as well as working with REST APIs, database management, Git, system testing, debugging, troubleshooting, and application maintenance.",
      bio3: "I’m passionate about designing modular and maintainable application architectures while paying close attention to performance, usability, and user experience. Beyond technical expertise, I bring strong problem-solving, communication, and adaptability skills, allowing me to work effectively both independently and as part of a team. I enjoy transforming real-world requirements and challenges into effective digital solutions, and I believe great software is not simply about writing code, but about understanding problems, creating meaningful solutions, and delivering real value to users and businesses.",
      stats: {
        projects: 'Projects Built',
        commits: 'Commits (2025)',
        coffee: 'Coffee Cups',
        codingHours: 'Hours Coding',
      },
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
        'Junior Software Engineer & System Analyst',
        'Mobile Developer',
        'Frontend Web Developer',
        'Workflow & System Analyst',
      ],
      description: 'Berfokus pada pengembangan aplikasi web & mobile modern serta analisis sistem untuk mengubah alur kerja bisnis yang kompleks menjadi solusi digital yang responsif dan mudah digunakan',
      ctaProjects: 'Jelajahi Proyek',
      ctaContact: 'Hubungi Saya',
      terminalFile: 'profile.config.tsx',
      copy: 'Salin',
      copied: 'Tersalin!',
    },
    about: {
      sectionTag: '// TENTANG SAYA',
      bio1Prefix: "Saya ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", seorang Software Engineer & System Analyst yang berdedikasi dalam membangun aplikasi web dan mobile yang responsif serta merancang alur sistem digital yang efisien.",
      bio2: "Saya adalah seorang Software Engineer yang berfokus pada pengembangan web dengan fondasi kuat dalam pengembangan aplikasi mobile. Saya memegang gelar Sarjana Komputer (S.Kom) dari Universitas Lampung, dengan pengalaman lebih dari 2 tahun di bidang Web Development dan 1 tahun di Mobile Development. Dalam perjalanan karier saya, saya telah mengerjakan 7+ proyek digital menggunakan Laravel, React.js, dan Flutter. Saya berpengalaman membangun aplikasi yang terstruktur dan berpusat pada pengguna, serta terbiasa bekerja dengan REST API, manajemen basis data, Git, pengujian sistem, debugging, troubleshooting, dan pemeliharaan aplikasi.",
      bio3: "Saya memiliki minat besar dalam merancang arsitektur aplikasi yang modular dan mudah dirawat dengan memperhatikan performa serta kenyamanan pengguna. Selain keahlian teknis, saya memiliki kemampuan penyelesaian masalah, komunikasi, dan adaptasi yang baik untuk bekerja secara mandiri maupun dalam tim. Saya percaya bahwa perangkat lunak yang hebat tidak hanya tentang menulis kode, melainkan tentang memahami masalah dan memberikan solusi digital yang memberikan nilai nyata bagi pengguna dan bisnis.",
      stats: {
        projects: 'Proyek Selesai',
        commits: 'Komit Git (2025)',
        coffee: 'Cangkir Kopi',
        codingHours: 'Jam Coding',
      },
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
