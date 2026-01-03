"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

const noise3D = createNoise3D();
const TAU = Math.PI * 2;

const rand = (n: number) => n * Math.random();
const randRange = (n: number) => n - rand(2 * n);
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};
const lerp = (n1: number, n2: number, speed: number) =>
  (1 - speed) * n1 + speed * n2;

const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
  return x > canvas.width || x < 0 || y > canvas.height || y < 0;
};

const renderGlow = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) => {
  ctx.save();
  ctx.filter = "blur(8px) brightness(200%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(4px) brightness(200%)";
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
};

const renderToScreen = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) => {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
};

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "#000000",
}: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeYn = 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeedn = baseSpeed;
  const rangeSpeedn = rangeSpeed;
  const baseRadiusn = baseRadius;
  const rangeRadiusn = rangeRadius;
  const baseHuen = baseHue;
  const rangeHuen = 20;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;

  const backgroundColorRef = useRef(backgroundColor);
  const tickRef = useRef(0);
  const particlePropsRef = useRef<Float32Array>(new Float32Array(particlePropsLength));
  const centerRef = useRef<[number, number]>([0, 0]);
  const animationFrameRef = useRef<number>();

  const initParticle = useCallback((i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = centerRef.current[1] + randRange(rangeYn);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeedn + rand(rangeSpeedn);
    const radius = baseRadiusn + rand(rangeRadiusn);
    const hue = baseHuen + rand(rangeHuen);

    particlePropsRef.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  }, [rangeYn, baseTTL, rangeTTL, baseSpeedn, rangeSpeedn, baseRadiusn, rangeRadiusn, baseHuen, rangeHuen]);

  const initParticles = useCallback(() => {
    tickRef.current = 0;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [initParticle, particlePropsLength]);

  const drawParticle = useCallback((
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, []);

  const updateParticle = useCallback((i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;

    const x = particlePropsRef.current[i];
    const y = particlePropsRef.current[i2];
    const n = noise3D(x * xOff, y * yOff, tickRef.current * zOff) * noiseSteps * TAU;
    const vx = lerp(particlePropsRef.current[i3], Math.cos(n), 0.5);
    const vy = lerp(particlePropsRef.current[i4], Math.sin(n), 0.5);
    let life = particlePropsRef.current[i5];
    const ttl = particlePropsRef.current[i6];
    const speed = particlePropsRef.current[i7];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = particlePropsRef.current[i8];
    const hue = particlePropsRef.current[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particlePropsRef.current[i] = x2;
    particlePropsRef.current[i2] = y2;
    particlePropsRef.current[i3] = vx;
    particlePropsRef.current[i4] = vy;
    particlePropsRef.current[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  }, [drawParticle, initParticle]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  }, [updateParticle, particlePropsLength]);

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tickRef.current++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = backgroundColorRef.current;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    animationFrameRef.current = window.requestAnimationFrame(() => draw(canvas, ctx));
  }, [drawParticles]);

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    centerRef.current[0] = 0.5 * canvas.width;
    centerRef.current[1] = 0.5 * canvas.height;
  }, []);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  }, [draw, initParticles, resize]);

  useEffect(() => {
    backgroundColorRef.current = backgroundColor;
  }, [backgroundColor]);

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resize(canvas);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [setup, resize]);

  return (
    <div className={cn("relative h-full w-full", containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
