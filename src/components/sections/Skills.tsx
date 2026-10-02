import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { viewportReplay } from "../motion/variants";
import { SectionHeading } from "../ui/SectionHeading";

const allSkills = skillCategories.flatMap((c) => c.skills);

const monogram = (skill: string) => {
  const cleaned = skill.replace(/[^a-zA-Z+#]/g, "");
  return cleaned.slice(0, 2).toUpperCase();
};

export function Skills() {
  const reduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState("all");

  const skills =
    activeTab === "all"
      ? allSkills
      : (skillCategories.find((c) => c.id === activeTab)?.skills ?? []);

  const tabs = [{ id: "all", label: "All" }, ...skillCategories];

  return (
    <section className="section" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title={<>Technical Skills</>}
          subtitle="Grouped by where they sit in the stack"
        />

        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? "skills-tab skills-tab-active" : "skills-tab"}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id ? (
                <motion.span
                  layoutId="skills-tab-glow"
                  className="skills-tab-glow"
                  aria-hidden="true"
                />
              ) : null}
              {tab.label}
            </button>
          ))}
        </div>

        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              className="skill-card"
              {...(reduced
                ? {}
                : {
                    initial: { opacity: 0, y: 14 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: viewportReplay,
                    transition: {
                      duration: 0.35,
                      delay: Math.min(index * 0.03, 0.3),
                    },
                  })}
            >
              <span className="skill-card-mark" aria-hidden="true">
                {monogram(skill)}
              </span>
              <span className="skill-card-name">{skill}</span>
            </motion.li>
          ))}
        </ul>

        <p className="skills-note">
          Also comfortable with Agile delivery, Git workflows and Umbraco admin integration on
          enterprise projects.
        </p>
      </div>
    </section>
  );
}
