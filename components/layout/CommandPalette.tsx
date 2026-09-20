"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  GraduationCap,
  Trophy,
  Bell,
  ArrowRight,
  X,
  FileText,
  Globe,
  Home,
  BookOpen,
  FolderKanban,
  Archive,
} from "lucide-react";

type SearchCategory = "Pages" | "Events" | "People" | "Alumni" | "Achievements" | "Resources";

type SearchResult = {
  title: string;
  category: SearchCategory;
  href: string;
  badge?: string;
  description?: string;
};

// Icon lookup by href takes priority, then by category
const ICON_BY_HREF: Record<string, React.ReactNode> = {
  "/": <Home className="h-4 w-4 text-[#F59E0B]" />,
  "/about": <BookOpen className="h-4 w-4 text-[#F59E0B]" />,
  "/activity-logger": <FolderKanban className="h-4 w-4 text-[#F59E0B]" />,
  "/announcements": <Bell className="h-4 w-4 text-[#F59E0B]" />,
  "/archive": <Archive className="h-4 w-4 text-[#F59E0B]" />,
  "/placements": <GraduationCap className="h-4 w-4 text-[#F59E0B]" />,
};

const ICON_BY_CATEGORY: Record<SearchCategory, React.ReactNode> = {
  Events: <Calendar className="h-4 w-4 text-[#F59E0B]" />,
  People: <User className="h-4 w-4 text-slate-300" />,
  Alumni: <GraduationCap className="h-4 w-4 text-[#F59E0B]" />,
  Achievements: <Trophy className="h-4 w-4 text-[#F59E0B]" />,
  Resources: <FileText className="h-4 w-4 text-slate-300" />,
  Pages: <Globe className="h-4 w-4 text-[#F59E0B]" />,
};

const SEARCH_ITEMS: SearchResult[] = [
  { title: "Home / Overview", category: "Pages", href: "/", description: "Main landing portal and SAIT highlights" },
  { title: "About SAIT & Department", category: "Pages", href: "/about", description: "Vision, mission, history and faculty" },
  { title: "Faculty & Administration", category: "People", href: "/about#faculty", description: "HoD Dr. Ananya Menon and staff coordinators" },
  { title: "People & Executive Committee", category: "People", href: "/people", description: "SAIT 2026-27 student leadership and sub-teams" },
  { title: "Events & Workshops", category: "Events", href: "/events", description: "Upcoming hackathons, seminars and past archive" },
  { title: "Placements & Career Hub", category: "Pages", href: "/placements", description: "Placement stats (96%), top recruiters and resources" },
  { title: "Alumni Network & Spotlights", category: "Alumni", href: "/alumni", description: "Connect with graduates working at top global tech firms" },
  { title: "Hall of Fame & Achievements", category: "Achievements", href: "/achievements", description: "Smart India Hackathon wins, publications & awards" },
  { title: "Student Activity Logger", category: "Pages", href: "/activity-logger", badge: "Interactive", description: "Log student participation, earn XP and export resume" },
  { title: "Announcements & Notices", category: "Pages", href: "/announcements", description: "Official department updates, deadlines and reminders" },
  { title: "SAIT Archive", category: "Pages", href: "/archive", description: "Past editions, magazine releases and student memories" },
  { title: "Smart India Hackathon 1st Prize", category: "Achievements", href: "/achievements", badge: "Gold", description: "Team TechSait win at SIH National Finals" },
  { title: "Kochi DevCon 2026", category: "Events", href: "/events", badge: "Upcoming", description: "Keynote talks & project showcase in CUSAT Seminar Complex" },
  { title: "B.Tech IT Scheme & Syllabus", category: "Resources", href: "/about", description: "Download curriculum, syllabus guidelines and credits" },
  { title: "CUSAT Academic Calendar 2026-27", category: "Resources", href: "/about", description: "Semester examination dates and academic schedule" },
  { title: "Dr. Ananya Menon (HoD)", category: "People", href: "/about", badge: "HoD", description: "Professor & Head of Division of IT, SOE CUSAT" },
  { title: "Karthik Subramanian (Staff Coordinator)", category: "People", href: "/about", description: "Associate Professor & SAIT Faculty Advisor" },
  { title: "Arjun Nair (Staff Software Engineer @ Google)", category: "Alumni", href: "/alumni", description: "Batch of 2018 · Mentorship & Tech Advisor" },
];

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = SEARCH_ITEMS.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description?.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1 < filtered.length ? prev + 1 : 0));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filtered.length - 1));
          break;
        case "Enter":
          e.preventDefault();
          if (filtered[selectedIndex]) handleSelect(filtered[selectedIndex].href);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, filtered, selectedIndex, onClose]);

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  const getIcon = (item: SearchResult) =>
    ICON_BY_HREF[item.href] ?? ICON_BY_CATEGORY[item.category];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E131F] shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          >
            {/* Search Input */}
            <div className="flex items-center border-b border-white/10 px-5 py-4">
              <Search className="mr-3 h-5 w-5 shrink-0 text-white/50" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search anything across SAIT (events, people, resources)..."
                className="w-full bg-transparent text-base font-medium text-white placeholder:text-white/40 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mr-2 rounded-full p-1 text-white/40 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd className="hidden rounded-lg border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-mono font-semibold text-white/60 sm:inline-block">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filtered.length === 0 ? (
                <div className="py-12 text-center">
                  <p className="text-sm font-semibold text-white/60">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-white/40">
                    Try searching for &ldquo;Hackathon&rdquo;, &ldquo;Placements&rdquo;, or &ldquo;Activity Logger&rdquo;
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <div
                        key={`${item.title}-${item.href}`}
                        onClick={() => handleSelect(item.href)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 transition-colors ${
                          isSelected
                            ? "bg-[#131929] border border-white/15 text-white shadow-md"
                            : "text-white/80 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex min-w-0 items-center gap-3.5">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              isSelected
                                ? "bg-[#F59E0B] text-black"
                                : "border border-white/10 bg-white/5 text-white/70"
                            }`}
                          >
                            {getIcon(item)}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`truncate text-sm font-semibold ${
                                  isSelected ? "text-white" : "text-white/90"
                                }`}
                              >
                                {item.title}
                              </span>
                              {item.badge && (
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                                    isSelected
                                      ? "bg-[#F59E0B] text-black"
                                      : "bg-white/10 text-white/70"
                                  }`}
                                >
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p
                                className={`truncate text-xs ${
                                  isSelected ? "text-white/70" : "text-white/50"
                                }`}
                              >
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="ml-3 flex shrink-0 items-center gap-2">
                          <span
                            className={`font-mono text-[10px] uppercase tracking-wider ${
                              isSelected ? "text-[#F59E0B]" : "text-white/40"
                            }`}
                          >
                            {item.category}
                          </span>
                          <ArrowRight
                            className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 ${
                              isSelected ? "text-white" : "text-white/30"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Keyboard Hint Bar */}
            <div className="flex items-center justify-between border-t border-white/10 bg-black/30 px-5 py-2.5 text-[11px] text-white/60">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/80">↑</kbd>{" "}
                  <kbd className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/80">↓</kbd>{" "}
                  to navigate
                </span>
                <span>
                  <kbd className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/80">↵</kbd>{" "}
                  to select
                </span>
              </div>
              <span className="font-mono text-[10px] font-semibold text-[#F59E0B]">
                SAIT Quick Finder
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
