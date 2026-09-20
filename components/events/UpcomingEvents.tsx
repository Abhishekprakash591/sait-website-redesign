"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import EventCard from "@/components/events/EventCard";
import EventFilterBar from "@/components/events/EventFilterBar";
import EventModal, { type EventData } from "@/components/events/EventModal";
import type { EventCategory, EventItem } from "@/data/events";

const defaultCategory: "All" | EventCategory = "All";

type UpcomingEventsProps = {
  events: EventItem[];
};

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | EventCategory>(defaultCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeModalEvent, setActiveModalEvent] = useState<EventData | null>(null);

  const featuredEvent = useMemo(() => events.find((event) => event.featured), [events]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      const searchValue = searchTerm.trim().toLowerCase();
      const matchesSearch =
        searchValue.length === 0 ||
        event.name.toLowerCase().includes(searchValue) ||
        event.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [events, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
  };

  return (
    <section className="bg-[#080C14] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Upcoming events &amp; workshops
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Find what fits your week.
            </h2>
          </div>
        </motion.div>

        {featuredEvent ? (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-8 rounded-[2rem] border border-white/10 bg-[#0E131F] p-6 text-white md:p-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                  Flagship moment
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  {featuredEvent.name}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                  {featuredEvent.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                <span>{featuredEvent.date}</span>
                <span className="text-[#F59E0B]">•</span>
                <span>{featuredEvent.time}</span>
                <span className="text-[#F59E0B]">•</span>
                <span>{featuredEvent.venue}</span>
              </div>
            </div>
          </motion.article>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <EventFilterBar
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onSelectCategory={setSelectedCategory}
            onSearchChange={setSearchTerm}
            onClearFilters={clearFilters}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-8 rounded-[2rem] border border-dashed border-white/15 bg-white/5 p-10 text-center"
            >
              <p className="text-2xl font-semibold tracking-[-0.05em] text-white">No events found</p>
              <p className="mt-3 text-white/55">Try another category.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-200 hover:bg-white"
              >
                Reset filters
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-8 space-y-4"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                >
                  <EventCard
                    event={event}
                    expanded={expandedId === event.id}
                    onToggle={(id) => setExpandedId((current) => (current === id ? null : id))}
                    onRegister={(item) => setActiveModalEvent(item as EventData)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <EventModal
        event={activeModalEvent}
        isOpen={Boolean(activeModalEvent)}
        onClose={() => setActiveModalEvent(null)}
      />
    </section>
  );
}
