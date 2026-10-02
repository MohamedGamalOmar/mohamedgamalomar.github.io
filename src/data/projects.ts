export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  image: string;
  demo?: string;
  github?: string;
  technologies: string[];
  featured?: boolean;
  caseStudy: {
    overview?: string;
    problem?: string;
    solution?: string;
    features?: string[];
    responsibilities?: string[];
    challenges?: string[];
    results?: string[];
    gallery?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "cairo-quran-radio",
    title: "Cairo Quran Radio",
    description:
      "The official website of Quran Radio in Cairo, offering live radio listening, the Quran as readable text, and much more.",
    image: "/imgs/QuranRadio.png",
    demo: "https://misrquran.gov.eg",
    technologies: ["Vue.js", "TypeScript", "REST API", "Bootstrap"],
    featured: true,
    caseStudy: {
      overview:
        "The official website of Quran Radio in Cairo, offering the ability to listen to Quran Radio, read the Quran as text, and much more.",
      problem:
        "Quran Radio needed a modern official platform where listeners could tune in to the live broadcast, follow the daily program schedule, and read the Quran as text — all managed by editors through a maintainable admin system.",
      solution:
        "Built the platform with Vue.js, TypeScript and Bootstrap, centered around a global sticky audio player that keeps playback alive while users browse. A full admin system lets staff manage audio files, recordings, programs and live radio content.",
      features: [
        "Live radio streaming with an auto-updating program schedule based on the Cairo time zone.",
        "Readable Quran text alongside audio recordings.",
        "Audio programs, episodes and Quran recordings with listing and detail pages.",
        "Global sticky audio player that persists across the entire platform.",
        "Full admin system for CRUD operations on audio files, recordings, programs and live radio paragraphs.",
      ],
      responsibilities: [
        "Built live radio with an auto-updating program schedule based on the Cairo time zone.",
        "Created audio programs, episodes, and Quran recordings listing and details pages.",
        "Built a global sticky audio player used across the entire platform.",
        "Built a full admin system for CRUD operations: audio files, recordings, programs, and live radio paragraphs.",
      ],
      challenges: [
        "Keeping audio playback uninterrupted while users navigate between pages, solved with a global sticky player.",
        "Aligning the program schedule with the Cairo time zone so it always shows the correct current program.",
      ],
      results: [
        "The platform is live as the official Quran Radio website at misrquran.gov.eg.",
        "Editors manage all audio and program content through the admin system without developer involvement.",
      ],
    },
  },
  {
    slug: "cpa",
    title: "CPA — Customer Protection Agency",
    shortTitle: "CPA",
    description:
      "The official website of the National Customer Protection Agency, enabling citizens to electronically submit and track complaints about unfair trade practices and product safety.",
    image: "/imgs/CPA.png",
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "REST API", "Umbraco CMS"],
    featured: true,
    caseStudy: {
      overview:
        "The official website of the National Customer Protection Agency that enables citizens to electronically submit and track complaints regarding unfair trade practices and product safety concerns.",
      problem:
        "The agency needed to move complaint handling online: citizens had to be able to submit complaints about unfair trade practices and product safety electronically, attach evidence, and follow up on their cases without visiting offices.",
      solution:
        "Built the entire project from scratch with Vue.js, TypeScript, REST API and Tailwind CSS — full authentication and authorization, a multi-step complaint submission flow with validation, and tracking pages with filtering, plus informative agency pages and a media center.",
      features: [
        "Full authentication, authorization and profile management.",
        "Multi-step complaint submission form with validation.",
        "Complaint listing and detail pages with date range and complaint number filtering.",
        "File uploads and notifications for document or comment requests from CPA staff.",
        "Informative agency pages, media center and newsletter.",
      ],
      responsibilities: [
        "Built the entire project from scratch including full authentication, authorization, and profile management.",
        "Built a multi-step complaint submission form with validation, listing, and detail pages with date range and complaint number filtering.",
        "Allowed users to upload files and receive document or comment request notifications from CPA staff.",
        "Built informative agency pages, media center, newsletter and more, with a clean and responsive UI.",
      ],
      challenges: [
        "Designing a multi-step submission flow that stays usable while collecting detailed complaint data and file uploads.",
        "Keeping citizens informed through notifications whenever CPA staff request documents or comments.",
      ],
      results: [
        "Citizens can submit and track complaints entirely online.",
        "Complaint history is searchable by date range and complaint number.",
      ],
    },
  },
  {
    slug: "mcit",
    title: "MCIT — Ministry of Communication & Information Technology",
    shortTitle: "MCIT",
    description:
      "The official ministry website serving both public users and internal employees, covering tenders, vacancies and the media center.",
    image: "/imgs/MCIT.png",
    technologies: ["Vue.js", "REST API", "Tailwind CSS", "Umbraco CMS"],
    featured: true,
    caseStudy: {
      overview:
        "The official website of the Ministry of Communication and Information Technology, available for both public users and internal employees.",
      problem:
        "The ministry needed a single official website serving two audiences — public users and internal employees — with up-to-date tenders, vacancies and media content, and pages that could be printed cleanly for official use.",
      solution:
        "Built the site with Vue.js, REST API and Tailwind CSS, with listing and detail pages for each content type and a global print utility that prints only the required section of a page.",
      features: [
        "Listing and detail pages for Tenders, Vacancies, Media Center and What's New.",
        "Separate content streams for public users and internal employees.",
        "Global print-specific-section utility for clean printing of detail pages.",
      ],
      responsibilities: [
        "Built listing and detail pages for Tenders, Vacancies, Media Center, and What's New.",
        "Created a global print-specific-section utility that prints only the required parts of detail pages and excludes irrelevant content.",
      ],
      challenges: [
        "Printing only the relevant section of a detail page — excluding navigation and unrelated content — through one reusable global utility.",
      ],
      results: [
        "One platform serves both the public and internal ministry employees.",
        "Detail pages print cleanly for official paperwork.",
      ],
    },
  },
  {
    slug: "kidskiosk",
    title: "KidsKiosk E-Commerce",
    description:
      "A comprehensive e-commerce platform with a robust admin dashboard for real-time analytics, product management and order tracking.",
    image: "/imgs/kidskiosk.png",
    demo: "https://kidskiosk.vercel.app/",
    github: "https://github.com/MohamedGamalOmar/KidsKiosk",
    technologies: ["React.js", "Redux", "TypeScript", "Tailwind Css", "REST API"],
    caseStudy: {
      overview:
        "A comprehensive e-commerce platform with a robust admin dashboard for real-time analytics, product management, and order tracking. The platform combines powerful administrative controls with an intuitive customer shopping experience.",
      problem:
        "An online store needs two experiences in one: a simple, intuitive shopping flow for customers, and a powerful back office where admins can see how the store is performing and manage products and orders.",
      solution:
        "Built the platform with React.js, TypeScript, and Redux for predictable state management across the storefront and dashboard, Bootstrap for a clean responsive UI, and a REST API for products, orders and analytics data.",
      features: [
        "Customer storefront with an intuitive shopping experience.",
        "Admin dashboard with real-time analytics.",
        "Product management for the store catalog.",
        "Order tracking from placement through fulfilment.",
      ],
      challenges: [
        "Keeping storefront and admin state consistent, handled with centralized Redux state.",
        "Presenting real-time analytics in the dashboard without hurting the shopping experience.",
      ],
      results: [
        "Admins manage products and track orders from a single dashboard.",
        "Customers get a smooth, responsive shopping experience.",
      ],
    },
  },
  {
    slug: "linkedin-clone",
    title: "LinkedIn Clone",
    description:
      "A social application where users sign in with Google, create posts, like, comment, share, save posts and view profiles.",
    image: "/imgs/linkedin-clone.png",
    demo: "https://linkedin-clone-r.vercel.app",
    github: "https://github.com/MohamedGamalOmar/Linkedin-Clone",
    technologies: ["React.js", "Redux", "Firebase", "Bootstrap"],
    caseStudy: {
      overview:
        "Social application enabling users to sign in using a Google account and create posts. Users can like posts, add comments, share posts, receive notifications, save posts and view profiles.",
      problem:
        "Recreate the core LinkedIn experience — a feed of posts with real social interaction — as a full working application rather than a static mockup.",
      solution:
        "Built the app with React.js and Redux for feed and interaction state, and Firebase for Google authentication, data storage, hosting and real-time updates.",
      features: [
        "Sign in with a Google account.",
        "Create, like, comment on and share posts.",
        "Save posts and view user profiles.",
        "Notifications for social activity.",
      ],
      challenges: [
        "Keeping the feed, likes and comments in sync in real time using Firebase.",
        "Managing complex interaction state (likes, saves, notifications) with Redux.",
      ],
      results: [
        "A working social app deployed at linkedin-gemy.firebaseapp.com.",
        "Full post lifecycle supported: create, like, comment, share and save.",
      ],
    },
  },
  {
    slug: "healthcare",
    title: "Health Care System",
    description:
      "A platform that streamlines patient registration, appointment booking and management for healthcare providers.",
    image: "/imgs/healthcare.png",
    github: "https://github.com/MohamedGamalOmar/healthcare",
    technologies: ["Next.js", "React.js", "Tailwind Css"],
    caseStudy: {
      overview:
        "Platform that streamlines patient registration, appointment booking, and management for healthcare providers. Implemented administrative features for scheduling, confirming, and canceling appointments.",
      problem:
        "Healthcare providers need a simple way to register patients and manage appointments, while patients need a straightforward way to book — without manual scheduling overhead.",
      solution:
        "Built the platform with React.js, Redux and Tailwind Css, covering patient registration and appointment booking on one side and administrative scheduling tools on the other.",
      features: [
        "Patient registration flow.",
        "Appointment booking for patients.",
        "Administrative scheduling, confirming and canceling of appointments.",
      ],
      challenges: [
        "Modeling appointment state (booked, confirmed, canceled) reliably with Redux.",
      ],
      results: [
        "Patient registration and booking run through one streamlined flow.",
        "Providers manage their appointment schedule from the admin side.",
      ],
    },
  }
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug: string) => {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
};
