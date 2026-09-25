"use client";

import React, { useState } from "react";

export default function LiveProof() {
  const [activeTab, setActiveTab] = useState<"router" | "agent" | "infra">("router");

  return (
    <section id="architecture" className="w-full bg-[#0b0b0b] border-b-2 border-[#262626] py-20 lg:py-28 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-[#333333] mb-4 font-mono-tech text-xs text-[#22c55e]">
            <span className="w-2 h-2 bg-[#22c55e]"></span>
            <span>// ARCHITECTURAL TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            See the Real Engineering. <br />
            <span className="text-[#f5e642]">Not Just Fancy Slideware.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#999999] max-w-2xl">
            We operate our own production clusters. Inspect our live n8n workflow architecture or explore our multi-agent runtime blueprints.
          </p>
        </div>

        {/* Live Demo Showcase Card */}
        <div className="brutalist-card p-6 sm:p-10 bg-[#121212] border-2 border-[#333333] mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b-2 border-[#222222]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2 font-mono-tech text-xs">
                <span className="px-2.5 py-0.5 bg-[#22c55e]/20 text-[#22c55e] border border-[#22c55e]/40 font-bold">
                  ● PRODUCTION BLUEPRINT
                </span>
                <span className="text-[#888888]">RUNTIME: n8n + DOCKER CLUSTER</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                Enterprise Multi-Channel Router & Approval Matrix
              </h3>
              <p className="text-sm text-[#aaaaaa] mt-1 max-w-2xl">
                Production-grade webhook router handling multi-tenant JSON payloads, Redis message debounce buffering, and automatic database failover.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#booking"
                className="brutalist-btn-acid px-6 py-3.5 font-mono-tech text-xs uppercase font-bold tracking-wider inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>REQUEST TAILORED ARCHITECTURE CALL</span>
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Architecture Visualizer Interactive Tabs */}
          <div className="pt-8">
            <div className="flex flex-wrap items-center gap-2 mb-6 font-mono-tech text-xs">
              <button
                onClick={() => setActiveTab("router")}
                className={`px-4 py-2 uppercase font-bold border transition-colors ${
                  activeTab === "router"
                    ? "bg-[#f5e642] text-[#080808] border-[#f5e642]"
                    : "bg-[#181818] text-[#888888] border-[#333333] hover:text-white"
                }`}
              >
                01. Webhook Router & Idempotency
              </button>
              <button
                onClick={() => setActiveTab("agent")}
                className={`px-4 py-2 uppercase font-bold border transition-colors ${
                  activeTab === "agent"
                    ? "bg-[#f5e642] text-[#080808] border-[#f5e642]"
                    : "bg-[#181818] text-[#888888] border-[#333333] hover:text-white"
                }`}
              >
                02. LangGraph State Flow & RAG
              </button>
              <button
                onClick={() => setActiveTab("infra")}
                className={`px-4 py-2 uppercase font-bold border transition-colors ${
                  activeTab === "infra"
                    ? "bg-[#f5e642] text-[#080808] border-[#f5e642]"
                    : "bg-[#181818] text-[#888888] border-[#333333] hover:text-white"
                }`}
              >
                03. Self-Hosted Infrastructure SLA
              </button>
            </div>

            {/* Tab 1: Webhook Router */}
            {activeTab === "router" && (
              <div className="bg-[#080808] border border-[#262626] p-6 font-mono-tech text-xs leading-relaxed space-y-4">
                <div className="text-[#f5e642] font-bold text-sm uppercase">
                  // RESILIENT WEBHOOK INGESTION PIPELINE
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
                  <div className="bg-[#141414] p-3 border border-[#333333]">
                    <div className="text-[#888888] text-[10px] mb-1">STAGE 1</div>
                    <div className="text-white font-bold">INBOUND WEBHOOK</div>
                    <div className="text-[10px] text-[#666666] mt-1">Stripe / CRM / Custom App</div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-[#f5e642] text-lg font-bold">→</div>
                  <div className="bg-[#141414] p-3 border border-[#f5e642]">
                    <div className="text-[#f5e642] text-[10px] mb-1">STAGE 2 [CRITICAL]</div>
                    <div className="text-white font-bold">REDIS DEDUP & LOCK</div>
                    <div className="text-[10px] text-[#22c55e] mt-1">Zero Duplicate Triggers</div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-[#f5e642] text-lg font-bold">→</div>
                  <div className="bg-[#141414] p-3 border border-[#333333]">
                    <div className="text-[#888888] text-[10px] mb-1">STAGE 3</div>
                    <div className="text-white font-bold">SCHEMA ENFORCEMENT</div>
                    <div className="text-[10px] text-[#666666] mt-1">Type Guard & Sanitization</div>
                  </div>
                </div>

                <div className="bg-[#111111] p-4 border-l-2 border-[#22c55e] text-[#cccccc] text-[11px] space-y-1">
                  <div className="text-[#22c55e] font-bold">★ WHY THIS MATTERS FOR YOUR BUSINESS:</div>
                  <div>
                    If an upstream API retries a webhook 3 times, standard Zapier workflows charge you 3x and trigger 3 duplicate emails or invoices. Our Redis idempotency layer absorbs duplicate payloads in sub-5ms, ensuring clean single executions.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: LangGraph State Flow */}
            {activeTab === "agent" && (
              <div className="bg-[#080808] border border-[#262626] p-6 font-mono-tech text-xs leading-relaxed space-y-4">
                <div className="text-[#f5e642] font-bold text-sm uppercase">
                  // DETERMINISTIC MULTI-AGENT STATE GRAPH
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-[#141414] p-3 border border-[#333333]">
                    <div className="text-[#888888] text-[10px] mb-1">INPUT</div>
                    <div className="text-white font-bold">USER PROMPT / DOC</div>
                    <div className="text-[10px] text-[#666666] mt-1">WhatsApp / Web / Email</div>
                  </div>
                  <div className="bg-[#141414] p-3 border border-[#333333]">
                    <div className="text-[#888888] text-[10px] mb-1">CONTEXT</div>
                    <div className="text-white font-bold">HYBRID VECTOR RAG</div>
                    <div className="text-[10px] text-[#666666] mt-1">Postgres + Pgvector</div>
                  </div>
                  <div className="bg-[#141414] p-3 border border-[#f5e642]">
                    <div className="text-[#f5e642] text-[10px] mb-1">REASONING</div>
                    <div className="text-white font-bold">LANGGRAPH ROUTER</div>
                    <div className="text-[10px] text-[#22c55e] mt-1">Cyclic Self-Correction</div>
                  </div>
                  <div className="bg-[#141414] p-3 border border-[#333333]">
                    <div className="text-[#888888] text-[10px] mb-1">OUTPUT</div>
                    <div className="text-white font-bold">STRUCTURED ACTION</div>
                    <div className="text-[10px] text-[#666666] mt-1">API Call / Database Write</div>
                  </div>
                </div>

                <div className="bg-[#111111] p-4 border-l-2 border-[#f5e642] text-[#cccccc] text-[11px] space-y-1">
                  <div className="text-[#f5e642] font-bold">★ DETERMINISTIC GUARANTEE:</div>
                  <div>
                    If an LLM output fails JSON schema validation, the LangGraph agent intercepts the malformed output, feeds the error stack back into a correction loop, and reprompts until validation passes — before any external API is touched.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Infrastructure */}
            {activeTab === "infra" && (
              <div className="bg-[#080808] border border-[#262626] p-6 font-mono-tech text-xs leading-relaxed space-y-4">
                <div className="text-[#f5e642] font-bold text-sm uppercase">
                  // CLOUD-ISOLATED INFRASTRUCTURE TOPOLOGY
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#141414] p-4 border border-[#333333]">
                    <div className="text-[#f5e642] font-bold text-sm mb-1">01. ISOLATED VPS / DOCKER</div>
                    <div className="text-[#aaaaaa] text-xs leading-relaxed">
                      Deployed on your own DigitalOcean, Hetzner, AWS, or GCP instance. Complete data ownership with encrypted environment vaults.
                    </div>
                  </div>
                  <div className="bg-[#141414] p-4 border border-[#333333]">
                    <div className="text-[#f5e642] font-bold text-sm mb-1">02. AUTOMATED BACKUPS</div>
                    <div className="text-[#aaaaaa] text-xs leading-relaxed">
                      Daily PostgreSQL state snapshots and workflow JSON backups synced to isolated S3 storage buckets with 1-click restore capability.
                    </div>
                  </div>
                  <div className="bg-[#141414] p-4 border border-[#333333]">
                    <div className="text-[#f5e642] font-bold text-sm mb-1">03. TELEMETRY & ALERTS</div>
                    <div className="text-[#aaaaaa] text-xs leading-relaxed">
                      Continuous health-check polling with instant Telegram/Slack ping upon any 5xx error or rate-limit saturation.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Founder & Communication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="brutalist-card p-6 bg-[#121212] border-2 border-[#262626]">
            <div className="font-mono-tech text-xs text-[#f5e642] font-bold uppercase mb-2">
              // LEAD ARCHITECT
            </div>
            <div className="text-xl font-bold text-white uppercase mb-1">
              Muhammad Yafizham
            </div>
            <div className="font-mono-tech text-xs text-[#777777] mb-4">
              Full-Stack & AI Systems Engineer
            </div>
            <p className="text-sm text-[#aaaaaa] leading-relaxed">
              Specialist in Python (FastAPI/LangGraph), TypeScript (Next.js/NestJS), and distributed workflow topologies.
            </p>
          </div>

          <div className="brutalist-card p-6 bg-[#121212] border-2 border-[#262626]">
            <div className="font-mono-tech text-xs text-[#22c55e] font-bold uppercase mb-2">
              // ENGINEERING STANDARDS
            </div>
            <div className="text-xl font-bold text-white uppercase mb-1">
              Production-Grade SLA
            </div>
            <div className="font-mono-tech text-xs text-[#777777] mb-4">
              Fault-Tolerant Pipelines
            </div>
            <p className="text-sm text-[#aaaaaa] leading-relaxed">
              Every workflow is engineered with automated health checks, Dead-Letter fallback queues, and complete architecture documentation.
            </p>
          </div>

          <div className="brutalist-card p-6 bg-[#121212] border-2 border-[#262626]">
            <div className="font-mono-tech text-xs text-[#ffffff] font-bold uppercase mb-2">
              // TIMEZONE OVERLAP
            </div>
            <div className="text-xl font-bold text-white uppercase mb-1">
              US / EU / AU Friendly
            </div>
            <div className="font-mono-tech text-xs text-[#777777] mb-4">
              EST / PST / GMT / AEST Sync
            </div>
            <p className="text-sm text-[#aaaaaa] leading-relaxed">
              Flexible scheduling for kickoff calls, daily sprint updates, and guaranteed 4-hour incident response SLA during active retainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
