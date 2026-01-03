"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

export const InteractiveGrid = ({
  className,
  height = 40,
  squares = [20, 20], // Rows, Columns
}: {
  className?: string;
  height?: number;
  squares?: [number, number];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [rows, cols] = squares;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden border border-border bg-background",
        className
      )}
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      <div 
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none"
        style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.15), transparent 40%)`
        }} 
      >
      </div>
      
      <div className="relative z-10 grid" style={{ 
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}>
        {Array.from({ length: rows * cols }).map((_, i) => (
          <div
            key={i}
            className="border-r border-b border-border/10"
            style={{ width: "100%", height: `${height}px` }}
          />
        ))}
      </div>
        
      {/* Highlight effect that follows mouse */}
       <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.05), transparent 40%)`
        }} 
      />
    </div>
  );
};
