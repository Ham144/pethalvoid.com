"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-[#888888] font-mono-tech text-xs py-12 border-t-2 border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#222222]">
          {/* Col 1: Wordmark & Tag */}
          <div className="md:col-span-2 flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#f5e642] flex items-center justify-center font-bold text-[#080808] text-sm">
                PV
              </div>
              <span className="font-bold text-white text-base tracking-wider">
                PETHALVOID
              </span>
            </div>
            <p className="text-xs text-[#777777] max-w-sm leading-relaxed">
              Strategic AI Operations & Fault-Tolerant Automation Studio for global businesses. Headquartered on cloud infrastructure. Built by Muhammad Yafizham Batubara.
            </p>
            <div className="text-[11px] text-[#22c55e] flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full"></span>
              <span>Global Availability: US / EU / AU / APAC</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold uppercase mb-1">// CAPABILITIES</span>
            <a href="#services" className="hover:text-[#f5e642] transition-colors">
              Zapier → n8n Migration
            </a>
            <a href="#services" className="hover:text-[#f5e642] transition-colors">
              LangGraph Multi-Agent RAG
            </a>
            <a href="#services" className="hover:text-[#f5e642] transition-colors">
              WhatsApp & Slack Orchestrators
            </a>
            <a href="#services" className="hover:text-[#f5e642] transition-colors">
              Fractional AI Retainer & SLA
            </a>
          </div>

          {/* Col 3: Direct Endpoints */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold uppercase mb-1">// ENDPOINTS</span>
            <a href="mailto:yafizham@pethalvoid.com" className="hover:text-[#f5e642] transition-colors">
              yafizham@pethalvoid.com
            </a>
            <a
              href="https://n8n.pethalvoid.com/workflow/MqdQMEdI5CJkSMBZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5e642] transition-colors"
            >
              n8n.pethalvoid.com ↗
            </a>
            <a
              href="https://github.com/Ham144"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5e642] transition-colors"
            >
              github.com/Ham144 ↗
            </a>
            <a
              href="https://linkedin.com/in/muhammad-yafizham-batubara-b589051a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5e642] transition-colors"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666666]">
          <div>
            © {new Date().getFullYear()} PETHALVOID. All systems monitored. Zero technical debt accepted.
          </div>
          <div className="flex items-center gap-6">
            <span>UPTIME: 99.98%</span>
            <span>ENCRYPTED VAULTS</span>
            <span>IELTS 7.0 EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
