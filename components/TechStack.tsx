"use client";

import React from "react";

export default function TechStack() {
  const stack = [
    { name: "n8n Self-Hosted", role: "Primary Workflow Orchestration Engine", type: "Core Runtime" },
    { name: "LangGraph / LangChain", role: "Deterministic State Graphs & Cyclic Agents", type: "AI Framework" },
    { name: "Python / FastAPI", role: "Custom Code Nodes & Microservices", type: "Backend Logic" },
    { name: "PostgreSQL + Pgvector", role: "Persistent State & Hybrid Semantic RAG", type: "Database" },
    { name: "Redis", role: "Sub-5ms Webhook Deduplication & Queue Locks", type: "Caching / Queues" },
    { name: "Docker & Compose", role: "Isolated Cloud Container Topologies", type: "Infrastructure" },
    { name: "TypeScript / Next.js", role: "Custom Internal Dashboards & Portals", type: "Frontend" },
    { name: "OpenAI / Claude 3.7", role: "Structured JSON Output Generation", type: "LLM Inference" },
  ];

  return (
    <section className="w-full bg-[#080808] border-b-2 border-[#262626] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#f5e642]"></span>
            <span className="font-mono-tech text-xs uppercase font-bold tracking-wider text-[#888888]">
              // PRODUCTION STACK SPECIFICATIONS
            </span>
          </div>
          <span className="font-mono-tech text-xs text-[#666666]">
            ZERO PROPRIETARY NO-CODE LOCK-IN
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-tech">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111111] p-4 border border-[#222222] hover:border-[#f5e642] transition-colors"
            >
              <div className="text-[10px] text-[#f5e642] uppercase font-bold mb-1">
                {item.type}
              </div>
              <div className="text-sm font-bold text-white uppercase mb-1">
                {item.name}
              </div>
              <div className="text-[11px] text-[#777777] leading-tight">
                {item.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
