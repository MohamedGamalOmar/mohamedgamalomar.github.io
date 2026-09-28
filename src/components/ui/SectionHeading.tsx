import type { ReactNode } from "react";
import { FadeIn } from "../motion/FadeIn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={
        centered ? "section-heading section-heading-centered" : "section-heading"
      }
    >
      <span className="section-heading-eyebrow">{eyebrow}</span>
      <h2 className="section-heading-title">{title}</h2>
      {subtitle ? <p className="section-heading-sub">{subtitle}</p> : null}
    </FadeIn>
  );
}
