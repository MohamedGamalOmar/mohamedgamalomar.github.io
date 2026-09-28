import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { SmartImage } from "../ui/SmartImage";

export function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article
      className={featured ? "project-card project-card-featured" : "project-card"}
    >
      <div className="project-card-media">
        {featured ? <span className="project-card-flag">Featured</span> : null}
        <SmartImage
          src={project.image}
          alt={`${project.title} interface preview`}
          label={project.shortTitle ?? project.title}
        />
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {project.technologies.length ? (
          <ul className="tech-badges">
            {project.technologies.map((tech) => (
              <li key={tech} className="tech-badge">
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="project-card-actions">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="project-link project-link-primary"
          >
            Case study
            <ArrowUpRight aria-hidden="true" />
          </Link>
          {project.demo ? (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live demo
              <ExternalLink aria-hidden="true" />
            </a>
          ) : null}
          {project.github ? (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
            >
              GitHub
              <Github aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
