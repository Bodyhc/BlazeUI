"use client";
import React, { useState, useRef, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Lens = ({
  children,
  zoomFactor = 1.5,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
  className,
}: {
  children: ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  position?: { x: number; y: number };
  hovering?: boolean;
  setHovering?: (hovering: boolean) => void;
  className?: string; // Add className prop
}) => {
  const [localHovering, setLocalHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const isHovering = hovering !== undefined ? hovering : localHovering;
  const setIsHovering = setHovering || setLocalHovering;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-lg z-20 group/lens", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isStatic ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.58 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              maskImage: `radial-gradient(circle ${lensSize / 2}px at ${
                position.x
              }px ${position.y}px, black 100%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${
                position.x
              }px ${position.y}px, black 100%, transparent 100%)`,
              transformOrigin: `${position.x}px ${position.y}px`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: `scale(${zoomFactor})`,
                transformOrigin: `${position.x}px ${position.y}px`,
              }}
            >
              {children}
            </div>
          </motion.div>
      ) : (
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.58 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                maskImage: `radial-gradient(circle ${lensSize / 2}px at ${
                  mousePosition.x
                }px ${mousePosition.y}px, black 100%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle ${lensSize / 2}px at ${
                  mousePosition.x
                }px ${mousePosition.y}px, black 100%, transparent 100%)`,
                transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                zIndex: 50,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `scale(${zoomFactor})`,
                  transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
                }}
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
