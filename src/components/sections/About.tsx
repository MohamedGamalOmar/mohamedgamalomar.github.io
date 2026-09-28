import { principles } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { SlideIn } from "../motion/SlideIn";
import { StaggerContainer, StaggerItem } from "../motion/StaggerContainer";

const coreStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
  "SCSS",
  "Tailwind CSS",
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Interfaces built to <em>scale</em>, not just to ship
            </>
          }
          subtitle="A short look at how I approach frontend engineering day to day."
        />

        <div className="about-grid">
          <SlideIn from="left" className="about-lead">
            <p>
              I&apos;m a <strong>Frontend Engineer</strong> with expertise in building responsive
              and scalable web applications using Vue.js, React.js, TypeScript, SCSS and Tailwind
              CSS.
            </p>
            <p>
              I turn UI designs into clean, functional and accessible interfaces, with strong
              expertise in <strong>component-based architecture</strong>,{" "}
              <strong>state management</strong> and <strong>REST API integration</strong>.
            </p>
            <p>
              I&apos;m experienced in optimizing UI performance, improving code quality and
              collaborating effectively with backend teams — and dedicated to writing maintainable
              code while staying current with modern frontend best practices.
            </p>

            <div className="about-stack">
              <span className="about-stack-label">Core stack</span>
              <ul className="tech-badges">
                {coreStack.map((tech) => (
                  <li key={tech} className="tech-badge">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>

          <StaggerContainer className="about-principles">
            {principles.map((principle, index) => (
              <StaggerItem key={principle.title} className="about-principle">
                <span className="about-principle-index">0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
