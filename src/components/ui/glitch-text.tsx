"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className }: GlitchTextProps) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative inline-block">
        {text}
        <span
          className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-80 animate-glitch-1"
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-80 animate-glitch-2"
          aria-hidden="true"
        >
          {text}
        </span>
        <span
          className="absolute top-0 left-0 -z-10 w-full h-full text-green-500 opacity-80 animate-glitch-1 [animation-delay:0.5s]"
          aria-hidden="true"
        >
          {text}
        </span>
      </span>
    </div>
  );
};
