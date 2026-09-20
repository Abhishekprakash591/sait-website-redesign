import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type MemberCardProps = {
  name: string;
  role: string;
  year?: string;
  photo?: string;
  initials?: string;
  bio?: string;
  socialUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  accent?: ReactNode;
};

export default function MemberCard({
  name,
  role,
  year,
  photo,
  initials,
  bio,
  socialUrl,
  githubUrl,
  linkedinUrl,
  accent,
}: MemberCardProps) {
  const displayInitials =
    initials ||
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#131929] hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        {/* Avatar */}
        <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#1A2234] text-base font-bold text-white/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt={name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <span>{displayInitials}</span>
          )}
          <span className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border-2 border-[#080C14] bg-[#F59E0B]" />
        </div>

        {/* Profile link */}
        {githubUrl || linkedinUrl || socialUrl ? (
          <a
            href={githubUrl || linkedinUrl || socialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${name} profile`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 hover:bg-[#F59E0B] hover:text-black hover:border-[#F59E0B] transition-colors"
          >
            <ArrowUpRight size={14} />
          </a>
        ) : null}
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
        <p className="mt-1 text-xs font-semibold text-[#F59E0B]">{role}</p>
        {year ? (
          <p className="mt-1 text-[10px] uppercase font-mono tracking-[0.16em] text-white/40">
            {year}
          </p>
        ) : null}
        {bio ? (
          <p className="mt-3 border-t border-white/8 pt-2.5 text-xs leading-relaxed text-white/55">
            {bio}
          </p>
        ) : null}
      </div>

      {accent ? <div className="mt-4">{accent}</div> : null}
    </article>
  );
}
