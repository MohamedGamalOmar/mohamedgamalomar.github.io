import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeIn, viewportReplay } from "./variants";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function FadeIn({ children, className, delay = 0, id }: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReplay}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
