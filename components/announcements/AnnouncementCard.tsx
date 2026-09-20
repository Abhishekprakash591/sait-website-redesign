import { useState } from "react";
import { ArrowRight, BellRing, CalendarClock } from "lucide-react";

import type { AnnouncementItem } from "@/data/announcements";

type AnnouncementCardProps = {
  item: AnnouncementItem;
  onToggleRead: (id: string) => void;
};

export default function AnnouncementCard({ item, onToggleRead }: AnnouncementCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#131929]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            {item.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {item.title}
          </h3>
        </div>

        {!item.read && (
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]" aria-label="Unread announcement" />
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">{item.date}</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5">{item.priority}</span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-white/70">{item.description}</p>

      {item.deadline ? (
        <div className="mt-5 flex items-center gap-3 rounded-[1.3rem] border border-[#F59E0B]/20 bg-[#F59E0B]/10 p-3">
          <CalendarClock size={16} className="text-[#F59E0B]" />
          <p className="text-sm text-white/80">
            Deadline: <span className="font-semibold text-white">{item.deadline}</span>
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
        >
          {expanded ? "Hide details" : "Read more"}
          <ArrowRight size={15} className={expanded ? "rotate-90" : ""} />
        </button>

        <button
          type="button"
          onClick={() => onToggleRead(item.id)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/70 transition-all duration-200 hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <BellRing size={12} />
          {item.read ? "Mark unread" : "Mark read"}
        </button>
      </div>

      {expanded ? (
        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-[#080C14] p-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
            Announcement detail
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Department update, registration window, deadline, or opportunity notice.
          </p>
        </div>
      ) : null}
    </article>
  );
}
