"use client"

import { motion, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedNumberProps {
  value: number
  className?: string
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 })
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return (
    <motion.span className={cn("font-mono", className)}>{display}</motion.span>
  )
}
