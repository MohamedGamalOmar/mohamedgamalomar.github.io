import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";
import { StaggerContainer, StaggerItem } from "../motion/StaggerContainer";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected <em>work</em>
            </>
          }
          subtitle="Government platforms, e-commerce and product work — each with its own case study."
        />

        <StaggerContainer className="projects-featured" stagger={0.1}>
          {featured.map((project) => (
            <StaggerItem key={project.slug} className="project-card-featured">
              <ProjectCard project={project} featured />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="projects-grid" stagger={0.06}>
          {rest.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
