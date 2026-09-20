"use client";

import { Crown, Trophy, Award } from "lucide-react";
import { demoLeaderboard } from "@/data/activities";

export default function Leaderboard() {
  const topThree = demoLeaderboard.slice(0, 3);
  const remaining = demoLeaderboard.slice(3);

  return (
    <section className="rounded-[2.2rem] border border-white/10 bg-[#0E131F] p-6 text-white md:p-8 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F59E0B]/20 text-[#F59E0B]">
            <Trophy size={18} />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Student Leaderboard
            </h3>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">
              Division of IT · 2026-27
            </p>
          </div>
        </div>

        <span className="rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
          Top Contributors
        </span>
      </div>

      {/* Podium Display (Top 3) */}
      <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-3 items-end pt-4">
        {/* 2nd Place (Silver) */}
        {topThree[1] && (
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-sm font-bold text-white shadow-md">
                {topThree[1].name.split(" ")[0]?.charAt(0)}
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold text-slate-900">
                2
              </span>
            </div>
            <p className="text-xs font-bold text-white truncate max-w-[85px]">
              {topThree[1].name.split(" ")[0]}
            </p>
            <span className="text-[10px] text-white/60 font-mono">{topThree[1].points} pts</span>
            <div className="mt-2 h-14 w-full rounded-t-xl bg-white/10 border-t border-white/20 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-slate-300">🥈 2nd</span>
            </div>
          </div>
        )}

        {/* 1st Place (Gold) - Elevated Center */}
        {topThree[0] && (
          <div className="flex flex-col items-center text-center">
            <Crown size={20} className="text-[#F59E0B] mb-1 animate-bounce" />
            <div className="relative mb-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#B45309] text-base font-bold text-black shadow-lg border border-[#F59E0B]/50">
                {topThree[0].name.split(" ")[0]?.charAt(0)}
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] font-bold text-black">
                1
              </span>
            </div>
            <p className="text-xs font-bold text-white truncate max-w-[95px]">
              {topThree[0].name.split(" ")[0]}
            </p>
            <span className="text-[10px] text-[#F59E0B] font-mono font-bold">{topThree[0].points} pts</span>
            <div className="mt-2 h-20 w-full rounded-t-xl bg-[#F59E0B]/20 border-t-2 border-[#F59E0B] flex items-center justify-center shadow-lg">
              <span className="text-xs font-mono font-bold text-[#F59E0B]">🥇 1st</span>
            </div>
          </div>
        )}

        {/* 3rd Place (Bronze) */}
        {topThree[2] && (
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-sm font-bold text-white shadow-md">
                {topThree[2].name.split(" ")[0]?.charAt(0)}
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                3
              </span>
            </div>
            <p className="text-xs font-bold text-white truncate max-w-[85px]">
              {topThree[2].name.split(" ")[0]}
            </p>
            <span className="text-[10px] text-white/60 font-mono">{topThree[2].points} pts</span>
            <div className="mt-2 h-10 w-full rounded-t-xl bg-white/5 border-t border-white/10 flex items-center justify-center">
              <span className="text-xs font-mono font-bold text-amber-400">🥉 3rd</span>
            </div>
          </div>
        )}
      </div>

      {/* Ranks 4+ List */}
      <div className="space-y-2">
        {remaining.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[11px] text-white/60">
                {index + 4}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-white truncate">{item.name}</p>
                <span className="text-[10px] text-white/50 font-mono">{item.badge}</span>
              </div>
            </div>
            <span className="font-bold text-[#F59E0B] font-mono shrink-0 ml-2">
              {item.points} pts
            </span>
          </div>
        ))}
      </div>

      {/* Footer Notice */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
        <span className="flex items-center gap-1.5">
          <Award size={11} className="text-[#F59E0B]" />
          <span>Scores reflect verified activities & workshops</span>
        </span>
        <span className="font-mono text-[#F59E0B]">SOE CUSAT</span>
      </div>
    </section>
  );
}
