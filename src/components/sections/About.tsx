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
              About <em>Mohamed Gamal</em>
            </>
          }
          subtitle="A short look at how I approach frontend engineering day to day."
        />

        <div className="about-grid">
          <SlideIn from="left" className="about-lead">
            <p>
              Mohamed Gamal Omar is a <strong>Frontend Engineer</strong> based in Cairo,
              specializing in modern web development with <strong>React.js</strong> and{" "}
              <strong>Vue.js</strong>.
            </p>
            <p>
              He builds responsive and scalable web applications using <strong>TypeScript</strong>,{" "}
              <strong>JavaScript</strong>, <strong>Next.js</strong>, <strong>Nuxt.js</strong> and{" "}
              <strong>Tailwind CSS</strong>.
            </p>
            <p>
              His frontend engineering experience includes{" "}
              <strong>component-based architecture</strong>, <strong>state management</strong>,{" "}
              <strong>REST API integration</strong>, <strong>responsive web design</strong>,
              <strong> accessibility</strong> and <strong>performance optimization</strong>.
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
