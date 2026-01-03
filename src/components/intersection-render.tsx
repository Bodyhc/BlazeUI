import * as React from "react";

interface IntersectionRenderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

/**
 * IntersectionRender only renders its children when they enter the viewport.
 * This is crucial for CPU-heavy animated components like Vortex or Sparkles.
 */
export function IntersectionRender({
  children,
  fallback = <div className="min-h-[350px] w-full bg-muted/10 animate-pulse rounded-2xl" />,
  threshold = 0.1,
  rootMargin = "100px",
  className,
}: IntersectionRenderProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we can stop observing
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}
