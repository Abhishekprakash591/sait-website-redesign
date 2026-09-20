import { GraduationCap, MapPin } from "lucide-react";

import type { AlumniRecord } from "@/data/alumni";

type AlumniCardProps = {
  alumni: AlumniRecord;
  onConnect?: (alumni: AlumniRecord) => void;
};

export default function AlumniCard({ alumni, onConnect }: AlumniCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/60 hover:bg-[#131929] hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {alumni.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={alumni.photo}
                alt={alumni.name}
                className="h-12 w-12 rounded-2xl object-cover border border-white/15 shadow-sm"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#080C14] border border-white/10 text-sm font-bold text-[#F59E0B] shadow-sm">
                {alumni.initials}
              </div>
            )}

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                {alumni.batch}
              </p>
              <h3 className="mt-0.5 text-2xl font-bold tracking-tight text-white">
                {alumni.name}
              </h3>
            </div>
          </div>

          <span className="rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#F59E0B]">
            {alumni.industry}
          </span>
        </div>

        <div className="mt-5">
          <p className="text-base font-semibold text-white">{alumni.role}</p>
          <p className="text-xs text-white/60 font-medium">{alumni.company}</p>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] mb-1">
            Career Milestone
          </p>
          <p className="text-xs leading-relaxed text-white/75">{alumni.achievement}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-white/60">
          <MapPin size={13} className="text-[#F59E0B]" />
          <span className="text-[11px]">{alumni.location}</span>
        </div>

        {onConnect && (
          <button
            type="button"
            onClick={() => onConnect(alumni)}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-3.5 py-1.5 text-[11px] font-bold text-black hover:bg-[#D97706] transition-all shadow-sm"
          >
            <GraduationCap size={13} />
            <span>Connect</span>
          </button>
        )}
      </div>
    </article>
  );
}
