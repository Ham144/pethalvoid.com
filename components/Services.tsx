"use client";

import React from "react";

export default function Services() {
  const services = [
    {
      id: "01",
      tag: "CORE MIGRATION & INFRASTRUCTURE",
      title: "Zapier / Make → Self-Hosted n8n Migration",
      pitch: "Stop paying $500–$2,000/mo in recurring automation task taxes. Own your pipeline forever with zero execution limits.",
      deliverables: [
        "Complete scenario migration (Zapier/Make -> self-hosted n8n)",
        "Dockerized production deployment with PostgreSQL backend",
        "Webhook idempotency & Redis deduping (no double-billing or spam)",
        "Automated Dead-Letter Queue & instant Slack/Email alerts on failure",
        "Interactive documentation & node-level architecture diagram",
      ],
      price: "FROM $800",
      priceType: "Fixed Milestone",
      timeline: "5 – 10 Business Days",
      badge: "MOST POPULAR ROI",
      highlightColor: "#f5e642",
    },
    {
      id: "02",
      tag: "AGENTIC AI SYSTEMS",
      title: "LangGraph Production AI Agents & RAG Pipelines",
      pitch: "Deploy deterministic, multi-agent AI systems that handle complex lead qualification, customer intake, and document workflows without hallucination.",
      deliverables: [
        "LangGraph state graph with cyclic retry & human-in-the-loop triggers",
        "Enterprise RAG with Pgvector & hybrid semantic search",
        "WhatsApp / Slack / CRM multi-channel integration",
        "Strict Pydantic / JSON schema output validation",
        "Full Python / FastAPI microservice or isolated n8n node wrapping",
      ],
      price: "FROM $2,500",
      priceType: "Fixed Milestone",
      timeline: "2 – 3 Weeks",
      badge: "HIGH IMPACT",
      highlightColor: "#ffffff",
    },
    {
      id: "03",
      tag: "ONGOING RELIABILITY & DEV",
      title: "Fractional AI Operations & SLA Retainer",
      pitch: "Dedicated engineering capacity to maintain, monitor, and continuously enhance your AI automations with guaranteed incident SLA.",
      deliverables: [
        "24/7 telemetry monitoring & zero-downtime cluster updates",
        "10 hours of active new feature development every month",
        "Guaranteed < 4-hour incident response SLA",
        "Monthly architecture optimization & security audits",
        "Direct Slack/Discord private channel with lead engineer",
      ],
      price: "FROM $800",
      priceType: "/ Month",
      timeline: "Ongoing Sprint",
      badge: "FULL PEACE OF MIND",
      highlightColor: "#22c55e",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#080808] border-b-2 border-[#262626] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-[#333333] mb-4 font-mono-tech text-xs text-[#f5e642]">
              <span className="w-2 h-2 bg-[#f5e642]"></span>
              <span>// OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Engineered for Uptime. <br />
              <span className="text-[#f5e642]">Priced for Predictability.</span>
            </h2>
          </div>
          <p className="font-mono-tech text-xs sm:text-sm text-[#888888] max-w-md">
            No hourly bill shock. All projects delivered on fixed-scope milestone agreements with clean Git repositories and documented handover.
          </p>
        </div>

        {/* 3 Asymmetric Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="brutalist-card p-6 sm:p-8 bg-[#111111] flex flex-col justify-between border-2 border-[#2a2a2a] relative group"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#222222] pb-3">
                  <span className="font-mono-tech text-2xl font-black text-[#f5e642]">
                    // {s.id}
                  </span>
                  <span
                    className="font-mono-tech text-[10px] uppercase tracking-widest px-2.5 py-1 font-bold border"
                    style={{ borderColor: s.highlightColor, color: s.highlightColor }}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="font-mono-tech text-[11px] text-[#777777] uppercase tracking-wider mb-2 font-bold">
                  {s.tag}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-4 leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-[#b0b0b0] mb-6 leading-relaxed">
                  {s.pitch}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 mb-8 border-t border-[#222222] pt-4 font-mono-tech text-xs">
                  <div className="text-[#666666] uppercase text-[10px] tracking-wider mb-2 font-bold">
                    [INCLUDED DELIVERABLES]
                  </div>
                  {s.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-[#cccccc]">
                      <span className="text-[#f5e642] font-bold">✓</span>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Price & CTA */}
              <div className="border-t-2 border-[#222222] pt-6 mt-4 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono-tech">
                      {s.price}
                    </span>
                    <span className="text-[10px] font-mono-tech text-[#888888] uppercase">
                      {s.priceType}
                    </span>
                  </div>
                  <span className="font-mono-tech text-[11px] text-[#888888] bg-[#161616] px-2.5 py-1 border border-[#333333]">
                    ⚡ {s.timeline}
                  </span>
                </div>

                <a
                  href="#booking"
                  className="brutalist-btn-acid w-full text-center py-3 font-mono-tech text-xs uppercase font-bold tracking-wider"
                >
                  REQUEST SCOPE & QUOTE ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
