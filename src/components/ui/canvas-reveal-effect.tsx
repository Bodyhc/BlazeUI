"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize ?? 3}
          opacities={opacities}
          animationSpeed={animationSpeed}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      )}
    </div>
  );
};

const DotMatrix = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  dotSize = 2,
  animationSpeed = 0.4,
}: {
  colors?: number[][];
  opacities?: number[];
  dotSize?: number;
  animationSpeed?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += animationSpeed;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const totalSize = dotSize * 2;
      const cols = Math.floor(width / totalSize);
      const rows = Math.floor(height / totalSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * totalSize;
          const y = j * totalSize;
          
          // Simple pseudo-random using sin
          const randomVal = Math.abs(Math.sin(i * 12.9898 + j * 78.233 + time * 0.05));
          const opacityIndex = Math.floor(randomVal * opacities.length);
          const opacity = opacities[opacityIndex % opacities.length];
          const colorIndex = Math.floor(randomVal * colors.length);
          const color = colors[colorIndex % colors.length];

          ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
          ctx.fillRect(x, y, dotSize, dotSize);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const resize = () => {
        const parent = canvas.parentElement;
        if(parent) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }
    };
    
    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, opacities, dotSize, animationSpeed]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
};

export const CanvasCard = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
  
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
  
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    );
  };
  
  export const Icon = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
