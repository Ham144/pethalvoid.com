"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080808]/95 backdrop-blur-md border-b-2 border-[#262626]">
      {/* System Status Top Bar */}
      <div className="w-full bg-[#111111] px-4 py-1.5 border-b border-[#222222] flex items-center justify-between text-[11px] font-mono-tech text-[#888888]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#22c55e] animate-pulse"></span>
          <span className="text-[#cccccc]">STATUS: ALL SYSTEMS OPERATIONAL</span>
          <span className="hidden md:inline text-[#555555]">|</span>
          <span className="hidden md:inline text-[#888888]">NODE RUNTIME: n8n 1.82.0 + LANGGRAPH</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#f5e642]">GLOBAL CLIENT ENGAGEMENT: OPEN</span>
          <span className="hidden sm:inline text-[#666666]">IELTS BAND 7 EN</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Wordmark Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#f5e642] flex items-center justify-center font-mono-tech font-bold text-[#080808] text-lg border border-[#080808] group-hover:rotate-6 transition-transform">
            PV
          </div>
          <div className="flex flex-col">
            <span className="font-mono-tech font-bold text-lg tracking-wider text-white group-hover:text-[#f5e642] transition-colors">
              PETHALVOID
            </span>
            <span className="text-[9px] font-mono-tech uppercase tracking-widest text-[#777777] -mt-1">
              AI Operations Studio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-wider text-[#aaaaaa]">
          <a href="#services" className="hover:text-[#f5e642] transition-colors">
            // 01.SERVICES
          </a>
          <a href="#architecture" className="hover:text-[#f5e642] transition-colors">
            // 02.PROOF & ARCHITECTURE
          </a>
          <a href="#comparison" className="hover:text-[#f5e642] transition-colors">
            // 03.VS OTHERS
          </a>
          <a href="#process" className="hover:text-[#f5e642] transition-colors">
            // 04.PROCESS
          </a>
          <a href="#pricing" className="hover:text-[#f5e642] transition-colors">
            // 05.PRICING
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#booking"
            className="brutalist-btn-acid px-4 py-2 font-mono-tech text-xs uppercase tracking-wider font-bold"
          >
            SCHEDULE AUDIT ↗
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white border border-[#333333] hover:border-[#f5e642] font-mono-tech text-xs"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-b-2 border-[#f5e642] px-6 py-6 flex flex-col gap-4 font-mono-tech text-sm">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#cccccc] hover:text-[#f5e642] py-1 border-b border-[#222222]"
          >
            01. SERVICES
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#cccccc] hover:text-[#f5e642] py-1 border-b border-[#222222]"
          >
            02. PROOF & ARCHITECTURE
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#cccccc] hover:text-[#f5e642] py-1 border-b border-[#222222]"
          >
            03. VS OTHERS
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#cccccc] hover:text-[#f5e642] py-1 border-b border-[#222222]"
          >
            04. PROCESS
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#cccccc] hover:text-[#f5e642] py-1 border-b border-[#222222]"
          >
            05. PRICING & PACKAGES
          </a>
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="brutalist-btn-acid w-full text-center py-3 mt-2 uppercase font-bold text-xs"
          >
            SCHEDULE 30-MIN AUDIT ↗
          </a>
        </div>
      )}
    </header>
  );
}
