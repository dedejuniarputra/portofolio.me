'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import livesostoryImg from '@/src/assets/livesostory.jpg';
import siadikImg from '@/src/assets/siadik.png';
import tennisImg from '@/src/assets/tennisinkuy.jpg';
import aurorababyspaImg from '@/src/assets/aurorababyspa.png';
import cekKhodamImg from '@/src/assets/cekkhodammulek.jpg';

interface ArchitectureNode {
  label: string;
  color: string; // Tailwind border & text color classes
}

interface Project {
  id: string;
  title: string;
  category: 'WEB' | 'MOBILE' | 'UI/UX';
  status: 'Completed' | 'In Progress';
  description: string;
  tech: string[];
  liveUrl: string;
  role?: string;
  architectureSubtitle: string;
  image?: string | any;
  nodes: {
    row1: ArchitectureNode[];
    row2: ArchitectureNode[];
    row3: ArchitectureNode[];
  };
  features: string[];
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'WEB' | 'MOBILE' | 'UI/UX'>('ALL');
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projectsData: Project[] = [
    {
      id: 'livesostory.co',
      title: 'LIVESOSTORY.CO',
      role: 'FullStack Web Developer',
      category: 'WEB',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'LivesoStory.co is a web-based photography platform built with Laravel and Tailwind CSS. Integrated with REST API and WhatsApp API to automate seamless booking workflows and deliver a responsive digital showcase.'
          : 'LivesoStory.co adalah platform fotografi berbasis web yang dibangun dengan Laravel dan Tailwind CSS. Terintegrasi dengan REST API dan WhatsApp API untuk otomatisasi alur pemesanan layanan yang cepat dan responsif.',
      tech: ['Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Git'],
      liveUrl: 'https://livesostory.online',
      image: livesostoryImg,
      architectureSubtitle:
        language === 'EN'
          ? 'Photography portfolio architecture and WhatsApp API booking integration.'
          : 'Arsitektur portofolio fotografi dan integrasi pemesanan WhatsApp API.',
      nodes: {
        row1: [
          { label: 'Client Web UI', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'REST API Gateway', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
        ],
        row2: [
          { label: 'Laravel Backend', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
          { label: 'WhatsApp API Engine', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'Git Workflow', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'MySQL Database', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Professional web-based photography portfolio built with Laravel & Tailwind CSS',
              'Automated booking workflow integrated with REST API & WhatsApp API',
              'Optimized MySQL database management and robust system performance',
            ]
          : [
              'Web portofolio fotografi profesional yang dibangun dengan Laravel & Tailwind CSS',
              'Otomatisasi pemesanan layanan terintegrasi REST API & WhatsApp API',
              'Pengelolaan database MySQL yang teroptimasi dan kinerja sistem yang stabil',
            ],
    },


    {
      id: 'siadik',
      title: 'SIADIK BANDAR LAMPUNG',
      role: 'FrontEnd Developer',
      category: 'WEB',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'SIADIK (Digital Administration & Attendance System) is a web-based employee attendance and management platform built with Laravel and Bootstrap for DISKOMINFO Bandar Lampung. Created to digitize administrative workflows, automate attendance monitoring, and streamline employee data management.'
          : 'SIADIK (Sistem Informasi Absensi & Administrasi Digital) adalah platform berbasis web yang dibangun dengan Laravel dan Bootstrap untuk DISKOMINFO Bandar Lampung. Dibuat untuk mendukung digitalisasi proses administrasi kepegawaian, otomatisasi pemantauan absensi, dan pengelolaan data pegawai.',
      tech: ['Laravel', 'Bootstrap', 'JavaScript','MySQL', 'Git'],
      liveUrl: 'https://siadik.bandarlampungkota.go.id',
      image: siadikImg,
      architectureSubtitle:
        language === 'EN'
          ? 'Employee attendance & administrative data management architecture.'
          : 'Arsitektur absensi pegawai dan alur pengelolaan data administrasi.',
      nodes: {
        row1: [
          { label: 'Employee Portal', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'Validation Layer', color: 'border-blue-500/40 text-blue-400 bg-blue-950/30' },
        ],
        row2: [
          { label: 'Admin Panel', color: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30' },
          { label: 'Attendance Engine', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'File Storage', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'MySQL DB', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Web-based employee attendance tracking & administrative data management',
              'Responsive user interface designed from Figma using Bootstrap & JavaScript',
              'Stable, secure system architecture optimized for government operations',
            ]
          : [
              'Sistem absensi pegawai berbasis web & pengelolaan data administrasi kepegawaian',
              'Antarmuka pengguna responsif yang dirancang dari Figma dengan Bootstrap & JS',
              'Arsitektur sistem yang stabil, aman, dan dioptimalkan untuk kebutuhan dinas',
                ],
    },

    {
      id: 'tennis',
      title: 'TENNISIN.KUY',
      role: 'FullStack Developer',
      category: 'WEB',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'TennisInKuy is a web-based platform built with Laravel and Bootstrap for a table tennis course business. Designed to simplify how parents and prospective students discover and enroll in training programs with a clean, modern, and responsive interface.'
          : 'TennisInKuy adalah platform berbasis web yang dikembangkan menggunakan Laravel dan Bootstrap untuk mendukung usaha kursus tenis meja. Dibuat untuk memudahkan orang tua dan calon peserta menemukan serta mendaftar program latihan secara online melalui antarmuka yang bersih, modern, dan responsif.',
      tech: ['Laravel', 'Bootstrap', 'JavaScript', 'MySQL', 'Git'],
      liveUrl: 'https://github.com/dedejuniarputra/TennisInKuy',
      image: tennisImg,
      architectureSubtitle:
        language === 'EN'
          ? 'Course management system & online registration flow architecture.'
          : 'Arsitektur sistem manajemen kursus dan alur pendaftaran online.',
      nodes: {
        row1: [
          { label: 'User Portal', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'Registration Layer', color: 'border-blue-500/40 text-blue-400 bg-blue-950/30' },
        ],
        row2: [
          { label: 'Admin Dashboard', color: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/30' },
          { label: 'Course Engine', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'File Storage', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'MySQL DB', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Structured table tennis training program catalog & course curriculum',
              'Seamless online participant registration & schedule booking workflow',
              'Responsive web interface optimized for smooth cross-device accessibility',
            ]
          : [
              'Katalog program kursus tenis meja & kurikulum latihan terstruktur',
              'Alur pendaftaran peserta online & penjadwalan sesi yang efisien',
              'Antarmuka web responsif yang dioptimalkan untuk aksesibilitas di semua perangkat',
            ],
    },

    {
      id: 'aurorababyspa',
      title: 'AURORA BABY SPA',
      role: 'Mobile & Web Developer',
      category: 'MOBILE',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'Aurora Baby Spa is a cross-platform mobile application developed using Flutter, Firebase, and GetX. Built to digitize baby spa bookings featuring intuitive schedule reservation, automated WhatsApp API confirmation, and a real-time admin dashboard for service, schedule, and transaction management.'
          : 'Aurora Baby Spa adalah aplikasi mobile lintas platform berbasis Flutter, Firebase, dan GetX. Dirancang untuk mendigitalisasi pemesanan spa bayi melalui sistem reservasi intuitif, otomatisasi konfirmasi via WhatsApp API, serta dashboard admin real-time untuk pengelolaan layanan, jadwal, dan laporan transaksi.',
      tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'WhatsApp API', 'Git'],
      liveUrl: 'https://aurorababyspa.web.app',
      image: aurorababyspaImg,
      architectureSubtitle:
        language === 'EN'
          ? 'Cross-platform mobile booking architecture and real-time cloud sync.'
          : 'Arsitektur pemesanan mobile lintas platform dan sinkronisasi cloud real-time.',
      nodes: {
        row1: [
          { label: 'Flutter Mobile App', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'GetX State Layer', color: 'border-blue-500/40 text-blue-400 bg-blue-950/30' },
        ],
        row2: [
          { label: 'Firebase Backend', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
          { label: 'WhatsApp API Engine', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
        ],
        row3: [
          { label: 'Cloud Firestore', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
          { label: 'Admin Dashboard', color: 'border-pink-500/40 text-pink-400 bg-pink-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Intuitive baby spa booking & schedule reservation system',
              'Automated reservation detail confirmation via WhatsApp API integration',
              'Real-time administrative dashboard for services, vouchers & transaction reports',
            ] 
          : [
              'Sistem pemesanan & reservasi jadwal spa bayi secara intuitif',
              'Otomatisasi konfirmasi detail reservasi langsung via WhatsApp API',
              'Dashboard admin real-time untuk manajemen layanan, voucher & laporan transaksi',
          ],
    },


    {
      id: 'laundrykuy',
      title: 'LAUNDRY.KUY',
      role: 'Mobile Developer',
      category: 'MOBILE',
      status: 'In Progress',
      description:
        language === 'EN'
          ? 'Laundry.Kuy is a mobile application built with Flutter, Firebase, and GetX for laundry service booking and management. Features an admin dashboard for order processing and real-time status tracking for users via unique receipt codes or QR scanning.'
          : 'Laundry.Kuy adalah aplikasi mobile berbasis Flutter, Firebase, dan GetX untuk pemesanan dan manajemen layanan laundry. Dilengkapi dengan portal admin untuk pengelolaan pesanan serta fitur pelacakan status bagi pengguna menggunakan kode unik atau pemindaian QR code dari struk transaksi.',
      tech: ['Flutter', 'Dart', 'Firebase', 'GetX', 'QR Code', 'Git'],
      liveUrl: 'https://github.com/dedejuniarputra/laundrykuy.',
      image: '/src/assets/projects/laundry.kuy.jpg',
      architectureSubtitle:
        language === 'EN'
          ? 'Real-time mobile order tracking & QR code verification architecture.'
          : 'Arsitektur pelacakan pesanan mobile realtime dan verifikasi QR code.',
      nodes: {
        row1: [
          { label: 'Flutter App UI', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
          { label: 'QR Scanner Engine', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
        ],
        row2: [
          { label: 'Firebase Auth', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
          { label: 'GetX State Controller', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
        ],
        row3: [
          { label: 'Cloud Firestore', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
          { label: 'Admin Order Hub', color: 'border-pink-500/40 text-pink-400 bg-pink-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Real-time admin order management portal & laundry service processing',
              'User order status tracking via unique code lookup & receipt QR code scanning',
              'Authentication system, transaction history, and responsive GetX state management',
            ]
          : [
              'Portal pengelolaan pesanan admin & manajemen layanan laundry secara realtime',
              'Pelacakan status pesanan pengguna via input kode unik & pemindaian QR code struk',
              'Sistem autentikasi, riwayat transaksi, dan manajemen state responsif berbasis GetX',
            ],
    },

    {
      id: 'goaltracker',
      title: 'GoalTracker',
      role: 'Frontend Developer',
      category: 'WEB',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'GoalTracker is a web-based goal management platform featuring a modern dark glassmorphism UI. Built to visualize targets, track daily consistency up to 100 days with privacy-focused LocalStorage, and deliver interactive achievement celebrations.'
          : 'GoalTracker adalah aplikasi manajemen tujuan berbasis web dengan estetika dark glassmorphism. Dirancang untuk memvisualisasikan target, melacak konsistensi harian hingga 100 hari dengan LocalStorage berprivasi penuh, serta perayaan pencapaian interaktif.',
      tech: ['HTML', 'Bootstrap','LocalStorage'],
      liveUrl: 'https://goaltracker-wheat.vercel.app',
      image: '/src/assets/projects/cloud-analytics.png',
      architectureSubtitle:
        language === 'EN'
          ? 'Client-side state management and privacy-first local storage architecture.'
          : 'Manajemen state sisi klien dan arsitektur penyimpanan lokal mengutamakan privasi.',
      nodes: {
        row1: [
          { label: 'React Glass UI', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'Splash Screen', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
        ],
        row2: [
          { label: 'Checklist Engine', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
          { label: 'Confetti Trigger', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'Browser LocalStorage', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'Mastery Tracker', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Dark glassmorphism UI with futuristic splash screen animation',
              'Automated daily checklist tracking up to 100 days with Smart Editing',
              '100% completion achievement celebration with confetti & private LocalStorage',
            ]
          : [
              'Antarmuka dark glassmorphism dengan animasi splash screen futuristik',
              'Sistem pelacakan checklist harian otomatis hingga 100 hari & Smart Editing',
              'Perayaan pencapaian 100% dengan confetti interaktif & penyimpanan LocalStorage privat',
            ],
    },

    {
      id: 'khodam',
      title: 'CEK KHODAMMU LEK',
      role: 'Frontend Web Developer',
      category: 'WEB',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'Cek Khodammu Lek is a lightweight interactive web entertainment platform built with HTML, Bootstrap, and JavaScript. Enables users to input their name and receive instant randomized "khodam" results through a clean, responsive, and engaging UI.'
          : 'Cek Khodammu Lek adalah aplikasi web hiburan interaktif yang dibangun menggunakan HTML, Bootstrap, dan JavaScript. Pengguna dapat memasukkan nama untuk mendapatkan hasil khodam unik secara acak dengan antarmuka yang simpel, responsif, dan menghibur.',
      tech: ['HTML5', 'Bootstrap', 'JavaScript', 'CSS3', 'Git'],
      liveUrl: 'https://deeonly-cekkhodamlek.vercel.app/',
      image: cekKhodamImg,
      architectureSubtitle:
        language === 'EN'
          ? 'Client-side randomized logic and DOM rendering architecture.'
          : 'Logika pengacak sisi klien dan arsitektur rendering DOM.',
      nodes: {
        row1: [
          { label: 'User Input UI', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'DOM Handler', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
        ],
        row2: [
          { label: 'Khodam Engine', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
          { label: 'Randomizer', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'Bootstrap Grid', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'Result Card', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Automated randomized khodam generator based on user name input',
              'Responsive and user-friendly web interface powered by Bootstrap',
              'Interactive user experience with client-side JavaScript DOM manipulation',
            ]
          : [
              'Generator khodam acak otomatis berbasis input nama pengguna',
              'Antarmuka web responsif dan ramah pengguna dengan Bootstrap',
              'Pengalaman pengguna interaktif dengan manipulasi DOM JavaScript',
            ],
    },

    {
      id: 'wearnity',
      title: 'WEARNITY',
      role: 'FullStack Web Developer',
      category: 'WEB', 
      status: 'In Progress',
      description:
        language === 'EN'
          ? 'Wearnity is a web-based e-commerce platform built with PHP and MySQL for a streetwear distro brand. Features product catalog browsing, dynamic shopping cart management, user authentication, payment confirmation, and admin order control.'
          : 'Wearnity adalah platform e-commerce berbasis PHP & MySQL yang dirancang untuk toko pakaian distro. Menyediakan katalog produk busana streetwear, alur keranjang belanja (cart), registrasi pengguna, serta konfirmasi pembayaran dan manajemen pesanan admin.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'CSS3', 'Git'],
      liveUrl: 'https://github.com/dedejuniarputra/PROJECT_WEARNITY.',
      image: '/src/assets/projects/wearnity.png',
      architectureSubtitle:
        language === 'EN'
          ? 'E-commerce transactional pipeline and relational database architecture.'
          : 'Pipeline transaksi e-commerce dan arsitektur database relasional.',
      nodes: {
        row1: [
          { label: 'Customer Portal', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'Shopping Cart', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
        ],
        row2: [
          { label: 'Admin Dashboard', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
          { label: 'Order Engine', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'MySQL Relational DB', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'Payment Handler', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Interactive streetwear distro product catalog & shopping cart management',
              'Customer authentication system, payment confirmation & transaction history',
              'Admin dashboard for product stock control, order details & transaction status',
            ]
          : [
              'Katalog produk baju distro interaktif & manajemen keranjang belanja (cart)',
              'Sistem autentikasi pelanggan, konfirmasi pembayaran & riwayat transaksi',
              'Dashboard admin untuk pengelolaan stok produk, detail pesanan & status transaksi',
            ],
    },

    {
      id: 'uiux-system',
      title: 'Dark Mode SaaS Design System',
      category: 'UI/UX',
      status: 'Completed',
      description:
        language === 'EN'
          ? 'A high-fidelity minimalist UI/UX design system crafted with glassmorphic aesthetic, responsive component tokens, and fluid micro-interactions.'
          : 'Sistem desain UI/UX minimalis high-fidelity yang dibuat dengan estetika glassmorphic, token komponen responsif, dan mikro-interaksi halus.',
      tech: ['Figma', 'UI/UX', 'Design System', 'Glassmorphism', 'Prototyping'],
      liveUrl: 'https://github.com/dedejuniarputra',
      image: '/src/assets/projects/uiux-system.png',
      architectureSubtitle:
        language === 'EN'
          ? 'UI/UX component hierarchy and design token system.'
          : 'Hirarki komponen UI/UX dan sistem token desain.',
      nodes: {
        row1: [
          { label: 'Design Tokens', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30' },
          { label: 'Figma Library', color: 'border-purple-500/40 text-purple-400 bg-purple-950/30' },
        ],
        row2: [
          { label: 'Component Specs', color: 'border-sky-500/40 text-sky-400 bg-sky-950/30' },
          { label: 'UX Prototypes', color: 'border-amber-500/40 text-amber-400 bg-amber-950/30' },
        ],
        row3: [
          { label: 'Color Tokens', color: 'border-zinc-700 text-zinc-300 bg-zinc-900' },
          { label: 'Micro-interactions', color: 'border-teal-500/40 text-teal-400 bg-teal-950/30' },
        ],
      },
      features:
        language === 'EN'
          ? [
              'Custom dark-mode color palette with HSL token mapping',
              'Responsive grid layout rules for Web & Mobile viewports',
              'Interactive micro-animations and state hover triggers',
            ]
          : [
              'Palet warna dark-mode kustom dengan pemetaan token HSL',
              'Aturan tata letak grid responsif untuk tampilan Web & Mobile',
              'Mikro-animasi interaktif dan pemicu kursor hover',
            ],
    },
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" ref={sectionRef} className="relative w-full py-24 bg-black text-white overflow-hidden select-none">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid-soft pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]" />

      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#13ec7b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">
        
        {/* ── Section Header ─────────────────────────────────── */}
        <div
          className={`flex flex-col gap-3 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#13ec7b]/10 border border-[#13ec7b]/25 text-[#13ec7b] text-xs font-mono tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13ec7b] animate-pulse inline-block" />
              {t.projects.sectionTag}
            </span>
          </div>

          {/* Title */}
          <div className="flex items-end gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {t.projects.titlePart1}{' '}
              <span className="relative inline-block">
                <span className="text-[#13ec7b]">{t.projects.titleHighlight}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#13ec7b] to-transparent" />
              </span>
            </h2>
            <div className="hidden sm:flex items-center mb-2.5 flex-1 max-w-xs">
              <div className="flex-1 h-px bg-gradient-to-r from-[#13ec7b]/40 to-transparent" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-zinc-500 text-sm font-mono tracking-wide leading-relaxed max-w-3xl">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter Tab Switcher */}
        <div
          className={`flex items-center justify-center pt-2 transition-all duration-700 delay-150 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md shadow-xl max-w-full overflow-x-auto">
            {(['ALL', 'WEB', 'MOBILE', 'UI/UX'] as const).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-[#13ec7b]/10 border border-[#13ec7b]/40 text-[#13ec7b] font-semibold shadow-[0_0_15px_rgba(19,236,123,0.12)]'
                      : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-800/50'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full transition-all duration-700 delay-300 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {visibleProjects.map((project, idx) => (
            <ProjectCard
              key={`${activeFilter}-${project.id}`}
              project={project}
              index={idx}
              onSelect={setSelectedProject}
              t={t}
            />
          ))}
        </div>

        {/* See More / See Less Button Trigger */}
        {filteredProjects.length > 4 && (
          <div
            className={`flex items-center justify-center pt-4 transition-all duration-700 delay-500 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-zinc-950/90 border border-zinc-800/80 hover:border-[#13ec7b]/50 text-xs font-mono font-semibold tracking-wider text-zinc-300 hover:text-[#13ec7b] hover:shadow-[0_0_20px_rgba(19,236,123,0.18)] transition-all duration-300 cursor-pointer select-none group backdrop-blur-md"
            >
              <span>{isExpanded ? t.projects.seeLess : t.projects.seeMore}</span>
              <svg
                className={`w-4 h-4 text-[#13ec7b] transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}

      </div>

      {/* Architecture & Detail Modal Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in select-text">
          <div className="bg-[#09090b] border border-zinc-800 rounded-2xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Top Header */}
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#13ec7b] tracking-tight">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.role && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/40 text-white text-xs font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {selectedProject.role}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 text-justify leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none cursor-pointer flex-shrink-0"
                title={t.projects.modalClose}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Project Image Preview Frame */}
            <ProjectImagePreview
              image={selectedProject.image}
              title={selectedProject.title}
            />

            {/* Key Implementation Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold tracking-wide font-mono uppercase text-[#13ec7b]">
                {language === 'EN' ? 'Features:' : 'Fitur:'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside leading-relaxed">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="text-zinc-400">
                    <span className="text-zinc-200 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
}

function ProjectImagePreview({ image, title }: { image?: string | any; title: string }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [image]);

  const imgSrc = typeof image === 'object' && image !== null && 'src' in image ? image.src : (typeof image === 'string' ? image : '');
  const showPlaceholder = !imgSrc || imageError;

  return (
    <div className="bg-[#0c0c0e] border border-zinc-800/80 rounded-xl overflow-hidden shadow-inner flex items-center justify-center min-h-[220px] sm:min-h-[260px] max-h-[360px] relative w-full select-none">
      {!showPlaceholder ? (
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 shadow-md">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-medium">
            No Preview Image
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onSelect,
  t,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
  t: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<StarParticle[]>([]);
  const lastAddRef = useRef(0);

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
        size: Math.floor(Math.random() * 8) + 10, // 10px to 18px
      };
      setSparkles((prev) => [...prev.slice(-10), newParticle]);
    }
  };

  const handleMouseLeave = () => {
    setSparkles([]);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${(index % 4) * 60}ms` }}
      className="bg-[#09090b] border border-zinc-800/80 hover:border-[#13ec7b]/40 rounded-2xl p-5 sm:p-6 shadow-xl transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden animate-smooth-reveal"
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

      {/* Decorative Twinkling Ambient Stars in Card Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
        <svg className="absolute top-3 right-16 w-3.5 h-3.5 text-[#13ec7b] animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute bottom-6 right-8 w-2.5 h-2.5 text-[#13ec7b] animate-ping" style={{ animationDuration: '3.5s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
        <svg className="absolute top-1/2 left-6 w-3 h-3 text-[#13ec7b] animate-pulse" style={{ animationDuration: '2.5s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Card Content Top Row: Icon + Status & Action Buttons */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-zinc-800/50">
        
        {/* Left: Device Icon + Status Badge */}
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#13ec7b]">
            {project.category === 'MOBILE' ? (
              // Clean Mobile Smartphone Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            ) : project.category === 'UI/UX' ? (
              // Clean Wireframe Layout Design Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            ) : (
              // Web Desktop Monitor Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            )}
          </div>
          <span
            className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
              project.status === 'Completed'
                ? 'bg-[#052615] text-[#13ec7b] border-[#13ec7b]/30'
                : 'bg-amber-950/50 text-amber-400 border-amber-500/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === 'Completed' ? 'bg-[#13ec7b] animate-pulse' : 'bg-amber-400 animate-pulse'
              }`}
            />
            {project.status}
          </span>
        </div>

        {/* Right: 2 Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Left Button: Architecture / Detail Modal Trigger */}
          <button
            onClick={() => onSelect(project)}
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#13ec7b]/50 text-zinc-400 hover:text-[#13ec7b] hover:shadow-[0_0_12px_rgba(19,236,123,0.2)] transition-all flex items-center justify-center cursor-pointer focus:outline-none"
            title={t.projects.viewDetails}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.573 16.49 16.638 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* Right Button: External Live Link */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#13ec7b]/50 text-zinc-400 hover:text-[#13ec7b] hover:shadow-[0_0_12px_rgba(19,236,123,0.2)] transition-all flex items-center justify-center cursor-pointer"
            title={t.projects.liveDemo}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>

        </div>

      </div>

      {/* Card Body: Title & Description */}
      <div className="relative z-10 space-y-2 my-4 flex-1 flex flex-col justify-start">
        <h3 className="text-lg sm:text-xl font-bold text-[#13ec7b] tracking-tight transition-colors">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal line-clamp-3 text-justify">
          {project.description}
        </p>
      </div>

      {/* Card Tech Badges */}
      <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-zinc-800/60 mt-auto">
        {project.tech.map((techItem, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono text-[11px] sm:text-xs rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>

    </div>
  );
}
