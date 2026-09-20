"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Compass, Target, Award } from "lucide-react";

import type { JourneyStage, JourneyStageKey } from "@/data/journey";

type JourneyStageProps = {
  stage: JourneyStage;
  status: "completed" | "current" | "upcoming";
  isSelected: boolean;
  onSelect: (id: JourneyStageKey) => void;
};

const iconMap = {
  join: Compass,
  learn: ArrowRight,
  participate: Check,
  build: Target,
  achieve: Check,
  connect: ArrowRight,
  "leave-mark": Award,
};

export default function JourneyStage({ stage, status, isSelected, onSelect }: JourneyStageProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[stage.id];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(stage.id)}
      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={[
        "group relative w-full rounded-[1.4rem] border p-4 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] md:p-5",
        isSelected
          ? "border-[#F59E0B] bg-[#131929] shadow-lg"
          : status === "completed"
            ? "border-white/10 bg-white/5 hover:border-white/20 hover:bg-[#131929]"
            : "border-white/10 bg-[#0E131F] hover:border-white/20 hover:bg-[#131929]",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
          status === "completed"
            ? "border-[#F59E0B] bg-[#F59E0B] text-black"
            : status === "current"
              ? "border-white bg-white text-black"
              : "border-white/15 bg-white/5 text-white/50",
        ].join(" ")}>
          <Icon size={16} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              {stage.number}
            </span>
            {status === "completed" ? (
              <span className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/15 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Complete
              </span>
            ) : status === "current" ? (
              <span className="rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                Current
              </span>
            ) : (
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Upcoming
              </span>
            )}
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white md:text-2xl">
            {stage.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {stage.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
