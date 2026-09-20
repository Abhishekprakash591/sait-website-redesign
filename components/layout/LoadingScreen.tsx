"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import { playClick, playPop } from "@/lib/audioFeedback";

// ─── Constants ────────────────────────────────────────────────────────────────

const SESSION_KEY = "sait_intro_screen_seen";
const LOGO_SRC = "/images/sait-logo.png";

const PALETTE = {
  navy: "#1F2A44",
  gold: "#C6A75E",
  bg: "#F7F3EB",
} as const;

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_SMOOTH: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const STEP_LABELS: Record<number, string> = {
  0: "ENTERING 01",
  1: "SIGNAL 01",
  2: "IDENTITY 02",
  3: "LEARN · 01",
  4: "BUILD · 02",
  5: "CONNECT · 03",
  6: "CONVERGE",
  7: "HOME",
};

// Kinetic word sequence config
const KINETIC_WORDS = [
  { step: 3, tag: "[ 01 // FOUNDATION ]", word: "LEARN" },
  { step: 4, tag: "[ 02 // CREATION ]", word: "BUILD" },
  { step: 5, tag: "[ 03 // NETWORK ]", word: "CONNECT" },
] as const;

// ─── Hook — Loading Sequence Logic ────────────────────────────────────────────

function useLoadingSequence(progressMV: ReturnType<typeof useMotionValue<number>>) {
  const [showLoader, setShowLoader] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [step, setStep] = useState<Step>(0);

  const pctRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);
  const timersRef = useRef<number[]>([]);
  const hasFinishedRef = useRef(false);

  const handleSkip = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    timersRef.current.forEach(clearTimeout);
    controlsRef.current?.stop();

    try { playClick(); } catch { /* audio blocked */ }

    progressMV.set(1);
    setStep(6);
    setIsExiting(true);

    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* storage blocked */ }

    window.setTimeout(() => {
      document.body.style.overflow = "";
      setShowLoader(false);
    }, 450);
  }, [progressMV]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get("intro") === "1";

    try {
      if (!forceIntro && sessionStorage.getItem(SESSION_KEY)) return;
    } catch { /* storage blocked — proceed */ }

    setShowLoader(true);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = timersRef.current;

    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    const finish = (exitDelay: number, exitDuration: number) => {
      if (hasFinishedRef.current) return;
      schedule(() => {
        hasFinishedRef.current = true;
        setIsExiting(true);
        try {
          playPop();
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch { /* storage blocked */ }
        window.setTimeout(() => {
          document.body.style.overflow = previousOverflow;
          setShowLoader(false);
        }, exitDuration);
      }, exitDelay);
    };

    if (prefersReducedMotion) {
      setStep(6);
      progressMV.set(1);
      finish(300, 200);
      return () => {
        timers.forEach(clearTimeout);
        document.body.style.overflow = previousOverflow;
      };
    }

    // Choreographed sequence — step timings (ms)
    const stepTimings: [number, Step][] = [
      [350, 1], [850, 2], [1350, 3], [1850, 4], [2350, 5], [2800, 6],
    ];
    stepTimings.forEach(([ms, s]) => schedule(() => setStep(s), ms));

    controlsRef.current = animate(progressMV, 1, {
      duration: 3.2,
      ease: [0.25, 1, 0.5, 1],
      onComplete: () => {
        setStep(7);
        finish(100, 500);
      },
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      timers.forEach(clearTimeout);
      controlsRef.current?.stop();
      document.body.style.overflow = previousOverflow;
    };
  }, [handleSkip, progressMV]);

  // Sync progress display
  useEffect(() => {
    const unsubscribe = progressMV.on("change", (v) => {
      if (pctRef.current) {
        pctRef.current.textContent = `${Math.round(v * 100)}%`;
      }
      if (statusRef.current) {
        const label = STEP_LABELS[step] ?? "ENTERING 01";
        if (statusRef.current.textContent !== label) {
          statusRef.current.textContent = label;
        }
      }
    });
    return unsubscribe;
  }, [progressMV, step]);

  return { showLoader, isExiting, step, handleSkip, pctRef, statusRef };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const progressMV = useMotionValue(0);
  const { showLoader, isExiting, step, handleSkip, pctRef, statusRef } =
    useLoadingSequence(progressMV);

  useEffect(() => setMounted(true), []);

  if (!mounted || !showLoader) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="sait-identity-ritual"
        role="dialog"
        aria-modal="true"
        aria-label="SAIT Identity Ritual"
        onClick={handleSkip}
        className="fixed inset-0 z-[9999] flex cursor-pointer select-none flex-col justify-between overflow-hidden"
        style={{ backgroundColor: PALETTE.bg, color: PALETTE.navy }}
        initial={{ opacity: 1 }}
        animate={
          isExiting
            ? { opacity: 0, transition: { duration: 0.5, ease: EASE_OUT } }
            : { opacity: 1 }
        }
        exit={{ opacity: 0, transition: { duration: 0.45, ease: EASE_OUT } }}
      >
        {/* Architectural grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(31,42,68,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,42,68,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Ambient radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,167,94,0.12),transparent_65%)]"
        />

        {/* Perimeter frame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 border border-[#1F2A44]/15 sm:inset-6 md:inset-8"
        >
          {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map(
            (pos) => (
              <span
                key={pos}
                className={`absolute ${pos} font-mono text-xs font-light`}
                style={{ color: "rgba(31,42,68,0.4)" }}
              >
                +
              </span>
            ),
          )}
        </div>

        {/* Top metadata bar */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-8 md:px-12 md:pt-10">
          <div
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]"
            style={{ color: "rgba(31,42,68,0.7)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C6A75E]" />
            <span>SAIT // CUSAT</span>
            <span className="hidden md:inline" style={{ color: "rgba(31,42,68,0.3)" }}>/</span>
            <span className="hidden md:inline" style={{ color: "rgba(31,42,68,0.6)" }}>
              DIV. OF IT
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="hidden font-mono text-[10px] uppercase tracking-[0.2em] sm:inline"
              style={{ color: "rgba(31,42,68,0.5)" }}
            >
              09°58′N 76°19′E
            </span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); handleSkip(); }}
              className="rounded-full border border-[#1F2A44]/20 bg-white/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] transition-all hover:border-[#1F2A44] hover:bg-white"
              style={{ color: "#1F2A44" }}
            >
              <span className="hidden sm:inline">ESC TO </span>SKIP
            </button>
          </div>
        </div>

        {/* Center stage */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-4 text-center">

          {/* Logo with drawing ring */}
          <motion.div
            animate={
              isExiting
                ? { scale: 0.48, y: -190, x: -120, opacity: 0.95, transition: { duration: 0.5, ease: EASE_SMOOTH } }
                : step >= 1
                ? { scale: 1, y: 0, opacity: 1 }
                : { scale: 0.92, y: 12, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative flex items-center justify-center p-5"
          >
            {/* Ring SVG fills the padded parent exactly */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <motion.circle
                cx="50" cy="50" r="46"
                stroke={PALETTE.gold}
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, rotate: -90 }}
                animate={{ pathLength: step >= 1 ? 1 : 0, rotate: step >= 1 ? 270 : -90 }}
                transition={{ duration: 0.9, ease: EASE_SMOOTH }}
                style={{ originX: "50px", originY: "50px" }}
              />
            </svg>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C6A75E]/40 bg-[#0E131F] p-2.5 shadow-[0_10px_30px_rgba(31,42,68,0.25)] sm:h-24 sm:w-24 md:h-28 md:w-28">
              <Image
                src={LOGO_SRC}
                alt="SAIT Crest"
                width={1632}
                height={1612}
                priority
                draggable={false}
                className="h-full w-full object-contain brightness-110 drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Brand wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={step >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
            className="mt-5 flex flex-col items-center sm:mt-6"
          >
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl" style={{ color: "#1F2A44" }}>
              SAIT<span style={{ color: "#C6A75E" }}>.</span>
            </h2>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs md:tracking-[0.34em]" style={{ color: "#1F2A44" }}>
              Students Association of Information Technology
            </p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] sm:text-[10px]" style={{ color: "#4B5563" }}>
              CUSAT · School of Engineering
            </p>
          </motion.div>

          {/* Kinetic word sequences */}
          <div className="relative mt-7 flex h-28 w-full max-w-2xl items-center justify-center sm:mt-9 sm:h-32 md:mt-11 md:h-36">

            {KINETIC_WORDS.map(({ step: triggerStep, tag, word }) => (
              <AnimatePresence key={word}>
                {step === triggerStep && (
                  <motion.div
                    key={word}
                    initial={{ opacity: 0, y: 24, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="absolute inset-0 flex flex-col items-center justify-center"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.32em] sm:text-xs" style={{ color: "#C6A75E" }}>
                      {tag}
                    </span>
                    <span className="text-4xl font-black tracking-[-0.04em] sm:text-5xl md:text-6xl" style={{ color: "#1F2A44" }}>
                      {word}<span style={{ color: "#C6A75E" }}>.</span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Convergence lockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 14 }}
              animate={step >= 6 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 14 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className={`absolute inset-0 flex flex-col items-center justify-center ${step >= 6 ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <div
                className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ color: "#1F2A44" }}
              >
                <span>LEARN. </span>
                <span>BUILD. </span>
                <span>CONNECT</span>
                <span style={{ color: "#C6A75E" }}>.</span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={step >= 6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
                className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] sm:text-[11px] md:tracking-[0.3em]"
                style={{ color: "#4B5563" }}
              >
                A community for ideas, technology and growth.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Bottom progress bar */}
        <div className="relative z-10 w-full px-6 pb-6 sm:px-10 sm:pb-8 md:px-12 md:pb-10">
          <div className="mx-auto flex max-w-4xl flex-col gap-3">
            <div
              className="flex items-center justify-between font-mono text-[10px] font-medium uppercase tracking-[0.22em] sm:text-xs"
              style={{ color: "#1F2A44" }}
            >
              <span className="font-bold">SAIT · CUSAT</span>
              <div className="flex items-center gap-2.5">
                <span ref={statusRef} className="font-bold">ENTERING 01</span>
                <span style={{ color: "rgba(31,42,68,0.3)" }}>|</span>
                <span ref={pctRef} className="font-bold" style={{ color: "#C6A75E" }}>0%</span>
              </div>
            </div>
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-[#1F2A44]/15">
              <motion.div className="h-full origin-left bg-[#C6A75E]" style={{ scaleX: progressMV }} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
