"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Zap,
  Shield,
  FolderTree,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Code2,
} from "lucide-react";

import { NEXUS_TELEMETRY, NexusTelemetryConfig } from "@/data/nexusTelemetry";

interface NexusShowcaseProps {
  telemetry?: NexusTelemetryConfig;
}

export default function NexusShowcase({ telemetry = NEXUS_TELEMETRY }: NexusShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"dpfh" | "swarm" | "hitl">("dpfh");

  const tools = telemetry.tools;

  return (
    <section id="nexus" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono-code text-indigo-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>FLAGSHIP ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nexus: The Compound <span className="text-gradient-indigo">Agentic Personal OS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Replacing single-prompt toy demos with a stateful, local-first compound AI system. 
            Nexus orchestrates health, career, and research workflows across a 500+ node structured domain ontology 
            with zero hallucinated file structures.
          </p>
        </div>

        {/* Interactive Deep-Dive Architecture Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setActiveTab("dpfh")}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                activeTab === "dpfh"
                  ? "bg-slate-900/90 border-indigo-500/60 shadow-lg shadow-indigo-500/10 translate-x-1"
                  : "bg-slate-950/40 border-white/[0.06] hover:bg-slate-900/50 hover:border-white/20 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-code text-indigo-400 font-semibold uppercase tracking-wider">
                  01 // ONTOLOGY &amp; CONTEXT
                </span>
                <Zap className={`w-4 h-4 ${activeTab === "dpfh" ? "text-indigo-400" : "text-slate-600"}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">
                Deterministic Pre-Flight Hydration (DPFH)
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Why live domain ontology injection outperforms traditional chunked Vector RAG for knowledge bases.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("swarm")}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                activeTab === "swarm"
                  ? "bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10 translate-x-1"
                  : "bg-slate-950/40 border-white/[0.06] hover:bg-slate-900/50 hover:border-white/20 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-code text-cyan-400 font-semibold uppercase tracking-wider">
                  02 // ORCHESTRATION SWARM
                </span>
                <Layers className={`w-4 h-4 ${activeTab === "swarm" ? "text-cyan-400" : "text-slate-600"}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">
                LangGraph Multi-Agent Router &amp; Subgraphs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Content classification, state isolation, and compiled cross-domain tool escalation.
              </p>
            </button>

            <button
              onClick={() => setActiveTab("hitl")}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                activeTab === "hitl"
                  ? "bg-slate-900/90 border-emerald-500/60 shadow-lg shadow-emerald-500/10 translate-x-1"
                  : "bg-slate-950/40 border-white/[0.06] hover:bg-slate-900/50 hover:border-white/20 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-code text-emerald-400 font-semibold uppercase tracking-wider">
                  03 // GOVERNANCE &amp; SAFETY
                </span>
                <Shield className={`w-4 h-4 ${activeTab === "hitl" ? "text-emerald-400" : "text-slate-600"}`} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">
                HITL Two-Phase Commit &amp; Control Panel
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                FastAPI SSE trace streaming and Monaco diff pre-commit review queue backed by SQLite.
              </p>
            </button>
          </div>

          {/* Right Tab Content Viewer */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
            {activeTab === "dpfh" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                      <span>DPFH vs. Traditional Vector RAG</span>
                      <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Zero LLM Cost
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Side-by-side operational architecture for structured knowledge retrieval.
                    </p>
                  </div>
                </div>

                {/* Comparison Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Traditional Vector RAG (The Problem) */}
                  <div className="p-5 rounded-2xl bg-red-950/15 border border-red-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-red-400">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span>Traditional Chunked Vector RAG</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>Chunk Fragmentation:</strong> Rips markdown tables, frontmatter, and headings into arbitrary 500-token slices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>Lost in the Middle:</strong> Semantic search retrieves out-of-context chunks without hierarchical awareness.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span><strong>Hallucinated Paths:</strong> Generates plausible but nonexistent markdown note links.</span>
                      </li>
                    </ul>
                  </div>

                  {/* DPFH Nexus Solution */}
                  <div className="p-5 rounded-2xl bg-indigo-950/25 border border-indigo-500/30 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-cyan-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      <span>Deterministic Pre-Flight Hydration</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Zero-Cost Injection:</strong> Deterministic Python pre-node injects live disk directory tree into prompt.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Whole-Document Reading:</strong> Librarian traverses exact notes and structured wiki-links natively.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>100% Grounded Links:</strong> Every citation is a verified, live Obsidian deep link.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] font-mono-code text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-500 mb-1 flex items-center justify-between">
                    <span>nexus/orchestration/dpfh_hydrator.py</span>
                    <span className="text-indigo-400">Deterministic Hook</span>
                  </div>
                  <pre className="text-indigo-200">
{`def hydrate_agent_context(state: SwarmState) -> dict:
    # 0 LLM tokens: Pure Python tree mapping & frontmatter injection
    live_tree = vault_reader.get_domain_structure(domain=state["domain"])
    curated_prompt = build_system_prompt(
        subconscious_rules=RULES_CONFIG,
        live_taxonomy=live_tree,
        conversation_summary=state["summary"]
    )
    return {"hydrated_prompt": curated_prompt}`}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === "swarm" && (
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                    <span>LangGraph Router &amp; Swarm Architecture</span>
                    <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Stateful ReAct
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Conditional edge routing with peer-isolated domain subgraphs and escalation channels.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-indigo-500/30 text-center">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono-code text-xs">
                      CR
                    </div>
                    <h5 className="text-sm font-bold text-white">Content Router</h5>
                    <p className="text-[11px] text-slate-400 mt-1">Classifies intent &amp; routes to specialized domain agents.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 text-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono-code text-xs">
                      LIB
                    </div>
                    <h5 className="text-sm font-bold text-white">Librarian Agent</h5>
                    <p className="text-[11px] text-slate-400 mt-1">Filesystem tree navigation &amp; regex subtree deep searches.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 text-center">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-2 font-bold font-mono-code text-xs">
                      DOM
                    </div>
                    <h5 className="text-sm font-bold text-white">Domain Subgraphs</h5>
                    <p className="text-[11px] text-slate-400 mt-1">Health, Career, and Email specialists with strictly scoped tools.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                    <FolderTree className="w-4 h-4" />
                    <span>Cross-Domain Escalation Model</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Domain agents are peer-blind by default for privacy and token efficiency. 
                    When a Career query requires health or research context, it escalates to the compiled 
                    Librarian subgraph tool, ensuring deterministic boundaries without prompt contamination.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "hitl" && (
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h4 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                    <span>HITL Two-Phase Commit &amp; Dashboard</span>
                    <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Zero Accidental Writes
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Autonomous reasoning paired with human confirmation for real-world side effects.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08]">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono-code font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Agent Proposes Mutation</div>
                      <div className="text-[11px] text-slate-400">Agent drafts new notes or file edits to centralized SQLite pending queue.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-white/[0.08]">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono-code font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Monaco Diff Inspection</div>
                      <div className="text-[11px] text-slate-400">Human reviews side-by-side colorized diffs on Next.js web control panel.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 bg-emerald-950/10">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono-code font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-300">Commit to Disk</div>
                      <div className="text-[11px] text-slate-400">Upon explicit human approval, atomic write executes to filesystem with rollback log.</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 12 Production Automation Tools Matrix */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/70 border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2.5">
                <Code2 className="w-6 h-6 text-indigo-400" />
                <span>Production Domain Tool Suite</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                12 purpose-built automation pipelines powering Nexus agents.
              </p>
            </div>
            <a
              href="https://github.com/brolodarsky/Nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all w-fit"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {tools.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-indigo-500/30 transition-colors group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/5">
                    {t.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
