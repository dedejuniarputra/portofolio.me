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
    github: {
      sectionTag: '// GITHUB_ACTIVITY',
      titlePart1: 'GitHub',
      titleHighlight: 'Activity',
      titlePart2: '& Contributions',
      subtitle: '"Interactive GitHub snake animation and contribution activity showcase."',
      contributionTitle: 'CONTRIBUTION ACTIVITY',
      viewProfile: 'Visit GitHub Profile',
      repositories: 'Public Repositories',
      contributions: 'Annual Contributions',
      followers: 'Followers',
      stars: 'GitHub Stars',
    },
    journey: {
      sectionTag: '// MY_EVOLUTION',
      titlePart1: 'Career',
      titleHighlight: 'Journey',
      titlePart2: '& Experience',
      subtitle: '"My professional trajectory, work experience, teaching assistantships, and organizational milestones."',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      present: 'Present',
      items: [
        {
          id: 'freelance',
          role: 'Freelance',
          company: 'Freelance',
          location: 'REMOTE / ON-SITE',
          type: 'PART-TIME',
          year: '2026',
          period: 'Jan 2026 - Present',
          duration: '8 MONTHS',
          skills: 'Full-Stack Web Development, React.js, Laravel, Flutter & +10 skills',
          details: [
            'Developing custom full-stack web and mobile applications tailored to client requirements.',
            'Architecting robust REST APIs and database models using Laravel, Next.js, and React.js.',
            'Collaborating directly with clients to deliver performant, user-centered digital solutions.'
          ]
        },
        {
          id: 'diskominfo',
          role: 'Front-end Developer',
          company: 'DISKOMINFO',
          location: 'BANDAR LAMPUNG',
          type: 'INTERNSHIP',
          year: '2025',
          period: 'Jun 2025 - Agust 2025',
          duration: '3 MONTHS',
          workType: 'ON-SITE',
          details: [
            'Built and optimized front-end web interfaces for regional government digital services.',
            'Translated UI/UX designs into responsive, accessible code using modern web frameworks.',
            'Participated in system testing, UI component refactoring, and performance optimizations.'
          ]
        },
        {
          id: 'asdos-amp',
          role: 'Assistant Lecturer – Advanced Mobile Programming',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '6 MONTHS',
          workType: 'ON-SITE',
          details: [
            'Taught undergraduate students advanced mobile application engineering using Flutter and Dart.',
            'Guided students in state management (GetX/Provider), REST API consumption, and clean architecture.',
            'Evaluated lab assignments, provided technical mentoring, and conducted code reviews.'
          ]
        },
        {
          id: 'asdos-mat',
          role: 'Assistant Lecturer – Mobile Application and Technology',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '6 MONTHS',
          workType: 'ON-SITE',
          details: [
            'Facilitated laboratory practical sessions on mobile development fundamentals.',
            'Mentored students on UI layout building, event handling, and Android app lifecycle.',
            'Prepared practical guidelines and assisted course professors in grading semester projects.'
          ]
        },
        {
          id: 'himakom',
          role: 'Volunter Panitia Acara',
          company: 'HIMAKOM UNILA',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2022 - 2023',
          period: 'Sept 2022 - Okto 2023',
          duration: '1 TAHUN 2 BULAN',
          workType: 'ON-SITE',
          details: [
            'Organized tech seminars, workshops, and computer science competitions at Universitas Lampung.',
            'Managed event logistics, speaker coordination, and participant registration systems.',
            'Fostered collaborative teamwork across student committees to ensure successful event execution.'
          ]
        }
      ]
    },
    certificates: {
      sectionTag: '// ACHIEVEMENTS',
      titlePart1: 'Certificates',
      titleHighlight: '& Achievements',
      titlePart2: '',
      subtitle: '"Official certifications, technical courses, and skill verification credentials."',
      viewCredential: 'View Credential',
      seeMore: 'See More Certificates',
      seeLess: 'See Less',
      items: [
        { id: 1, title: 'Project Express & MongoDB', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 2, title: 'Node.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 3, title: 'Express & EJS', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 4, title: 'Middleware Express', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 5, title: 'Express.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 6, title: 'Mongoose', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 7, title: 'MongoDB', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 8, title: 'Tailwind CSS', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 9, title: 'Go (Golang)', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 10, title: 'React.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
      ]
    },
    contact: {
      sectionTag: '// GET IN TOUCH',
      titlePart1: "Let's Build",
      titleHighlight: 'Something',
      titlePart2: 'Together',
      subtitle: "If you'd like to collaborate, discuss a project, or just connect, feel free to send me a message. I'm always open to learning opportunities and interesting ideas.",
      directEmailTitle: 'Direct Email',
      directEmailSub: 'Send me a direct email for project inquiries',
      footerCopyright: '© 2026 Dede Juniar Putra. All rights reserved.',
      cards: {
        youtube: {
          title: 'Watch My Content',
          description: 'Subscribe to my YouTube channel for creative content, tutorials, and latest updates.',
          button: 'Watch on YouTube',
          url: 'https://youtube.com/@dedejuniarputra',
        },
        instagram: {
          title: 'Follow My Journey',
          description: 'Follow my creative journey.',
          button: 'Go to Instagram',
          url: 'https://instagram.com/dedejuniarputra',
        },
        linkedin: {
          title: "Let's Connect",
          description: 'Connect with me professionally.',
          button: 'Go to Linkedin',
          url: 'https://linkedin.com/in/dedejuniarputra',
        },
        tiktok: {
          title: 'Join the Fun',
          description: 'Watch interesting and fun content.',
          button: 'Go to Tiktok',
          url: 'https://tiktok.com/@dedejuniarputra',
        },
        github: {
          title: 'Explore the Code',
          description: 'Explore my open-source work.',
          button: 'Go to Github',
          url: 'https://github.com/dedejuniarputra',
        },
      }
    }
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
    github: {
      sectionTag: '// AKTIVITAS_GITHUB',
      titlePart1: 'Aktivitas &',
      titleHighlight: 'Kontribusi',
      titlePart2: 'GitHub',
      subtitle: '"Animasi kontribusi snake interaktif dan riwayat aktivitas di GitHub."',
      contributionTitle: 'CONTRIBUTION ACTIVITY',
      viewProfile: 'Kunjungi Profil GitHub',
      repositories: 'Repositori Publik',
      contributions: 'Kontribusi Tahunan',
      followers: 'Pengikut',
      stars: 'Bintang GitHub',
    },
    journey: {
      sectionTag: '// TRAJEKTORI_KARIER',
      titlePart1: 'Perjalanan',
      titleHighlight: 'Karier',
      titlePart2: '& Pengalaman',
      subtitle: '"Jejak rekam profesional, pengalaman kerja, asisten dosen, dan aktivitas organisasi saya."',
      showDetails: 'Tampilkan detail',
      hideDetails: 'Sembunyikan detail',
      present: 'Sekarang',
      items: [
        {
          id: 'freelance',
          role: 'Freelance',
          company: 'Freelance',
          location: 'REMOTE / ON-SITE',
          type: 'PART-TIME',
          year: '2026',
          period: 'Jan 2026 - Sekarang',
          duration: '8 BULAN',
          skills: 'Full-Stack Web Development, React.js, Laravel, Flutter & +10 keahlian',
          details: [
            'Mengembangkan aplikasi web dan mobile full-stack sesuai kebutuhan klien.',
            'Merancang REST API andal dan arsitektur database menggunakan Laravel, Next.js, dan React.js.',
            'Berkomunikasi dan berkolaborasi langsung dengan klien untuk menghadirkan solusi digital berkinerja tinggi.'
          ]
        },
        {
          id: 'diskominfo',
          role: 'Front-end Developer',
          company: 'DISKOMINFO',
          location: 'BANDAR LAMPUNG',
          type: 'INTERNSHIP',
          year: '2025',
          period: 'Jun 2025 - Agust 2025',
          duration: '3 BULAN',
          workType: 'ON-SITE',
          details: [
            'Membangun dan mengoptimalkan antarmuka web frontend untuk layanan digital instansi pemerintah.',
            'Menerjemahkan desain UI/UX menjadi kode responsif dan terstruktur dengan framework modern.',
            'Melakukan pengujian sistem, refactoring komponen UI, serta pemeliharaan tampilan aplikasi.'
          ]
        },
        {
          id: 'asdos-amp',
          role: 'Assistant Lecturer – Advanced Mobile Programming',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '6 BULAN',
          workType: 'ON-SITE',
          details: [
            'Membimbing mahasiswa dalam praktikum pemrograman mobile tingkat lanjut menggunakan Flutter & Dart.',
            'Mengajarkan manajemen state (GetX/Provider), konsumsi REST API, dan arsitektur aplikasi mobile.',
            'Menilai tugas praktikum, memberikan bantuan teknis, dan melakukan peninjauan kode mahasiswa.'
          ]
        },
        {
          id: 'asdos-mat',
          role: 'Assistant Lecturer – Mobile Application and Technology',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '6 BULAN',
          workType: 'ON-SITE',
          details: [
            'Memfasilitasi sesi praktikum laboratorium terkait konsep dasar pembuatan aplikasi mobile.',
            'Membimbing pembuatan tata letak UI, penanganan event, serta siklus hidup aplikasi Android.',
            'Menyiapkan modul practical dan membantu dosen pengampu dalam penilaian proyek akhir semester.'
          ]
        },
        {
          id: 'himakom',
          role: 'Volunter Panitia Acara',
          company: 'HIMAKOM UNILA',
          location: 'FMIPA UNILA',
          type: 'PART-TIME',
          year: '2022 - 2023',
          period: 'Sept 2022 - Okto 2023',
          duration: '1 TAHUN 2 BULAN',
          workType: 'ON-SITE',
          details: [
            'Mengordinasikan penyelenggaraan seminar teknologi, workshop, dan perlombaan ilmu komputer.',
            'Mengelola logistik acara, koordinasi pemateri, serta sistem pendaftaran peserta.',
            'Membangun kerja sama tim antar panitia mahasiswa untuk memastikan kesuksesan seluruh rangkaian acara.'
          ]
        }
      ]
    },
    certificates: {
      sectionTag: '// PENCAPAIAN',
      titlePart1: 'Sertifikat',
      titleHighlight: '& Pencapaian',
      titlePart2: '',
      subtitle: '"Kumpulan sertifikasi resmi, kursus teknis, dan verifikasi keahlian yang telah saya selesaikan."',
      viewCredential: 'Lihat Kredensial',
      seeMore: 'Lihat Lebih Banyak Sertifikat',
      seeLess: 'Tampilkan Lebih Sedikit',
      items: [
        { id: 1, title: 'Project Express & MongoDB', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 2, title: 'Node.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 3, title: 'Express & EJS', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 4, title: 'Middleware Express', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 5, title: 'Express.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 6, title: 'Mongoose', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 7, title: 'MongoDB', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 8, title: 'Tailwind CSS', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 9, title: 'Go (Golang)', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
        { id: 10, title: 'React.js', issuer: 'CodePolitan', date: 'September 2025', url: '#' },
      ]
    },
    contact: {
      sectionTag: '// SEGERA TERHUBUNG',
      titlePart1: 'Mari Membangun',
      titleHighlight: 'Sesuatu',
      titlePart2: 'Bersama',
      subtitle: 'Jika Anda ingin berkolaborasi, mendiskusikan proyek, atau sekadar terhubung, jangan ragu untuk mengirim pesan. Saya selalu terbuka untuk peluang belajar dan ide-ide menarik.',
      directEmailTitle: 'Email Langsung',
      directEmailSub: 'Kirimkan email langsung untuk diskusi proyek',
      footerCopyright: '© 2026 Dede Juniar Putra. Hak cipta dilindungi undang-undang.',
      cards: {
        youtube: {
          title: 'Watch My Content',
          description: 'Subscribe channel YouTube saya untuk konten kreatif, tutorial, dan update terbaru.',
          button: 'Watch on YouTube',
          url: 'https://youtube.com/@dedejuniarputra',
        },
        instagram: {
          title: 'Follow My Journey',
          description: 'Ikuti perjalanan kreatif saya.',
          button: 'Go to Instagram',
          url: 'https://instagram.com/dedejuniarputra',
        },
        linkedin: {
          title: "Let's Connect",
          description: 'Terhubung dengan saya secara profesional.',
          button: 'Go to Linkedin',
          url: 'https://linkedin.com/in/dedejuniarputra',
        },
        tiktok: {
          title: 'Join the Fun',
          description: 'Tonton konten menarik dan seru.',
          button: 'Go to Tiktok',
          url: 'https://tiktok.com/@dedejuniarputra',
        },
        github: {
          title: 'Explore the Code',
          description: 'Jelajahi kode dan proyek open-source saya.',
          button: 'Go to Github',
          url: 'https://github.com/dedejuniarputra',
        },
      }
    }
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
