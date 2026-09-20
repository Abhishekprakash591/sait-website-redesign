import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import PlacementStats from "@/components/placements/PlacementStats";
import RecruiterShowcase from "@/components/placements/RecruiterShowcase";
import CareerResources from "@/components/placements/CareerResources";
import { alumniProfiles } from "@/data/placements";

const journey = [
  {
    title: "Learn",
    text: "Build a strong technical and academic foundation through classes, projects, and community learning.",
  },
  {
    title: "Build",
    text: "Create projects, participate in activities, and turn academic learning into practical experience.",
  },
  {
    title: "Prepare",
    text: "Practice interviewing, build portfolios, and understand how to present your strengths clearly.",
  },
  {
    title: "Apply",
    text: "Explore opportunities, connect with seniors, and identify internships and career pathways.",
  },
  {
    title: "Launch",
    text: "Take the next step with greater confidence, informed by experience and community support.",
  },
];

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <PageWrapper className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                05 — Placements &amp; Careers
              </p>
              <h1 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                From classroom to career.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                SAIT helps students discover career paths, prepare for opportunities,
                learn from seniors and alumni, and build readiness for the next stage of their journey.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
                <span>Placement Season 2026</span>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>

      <PlacementStats />

      <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Career journey"
            title="A path shaped by experience, preparation, and opportunity."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {journey.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B] text-sm font-semibold text-black">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecruiterShowcase />
      <CareerResources />

      <section className="relative border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F59E0B]">
              <span>FEATURED ALUMNI</span>
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Guidance from those who have walked the path.
            </h2>
            <p className="mt-4 text-base text-neutral-400 leading-relaxed font-normal">
              Our graduates building exceptional careers across cutting-edge technologies and tier-1 engineering companies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {alumniProfiles.map((profile) => (
              <article
                key={profile.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0E131F]/90 p-3 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-[#131929] hover:shadow-2xl"
              >
                <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-xl bg-[#1A2234]">
                  {profile.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white/20">
                      {profile.name.slice(0, 2)}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-4 pt-3">
                  <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#F59E0B]">
                    {profile.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#F59E0B]">
                    {profile.role}
                  </p>
                  {profile.company && (
                    <p className="mt-0.5 text-xs text-neutral-400 font-medium">
                      {profile.company}
                    </p>
                  )}
                  <p className="mt-3 text-xs leading-relaxed text-neutral-400 line-clamp-3">
                    {profile.message}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Keep moving forward
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Your career starts long before your first offer.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/alumni"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Alumni
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black"
              >
                Track My SAIT Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
