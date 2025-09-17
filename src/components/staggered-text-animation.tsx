
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type StaggeredTextAnimationProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const StaggeredTextAnimation = ({
  text,
  el: Wrapper = "p",
  className,
}: StaggeredTextAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={defaultAnimation}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
