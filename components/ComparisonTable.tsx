"use client";

import React from "react";

export default function ComparisonTable() {
  const comparisonRows = [
    {
      feature: "Architecture Reliability",
      freelancer: "Basic node connections. Fails silently on API schema changes.",
      bigAgency: "Over-engineered 6-month enterprise roadmap.",
      pethalvoid: "Idempotent, self-healing n8n & LangGraph pipelines with retry layers.",
      winner: true,
    },
    {
      feature: "Data Ownership & Lock-in",
      freelancer: "Uses proprietary Zapier/Make accounts. You pay monthly SaaS tax.",
      bigAgency: "Custom blackbox software keeping you locked into their retainer.",
      pethalvoid: "100% self-hosted on your own cloud. Full Git repository & zero lock-in.",
      winner: true,
    },
    {
      feature: "Error Handling & Fallbacks",
      freelancer: "None. When an error occurs, the workflow silently stops.",
      bigAgency: "Ticket system with 48-hour response time.",
      pethalvoid: "Dead-Letter Queue with auto-retry + instant Telegram/Slack alert.",
      winner: true,
    },
    {
      feature: "Documentation & Handover",
      freelancer: "Leaves zero docs. Disappears after invoice is paid.",
      bigAgency: "100-page PDF manual that nobody reads.",
      pethalvoid: "Interactive architecture diagrams, video walkthroughs & typed configs.",
      winner: true,
    },
    {
      feature: "Pricing Model",
      freelancer: "Hourly billing with no clear finish line.",
      bigAgency: "$10,000–$25,000 upfront setup fees.",
      pethalvoid: "Transparent fixed-scope milestones ($800–$2,500) or predictable retainers.",
      winner: true,
    },
    {
      feature: "Communication & Velocity",
      freelancer: "Unreliable updates and slow async turnaround.",
      bigAgency: "3 layers of account managers before reaching an engineer.",
      pethalvoid: "Direct collaboration with lead systems architect. Clear async video walkthroughs.",
      winner: true,
    },
  ];

  return (
    <section id="comparison" className="w-full bg-[#080808] border-b-2 border-[#262626] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-[#333333] mb-4 font-mono-tech text-xs text-[#f5e642]">
            <span className="w-2 h-2 bg-[#f5e642]"></span>
            <span>// TRANSPARENT BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Why Engineering-First Beats <br />
            <span className="text-[#f5e642]">Amateur Automation.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#999999] max-w-2xl">
            See how PETHALVOID compares to standard freelance marketplaces and legacy consulting firms.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="w-full overflow-x-auto border-2 border-[#333333] bg-[#0f0f0f]">
          <table className="w-full text-left border-collapse min-w-[750px] font-mono-tech text-xs">
            <thead>
              <tr className="border-b-2 border-[#333333] bg-[#161616] text-[#888888]">
                <th className="p-4 sm:p-5 uppercase font-bold w-1/4">CAPABILITY / SPEC</th>
                <th className="p-4 sm:p-5 uppercase font-bold w-1/4 text-[#888888]">
                  TYPICAL FREELANCER
                </th>
                <th className="p-4 sm:p-5 uppercase font-bold w-1/4 text-[#888888]">
                  LEGACY AGENCY
                </th>
                <th className="p-4 sm:p-5 uppercase font-bold w-1/4 bg-[#1a1a1a] text-[#f5e642] border-l-2 border-[#f5e642]">
                  ★ PETHALVOID
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222222]">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#141414] transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-white uppercase bg-[#111111]/50">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-[#888888] leading-relaxed">
                    {row.freelancer}
                  </td>
                  <td className="p-4 sm:p-5 text-[#888888] leading-relaxed">
                    {row.bigAgency}
                  </td>
                  <td className="p-4 sm:p-5 text-[#f4f4f4] bg-[#141414] font-semibold border-l-2 border-[#f5e642] leading-relaxed">
                    <span className="text-[#f5e642] mr-1.5">✓</span>
                    {row.pethalvoid}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
