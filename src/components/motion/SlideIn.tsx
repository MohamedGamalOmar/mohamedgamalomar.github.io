import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { slideInLeft, slideInRight, viewportReplay } from "./variants";

type SlideInProps = {
  children: ReactNode;
  from?: "left" | "right";
  className?: string;
  delay?: number;
};

export function SlideIn({
  children,
  from = "left",
  className,
  delay = 0,
}: SlideInProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={from === "left" ? slideInLeft : slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReplay}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
