"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter, Search, UsersRound } from "lucide-react";

import AlumniCard from "@/components/alumni/AlumniCard";
import AlumniConnectModal from "@/components/alumni/AlumniConnectModal";
import AlumniSpotlight from "@/components/alumni/AlumniSpotlight";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  alumni,
  alumniBatches,
  alumniIndustries,
  type AlumniRecord,
} from "@/data/alumni";

const generations = [
  {
    step: "01 — Foundation",
    text: "Students learn core CS/IT fundamentals, collaborate on department open source projects, and participate in SAIT tech events and workshops.",
  },
  {
    step: "02 — Transition",
    text: "Seniors mentor junior batches, coordinate SAIT clubs, lead hackathon teams, and bridge academic theory with real engineering practices.",
  },
  {
    step: "03 — Giving back",
    text: "Alumni in top global tech companies return to deliver guest masterclasses, review capstone architectures, and refer CUSAT engineers.",
  },
];

const contributions = [
  {
    title: "1-on-1 Mentorship",
    description: "Guidance on technical career paths, resume reviews, open-source portfolio builds, and coding interview strategies.",
  },
  {
    title: "Guest Masterclasses",
    description: "Hands-on sessions on distributed systems, modern AI deployments, cloud engineering, and high-scale architectures.",
  },
  {
    title: "Placement Referrals",
    description: "Direct internal job and internship referrals across top product firms, startups, and Tier-1 engineering teams.",
  },
  {
    title: "Project Architecture",
    description: "Industry review for student capstone projects, startup prototypes, and research paper drafts.",
  },
  {
    title: "Community Growth",
    description: "Sponsoring hackathons, providing infrastructure credits, and championing student initiatives at CUSAT.",
  },
];

export default function AlumniPage() {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All batches");
  const [selectedIndustry, setSelectedIndustry] = useState("All industries");
  const [connectAlumni, setConnectAlumni] = useState<AlumniRecord | null>(null);

  const featuredAlumni = useMemo(() => {
    return alumni.find((item) => item.isFeatured) ?? alumni[0];
  }, []);

  const filteredAlumni = useMemo(() => {
    return alumni.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.role.toLowerCase().includes(search.toLowerCase()) ||
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.industry.toLowerCase().includes(search.toLowerCase());
      const matchesBatch =
        selectedBatch === "All batches" || item.batch === selectedBatch;
      const matchesIndustry =
        selectedIndustry === "All industries" || item.industry === selectedIndustry;

      return matchesSearch && matchesBatch && matchesIndustry;
    });
  }, [search, selectedBatch, selectedIndustry]);

  const clearFilters = () => {
    setSearch("");
    setSelectedBatch("All batches");
    setSelectedIndustry("All industries");
  };

  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <AlumniConnectModal
        alumni={connectAlumni}
        isOpen={Boolean(connectAlumni)}
        onClose={() => setConnectAlumni(null)}
      />

      <PageWrapper className="border-b border-white/10 bg-[#080C14]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                06 — Alumni
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                The community doesn&apos;t end at graduation.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                SAIT brings students and alumni across generations together through
                shared experience, guidance, opportunities, and a continuing
                relationship with the student community.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <AlumniSpotlight alumni={featuredAlumni} />

      <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Alumni directory"
            title="A living network of builders, mentors and former members."
          />

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0E131F] px-4 py-3 text-sm text-white/70 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/20">
              <Search size={16} className="text-white/40" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search alumni by name, role or industry"
                aria-label="Search alumni by name, role or industry"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>

            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0E131F] px-4 py-3 text-sm text-white/70 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/20">
              <Filter size={16} className="text-white/40" />
              <select
                aria-label="Filter by batch"
                value={selectedBatch}
                onChange={(event) => setSelectedBatch(event.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
              >
                {alumniBatches.map((batch) => (
                  <option key={batch} value={batch} className="bg-[#0E131F] text-white">
                    {batch}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0E131F] px-4 py-3 text-sm text-white/70 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/20">
              <UsersRound size={16} className="text-white/40" />
              <select
                aria-label="Filter by industry"
                value={selectedIndustry}
                onChange={(event) => setSelectedIndustry(event.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
              >
                {alumniIndustries.map((industry) => (
                  <option key={industry} value={industry} className="bg-[#0E131F] text-white">
                    {industry}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAlumni.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-white/15 bg-white/5 p-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
                No matching alumni
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                No results for the current search and filters.
              </h3>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredAlumni.map((person) => (
                <AlumniCard key={person.id} alumni={person} onConnect={setConnectAlumni} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Across generations"
            title="Students → seniors → alumni. A continuing cycle of learning."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {generations.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                  {item.step}
                </p>
                <h3 className="mt-4 text-3xl font-medium tracking-tight text-white">
                  {item.step}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#080C14] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              How experience flows back
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                "Mentorship",
                "Career guidance",
                "Talks",
                "Project collaboration",
                "Industry insights",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm text-white/80 font-medium text-center"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Alumni contributions"
            title="Illustrative ways alumni still shape the community."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {contributions.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#131929]"
              >
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              Stay connected
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Stay connected to where it started.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/achievements"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706]"
              >
                Explore Achievements
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
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
