import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/layout/PageWrapper";
import VisionMission from "@/components/about/VisionMission";
import HistoryTimeline from "@/components/about/HistoryTimeline";
import FacultyDirectory from "@/components/about/FacultyDirectory";
import AcademicResourcesVault from "@/components/about/AcademicResourcesModal";
import SectionHeading from "@/components/shared/SectionHeading";
import SectionReveal from "@/components/shared/SectionReveal";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <PageWrapper className="border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                About SAIT
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                More than a department.
                <br />
                <span className="text-white/30">A community with a history.</span>
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                The Students Association of Information Technology is a student-led
                community under the Division of Information Technology, School of
                Engineering, CUSAT, bringing together learning, participation,
                information sharing, and connection.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <VisionMission />
      <HistoryTimeline />
      <FacultyDirectory />

      <SectionReveal className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Academic resources & vault"
            title="Syllabus, calendars, lab manuals and research repositories."
          />

          <AcademicResourcesVault />
        </div>
      </SectionReveal>

      <SectionReveal className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Continue exploring
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Explore the people, projects and experiences that make SAIT.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/people"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Meet the People
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}
