"use client";

import { useMemo, useState } from "react";

import ArchiveFilters from "@/components/archive/ArchiveFilters";
import ArchiveTimelineItem from "@/components/archive/ArchiveTimelineItem";
import { archiveCategories, archiveItems, type ArchiveCategory } from "@/data/archive";

export default function ArchiveTimeline() {
  const [activeCategory, setActiveCategory] = useState<"All" | ArchiveCategory>("All");

  const categories = useMemo(() => ["All" as const, ...archiveCategories], []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return archiveItems;
    return archiveItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-[#080C14] px-6 py-12 md:px-10 md:py-20 border-b border-white/10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              TIMELINE
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              From the earliest records to now.
            </h2>
          </div>

          <ArchiveFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1.5 top-0 bottom-0 hidden w-px bg-white/10 md:block" aria-hidden="true" />
          <div className="space-y-8">
            {filteredItems.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="absolute left-[-2px] top-7 hidden h-4 w-4 rounded-full border-2 border-[#080C14] bg-[#F59E0B] shadow-[0_0_0_8px_rgba(245,158,11,0.15)] md:block" aria-hidden="true" />
                <ArchiveTimelineItem item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
