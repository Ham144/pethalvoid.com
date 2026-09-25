"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {
  const [ticks, setTicks] = useState(14820);
  const [lastPing, setLastPing] = useState("12ms");

  useEffect(() => {
    const interval = setInterval(() => {
      setTicks((prev) => prev + 1);
      setLastPing(`${Math.floor(10 + Math.random() * 8)}ms`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full border-b-2 border-[#262626] bg-grid-pattern overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Ambience / Subtle Noise */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5e642]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Statement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#333333] mb-6 font-mono-tech text-xs text-[#f5e642]">
              <span className="w-1.5 h-1.5 bg-[#f5e642]"></span>
              <span>// GLOBAL PRODUCTION-GRADE AI ENGINEERING</span>
            </div>

            {/* Giant Brutalist Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6">
              AI Systems <br />
              <span className="text-[#f5e642]">That Actually Work</span> <br />
              In Production.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#b0b0b0] font-normal leading-relaxed max-w-2xl mb-8">
              We build self-healing <span className="text-white font-semibold">n8n automation pipelines</span> and{" "}
              <span className="text-white font-semibold">LangGraph AI agents</span> for fast-growing global SMBs.
              Engineered with retry idempotency, dead-letter queues, and zero ongoing vendor lock-in.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#booking"
                className="brutalist-btn-acid px-8 py-4 text-center font-mono-tech text-sm uppercase tracking-wider font-bold"
              >
                BOOK FREE STRATEGY AUDIT ↗
              </a>
              <a
                href="https://n8n.pethalvoid.com/workflow/MqdQMEdI5CJkSMBZ"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-btn-stark px-6 py-4 text-center font-mono-tech text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 bg-[#22c55e]"></span>
                SEE LIVE n8n DEMO ↗
              </a>
            </div>

            {/* Trust Badges Minimal Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xl border-t-2 border-[#222222] pt-6 font-mono-tech text-[11px] text-[#888888]">
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">ZERO LOCK-IN</span>
                <span>Self-hosted infra</span>
              </div>
              <div className="flex flex-col border-l border-[#222222] pl-3">
                <span className="text-[#f5e642] font-bold text-sm">SLA BACKED</span>
                <span>Idempotent pipelines</span>
              </div>
              <div className="flex flex-col border-l border-[#222222] pl-3">
                <span className="text-white font-bold text-sm">IELTS 7.0 EN</span>
                <span>Fluent async & sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Terminal Box (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="brutalist-card p-0 relative overflow-hidden bg-[#0c0c0c] border-2 border-[#333333] hover:border-[#f5e642] transition-colors">
              {/* Terminal Title Bar */}
              <div className="bg-[#181818] border-b-2 border-[#333333] px-4 py-2.5 flex items-center justify-between font-mono-tech text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#ff5f56] border border-[#990000]"></div>
                  <div className="w-3 h-3 bg-[#ffbd2e] border border-[#997700]"></div>
                  <div className="w-3 h-3 bg-[#27c93f] border border-[#006600]"></div>
                  <span className="text-[#999999] ml-2 text-[11px]">telemetry@pethalvoid-cluster</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#22c55e]">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] animate-ping"></span>
                  LIVE FEED
                </div>
              </div>

              {/* Terminal Body with Monospace Realism */}
              <div className="p-5 font-mono-tech text-xs text-[#d4d4d4] space-y-3 scanline leading-relaxed bg-[#0a0a0a]">
                <div className="text-[#666666]">
                  $ pethalvoid-ctl inspect --environment=production
                </div>

                <div className="p-2.5 bg-[#141414] border-l-2 border-[#f5e642] text-[11px] space-y-1">
                  <div className="text-white font-bold">// SYSTEM TELEMETRY ACTIVE</div>
                  <div className="text-[#888888]">Cluster ID: pv-cluster-us-east-4</div>
                  <div className="text-[#888888]">Transactions Processed: <span className="text-[#f5e642] font-bold">{ticks.toLocaleString()}</span></div>
                  <div className="text-[#888888]">Latency Webhook: <span className="text-[#22c55e]">{lastPing}</span></div>
                </div>

                {/* Status Checks */}
                <div className="space-y-1 text-[11px]">
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>[OK] Idempotency Dedup (Redis)</span>
                    <span className="text-[#22c55e]">ARMED</span>
                  </div>
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>[OK] Dead-Letter Webhook Fallback</span>
                    <span className="text-[#22c55e]">3x RETRY</span>
                  </div>
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>[OK] LangGraph State Router</span>
                    <span className="text-[#22c55e]">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between text-[#888888]">
                    <span>[OK] Vector Retrieval (PgVector)</span>
                    <span className="text-[#22c55e]">READY</span>
                  </div>
                </div>

                {/* Workflow Architecture Snippet */}
                <div className="border border-[#222222] bg-[#070707] p-3 text-[10px] text-[#aaaaaa]">
                  <div className="text-[#f5e642] mb-1">▶ ACTIVE FLOW: CRM-PAYLOAD-ROUTER</div>
                  <div className="text-[#666666]">
                    [Inbound Webhook] → [JSON Schema Guard] → [LangGraph Lead Qualifier] → [Postgres Tx] → [WhatsApp / Slack Alert]
                  </div>
                </div>

                {/* Prompt line */}
                <div className="flex items-center gap-2 text-[#f5e642] pt-1">
                  <span>admin@pethalvoid:~$</span>
                  <span className="w-2 h-4 bg-[#f5e642] animate-pulse"></span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="bg-[#111111] px-4 py-2 border-t border-[#222222] flex items-center justify-between font-mono-tech text-[10px] text-[#777777]">
                <span>UPTIME: 99.98% (LAST 180 DAYS)</span>
                <span className="text-[#f5e642]">0 UNCAUGHT EXCEPTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
