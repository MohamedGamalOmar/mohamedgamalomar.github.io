import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { contactInfo } from "@/data/social";
import { SocialLinks } from "../ui/SocialLinks";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={scrolled ? "navbar navbar-scrolled" : "navbar"}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="navbar-inner" aria-label="Main navigation">
          <Link to="/" hash="home" className="navbar-logo" aria-label="Mohamed Gamal Omar — home">
            <span className="navbar-logo-mark">MG</span>
            <span className="navbar-logo-dot" aria-hidden="true" />
          </Link>

          <ul className="navbar-links">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to="/"
                  hash={section.id}
                  className={
                    active === section.id ? "navbar-link navbar-link-active" : "navbar-link"
                  }
                >
                  {active === section.id ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="navbar-link-pill"
                      aria-hidden="true"
                    />
                  ) : null}
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a
              className="btn btn-ghost"
              href={contactInfo.cvUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FileText className="btn-icon" aria-hidden="true" />
              View CV
            </a>
          </div>

          <button
            type="button"
            className="navbar-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="navbar-toggle-bar"
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="navbar-toggle-bar"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="navbar-toggle-bar"
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {sections.map((section, index) => (
              <Link
                key={section.id}
                to="/"
                hash={section.id}
                className="mobile-menu-link"
                onClick={() => setOpen(false)}
              >
                {section.label}
                <span className="mobile-menu-link-index">0{index + 1}</span>
              </Link>
            ))}
            <div className="mobile-menu-footer">
              <a
                className="btn btn-primary"
                href={contactInfo.cvUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setOpen(false)}
              >
                <FileText className="btn-icon" aria-hidden="true" />
                View CV
              </a>
              <SocialLinks />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
