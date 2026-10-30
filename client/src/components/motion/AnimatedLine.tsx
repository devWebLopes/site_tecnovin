import { motion, useReducedMotion } from "framer-motion";
import { EASE_CLASSIC } from "./Reveal";

export interface AnimatedLineProps {
  direction?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
  className?: string;
  light?: boolean;
}

export function AnimatedLine({
  direction = "horizontal",
  delay = 0.1,
  duration = 1.1,
  className = "",
  light = false,
}: AnimatedLineProps) {
  const shouldReduceMotion = useReducedMotion();
  const isHorizontal = direction === "horizontal";

  const baseColor = light
    ? "rgba(234, 230, 223, 0.22)"
    : "rgba(28, 25, 23, 0.13)";

  return (
    <motion.span
      aria-hidden="true"
      initial={
        shouldReduceMotion
          ? { opacity: 1, scaleX: 1, scaleY: 1 }
          : isHorizontal
            ? { opacity: 0.4, scaleX: 0 }
            : { opacity: 0.4, scaleY: 0 }
      }
      whileInView={
        isHorizontal ? { opacity: 1, scaleX: 1 } : { opacity: 1, scaleY: 1 }
      }
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -30px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_CLASSIC,
      }}
      style={{
        display: "block",
        background: baseColor,
        width: isHorizontal ? "100%" : "1px",
        height: isHorizontal ? "1px" : "100%",
        transformOrigin: isHorizontal ? "left center" : "center top",
      }}
      className={className}
    />
  );
}
