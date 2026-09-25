"use client";

import React from "react";

export default function Process() {
  const steps = [
    {
      num: "01",
      name: "30-MIN BOTTLENECK AUDIT",
      timeline: "Day 1",
      desc: "We hop on a focused strategy call to map your current automation stack, identify recurring API failure points, and calculate your exact Zapier/task savings.",
      output: "Deliverable: 1-page Bottleneck Diagnostic Map",
    },
    {
      num: "02",
      name: "ARCHITECTURE BLUEPRINT",
      timeline: "Day 2 – 3",
      desc: "We produce the complete technical specification: schema definitions, webhook fallback logic, database topology, and a fixed-price milestone contract.",
      output: "Deliverable: Signed Blueprint & Fixed Price Agreement",
    },
    {
      num: "03",
      name: "RAPID BUILD & STRESS-TESTING",
      timeline: "Day 4 – 10",
      desc: "We engineer the workflows in isolated staging environments. We simulate malformed payloads, rate limits, and network timeouts to ensure 100% idempotency.",
      output: "Deliverable: Fully Tested Staging Runtime & Video Demo",
    },
    {
      num: "04",
      name: "ZERO-DOWNTIME HANDOVER",
      timeline: "Day 10 – 14",
      desc: "We cut over your production DNS/webhooks seamlessly, configure automated backups & Telegram/Slack monitoring, and transfer all Git repositories & credentials.",
      output: "Deliverable: Production Deployment + Handover Docs + SLA",
    },
  ];

  return (
    <section id="process" className="w-full bg-[#0d0d0d] border-b-2 border-[#262626] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-[#333333] mb-4 font-mono-tech text-xs text-[#f5e642]">
            <span className="w-2 h-2 bg-[#f5e642]"></span>
            <span>// PREDICTABLE EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            How We Take You From Chaos <br />
            <span className="text-[#f5e642]">To 99.9% Uptime in 14 Days.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#999999] max-w-2xl">
            A battle-tested 4-step engineering sprint designed to deliver maximum operational velocity with zero disruption to your daily business.
          </p>
        </div>

        {/* 4 Steps Horizontal / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="brutalist-card p-6 bg-[#121212] border-2 border-[#2a2a2a] flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#222222] pb-3">
                  <span className="font-mono-tech text-3xl font-black text-[#f5e642]">
                    // {step.num}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#888888] uppercase bg-[#181818] px-2 py-1 border border-[#333333]">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold uppercase text-white mb-3">
                  {step.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#aaaaaa] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="border-t border-[#222222] pt-4 font-mono-tech text-[11px] text-[#22c55e] bg-[#0a0a0a] p-3 -mx-2 -mb-2 border border-[#222222]">
                <span className="font-bold">✓ </span>
                {step.output}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
