import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import ExecCommittee from "@/components/people/ExecCommittee";
import SubTeamTabs from "@/components/people/SubTeamTabs";
import SectionReveal from "@/components/shared/SectionReveal";

const communityFlow = [
  "Students",
  "SAIT teams",
  "Projects / Events / Publications",
  "Department community",
];

export default function PeoplePage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <PageWrapper className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              03 — People
            </p>
            <h1 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
              People make the community.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              SAIT is built by students, supported by faculty and strengthened by
              the people who keep the community moving.
            </p>
          </div>
        </div>
      </PageWrapper>

      <ExecCommittee />
      <SubTeamTabs />

      <SectionReveal className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              How SAIT works
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Students, teams, and the wider department community.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {communityFlow.map((item, index) => (
              <div
                key={item}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="mb-4 flex items-center justify-center">
                  <span className="text-sm uppercase tracking-[0.18em] text-white/40">
                    {index + 1}
                  </span>
                </div>
                <p className="text-xl font-medium tracking-tight text-white">{item}</p>
                {index < communityFlow.length - 1 ? (
                  <div className="mt-6 flex justify-center text-white/40">
                    <ArrowRight size={18} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Get involved
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Find your place in SAIT.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Contribute through technology, events, media, content, projects or
              community activities and help shape the student experience.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black"
              >
                Track My Activities
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}
