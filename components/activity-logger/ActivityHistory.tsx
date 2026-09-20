import { ArrowRight, CheckCircle2, Clock3, ShieldAlert } from "lucide-react";

import type { ActivityItem } from "@/data/activities";

type ActivityHistoryProps = {
  activities: ActivityItem[];
  selectedType: string;
  selectedStatus: string;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onClearFilters: () => void;
};

const statusStyles = {
  Verified: {
    badge: "border-[#1f7a5b] bg-[#eaf7f1] text-[#1f7a5b]",
    icon: CheckCircle2,
  },
  Pending: {
    badge: "border-[#c27116] bg-[#fff3e7] text-[#9b5d0e]",
    icon: Clock3,
  },
  "Needs Review": {
    badge: "border-[#a84b3d] bg-[#fdeae8] text-[#a84b3d]",
    icon: ShieldAlert,
  },
} as const;

export default function ActivityHistory({
  activities,
  selectedType,
  selectedStatus,
  onTypeChange,
  onStatusChange,
  onClearFilters,
}: ActivityHistoryProps) {
  return (
    <section className="rounded-[2rem] border border-[#1F2A44]/10 bg-white/30 p-5 md:p-6">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#1F2A44]/45">
            Activity history
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F2A44]">
            Your recent contributions
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="rounded-full border border-[#1F2A44]/10 bg-[#F7F3EB] px-3 py-2 text-sm text-[#1F2A44]/70">
            <span className="sr-only">Filter by type</span>
            <select
              value={selectedType}
              onChange={(event) => onTypeChange(event.target.value)}
              className="w-full bg-transparent text-sm text-[#1F2A44] focus:outline-none"
              aria-label="Filter activity history by type"
            >
              <option value="All">All types</option>
              <option value="Workshop">Workshop</option>
              <option value="Seminar">Seminar</option>
              <option value="Project">Project</option>
              <option value="Competition">Competition</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Leadership">Leadership</option>
              <option value="Cultural">Cultural</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="rounded-full border border-[#1F2A44]/10 bg-[#F7F3EB] px-3 py-2 text-sm text-[#1F2A44]/70">
            <span className="sr-only">Filter by status</span>
            <select
              value={selectedStatus}
              onChange={(event) => onStatusChange(event.target.value)}
              className="w-full bg-transparent text-sm text-[#1F2A44] focus:outline-none"
              aria-label="Filter activity history by status"
            >
              <option value="All">All statuses</option>
              <option value="Verified">Verified</option>
              <option value="Pending">Pending</option>
              <option value="Needs Review">Needs Review</option>
            </select>
          </label>
        </div>
      </div>

      {activities.length === 0 ? (
        <div className="rounded-[1.5rem] border border-dashed border-[#1F2A44]/15 bg-[#F7F3EB] p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
            No activity match
          </p>
          <h4 className="mt-4 text-2xl font-medium tracking-tight text-[#1F2A44]">
            Nothing matches the current filters.
          </h4>
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#1F2A44] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => {
            const StatusIcon = statusStyles[activity.status].icon;

            return (
              <article
                key={activity.id}
                className="rounded-[1.6rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-4"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#1F2A44]/45">
                      {activity.type}
                    </p>
                    <h4 className="mt-2 text-2xl font-medium tracking-tight text-[#1F2A44]">
                      {activity.name}
                    </h4>
                    <p className="mt-2 text-sm text-[#1F2A44]/60">{activity.role}</p>
                  </div>

                  <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${statusStyles[activity.status].badge}`}>
                    <StatusIcon size={14} />
                    {activity.status}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#1F2A44]/55">
                  <span className="rounded-full border border-[#1F2A44]/10 bg-white/80 px-2.5 py-1.5">
                    {activity.date}
                  </span>
                  <span className="rounded-full border border-[#1F2A44]/10 bg-white/80 px-2.5 py-1.5">
                    {activity.points} pts
                  </span>
                  <span className="rounded-full border border-[#1F2A44]/10 bg-white/80 px-2.5 py-1.5">
                    {activity.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#1F2A44]/70">{activity.description}</p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#1F2A44]/10 pt-4">
                  <div className="text-sm text-[#1F2A44]/60">
                    Proof: <span className="font-medium text-[#1F2A44]/80">{activity.proof}</span>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#1F2A44] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
                  >
                    View detail
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
