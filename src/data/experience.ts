export type TimelineEntry = {
  id: string;
  kind: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description?: string;
  details?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "e-systematic",
    kind: "work",
    title: "Frontend Engineer",
    organization: "E-Systematic",
    location: "Heliopolis, Cairo, Egypt",
    period: "April 2026 — Present",
    description: "Contributing to the development of LISTA CRM, a comprehensive real estate operating platform that brings leads, contacts, listings, deals, activities, tasks, calendars, analytics, and team management into a unified workspace. The platform supports real estate agents, teams, brokerages, and enterprises throughout the property sales lifecycle, from lead acquisition and follow-ups to deal management and closing. I work on frontend features that enable agents and managers to manage pipelines, property listings, team activities, performance analytics, and connected real estate microsites for property marketing and lead generation, using Vue.js, TypeScript, Pinia, Primevue, Scss and Tailwind CSS."
  },
  {
    id: "turndigital",
    kind: "work",
    title: "Frontend Engineer",
    organization: "TurnDigital",
    location: "El Maadi, Cairo",
    period: "April 2025 — March 2026",
    description:
      "Responsible for building scalable, maintainable front-end architectures for enterprise projects. Specialized in Vue.js, Vuex, Pinia, Tailwind CSS, Umbraco Admin, and Agile methodologies. Collaborated with cross-functional teams to deliver high quality software solutions.",
  },
  {
    id: "freelance",
    kind: "work",
    title: "Frontend Developer",
    organization: "Freelance",
    period: "October 2023 — February 2025",
    description:
      "Specialized in React.js, Vue.js, Redux, Pinia, TypeScript, and Tailwind CSS with component-based architecture, state management, and REST API integration to develop scalable and responsive user interfaces for modern web applications.",
  },
  {
    id: "arib",
    kind: "work",
    title: "Frontend Developer Intern",
    organization: "ARIB",
    location: "Nasser City, Cairo",
    period: "July 2024 — August 2024",
    description:
      "Delivered a modern e-commerce platform using React.js, Redux, and Bootstrap. The role strengthened understanding of React architecture, state management principles, and UI performance while collaborating with experienced frontend teams.",
  },
  {
    id: "iti",
    kind: "work",
    title: "Frontend Developer Trainee",
    organization: "ITI",
    location: "Cairo",
    period: "July 2023 — September 2023",
    description:
      "Developed dynamic web applications using HTML, CSS, JavaScript, Bootstrap, React, and Redux. Built responsive, mobile-first interfaces, ensuring a seamless user experience across devices. Gained in-depth knowledge of React's component-based architecture, state management, and lifecycle.",
  },
  {
    id: "benha",
    kind: "education",
    title: "Bachelor of Computer Science",
    organization: "Benha University",
    period: "September 2020 — June 2024",
    description: "Bachelor Degree in Computer Science and AI.",
    details: ["Graduation Project: A+", "Grade: Very Good (B+)", "GPA: 3.18 / 4"],
  },
];
