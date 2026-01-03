"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const NeonGradientCard = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}: {
  className?: string;
  children?: React.ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden z-0",
        className
      )}
      style={{
        borderRadius: borderRadius,
        ...props.style,
      }}
      {...props}
    >
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 animate-[spin_4s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${neonColors.firstColor} 360deg)`,
           top: "-50%",
           left: "-50%",
           width: "200%",
           height: "200%",
        }}
      />
      <div
         className="absolute top-0 left-0 w-full h-full -z-10 animate-[spin_4s_linear_infinite]"
         style={{
            background: `conic-gradient(from 180deg, transparent 0 340deg, ${neonColors.secondColor} 360deg)`,
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            animationDelay: "-2s"
         }}
      />
      <div
        className="relative bg-background z-10 w-[calc(100%-4px)] h-[calc(100%-4px)] m-[2px]"
        style={{
            borderRadius: borderRadius - borderSize,
        }}
      >
        {children}
      </div>
    </div>
  );
};
