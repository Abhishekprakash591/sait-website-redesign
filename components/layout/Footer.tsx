"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Compass, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import CampusMapModal from "@/components/shared/CampusMapModal";
import ContactForm from "@/components/shared/ContactForm";
import FadeInView from "@/components/shared/FadeInView";

const footerNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "People", href: "/people" },
  { label: "Placements", href: "/placements" },
  { label: "Alumni", href: "/alumni" },
  { label: "Announcements", href: "/announcements" },
  { label: "Archive", href: "/archive" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/sait_cusat" },
  { label: "LinkedIn", href: "https://linkedin.com/company/sait-cusat" },
  { label: "GitHub", href: "https://github.com/sait-cusat" },
  { label: "YouTube", href: "https://youtube.com/@saitcusat" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [isMapOpen, setIsMapOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.footer
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
      className="border-t border-white/10 bg-[#050811] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 md:px-10 md:py-9">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.8fr_0.9fr_1.2fr] lg:gap-8">

          {/* Brand */}
          <FadeInView delay={0.05} className="min-w-0">
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="SAIT home">
              <Image
                src="/images/sait-logo.png"
                alt="SAIT logo"
                width={42}
                height={42}
                className="h-8 w-auto shrink-0 object-contain md:h-9"
              />
              <div className="leading-none">
                <div className="text-xl font-bold tracking-tight text-white">
                  SAIT<span className="text-[#F59E0B]">.</span>
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                  Division of Information Technology
                </div>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
              The Students Association of Information Technology is the premier student body under
              the Division of Information Technology, School of Engineering, CUSAT.
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
              SOE CUSAT · KOCHI
            </p>
          </FadeInView>

          {/* Navigation */}
          <FadeInView delay={0.08} className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Navigation & Hubs
            </p>
            <ul className="mt-3 grid gap-1.5 text-xs font-medium text-white/75">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-opacity duration-200 hover:text-[#F59E0B] hover:opacity-100">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInView>

          {/* Campus Location */}
          <FadeInView delay={0.12} className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Campus Location
            </p>
            <div className="mt-3 space-y-2.5 text-xs leading-relaxed text-white/70">
              <p className="font-semibold text-white">Division of Information Technology</p>
              <p>School of Engineering, CUSAT</p>
              <p>South Kalamassery, Kochi, Kerala 682022</p>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsMapOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#F59E0B] hover:underline"
                >
                  <Compass size={14} />
                  <span>Interactive Campus & Lab Guide</span>
                </button>

                <a
                  href="https://maps.google.com/?q=School+of+Engineering+CUSAT+Kochi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-[#F59E0B]"
                >
                  <MapPin size={13} className="text-[#F59E0B]" />
                  <span>Google Maps Directions</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </FadeInView>

          {/* Contact & Social */}
          <FadeInView delay={0.16} className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Official Contact
            </p>
            <div className="mt-3 space-y-2.5 text-xs text-white/75">
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#F59E0B]" />
                <a href="mailto:sait@cusat.ac.in" className="font-mono hover:underline text-white/90">
                  sait@cusat.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#F59E0B]" />
                <span className="font-mono text-white/90">+91 484 2575510</span>
              </div>

              <div className="pt-1">
                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                  Social & Community
                </p>
                <ul className="space-y-1">
                  {socialLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-white/75 transition-colors hover:text-[#F59E0B]"
                      >
                        {item.label}
                        <ArrowUpRight size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Contact Form */}
        <FadeInView delay={0.18} className="mt-7 border-t border-white/10 pt-5">
          <ContactForm />
        </FadeInView>

        {/* Bottom Bar */}
        <FadeInView
          delay={0.2}
          className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 SAIT — Students Association of Information Technology, SOE CUSAT.</p>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 self-start border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:border-[#F59E0B]/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:self-auto"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </FadeInView>
      </div>

      <CampusMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </motion.footer>
  );
}
