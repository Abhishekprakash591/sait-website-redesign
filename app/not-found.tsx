import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080C14] px-6 py-16 text-white">
      <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:p-12">
        <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F59E0B]">
          <Compass size={14} className="text-[#F59E0B]" />
          404 — Lost in the archive
        </div>

        <h1 className="mt-6 text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
          The page you wanted is not in the SAIT archive.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          The section may have moved, or the link you followed is no longer part of the
          active site. Head back to the community hub or explore upcoming events.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706]"
          >
            Return home
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
          >
            Explore events
          </Link>
        </div>
      </div>
    </main>
  );
}
