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
        'Web Developer',
      ],
      description: '"Every day is a process." That is how I approach every project I work on — building clean, fast, and user-friendly systems like website or mobile apps.',
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
      bio1Prefix: "Hello, I'm ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", a Software Engineer based in Bandar Lampung, Indonesia — specializing in web and mobile development, with a strong interest in System Analysis and IT Support. I am experienced in building systems end-to-end, from frontend UI to backend logic and database design, while understanding system requirements and troubleshooting.",
      bio2: "For web development, I build with Laravel, React.js, and Tailwind CSS, while for mobile development, I utilize Flutter. I am proficient in working with REST APIs, MySQL, Firebase, Git, as well as testing, debugging, troubleshooting, and system maintenance.",
      bio3: "I hold a Bachelor's degree in Computer Science from the University of Lampung, with 2+ years of experience in Web Development and 1 year in Mobile Development. Currently, I am open to roles as a Software Engineer, Web Developer, Mobile Developer, System Analyst, or IT Support, as well as freelance opportunities.",
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
      titleHighlight: 'Tech Stack',
      subtitle: 'Technologies, tools, and frameworks I use to build robust digital products.',
      totalBadgeCount: '26',
      totalBadgeLabel: 'TECHNOLOGIES',
      sideDescription: 'Grouped into five categories: Frontend for user interfaces, Backend & Database for server logic, Mobile for cross-platform apps, Tools for daily workflow, and AI Tools for productivity.',
      codeShowcaseTitle: 'Code Snippets Showcase',
      codeShowcaseSubtitle: 'Interactive preview of how I write clean, structured code across stack technologies.',
      copy: 'Copy',
      copied: 'Copied!',
      categories: [
        {
          num: '01',
          label: 'FRONTEND',
          items: ['HTML', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
        },
        {
          num: '02',
          label: 'BACKEND & DATABASE',
          items: ['Laravel', 'MySQL', 'Firebase', 'PostgreSQL', 'Node.js'],
        },
        {
          num: '03',
          label: 'MOBILE DEVELOPMENT',
          items: ['Android Studio', 'Flutter', 'Kotlin', 'GetX', 'Provider'],
        },
        {
          num: '04',
          label: 'TOOLS & HOSTING',
          items: ['VS Code', 'Antigravity', 'Git', 'GitHub', 'Laragon', 'Vercel', 'Hostinger', 'Figma'],
        },
        {
          num: '05',
          label: 'AI TOOLS',
          items: ['ChatGPT', 'Claude', 'Gemini'],
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
            'Developing custom full-stack web and mobile applications using Next.js, React.js, Laravel, and Flutter tailored to client needs.',
            'Architecting robust REST APIs, secure authentication systems, and scalable database models using MySQL/PostgreSQL.',
            'Implementing modern, highly responsive, and interactive UI/UX interfaces adhering to professional design standards.',
            'Performing end-to-end testing, debugging, performance optimization, and ongoing maintenance to ensure application stability.',
            'Communicating and collaborating directly with diverse clients to deliver performant, user-centered digital solutions.'
          ]
        },
        {
          id: 'aurorababyspa',
          role: 'Mobile Flutter Developer',
          company: 'AURORABABYSPA',
          location: 'BANDAR LAMPUNG',
          type: 'PART-TIME',
          year: '2026',
          period: 'Feb 2026 - Jun 2026',
          duration: '5 MONTHS',
          workType: 'ON-SITE',
          skills: 'Mobile Development, Flutter, Firebase, GetX, REST API & +5 skills',
          details: [
            'Developed a multiplatform mobile application using Flutter, Firebase, and GetX to digitalize Aurora Baby Spa booking services.',
            'Implemented authentication, service booking, payment, notification, and transaction history features to enhance user experience.',
            'Integrated Firebase Authentication, Cloud Firestore, Firebase Storage, and REST APIs for real-time data management.',
            'Performed testing, debugging, troubleshooting, and app optimization to ensure performance, stability, and maintainability.',
            'Collaborated throughout requirements analysis, development, testing, and application refinement until production deployment.'
          ]
        },
        {
          id: 'livesostory',
          role: 'FullStack Web Developer',
          company: 'LIVESOSTORY.CO',
          location: 'BANDAR LAMPUNG',
          type: 'PART-TIME',
          year: '2026',
          period: 'Jan 2026 - Mar 2026',
          duration: '3 MONTHS',
          workType: 'ON-SITE',
          skills: 'Full-Stack Web Development, Laravel, Tailwind CSS, REST API, WhatsApp API & +5 skills',
          details: [
            'Developed and maintained a professional photography website built with Laravel and Tailwind CSS.',
            'Performed troubleshooting, debugging, testing, and application fixes to ensure high stability and performance.',
            'Integrated REST APIs and WhatsApp API to automate service booking workflows.',
            'Managed MySQL databases and assisted in system maintenance to support operational requirements.',
            'Collaborated with the team using Git, documented development processes, and provided technical support throughout application deployment.'
          ]
        },
        {
          id: 'diskominfo',
          role: 'Front-end Developer',
          company: 'DISKOMINFO',
          location: 'BANDAR LAMPUNG',
          type: 'INTERNSHIP',
          year: '2026',
          period: 'Jan 2026 - Mar 2026',
          duration: '3 MONTHS',
          workType: 'ON-SITE',
          skills: 'Frontend Development, Laravel, Bootstrap, Figma, JavaScript, Git & +5 skills',
          details: [
            'Developed and maintained the SIADIK Attendance Website built with Laravel to support administrative digitalization and employee data management.',
            'Designed and implemented responsive user interfaces based on Figma designs using HTML, CSS, JavaScript, and Bootstrap.',
            'Performed troubleshooting, testing, debugging, and application optimization to ensure system stability, security, and user alignment.',
            'Documented system development, testing outcomes, and code changes while providing technical support during application deployment.',
            'Collaborated with the team using Git, documented development processes, and provided technical support throughout application implementation.'
          ]
        },
        {
          id: 'asdos-mat',
          role: 'Coordinator & Assistant Lecturer – Mobile Application and Technology',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FEB & FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '5 MONTHS',
          workType: 'ON-SITE',
          skills: 'Mobile Development, Flutter, Kotlin, Android Studio, Mentoring & +5 skills',
          details: [
            'Mentored over 130 students in Mobile Application & Technology practical sessions using Flutter and Kotlin.',
            'Assisted students in resolving technical challenges through troubleshooting, debugging, and code review processes.',
            'Prepared and managed practical modules, learning documentation, and administration using Microsoft Word, Excel, and PowerPoint.',
            'Provided technical mentorship and coordinated with lecturers to ensure effective learning processes.',
            'Developed communication, service, problem-solving, and teamwork skills through direct academic mentorship.'
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
          skills: 'Public Relations (Humas), Event Management, Teamwork, Communication & +5 skills',
          details: [
            'Contributed as a committee member in various HIMAKOM events, including PRINTER 2023, LKMMIK-TD, PRJXHT, and KWI, specifically within the Public Relations Division (Humas).',
            'Coordinated with committee members and key stakeholders to ensure smooth event execution, including communication with participants and stakeholders.',
            'Assisted in event planning, coordination, and execution to ensure activities ran according to schedule and target objectives.',
            'Handled operational challenges during events by prioritizing effective communication, teamwork, and rapid problem solving.',
            'Developed communication, service, time management, adaptability, and collaboration skills within a dynamic working environment.'
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
        { id: 1, title: 'Front-end Untuk Pemula', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 2, title: 'Dasar Pemrograman Javascript', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 3, title: 'Dasar Pemrograman Web', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 4, title: 'Belajar Dasar AI', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 5, title: 'Belajar Dasar IT Support', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 6, title: 'Belajar Membuat Aplikasi Flutter untuk Pemula', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 7, title: 'Belajar Dasar Pengembangan Aplikasi Mobile', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 8, title: 'Memulai Pemrograman dengan Dart', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 9, title: 'Introduction to Financial Literacy', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 10, title: 'Short Class UI/UX DESAIN', issuer: 'Myskill', date: '2025', category: 'OTHER', url: '#' },
        { id: 11, title: 'Tutorial CRUD dengan PHP', issuer: 'DUNIA CODING', date: '2025', category: 'WEB', url: '#' },
        { id: 12, title: 'Advanced Mobile Programming', issuer: 'UNIVERSITAS LAMPUNG', date: '2025', category: 'MOBILE', url: '#' },
        { id: 13, title: 'Mobile Apps and Technology', issuer: 'UNIVERSITAS LAMPUNG', date: '2025', category: 'MOBILE', url: '#' },
        { id: 14, title: 'Operating Systems', issuer: 'UNIVERSITAS LAMPUNG', date: '2024', category: 'OTHER', url: '#' },
        { id: 15, title: 'HTML', issuer: 'Sololearn', date: '2024', category: 'WEB', url: '#' },
        { id: 16, title: 'Google Analytics untuk pemula', issuer: 'GOOGLE', date: '2024', category: 'OTHER', url: '#' },
        { id: 17, title: 'Git Learning Class', issuer: 'DICODING INDONESIA', date: '2024', category: 'OTHER', url: '#' },
        { id: 18, title: 'Belajar Git', issuer: 'CODEPOLITAN', date: '2024', category: 'OTHER', url: '#' },
        { id: 19, title: 'UI/UX Designer', issuer: 'DIGITALENT', date: '2024', category: 'OTHER', url: '#' },
        { id: 20, title: 'Worskhop Nasional HIMAKOM x XDEMIA', issuer: 'XDEMIA', date: '2024', category: 'OTHER', url: '#' },
        { id: 21, title: 'Graphic Design Training', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 22, title: 'General Lecture Participant', issuer: 'FMIPA UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 23, title: 'HINCAR Participant', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 24, title: 'Public Lecture on Blockchain', issuer: 'FMIPA UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 25, title: 'Scientific Study Tour', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 26, title: 'Computer Science Showdown', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 27, title: 'PANITIA PRJXHT 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 28, title: 'PANITIA LKMMIK-TD 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 29, title: 'PANITIA PRINTER 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 30, title: 'PESERTA - LKMMIK-TD 2022', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 31, title: 'PESERTA PRINTER 2022', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 32, title: '2nd Place in Valorant', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 33, title: 'BIMTEK Artificial Intelligence', issuer: 'BRIN 2026', date: '2026', category: 'OTHER', url: '#' }
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
          url: 'https://www.youtube.com/@dedejuniarputraunila6525',
        },
        instagram: {
          title: 'Follow My Journey',
          description: 'Follow my creative journey.',
          button: 'Go to Instagram',
          url: 'https://www.instagram.com/dezxz__?igsh=MWY0Y294YW1pZmF3Yg%3D%3D',
        },
        linkedin: {
          title: "Let's Connect",
          description: 'Connect with me professionally.',
          button: 'Go to Linkedin',
          url: 'https://www.linkedin.com/in/dedejuniarputraaa/',
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
        'Junior Software Engineer & System Analyst',
        'Mobile Developer',
        'Web Developer',
      ],
      description: '"Setiap hari adalah proses." Setiap proyek yang saya kerjakan dengan cara itu — membangun sebuah sistem website atau mobile yang rapi, cepat, dan nyaman dipakai.',
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
      bio1Prefix: "Halo, saya ",
      name: "Dede Juniar Putra",
      bio1Suffix: ", seorang Software Engineer asal Bandar Lampung, Lampung — berfokus pada pengembangan web dan mobile, serta memiliki ketertarikan pada System Analyst dan IT Support. Saya terbiasa mengerjakan sistem dari sisi tampilan hingga backend dan basis data, sekaligus memahami alur kebutuhan sistem dan troubleshooting.",
      bio2: "Untuk pengembangan web saya menggunakan Laravel, React.js, dan Tailwind CSS, sedangkan untuk mobile development saya menggunakan Flutter. Saya juga terbiasa bekerja dengan REST API, MySQL, Firebase, Git, serta melakukan testing, debugging, troubleshooting, dan pemeliharaan sistem.",
      bio3: "Saya merupakan lulusan S1 Ilmu Komputer Universitas Lampung dengan pengalaman 2+ tahun di Web Development dan 1 tahun di Mobile Development. Saat ini saya terbuka untuk peluang sebagai Software Engineer, Web Developer, Mobile Developer, System Analyst, maupun IT Support, serta menerima project freelance.",
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
      totalBadgeCount: '26',
      totalBadgeLabel: 'TEKNOLOGI',
      sideDescription: 'Dikelompokkan jadi lima: yang membangun tampilan, yang menjalankan data di belakang layar, aplikasi mobile, alat pendukung sehari-hari, dan AI untuk mempercepat kerja.',
      codeShowcaseTitle: 'Showcase Kode Interaktif',
      codeShowcaseSubtitle: 'Pratinjau interaktif bagaimana saya menulis kode yang bersih dan terstruktur.',
      copy: 'Salin',
      copied: 'Tersalin!',
      categories: [
        {
          num: '01',
          label: 'FRONTEND',
          items: ['HTML', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
        },
        {
          num: '02',
          label: 'BACKEND & DATABASE',
          items: ['Laravel', 'MySQL', 'Firebase', 'PostgreSQL', 'Node.js'],
        },
        {
          num: '03',
          label: 'MOBILE DEVELOPMENT',
          items: ['Android Studio', 'Flutter', 'Kotlin', 'GetX', 'Provider'],
        },
        {
          num: '04',
          label: 'TOOLS & HOSTING',
          items: ['VS Code', 'Antigravity', 'Git', 'GitHub', 'Laragon', 'Vercel', 'Hostinger', 'Figma'],
        },
        {
          num: '05',
          label: 'AI TOOLS',
          items: ['ChatGPT', 'Claude', 'Gemini'],
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
            'Mengembangkan aplikasi web dan mobile full-stack kustom berbasis Next.js, React.js, Laravel, dan Flutter sesuai kebutuhan spesifik klien.',
            'Merancang arsitektur REST API yang andal, aman, serta pemodelan database MySQL/PostgreSQL untuk mendukung performa tinggi.',
            'Mendesain serta mengimplementasikan antarmuka pengguna (UI/UX) yang responsif, modern, dan interaktif sesuai standar profesional.',
            'Melakukan testing, debugging, optimasi performa, serta pemeliharaan berkala guna memastikan keamanan dan stabilitas aplikasi.',
            'Berkomunikasi dan berkolaborasi secara langsung dengan klien untuk menghadirkan solusi digital yang inovatif dan berkinerja tinggi.'
          ]
        },
        {
          id: 'aurorababyspa',
          role: 'Mobile Flutter Developer',
          company: 'AURORABABYSPA',
          location: 'BANDAR LAMPUNG',
          type: 'PART-TIME',
          year: '2026',
          period: 'Feb 2026 - Jun 2026',
          duration: '5 BULAN',
          workType: 'ON-SITE',
          skills: 'Mobile Development, Flutter, Firebase, GetX, REST API & +5 keahlian',
          details: [
            'Mengembangkan aplikasi mobile multiplatform menggunakan Flutter, Firebase, dan GetX untuk digitalisasi layanan pemesanan Aurora Baby Spa.',
            'Mengimplementasikan fitur autentikasi, pemesanan layanan, pembayaran, notifikasi, dan riwayat transaksi guna meningkatkan pengalaman pengguna.',
            'Mengintegrasikan Firebase Authentication, Cloud Firestore, Firebase Storage, serta REST API untuk pengelolaan data secara real-time.',
            'Melakukan testing, debugging, troubleshooting, dan optimasi aplikasi guna memastikan performa, stabilitas, dan kemudahan pemeliharaan aplikasi.',
            'Berkolaborasi dalam proses analisis kebutuhan, pengembangan, pengujian, dan penyempurnaan aplikasi hingga siap digunakan.'
          ]
        },
        {
          id: 'livesostory',
          role: 'FullStack Web Developer',
          company: 'LIVESOSTORY.CO',
          location: 'BANDAR LAMPUNG',
          type: 'PART-TIME',
          year: '2026',
          period: 'Jan 2026 - Mar 2026',
          duration: '3 BULAN',
          workType: 'ON-SITE',
          skills: 'Full-Stack Web Development, Laravel, Tailwind CSS, REST API, WhatsApp API & +5 keahlian',
          details: [
            'Mengembangkan dan memelihara website fotografi profesional berbasis Laravel dan Tailwind CSS.',
            'Melakukan troubleshooting, debugging, testing, serta perbaikan aplikasi untuk memastikan sistem berjalan stabil dan optimal.',
            'Mengintegrasikan REST API dan WhatsApp API untuk mendukung otomatisasi proses pemesanan layanan.',
            'Mengelola database MySQL serta membantu pemeliharaan sistem sesuai kebutuhan operasional.',
            'Berkolaborasi dengan tim menggunakan Git, mendokumentasikan proses pengembangan, serta memberikan dukungan teknis selama proses implementasi aplikasi.'
          ]
        },
        {
          id: 'diskominfo',
          role: 'Front-end Developer',
          company: 'DISKOMINFO',
          location: 'BANDAR LAMPUNG',
          type: 'INTERNSHIP',
          year: '2026',
          period: 'Jan 2026 - Mar 2026',
          duration: '3 BULAN',
          workType: 'ON-SITE',
          skills: 'Frontend Development, Laravel, Bootstrap, Figma, JavaScript, Git & +5 keahlian',
          details: [
            'Mengembangkan dan memelihara Website Absensi SIADIK berbasis Laravel untuk mendukung digitalisasi proses administrasi dan pengelolaan data pegawai.',
            'Mendesain serta mengimplementasikan antarmuka pengguna yang responsif berdasarkan desain Figma menggunakan HTML, CSS, JavaScript, dan Bootstrap.',
            'Melakukan troubleshooting, testing, debugging, dan optimasi aplikasi untuk memastikan sistem berjalan stabil, aman, dan sesuai kebutuhan pengguna.',
            'Mendokumentasikan hasil pengembangan, pengujian, dan perubahan sistem, serta memberikan dukungan teknis selama implementasi aplikasi.',
            'Berkolaborasi dengan tim menggunakan Git, mendokumentasikan proses pengembangan, serta memberikan dukungan teknis selama proses implementasi aplikasi.'
          ]
        },
        {
          id: 'asdos-mat',
          role: 'Coordinator & Assistant Lecturer – Mobile Application and Technology',
          company: 'UNIVERSITAS LAMPUNG',
          location: 'FEB & FMIPA UNILA',
          type: 'PART-TIME',
          year: '2025',
          period: 'Agust 2025 - Des 2025',
          duration: '5 BULAN',
          workType: 'ON-SITE',
          skills: 'Mobile Development, Flutter, Kotlin, Android Studio, Mentoring & +5 keahlian',
          details: [
            'Membimbing lebih dari 130 mahasiswa dalam praktikum Mobile Application & Technology menggunakan Flutter dan Kotlin.',
            'Membantu mahasiswa menyelesaikan kendala teknis melalui proses troubleshooting, debugging, dan code review.',
            'Menyusun serta mengelola modul praktikum, dokumentasi pembelajaran, dan administrasi menggunakan Microsoft Word, Excel, dan PowerPoint.',
            'Memberikan pendampingan teknis serta berkoordinasi dengan dosen untuk memastikan proses pembelajaran berjalan efektif.',
            'Mengembangkan kemampuan komunikasi, pelayanan, problem solving, dan kerja sama tim melalui pendampingan akademik secara langsung.'
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
          skills: 'Public Relations (Humas), Event Management, Teamwork, Communication & +5 keahlian',
          details: [
            'Berkontribusi sebagai panitia dalam berbagai kegiatan HIMAKOM, seperti PRINTER 2023, LKMMIK-TD, PRJXHT, dan KWI, khususnya pada Divisi Hubungan Masyarakat (Humas).',
            'Berkoordinasi dengan panitia dan berbagai pihak untuk mendukung kelancaran pelaksanaan kegiatan, termasuk komunikasi dengan peserta dan stakeholder.',
            'Membantu proses perencanaan, koordinasi, dan pelaksanaan acara agar berjalan sesuai jadwal dan target yang telah ditentukan.',
            'Menangani berbagai kendala operasional selama kegiatan dengan mengutamakan komunikasi yang efektif, kerja sama tim, dan penyelesaian masalah secara cepat.',
            'Mengembangkan kemampuan komunikasi, pelayanan, manajemen waktu, adaptasi, serta kolaborasi dalam lingkungan kerja yang dinamis.'
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
        { id: 1, title: 'Front-end Untuk Pemula', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 2, title: 'Dasar Pemrograman Javascript', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 3, title: 'Dasar Pemrograman Web', issuer: 'Dicoding Camp 2026', date: '2026', category: 'WEB', url: '#' },
        { id: 4, title: 'Belajar Dasar AI', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 5, title: 'Belajar Dasar IT Support', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 6, title: 'Belajar Membuat Aplikasi Flutter untuk Pemula', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 7, title: 'Belajar Dasar Pengembangan Aplikasi Mobile', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 8, title: 'Memulai Pemrograman dengan Dart', issuer: 'DICODING INDONESIA', date: '2026', category: 'MOBILE', url: '#' },
        { id: 9, title: 'Introduction to Financial Literacy', issuer: 'DICODING INDONESIA', date: '2026', category: 'OTHER', url: '#' },
        { id: 10, title: 'Short Class UI/UX DESAIN', issuer: 'Myskill', date: '2025', category: 'OTHER', url: '#' },
        { id: 11, title: 'Tutorial CRUD dengan PHP', issuer: 'DUNIA CODING', date: '2025', category: 'WEB', url: '#' },
        { id: 12, title: 'Advanced Mobile Programming', issuer: 'UNIVERSITAS LAMPUNG', date: '2025', category: 'MOBILE', url: '#' },
        { id: 13, title: 'Mobile Apps and Technology', issuer: 'UNIVERSITAS LAMPUNG', date: '2025', category: 'MOBILE', url: '#' },
        { id: 14, title: 'Operating Systems', issuer: 'UNIVERSITAS LAMPUNG', date: '2024', category: 'OTHER', url: '#' },
        { id: 15, title: 'HTML', issuer: 'Sololearn', date: '2024', category: 'WEB', url: '#' },
        { id: 16, title: 'Google Analytics untuk pemula', issuer: 'GOOGLE', date: '2024', category: 'OTHER', url: '#' },
        { id: 17, title: 'Git Learning Class', issuer: 'DICODING INDONESIA', date: '2024', category: 'OTHER', url: '#' },
        { id: 18, title: 'Belajar Git', issuer: 'CODEPOLITAN', date: '2024', category: 'OTHER', url: '#' },
        { id: 19, title: 'UI/UX Designer', issuer: 'DIGITALENT', date: '2024', category: 'OTHER', url: '#' },
        { id: 20, title: 'Worskhop Nasional HIMAKOM x XDEMIA', issuer: 'XDEMIA', date: '2024', category: 'OTHER', url: '#' },
        { id: 21, title: 'Graphic Design Training', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 22, title: 'General Lecture Participant', issuer: 'FMIPA UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 23, title: 'HINCAR Participant', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 24, title: 'Public Lecture on Blockchain', issuer: 'FMIPA UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 25, title: 'Scientific Study Tour', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 26, title: 'Computer Science Showdown', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 27, title: 'PANITIA PRJXHT 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 28, title: 'PANITIA LKMMIK-TD 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 29, title: 'PANITIA PRINTER 2023', issuer: 'HIMAKOM UNILA', date: '2023', category: 'OTHER', url: '#' },
        { id: 30, title: 'PESERTA - LKMMIK-TD 2022', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 31, title: 'PESERTA PRINTER 2022', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 32, title: '2nd Place in Valorant', issuer: 'HIMAKOM UNILA', date: '2022', category: 'OTHER', url: '#' },
        { id: 33, title: 'BIMTEK Artificial Intelligence', issuer: 'BRIN 2026', date: '2026', category: 'OTHER', url: '#' }
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
          url: 'https://www.youtube.com/@dedejuniarputraunila6525',
        },
        instagram: {
          title: 'Follow My Journey',
          description: 'Ikuti perjalanan kreatif saya.',
          button: 'Go to Instagram',
          url: 'https://www.instagram.com/dezxz__?igsh=MWY0Y294YW1pZmF3Yg%3D%3D',
        },
        linkedin: {
          title: "Let's Connect",
          description: 'Terhubung dengan saya secara profesional.',
          button: 'Go to Linkedin',
          url: 'https://www.linkedin.com/in/dedejuniarputraaa/',
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
  const [language, setLanguageState] = useState<Language>('ID');

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
