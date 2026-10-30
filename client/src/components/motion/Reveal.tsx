import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

export const EASE_CLASSIC: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  /** Blur inicial em px — cria entrada cinematográfica "foco entrando" */
  blur?: number;
  className?: string;
  amount?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.85,
  yOffset = 24,
  xOffset = 0,
  blur = 0,
  className,
  amount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initialFilter =
    !shouldReduceMotion && blur > 0 ? `blur(${blur}px)` : "blur(0px)";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : yOffset,
        x: shouldReduceMotion ? 0 : xOffset,
        filter: initialFilter,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_CLASSIC,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const FadeIn = Reveal;

export interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  amount?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.14,
  delayChildren = 0.1,
  className,
  amount = 0.15,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
  role?: string;
}

export function StaggerItem({
  children,
  className,
  yOffset = 22,
  duration = 0.82,
  role,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : duration,
        ease: EASE_CLASSIC,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} role={role}>
      {children}
    </motion.div>
  );
}

export interface ScaleRevealImageProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
}

export function ScaleRevealImage({
  children,
  delay = 0,
  duration = 1.2,
  initialScale = 1.06,
  className = "",
}: ScaleRevealImageProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : initialScale,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
        transition={{
          duration: shouldReduceMotion ? 0.25 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: EASE_CLASSIC,
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
