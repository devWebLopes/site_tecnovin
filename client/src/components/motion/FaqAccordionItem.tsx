import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { EASE_CLASSIC } from "./Reveal";

export interface FaqAccordionItemProps {
  pergunta: string;
  resposta: string;
  defaultOpen?: boolean;
  className?: string;
}

export function FaqAccordionItem({
  pergunta,
  resposta,
  defaultOpen = false,
  className = "",
}: FaqAccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`faq-item ${open ? "faq-item--open" : ""} ${className}`.trim()}
    >
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>{pergunta}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`faq-chevron ${open ? "faq-chevron--open" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-content"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { height: "auto", opacity: 1 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { height: 0, opacity: 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.38,
              ease: EASE_CLASSIC,
            }}
            className="overflow-hidden"
          >
            <div className="faq-answer-inner pb-6 pt-1 text-slate-700 leading-relaxed text-[0.93rem]">
              <p className="m-0 text-[#655b56]">{resposta}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

