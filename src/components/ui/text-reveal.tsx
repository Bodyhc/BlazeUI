"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextReveal = ({
  text,
  className,
  delay = 0,
  duration = 0.5,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
        filter: { type: "tween", duration: duration },
      },
      filter: "blur(0px)",
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(2px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("text-4xl font-bold text-black dark:text-white", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
