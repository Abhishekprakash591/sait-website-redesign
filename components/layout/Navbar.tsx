"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, PlusCircle, Search, X } from "lucide-react";
import CommandPalette from "@/components/layout/CommandPalette";

import { playClick } from "@/lib/audioFeedback";

const primaryNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "People", href: "/people" },
  { label: "Events", href: "/events" },
  { label: "Placements", href: "/placements" },
];

const secondaryNavItems = [
  { label: "Alumni", href: "/alumni" },
  { label: "Achievements", href: "/achievements" },
  { label: "Archive", href: "/archive" },
  { label: "My SAIT Journey", href: "/journey" },
  { label: "Activity Logger", href: "/activity-logger" },
  { label: "Announcements", href: "/announcements" },
];

export default function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <motion.header
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/10 bg-[#080C14]/95 backdrop-blur-xl"
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10"
        >
          {/* Logo & Department Branding */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}
          >
            <Link
              href="/"
              onClick={playClick}
              className="flex shrink-0 items-center gap-2.5"
              aria-label="SAIT home"
            >
              <Image
                src="/images/sait-logo.png"
                alt="SAIT"
                width={96}
                height={96}
                className="h-8 w-auto max-w-none shrink-0 object-contain md:h-9 md:w-auto brightness-110"
                style={{ width: "auto", maxWidth: "none" }}
                priority
              />
              <div className="leading-none">
                <div className="flex items-center gap-1.5 text-base font-bold tracking-tight text-white">
                  SAIT<span className="text-[#F59E0B]">.</span>
                  <span className="hidden xl:inline-flex items-center gap-1 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-2 py-0.5 text-[9px] font-semibold text-[#F59E0B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    SOE CUSAT
                  </span>
                </div>
                <div className="hidden text-[8px] uppercase tracking-[0.2em] text-neutral-400 sm:block">
                  Division of Information Technology
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Primary Desktop Nav */}
          <div className="hidden flex-1 items-center justify-center gap-1 text-sm lg:flex">
            {primaryNavItems.map((item, index) => {
              const isActive = isActiveLink(item.href);
              return (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, delay: shouldReduceMotion ? 0 : 0.12 + index * 0.04, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    onClick={playClick}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white border border-white/20 shadow-sm"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#F59E0B]" />
                    ) : null}
                  </Link>
                </motion.div>
              );
            })}

            {/* Dropdown for Secondary Navigation */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={isSecondaryOpen}
                aria-controls="secondary-nav-menu"
                onClick={() => {
                  playClick();
                  setIsSecondaryOpen((open) => !open);
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/75 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                More
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${isSecondaryOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isSecondaryOpen && (
                <div
                  id="secondary-nav-menu"
                  className="absolute right-0 top-[calc(100%+0.6rem)] min-w-[220px] rounded-2xl border border-white/10 bg-[#0E131F] p-2 shadow-2xl backdrop-blur-xl"
                >
                  {secondaryNavItems.map((item) => {
                    const isActive = isActiveLink(item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          playClick();
                          setIsSecondaryOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight size={13} className={isActive ? "text-[#F59E0B]" : "text-neutral-500"} />
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>


          {/* Right Action Icons: Command Palette & Activity Logger */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => {
                playClick();
                setIsSearchOpen(true);
              }}
              aria-label="Open search palette"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-white/75 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <Search size={14} className="text-[#F59E0B]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded bg-white/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-neutral-400 md:inline-block">
                Ctrl K
              </kbd>
            </button>

            {/* Activity Logger Quick CTA */}
            <Link
              href="/activity-logger"
              onClick={playClick}
              className="hidden items-center gap-2 rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              <PlusCircle size={14} className="text-black" />
              <span>Log Activity</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => {
                playClick();
                setIsMobileMenuOpen((open) => !open);
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 lg:hidden"
            >
              {isMobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.25, ease: "easeOut" }}
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#080C14] px-4 py-4 lg:hidden"
          >
            <div className="mb-3 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-neutral-300"
              >
                <Search size={14} className="text-[#F59E0B]" />
                <span>Search pages, events, alumni...</span>
              </button>
            </div>

            <div className="flex flex-col gap-1 text-sm text-neutral-300">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => {
                const isActive = isActiveLink(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      playClick();
                      closeMobileMenu();
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 font-medium transition-all duration-200 ${
                      isActive ? "bg-white/10 text-white" : "text-neutral-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={13} className={isActive ? "text-[#F59E0B]" : "text-neutral-600"} />
                  </Link>
                );
              })}

              <Link
                href="/activity-logger"
                onClick={() => {
                  playClick();
                  closeMobileMenu();
                }}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-white"
              >
                <PlusCircle size={15} />
                <span>Log Student Activity</span>
              </Link>
            </div>
          </motion.div>
        ) : null}

      </motion.header>
    </>
  );
}
