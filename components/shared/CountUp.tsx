"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: string;
  duration?: number;
};

/**
 * Animates a numeric string (e.g. "450+", "96%") from zero to its target
 * value when it first enters the viewport. Respects `prefers-reduced-motion`.
 */
export default function CountUp({ value, duration = 1200 }: CountUpProps) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const numericTarget = Number(match[1]);
    const suffix = match[2] || "";
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry || hasAnimated) return;

        if (entry.isIntersecting) {
          observer.disconnect();

          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setDisplayValue(`${Math.round(numericTarget * eased)}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
              setHasAnimated(true);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, hasAnimated, reducedMotion, value]);

  return (
    <p
      ref={ref}
      className="text-5xl font-bold tracking-[-0.04em] text-[#1F2A44] md:text-6xl"
    >
      {displayValue}
    </p>
  );
}
