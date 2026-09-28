export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Vue.js",
      "Next.js",
    ],
  },
  {
    id: "state",
    label: "State Management",
    skills: ["Redux", "Vuex", "Pinia"],
  },
  {
    id: "styling",
    label: "Styling",
    skills: ["Tailwind CSS", "Bootstrap", "SCSS"],
  },
  {
    id: "other",
    label: "Other",
    skills: ["Firebase", "GitHub", "Gulp", "Python", "C++"],
  },
];

export const principles = [
  {
    title: "Component architecture",
    body: "Composable, typed components with clear boundaries and predictable state.",
  },
  {
    title: "Accessible interfaces",
    body: "Semantic markup, keyboard support and visible focus as a baseline, not an afterthought.",
  },
  {
    title: "Performance discipline",
    body: "Measured rendering cost, lean bundles and animations built on transform and opacity.",
  },
  {
    title: "Maintainable code",
    body: "Readable abstractions, consistent conventions and careful REST API integration.",
  },
];
