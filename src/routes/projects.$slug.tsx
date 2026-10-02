import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getAdjacentProjects, getProject, type Project } from "@/data/projects";
import { SmartImage } from "@/components/ui/SmartImage";
import { FadeIn } from "@/components/motion/FadeIn";

export const Route = createFileRoute("/projects/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Case Study | Mohamed Gamal Omar`;
    const description = loaderData.project.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: CaseStudy,
});

function Block({
  title,
  text,
  items,
  wide,
}: {
  title: string;
  text?: string | undefined;
  items?: string[] | undefined;
  wide?: boolean | undefined;
}) {
  const hasContent = Boolean(text) || Boolean(items?.length);
  return (
    <FadeIn className={wide ? "case-block case-block-wide" : "case-block"}>
      <h2 className="case-block-title">{title}</h2>
      {text ? <p className="case-block-content">{text}</p> : null}
      {items?.length ? (
        <ul className="case-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {!hasContent ? (
        <p className="case-placeholder">Content for this section is not published yet.</p>
      ) : null}
    </FadeIn>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const { prev, next } = getAdjacentProjects(project.slug);
  const cs = project.caseStudy;

  return (
    <div className="case-page">
      <div className="shell">
        <Link to="/" hash="projects" className="case-back">
          <ArrowLeft aria-hidden="true" />
          Back to projects
        </Link>

        <div className="case-hero">
          <div>
            <h1 className="case-title">{project.title}</h1>
            <p className="case-summary">{project.description}</p>
            {project.technologies.length ? (
              <ul className="tech-badges" style={{ marginTop: "1rem" }}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="tech-badge">
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="case-actions">
              {project.demo ? (
                <a
                  className="btn btn-primary"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live demo
                  <ExternalLink className="btn-icon" aria-hidden="true" />
                </a>
              ) : null}
              {project.github ? (
                <a
                  className="btn btn-secondary"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                  <Github className="btn-icon" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="case-media">
            <SmartImage
              src={project.image}
              alt={`${project.title} interface preview`}
              label={project.shortTitle ?? project.title}
              loading="eager"
            />
          </div>
        </div>

        <div className="case-body">
          <Block title="Overview" text={cs.overview ?? project.description} wide />
          <Block title="Problem / Context" text={cs.problem} />
          <Block title="Solution" text={cs.solution} />
          <Block title="Key Features" items={cs.features} />
          <Block title="Responsibilities" items={cs.responsibilities} />
          <Block title="Challenges" items={cs.challenges} />
          <Block title="Results / Outcome" items={cs.results} />
          <Block
            title="Technology Stack"
            items={project.technologies.length ? project.technologies : undefined}
          />
        </div>

        <nav className="case-nav" aria-label="Project navigation">
          {prev ? (
            <Link to="/projects/$slug" params={{ slug: prev.slug }} className="case-nav-link">
              <span className="case-nav-label">Previous project</span>
              <span className="case-nav-title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="case-nav-link case-nav-next"
            >
              <span className="case-nav-label">Next project</span>
              <span className="case-nav-title">{next.title}</span>
            </Link>
          ) : null}
        </nav>
      </div>
    </div>
  );
}

function ProjectNotFound() {
  return (
    <div className="shell not-found">
      <div>
        <h1 className="not-found-code">404</h1>
        <p>That project doesn&apos;t exist or has been renamed.</p>
        <div className="not-found-actions">
          <Link to="/" hash="projects" className="btn btn-primary">
            Browse projects
          </Link>
        </div>
      </div>
    </div>
  );
}
