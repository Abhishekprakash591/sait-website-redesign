"use client";

import { motion } from "framer-motion";

import { execCommittee, facultyInCharge } from "@/data/execCommittee";
import MemberCard from "@/components/people/MemberCard";

export default function ExecCommittee() {
  return (
    <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B]">
            E X E C U T I V E &nbsp; B O A R D &nbsp; 2 0 2 3 - 2 4
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Guiding vision &amp; student leadership.
          </h2>
          <p className="mt-4 text-base text-white/55">
            The faculty mentorship and elected student office bearers driving the community.
          </p>
        </div>

        {/* Faculty In Charge centered at top */}
        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm"
          >
            <div className="rounded-[2.2rem] border-2 border-[#F59E0B]/30 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-2xl border-2 border-white/20 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={facultyInCharge.photo}
                    alt={facultyInCharge.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <span className="rounded-full bg-[#F59E0B] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
                  {facultyInCharge.role}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                  {facultyInCharge.name}
                </h3>
                <p className="mt-1 text-xs text-white/50 font-medium">
                  {facultyInCharge.year}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {facultyInCharge.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Executive Members Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {execCommittee.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <MemberCard
                name={member.name}
                role={member.role}
                year={member.year}
                initials={member.initials}
                bio={member.bio}
                photo={member.photo}
                socialUrl={member.socialUrl}
                githubUrl={member.githubUrl}
                linkedinUrl={member.linkedinUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
