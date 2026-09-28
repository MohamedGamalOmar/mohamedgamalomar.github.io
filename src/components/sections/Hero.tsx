import { motion, useReducedMotion, type Variants } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText, MapPin, Sparkles } from "lucide-react";
import { contactInfo } from "@/data/social";
import { SocialLinks } from "../ui/SocialLinks";
import { SmartImage } from "../ui/SmartImage";
import { viewportReplay } from "../motion/variants";

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const reduced = useReducedMotion();
  const motionProps = reduced
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportReplay,
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
        },
      };

  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="shell">
        <div className="hero-grid">
          <motion.div className="hero-content" {...motionProps}>
            <motion.span className="hero-greeting" {...(reduced ? {} : { variants: item })}>
              <span className="hero-greeting-dot" aria-hidden="true" />
              Hello, I&apos;m
            </motion.span>

            <motion.h1 className="hero-name" {...(reduced ? {} : { variants: item })}>
              Mohamed Gamal{" "}
              <motion.span className="hero-role" {...(reduced ? {} : { variants: item })}>
                <span className="hero-role-main">Frontend Engineer</span>{" "}
                <span className="hero-role-sep" aria-hidden="true" />
                <span className="hero-role-sub">React.js &amp; Vue.js Developer</span>
              </motion.span>
            </motion.h1>

            <motion.p className="hero-description" {...(reduced ? {} : { variants: item })}>
              I build responsive, scalable web applications with Vue.js, React.js, TypeScript and
              Tailwind CSS — turning UI designs into clean, accessible and performant interfaces.
            </motion.p>

            <motion.div className="hero-ctas" {...(reduced ? {} : { variants: item })}>
              <Link to="/" hash="projects" className="btn btn-primary">
                View My Work
                <ArrowRight className="btn-icon" aria-hidden="true" />
              </Link>
              <a
                className="btn btn-secondary"
                href={contactInfo.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText className="btn-icon" aria-hidden="true" />
                View CV
              </a>
            </motion.div>

            <motion.div {...(reduced ? {} : { variants: item })}>
              <SocialLinks />
            </motion.div>

            <motion.div className="hero-meta" {...(reduced ? {} : { variants: item })}>
              <span className="hero-meta-item">
                <MapPin aria-hidden="true" />
                {contactInfo.location}
              </span>
              <span className="hero-meta-item">
                <Sparkles aria-hidden="true" />
                {"Available for\u00a0 work"}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual hidden"
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: viewportReplay,
                  transition: {
                    duration: 0.55,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                })}
          >
            <div className="hero-portrait-frame" aria-hidden="true" />
            <div className="hero-portrait">
              <SmartImage
                src="/imgs/about.svg"
                alt="Portrait of Mohamed Gamal"
                label="MG"
                loading="eager"
              />
            </div>
            <span className="hero-chip hero-chip-tl">
              <span aria-hidden="true" />
              TypeScript
            </span>
            <span className="hero-chip hero-chip-br">
              <span aria-hidden="true" />
              Vue · React · Next
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
