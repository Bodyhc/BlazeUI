"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const PixelCard = ({
  children,
  className,
  variant = "blue",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "blue" | "pink" | "default";
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [pixels, setPixels] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const gap = 5;

  useEffect(() => {
    if (!containerRef.current) return;

    const updatePixels = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const newPixels = [];

      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          if (Math.random() > 0.9) { // Random sparse pixels
             newPixels.push({ x, y });
          }
        }
      }
      setPixels(newPixels);
    };

    updatePixels();
    window.addEventListener("resize", updatePixels);
    return () => window.removeEventListener("resize", updatePixels);
  }, []);

  const variants = {
     default: "bg-neutral-900 border-neutral-800",
     blue: "bg-slate-900 border-slate-800",
     pink: "bg-pink-900/20 border-pink-800/50",
  }

  const pixelColors = {
      default: "bg-neutral-500",
      blue: "bg-blue-500",
      pink: "bg-pink-500",
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl border p-6 group",
        variants[variant],
        className
      )}
      {...props}
    >
        {/* Background Grid Pattern - subtle */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{
                 backgroundImage: `radial-gradient(${variant === 'pink' ? '#ec4899' : '#3b82f6'} 1px, transparent 1px)`,
                 backgroundSize: `${gap * 2}px ${gap * 2}px`
             }}
        />
        
        {/* Active Pixels on Hover */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {pixels.map((pixel, i) => (
                <span
                key={i}
                className={cn("absolute w-1 h-1 rounded-full animate-pulse", pixelColors[variant])}
                style={{
                    left: pixel.x,
                    top: pixel.y,
                    animationDelay: `${Math.random() * 2}s`,
                }}
                />
            ))}
        </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
