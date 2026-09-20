"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorSpotlight() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 350, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 350, damping: 28 });

  useEffect(() => {
    // Only enable on pointer devices (not pure touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-30 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 transition-opacity duration-500 blur-[90px]"
      style={{
        left: mouseX,
        top: mouseY,
        background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 70%)",
      }}
    />
  );
}
