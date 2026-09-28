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
    id: "turndigital",
    kind: "work",
    title: "Frontend Engineer",
    organization: "TurnDigital",
    location: "Cairo",
    period: "April 2025 — Present",
    description:
      "Responsible for building scalable, maintainable front-end architectures for enterprise projects. Specialized in Vue.js, Vuex, Pinia, Tailwind CSS, Umbraco Admin, and Agile methodologies. Collaborated with cross-functional teams to deliver high quality software solutions.",
  },
  {
    id: "freelance",
    kind: "work",
    title: "Frontend Engineer",
    organization: "Freelance",
    period: "October 2023 — February 2025",
    description:
      "Specialized in React.js, Vue.js, Redux, Pinia, TypeScript, and Tailwind CSS with component-based architecture, state management, and REST API integration to develop scalable and responsive user interfaces for modern web applications.",
  },
  {
    id: "arib",
    kind: "work",
    title: "Frontend Intern",
    organization: "ARIB",
    location: "Nasser City, Cairo",
    period: "July 2024 — August 2024",
    description:
      "Delivered a modern e-commerce platform using React.js, Redux, and Bootstrap. The role strengthened understanding of React architecture, state management principles, and UI performance while collaborating with experienced frontend teams.",
  },
  {
    id: "iti",
    kind: "work",
    title: "Frontend Trainee",
    organization: "ITI",
    location: "Shebin El Kom, Menofia",
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
