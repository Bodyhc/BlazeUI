"use client"

import { useMotionTemplate, useMotionValue, motion } from "framer-motion"
import React, { MouseEvent } from "react"
import { cn } from "@/lib/utils"

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  function handleMouseLeave() {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl border bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
          opacity: gradientOpacity,
        }}
      />
    </div>
  )
}
