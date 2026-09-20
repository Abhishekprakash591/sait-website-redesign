"use client";

import type { ArchiveCategory } from "@/data/archive";

type ArchiveFiltersProps = {
  categories: ("All" | ArchiveCategory)[];
  activeCategory: "All" | ArchiveCategory;
  onSelect: (category: "All" | ArchiveCategory) => void;
};

export default function ArchiveFilters({
  categories,
  activeCategory,
  onSelect,
}: ArchiveFiltersProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max gap-3 border-b border-white/10 pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelect(cat)}
              className={[
                "relative shrink-0 px-2 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]",
                isActive ? "text-[#F59E0B]" : "text-white/60 hover:text-white",
              ].join(" ")}
            >
              {cat}
              {isActive ? <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#F59E0B]" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
