"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  speed?: number;
}) => {
  const {
    className,
    minSize = 1,
    maxSize = 3,
    particleDensity = 100,
    particleColor = "#FFFFFF",
    speed = 4,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = particleDensity;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
      });
    }
    setParticles(newParticles);
  }, [maxSize, minSize, particleDensity, speed]);

  const handleResize = useCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    }
  }, [initParticles]);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext("2d"));
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (context && canvasRef.current) {
      const { width, height } = canvasRef.current;
      initParticles(width, height);
    }
  }, [context, initParticles]);

  const animate = useCallback(() => {
    if (context && canvasRef.current) {
      const canvas = canvasRef.current;
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        context.fillStyle = particleColor;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [context, particles, particleColor]);

  useEffect(() => {
    if (context) {
      animate();
      return () => {
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      };
    }
  }, [context, animate]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}
