"use client";

import React, { useState } from "react";

export default function BookingCTA() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yafizham@pethalvoid.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="booking" className="w-full bg-[#080808] border-b-2 border-[#262626] py-20 lg:py-28 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="brutalist-card p-8 sm:p-14 bg-[#111111] border-2 border-[#f5e642] relative overflow-hidden">
          {/* Decorative Corner Tag */}
          <div className="absolute top-0 right-0 bg-[#f5e642] text-[#080808] font-mono-tech text-xs font-black uppercase px-4 py-1.5 border-b-2 border-l-2 border-[#080808]">
            // INITIATE ENGAGEMENT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#333333] mb-6 font-mono-tech text-xs text-[#f5e642]">
                <span className="w-2 h-2 bg-[#22c55e] animate-pulse"></span>
                <span>ACCEPTING NEW CLIENT PROJECTS FOR Q4</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
                Ready to Stop Fighting <br />
                With Your Automation?
              </h2>

              <p className="text-base sm:text-lg text-[#aaaaaa] max-w-xl mb-8 leading-relaxed">
                Schedule a complimentary 30-minute technical audit. We will inspect your current workflow bottlenecks, calculate your exact self-hosted n8n cost savings, and provide an actionable blueprint — zero sales pressure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
                {/* Calendly Booking Link (Users can insert their specific calendar link) */}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-btn-acid px-8 py-4 text-center font-mono-tech text-xs uppercase font-bold tracking-wider"
                >
                  SCHEDULE 30-MIN STRATEGY CALL ↗
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="brutalist-btn-stark px-6 py-4 text-center font-mono-tech text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
                >
                  <span>{copiedEmail ? "✓ EMAIL COPIED!" : "COPY DIRECT EMAIL"}</span>
                  <span className="text-[#888888]">yafizham@pethalvoid.com</span>
                </button>
              </div>

              {/* Response SLA Guarantee */}
              <div className="flex flex-wrap items-center gap-4 font-mono-tech text-xs text-[#777777] border-t border-[#222222] pt-4 w-full">
                <span className="text-[#22c55e]">● &lt; 4-HOUR RESPONSE GUARANTEE</span>
                <span>|</span>
                <span>EST / PST / GMT TIMEZONES</span>
                <span>|</span>
                <span>DIRECT FOUNDER ENGAGEMENT</span>
              </div>
            </div>

            {/* Right Col: Direct Access Box (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#0c0c0c] border-2 border-[#333333] p-6 sm:p-8 font-mono-tech text-xs space-y-4">
                <div className="text-white font-bold text-sm uppercase pb-3 border-b border-[#222222] flex items-center justify-between">
                  <span>// DIRECT CONTACT CHANNELS</span>
                  <span className="text-[#f5e642] text-[10px]">VERIFIED 100%</span>
                </div>

                <div className="space-y-3 text-[#cccccc]">
                  <div className="p-3 bg-[#141414] border border-[#262626]">
                    <div className="text-[#777777] text-[10px] uppercase mb-0.5">DIRECT EMAIL (ENCRYPTED)</div>
                    <a href="mailto:yafizham@pethalvoid.com" className="text-[#f5e642] hover:underline font-bold text-sm">
                      yafizham@pethalvoid.com
                    </a>
                  </div>

                  <div className="p-3 bg-[#141414] border border-[#262626]">
                    <div className="text-[#777777] text-[10px] uppercase mb-0.5">DIRECT WHATSAPP / ASYNC</div>
                    <a
                      href="https://wa.me/6283854026650"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#22c55e] font-bold text-sm"
                    >
                      +62 838-5402-6650 ↗
                    </a>
                  </div>

                  <div className="p-3 bg-[#141414] border border-[#262626]">
                    <div className="text-[#777777] text-[10px] uppercase mb-0.5">PRIVATE ARCHITECTURE DEMO</div>
                    <div className="text-[#f5e642] font-bold text-sm">
                      Walkthrough on 30-Min Call
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] text-[#666666] leading-relaxed">
                  * All client workflows signed under strict mutual NDA with encrypted environment variable vaults.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
