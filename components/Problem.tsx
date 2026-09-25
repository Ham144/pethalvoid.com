"use client";

import React from "react";

export default function Problem() {
  const painPoints = [
    {
      num: "01",
      title: "The Escalating 'Zapier Tax'",
      subtitle: "$600–$2,000/month for task limits",
      desc: "Every new lead or webhook execution increases your monthly SaaS bill. You are paying a recurring penalty just for your business growing.",
      icon: "💸",
    },
    {
      num: "02",
      title: "The 2:00 AM Silent Failure",
      subtitle: "Zero error handling & lost leads",
      desc: "An upstream API changed a field name from 'customer_id' to 'clientId'. The workflow died silently. You lost 40 inbound qualified leads before anyone noticed.",
      icon: "⚠️",
    },
    {
      num: "03",
      title: "The Disappearing Freelancer",
      subtitle: "Blackbox spaghetti, zero documentation",
      desc: "They wired 50 nodes together, got paid, and left. Now nobody on your engineering team dares to touch it because changing one variable breaks everything.",
      icon: "👻",
    },
    {
      num: "04",
      title: "The Unreliable AI 'Toy'",
      subtitle: "Hallucinating prompts & malformed JSON",
      desc: "Generic AI chatbots with no state persistence or schema enforcement that send broken replies to VIP clients and corrupt your Postgres records.",
      icon: "🤖",
    },
  ];

  return (
    <section className="w-full bg-[#0d0d0d] border-b-2 border-[#262626] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-[#333333] mb-4 font-mono-tech text-xs text-[#ff3b3b]">
            <span className="w-2 h-2 bg-[#ff3b3b]"></span>
            <span>// THE REALITY OF AMATEUR AUTOMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Most "Automations" Are Just <br className="hidden sm:inline" />
            <span className="text-[#ff3b3b] underline decoration-[#ff3b3b]/40">Outsourced Technical Debt.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#999999] max-w-2xl">
            If your automated pipeline breaks when an API sneezes, you don&apos;t have an automation. You have an unmonitored liability.
          </p>
        </div>

        {/* 4 Pain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((p, idx) => (
            <div
              key={idx}
              className="brutalist-card p-6 sm:p-8 bg-[#121212] border-2 border-[#2a2a2a] relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="font-mono-tech text-2xl font-black text-[#f5e642]">
                  // {p.num}
                </div>
                <div className="text-2xl">{p.icon}</div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mb-1">
                {p.title}
              </h3>
              <div className="font-mono-tech text-xs text-[#ff3b3b] uppercase tracking-wider mb-4 font-bold">
                {p.subtitle}
              </div>

              <p className="text-sm sm:text-base text-[#aaaaaa] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Brutalist Contrast Statement Bar */}
        <div className="w-full bg-[#161616] border-2 border-[#f5e642] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-mono-tech text-xs text-[#f5e642] uppercase tracking-wider font-bold mb-1">
              THE PETHALVOID DIFFERENCE
            </span>
            <span className="text-lg sm:text-2xl font-bold uppercase text-white">
              We build systems that self-heal, retry automatically, and hand over 100% of the IP to you.
            </span>
          </div>
          <a
            href="#architecture"
            className="brutalist-btn-acid px-6 py-3 font-mono-tech text-xs uppercase font-bold tracking-wider whitespace-nowrap"
          >
            VIEW SYSTEM ARCHITECTURE →
          </a>
        </div>
      </div>
    </section>
  );
}
