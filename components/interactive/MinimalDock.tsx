"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Volume2, VolumeX, ArrowUp, Compass } from "lucide-react";
import { playClick, playPop, toggleSound, isSoundEnabled } from "@/lib/audioFeedback";
import CommandPalette from "@/components/layout/CommandPalette";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Placements", href: "/placements" },
  { label: "Events", href: "/events" },
  { label: "Alumni", href: "/alumni" },
  { label: "Logger", href: "/activity-logger" },
];

export default function MinimalDock() {
  const pathname = usePathname();
  const [soundOn, setSoundOn] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());

    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    setSoundOn(toggleSound());
  };

  const scrollToTop = () => {
    playPop();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Quick nav popover */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-1/2 z-50 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0A0E17]/95 p-3 shadow-2xl backdrop-blur-2xl"
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 px-2 pb-2 text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              <span>Quick Navigation</span>
              <span className="text-[#F59E0B]">SAIT Hub</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { playClick(); setIsMenuOpen(false); }}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "border border-[#F59E0B]/30 bg-[#F59E0B]/20 text-[#F59E0B]"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating dock */}
      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0B0F19]/85 px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          {/* Search */}
          <button
            type="button"
            onClick={() => { playClick(); setIsSearchOpen(true); }}
            aria-label="Search site"
            className="flex h-9 items-center gap-2 rounded-full px-3 text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Search size={14} className="text-[#F59E0B]" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded bg-white/10 px-1 py-0.5 font-mono text-[9px] text-neutral-400 sm:inline">
              Ctrl K
            </kbd>
          </button>

          <div className="h-4 w-px bg-white/10" />

          {/* Nav menu toggle */}
          <button
            type="button"
            onClick={() => { playClick(); setIsMenuOpen((prev) => !prev); }}
            aria-label="Navigation menu"
            aria-expanded={isMenuOpen}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium transition-colors ${
              isMenuOpen ? "bg-[#F59E0B] text-black" : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Compass size={16} />
          </button>

          {/* Sound toggle */}
          <button
            type="button"
            onClick={handleSoundToggle}
            aria-label={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            {soundOn ? (
              <Volume2 size={16} className="text-[#F59E0B]" />
            ) : (
              <VolumeX size={16} className="text-neutral-500" />
            )}
          </button>

          {/* Logger live pill */}
          <Link
            href="/activity-logger"
            onClick={playClick}
            aria-label="Student Activity Logger"
            className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-neutral-300 transition-colors hover:bg-white/10 md:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Logger Live</span>
          </Link>

          {/* Scroll to top */}
          {showScrollTop && (
            <>
              <div className="h-4 w-px bg-white/10" />
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ArrowUp size={15} />
              </button>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
}
