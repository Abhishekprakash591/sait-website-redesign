"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Link2,
  UploadCloud,
  Zap,
} from "lucide-react";
import type { ActivityType } from "@/data/activities";

type ActivityFormProps = {
  formState: {
    name: string;
    type: ActivityType;
    date: string;
    role: string;
    description: string;
    proof: string;
  };
  onChange: (field: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  successMessage: string;
};

const activityTypes: { type: ActivityType; xp: number; desc: string }[] = [
  { type: "Workshop", xp: 50, desc: "Hands-on tech learning" },
  { type: "Competition", xp: 100, desc: "Hackathons & coding challenges" },
  { type: "Project", xp: 75, desc: "Software or research build" },
  { type: "Seminar", xp: 40, desc: "Technical or academic lecture" },
  { type: "Leadership", xp: 90, desc: "SAIT organizing & committee work" },
  { type: "Volunteering", xp: 60, desc: "Department community assistance" },
  { type: "Cultural", xp: 50, desc: "Arts, festival & literary events" },
  { type: "Other", xp: 40, desc: "Other verified achievements" },
];

export default function ActivityForm({
  formState,
  onChange,
  onSubmit,
  successMessage,
}: ActivityFormProps) {
  const [proofType, setProofType] = useState<"link" | "upload">("link");
  const [fileName, setFileName] = useState<string>("");

  const currentTypeMeta = activityTypes.find((t) => t.type === formState.type) || activityTypes[0];

  const handleFillSample = () => {
    onChange("name", "Smart India Hackathon 2026 Grand Finale");
    onChange("type", "Competition");
    onChange("date", "2026-09-12");
    onChange("role", "Lead AI Developer");
    onChange("description", "Built a multi-modal emergency response coordination pipeline using PyTorch, Next.js, and GeoJSON.");
    onChange("proof", "https://github.com/sait-cusat/sih-disaster-response");
  };

  return (
    <section className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-sm backdrop-blur-md">
      {/* Header & Quick Fill */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-[#F59E0B]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
              Student View · Activity Desk
            </span>
          </div>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Record Verified Participation
          </h3>
        </div>

        <button
          type="button"
          onClick={handleFillSample}
          className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white hover:border-[#F59E0B] hover:bg-[#F59E0B]/10 transition-colors"
        >
          <Zap size={13} className="text-[#F59E0B]" />
          <span>Auto-fill Sample</span>
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Activity Name */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
              Activity Title / Event Name <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="e.g. Next.js & AI Workshop, SIH Hackathon, Web Team Lead"
              className="w-full rounded-2xl border border-white/15 bg-[#0E131F] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20"
              required
            />
          </div>

          {/* Activity Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
              Category <span className="text-[#F59E0B]">*</span>
            </label>
            <select
              value={formState.type}
              onChange={(e) => onChange("type", e.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-[#0E131F] px-4 py-3 text-sm text-white focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20"
            >
              {activityTypes.map(({ type, xp }) => (
                <option key={type} value={type} className="bg-[#0E131F] text-white">
                  {type} (+{xp} XP)
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
              Date Conducted <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="date"
              value={formState.date}
              onChange={(e) => onChange("date", e.target.value)}
              className="w-full rounded-2xl border border-white/15 bg-[#0E131F] px-4 py-3 text-sm text-white focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20"
              required
            />
          </div>

          {/* Student Role */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
              Your Role / Contribution <span className="text-[#F59E0B]">*</span>
            </label>
            <input
              type="text"
              value={formState.role}
              onChange={(e) => onChange("role", e.target.value)}
              placeholder="e.g. Participant, 1st Place Winner, Speaker, Organizer"
              className="w-full rounded-2xl border border-white/15 bg-[#0E131F] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1.5">
            Activity Details & Key Takeaways <span className="text-[#F59E0B]">*</span>
          </label>
          <textarea
            rows={3}
            value={formState.description}
            onChange={(e) => onChange("description", e.target.value)}
            placeholder="Briefly describe what you built, learned, or achieved..."
            className="w-full rounded-2xl border border-white/15 bg-[#0E131F] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/20"
            required
          />
        </div>

        {/* Proof of Participation Mode */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-white/70">
              Proof of Participation / Certificate
            </label>
            <div className="flex rounded-full border border-white/10 p-0.5 bg-[#080C14] text-[10px]">
              <button
                type="button"
                onClick={() => setProofType("link")}
                className={`rounded-full px-2.5 py-1 font-semibold transition-colors ${
                  proofType === "link" ? "bg-[#F59E0B] text-black" : "text-white/60"
                }`}
              >
                Web URL
              </button>
              <button
                type="button"
                onClick={() => setProofType("upload")}
                className={`rounded-full px-2.5 py-1 font-semibold transition-colors ${
                  proofType === "upload" ? "bg-[#F59E0B] text-black" : "text-white/60"
                }`}
              >
                File Upload
              </button>
            </div>
          </div>

          {proofType === "link" ? (
            <div className="relative">
              <Link2 className="absolute left-4 top-3.5 h-4 w-4 text-white/40" />
              <input
                type="url"
                value={formState.proof}
                onChange={(e) => onChange("proof", e.target.value)}
                placeholder="https://github.com/my-project or https://luma.com/ticket..."
                className="w-full rounded-2xl border border-white/15 bg-[#0E131F] pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none"
              />
            </div>
          ) : (
            <div
              onClick={() => {
                setFileName("certificate-proof-2026.pdf");
                onChange("proof", "https://sait.cusat.ac.in/uploads/certificate-proof-2026.pdf");
              }}
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-[#0E131F] p-5 text-center transition-colors hover:border-[#F59E0B] hover:bg-white/5"
            >
              <UploadCloud className="h-7 w-7 text-[#F59E0B]" />
              <p className="mt-2 text-xs font-semibold text-white">
                {fileName ? `Attached: ${fileName}` : "Click to attach PDF / Image Certificate"}
              </p>
              <p className="text-[10px] text-white/50">PDF, PNG, JPG up to 10MB</p>
            </div>
          )}
        </div>

        {/* Live Preview & Submit Row */}
        <div className="rounded-2xl border border-[#F59E0B]/30 bg-[#F59E0B]/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-[#F59E0B]" />
              <span className="text-xs font-bold text-white">Live Preview & Reward</span>
            </div>
            <span className="rounded-full bg-[#F59E0B] px-2.5 py-0.5 text-[10px] font-bold text-black">
              +{currentTypeMeta.xp} XP Earned
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-white/70">
            <span className="font-semibold truncate max-w-[280px] text-white">
              {formState.name || "Untitled Activity"}
            </span>
            <span className="font-mono text-[11px] shrink-0 text-white/60">{formState.role || "Role"}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 text-sm font-bold text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706]"
          >
            <CheckCircle2 size={16} />
            <span>Record & Submit Activity</span>
          </button>

          {successMessage && (
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 text-xs font-bold text-emerald-400">
              <CheckCircle2 size={15} />
              <span>{successMessage}</span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
