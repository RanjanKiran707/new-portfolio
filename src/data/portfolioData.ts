export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  year: string;
  title: string;
  madeAt?: string;
  image?: string;
  description: string;
  link?: string;
  githubUrl?: string;
  skills: string[];
  stats?: string;
}

export const PERSONAL_INFO = {
  name: "Ranjan Padmakiran",
  role: "Software Engineer",
  tagline: "I build robust, offline mobile applications, scalable isolate concurrency architectures, and delightful cross-platform experiences.",
  email: "ranjanpadmakiran@gmail.com",
  phone: "+91-9632903709",
  location: "Bengaluru, India",
  github: "https://github.com/RanjanKiran707",
  linkedin: "https://www.linkedin.com/in/ranjan-kiran-050284220",
  resumeUrl: "/resume.pdf",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "DEC 2023 — APR 2026",
    role: "Software Engineer",
    company: "Aatmunn",
    companyUrl: "https://aatmunn.com/",
    description: [
      "Engineered a BLE module managing multiple BLE device connections simultaneously with configurable polling intervals, custom command dispatch, and parsing logic.",
      "Designed a modular offline-first 'Store-and-Forward' caching mechanism reused across 3+ core features, guaranteeing 100% data integrity and auto-syncing upon network recovery.",
      "Architected a scalable Inter-Isolate Communication Protocol to overcome Flutter's single-background-isolate limits, enabling modules to plug into a shared isolate safely.",
      "Engineered an audio/video calling SDK across 2+ tenants, decoupling communication logic from presentation layers to enable custom tenant UI implementations.",
      "Integrated PowerSync's local-first technology to streamline real-time offline sync repositories, and refactored error handling codebase-wide using functional fpdart.",
    ],
    skills: ["Flutter", "Dart", "BLE", "Isolates", "PowerSync", "Local-First", "fpdart", "WebRTC / Audio-Video SDK", "SQLite"],
  },
  {
    period: "JUN 2023 — DEC 2023",
    role: "Software Engineer I",
    company: "AI Bharat",
    companyUrl: "https://aibharata.com/",
    description: [
      "Sole developer who launched 4+ cross-platform Flutter applications powering restaurant reservations, administrative portals, and AI face-swap tools.",
      "Created 4+ reusable dynamic form widgets, halving form screen creation time and accelerating feature shipping.",
      "Introduced real-time asynchronous background task processing, eliminating user waiting bottlenecks.",
    ],
    skills: ["Flutter", "Dart", "Async Processing", "REST APIs", "State Management", "Cross-Platform UI"],
  },
  {
    period: "DEC 2022 — JUN 2023",
    role: "SDE Intern",
    company: "Billing Fast (Kirana Fast)",
    companyUrl: "https://www.billingfast.com/",
    description: [
      "Collaborated with 4 interns to implement 5+ core features for billing and inventory management applications.",
      "Synchronized Indian and international repository releases, keeping multi-market deployments aligned.",
      "Crafted 2+ staggered UX micro-animations for billing workflows, and refined a thermal ESC/POS printing plugin for Android & iOS.",
    ],
    skills: ["Flutter", "Android Plugin", "iOS Plugin", "ESC/POS Printing", "Staggered Animations", "Inventory Tech"],
  },
  {
    period: "FEB 2022 — DEC 2022",
    role: "SDE Intern",
    company: "AI Bharat",
    companyUrl: "https://aibharata.com/",
    description: [
      "Built reusable real-time cryptocurrency data stream widgets integrated across 3 functional modules.",
      "Revamped 3+ trading interface screens with modern interaction patterns, driving elevated user engagement.",
    ],
    skills: ["Flutter", "Dart", "Crypto WebSockets", "UI/UX Redesign", "State Management"],
  },
];

export const ALL_PROJECTS: ProjectItem[] = [
  {
    year: "2026",
    title: "Study Media Recorder",
    madeAt: "Personal",
    image: "/images/study-media-recorder.png",
    description: "An offline Android application designed to record short audio and video study notes, organized into custom hierarchical folders and playlists for distraction-free revision.",
    link: "https://study-media-recorder.web.app",
    githubUrl: "https://github.com/RanjanKiran707/study-media-recorder",
    skills: ["Flutter", "Dart", "Camera APIs", "Audio APIs", "Offline App", "Local Storage"],
  },
  {
    year: "2026",
    title: "YouTube Video Organizer",
    madeAt: "Personal",
    image: "/images/yt-video-organizer.png",
    description: "An Android app allowing users to save and curate YouTube videos into nested folders directly via the native Android share sheet, featuring distraction-free in-app playback with zero backend dependency.",
    link: "https://yt-video-organizer.web.app",
    githubUrl: "https://github.com/RanjanKiran707/youtube-video-organizer",
    skills: ["Flutter", "Drift (SQLite)", "Receive Sharing Intent", "IFrame Player", "Local DB"],
  },
  {
    year: "2026",
    title: "Tenant Rent Tracker",
    madeAt: "Personal",
    image: "/images/tenant-tracker.png",
    description: "A property management and tenant rent book app built for landlords to track dues, partial payments, rent histories, and overdue balances with full bilingual localization (English & Kannada).",
    link: "https://tenant-tracker.web.app",
    githubUrl: "https://github.com/RanjanKiran707/tenant-rent-tracker",
    skills: ["Flutter", "Drift (SQLite)", "Localization (EN/KN)", "Clean Architecture", "Local-First"],
  },
  {
    year: "2026",
    title: "Cash Recorder",
    madeAt: "Personal",
    image: "/images/cash-recorder.png",
    description: "Personal finance and household cash flow application supporting nested bills, categorised expense summaries, and reactive queries with scalable MVVM architecture.",
    link: "https://cash-recorder.web.app",
    githubUrl: "https://github.com/RanjanKiran707/cash_recorder",
    skills: ["Flutter", "Material 3", "BLoC Pattern", "Isar NoSQL", "MVVM"],
  },
  {
    year: "2026",
    title: "YouTube Music Downloader & Player",
    madeAt: "Personal",
    description: "A cross-platform Flutter application enabling users to search YouTube, download high-quality audio streams locally, and manage offline playlists.",
    githubUrl: "https://github.com/RanjanKiran707/yt_music_downloader_player",
    skills: ["Flutter", "Dart", "Audio Pipeline", "File System API"],
  },
  {
    year: "2026",
    title: "Calculator Cool UI",
    madeAt: "Personal",
    image: "/images/calculator-cool-ui.png",
    description: "A sleek calculator utility built to explore physics-based theme switching transitions and smooth custom tactile keypad feedback.",
    link: "https://calculator-cool-ui.web.app",
    githubUrl: "https://github.com/RanjanKiran707/calculator-cool-UI",
    skills: ["Flutter", "Dart", "Custom Animations", "Fluid UI"],
  },
  {
    year: "2026",
    title: "WhatsApp UI Clone",
    madeAt: "Personal",
    description: "A pixel-perfect Flutter replication of WhatsApp's signature UI, responsive messaging layouts, and navigation interactions.",
    githubUrl: "https://github.com/RanjanKiran707/whatsapp-clone",
    skills: ["Flutter", "Dart", "Custom UI Components"],
  },
];

// Show top 3 projects on the homepage
export const FEATURED_PROJECTS: ProjectItem[] = ALL_PROJECTS.slice(0, 3);
