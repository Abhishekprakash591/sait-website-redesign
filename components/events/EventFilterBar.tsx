"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

import { eventCategories, type EventCategory } from "@/data/events";

type EventFilterBarProps = {
  selectedCategory: "All" | EventCategory;
  searchTerm: string;
  onSelectCategory: (category: "All" | EventCategory) => void;
  onSearchChange: (value: string) => void;
  onClearFilters: () => void;
};

const filterOptions: Array<"All" | EventCategory> = ["All", ...eventCategories];

export default function EventFilterBar({
  selectedCategory,
  searchTerm,
  onSelectCategory,
  onSearchChange,
  onClearFilters,
}: EventFilterBarProps) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <label htmlFor="event-search" className="sr-only">
            Search events
          </label>
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            id="event-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search events"
            className="w-full rounded-full border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/35 focus:border-white/25 focus:outline-none"
          />
        </div>

        {(searchTerm || selectedCategory !== "All") && (
          <button
            type="button"
            onClick={onClearFilters}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-transparent px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            <X size={12} />
            Reset
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-2">
        {filterOptions.map((option) => {
          const isActive = selectedCategory === option;

          return (
            <motion.button
              key={option}
              type="button"
              layout
              whileTap={{ scale: 0.98 }}
              aria-pressed={isActive}
              onClick={() => onSelectCategory(option)}
              className={[
                "relative inline-flex items-center justify-center px-2 pb-3 pt-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
                isActive ? "text-white" : "text-white/40 hover:text-white",
              ].join(" ")}
            >
              {option}
              {isActive ? (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#F59E0B]" />
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
