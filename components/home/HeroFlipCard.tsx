"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, RotateCw } from "lucide-react";
import { playClick } from "@/lib/audioFeedback";

export default function HeroFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    try {
      playClick();
    } catch {}
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto select-none">
      {/* "Click to flip" Curved Indicator */}
      <button
        type="button"
        onClick={handleFlip}
        aria-label="Toggle card side"
        className="group mb-3 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 hover:text-[#F59E0B] transition-colors"
      >
        <span className="text-[11px] text-slate-500 group-hover:text-[#F59E0B]/80 transition-colors">⟲</span>
        <span>Click to flip</span>
        <span className="text-[11px] text-slate-500 group-hover:text-[#F59E0B]/80 transition-colors">⟳</span>
      </button>

      {/* 3D Flip Card Container */}
      <div
        className="relative w-full h-[490px] sm:h-[510px] cursor-pointer"
        style={{ perspective: "1400px" }}
        onClick={handleFlip}
      >
        <motion.div
          className="relative w-full h-full rounded-[2.5rem] transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* ============================================================= */}
          {/* FRONT FACE                                                    */}
          {/* ============================================================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-[#F59E0B]/30 bg-gradient-to-b from-[#111726] via-[#0D121F] to-[#070A10] p-8 sm:p-10 flex flex-col items-center justify-between text-center shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.08)] backdrop-blur-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Subtle Golden Hairline Rim Highlight */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.14),transparent_65%)]" />

            {/* Corner Crosshairs */}
            <span className="absolute top-4 left-5 text-[10px] font-mono text-white/20">+</span>
            <span className="absolute top-4 right-5 text-[10px] font-mono text-white/20">+</span>
            <span className="absolute bottom-4 left-5 text-[10px] font-mono text-white/20">+</span>
            <span className="absolute bottom-4 right-5 text-[10px] font-mono text-white/20">+</span>

            {/* Top Micro Label */}
            <div className="relative z-10 text-[9px] font-mono uppercase tracking-[0.24em] text-slate-400">
              DIVISION OF IT · SOE CUSAT
            </div>

            {/* Center: The SAIT Emblem */}
            <div className="relative z-10 flex flex-col items-center my-auto">
              <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-[#080C14] border-2 border-[#F59E0B]/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] p-3 mb-6 transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/sait-logo.png"
                  alt="SAIT Official Crest"
                  width={1632}
                  height={1612}
                  priority
                  draggable={false}
                  className="h-full w-full object-contain brightness-110 drop-shadow-md"
                />
              </div>

              {/* SAIT Typography */}
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[0.22em] text-white">
                SAIT
              </h2>

              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.26em] text-slate-200 leading-relaxed max-w-[280px]">
                Students Association
                <br />
                of Information Technology
              </p>

              <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.24em] text-slate-400">
                CUSAT
              </p>
            </div>

            {/* Bottom Tagline & Flip Prompt */}
            <div className="relative z-10 w-full pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase">
              <span className="text-[#F59E0B] font-semibold">Learn. Build. Connect.</span>
              <span className="inline-flex items-center gap-1 text-slate-400 group-hover:text-white">
                Flip <RotateCw size={11} className="text-[#F59E0B]" />
              </span>
            </div>
          </div>

          {/* ============================================================= */}
          {/* BACK FACE                                                     */}
          {/* ============================================================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-[#F59E0B]/30 bg-gradient-to-b from-[#111726] via-[#0D121F] to-[#070A10] p-7 sm:p-9 flex flex-col justify-between text-left shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.08)] backdrop-blur-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Subtle Golden Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.12),transparent_70%)]" />

            {/* Top Bar: ABOUT SAIT & 01 / 01 */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#F59E0B]">
                About SAIT
              </span>
              <span className="font-mono text-[11px] tracking-widest text-slate-400">
                01 / 01
              </span>
            </div>

            {/* Story Text from Picture 3 */}
            <div className="relative z-10 my-auto py-2">
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal">
                Founded in 1995, the Department of Information Technology at Cochin University of Science and Technology is a dynamic hub of innovation. Our dedicated faculty explores user-centric interfaces, cybersecurity, and artificial intelligence, pushing the boundaries of IT. Committed to excellence, we provide a holistic education in cutting-edge technologies.
              </p>
              <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-300 font-normal">
                The Student Association of IT (SAIT) enhances student experience through workshops, magazines, and tech projects, fostering collaboration and creating a vibrant learning environment in the ever-evolving field of Information Technology.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
              <Link
                href="/about"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition-all"
              >
                <span>Explore</span>
                <ArrowRight size={13} />
              </Link>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
                className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 hover:text-[#F59E0B] transition-colors"
              >
                <RotateCw size={11} />
                <span>Front</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pill Indicators */}
      <div className="mt-3 flex items-center gap-6 text-[10px] font-mono tracking-widest uppercase text-slate-500">
        <span className={!isFlipped ? "text-[#F59E0B] font-bold" : ""}>FRONT</span>
        <span className="text-white/20">/</span>
        <span className={isFlipped ? "text-[#F59E0B] font-bold" : ""}>BACK</span>
      </div>
    </div>
  );
}
