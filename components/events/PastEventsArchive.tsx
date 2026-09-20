"use client";

import { motion } from "framer-motion";

import type { EventItem } from "@/data/events";

type PastEventsArchiveProps = {
  events: EventItem[];
};

export default function PastEventsArchive({ events }: PastEventsArchiveProps) {
  const byYear = events.reduce<Record<string, EventItem[]>>((acc, event) => {
    const year = event.year ?? "Unknown";
    acc[year] = [...(acc[year] ?? []), event];
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section className="bg-[#080C14] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Past events archive
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            A record of SAIT activity.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <div className="mb-5 flex items-center gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  {year}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="space-y-4">
                {byYear[year].map((event, index) => (
                  <motion.article
                    key={event.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
                    className="group border-b border-white/10 pb-4 pt-1 last:border-b-0"
                  >
                    <div className="grid gap-4 md:grid-cols-[210px_1fr] md:items-start">
                      <div className="flex items-start gap-3 md:block">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                            {event.category}
                          </p>
                          <p className="mt-2 text-xl font-medium tracking-[-0.04em] text-white md:text-2xl">
                            {event.date}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {event.name}
                        </h3>
                        <p className="text-sm leading-relaxed text-white/55">{event.outcome ?? event.description}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
