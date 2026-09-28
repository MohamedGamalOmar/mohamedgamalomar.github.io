import { motion, useReducedMotion } from "motion/react";
import { timeline } from "@/data/experience";
import { viewportReplay } from "../motion/variants";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  const reduced = useReducedMotion();

  return (
    <section className="section" id="journey">
      <div className="shell">
        <SectionHeading
          eyebrow="Journey"
          title={
            <>
              Experience and <em>education</em>
            </>
          }
          subtitle="From training and internships to enterprise frontend engineering in Cairo."
        />

        <ol className="timeline">
          {timeline.map((entry, index) => (
            <motion.li
              key={entry.id}
              className={
                index % 2 === 1 ? "timeline-item timeline-item-right" : "timeline-item"
              }
              {...(reduced
                ? {}
                : {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: viewportReplay,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
                  })}
            >
              <span className="timeline-node" aria-hidden="true" />
              <article className="timeline-card">
                <div className="timeline-card-top">
                  <h3 className="timeline-title">
                    {entry.title} — <span className="timeline-org">{entry.organization}</span>
                  </h3>
                  <span className="timeline-period">{entry.period}</span>
                </div>
                {entry.location ? (
                  <p className="timeline-location">{entry.location}</p>
                ) : null}
                {entry.description ? (
                  <p className="timeline-desc">{entry.description}</p>
                ) : null}
                {entry.details?.length ? (
                  <ul className="timeline-details">
                    {entry.details.map((detail) => (
                      <li key={detail} className="timeline-detail">
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
