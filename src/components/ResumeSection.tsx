"use client";

import React, { useState } from "react";
import { FileText, Download } from "lucide-react";

export default function ResumeSection() {
  const [viewMode, setViewMode] = useState<"executive" | "technical">("technical");

  return (
    <section id="resume" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>LIVING DOCUMENT</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              Master Resume &amp; <span className="text-gradient-cyan">Evidence Locker</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl">
              Synchronized directly with production engineering and operations track record.
            </p>
          </div>

          {/* Action & Toggle Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="p-1 rounded-xl bg-slate-900 border border-white/10 flex items-center gap-1">
              <button
                onClick={() => setViewMode("executive")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "executive"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Summary
              </button>
              <button
                onClick={() => setViewMode("technical")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "technical"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Deep Technical Proof
              </button>
            </div>

            {/* Direct PDF Link */}
            <a
              href="mailto:bill@williamvolodarsky.com?subject=Resume%20PDF%20Request"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Request PDF / DOCX</span>
            </a>
          </div>
        </div>

        {/* Resume Card Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-10">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-3xl font-bold text-white mb-1">
                William Volodarsky
              </h3>
              <p className="text-sm font-mono-code text-indigo-400">
                Forward Deployed AI &amp; Systems Engineer
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Fort Lee, NJ 07024 • bill@williamvolodarsky.com • williamvolodarsky.com • github.com/brolodarsky • linkedin.com/in/williamvolodarsky
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-xs font-mono-code text-emerald-300">
                BS CS Magna Cum Laude (3.7 GPA)
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-xs font-mono-code text-indigo-300">
                8 Yrs Ops Leadership
              </span>
            </div>
          </div>

          {/* Summary Block */}
          <div>
            <h4 className="text-xs font-mono-code text-indigo-400 uppercase tracking-wider mb-2 font-bold">
              01 // Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {viewMode === "executive" ? (
                <span>
                  High-agency <strong>Forward Deployed AI &amp; Systems Engineer</strong> and CS graduate (Magna Cum Laude, Fordham) who bridges 
                  sophisticated compound AI systems and domain ontologies with 8 years of operational business leadership 
                  (2x revenue growth, 100% HIPAA compliance). Creator of <strong>Nexus</strong>, an autonomous agentic OS 
                  engineered to automate complex operational and analytical workflows with mathematical rigor and zero hallucinated file structures.
                </span>
              ) : (
                <span>
                  Forward Deployed AI &amp; Systems Engineer (CS, Magna Cum Laude) specializing in <strong>Compound AI Architectures, Business Operations Automation, and Domain Ontology Engineering</strong>. Creator of <strong>Nexus</strong>, a production-grade agentic operating system combining multi-agent <strong>LangGraph</strong> state machines with <strong>Deterministic Pre-flight Hydration (DPFH)</strong>, two-phase commit <strong>HITL governance</strong>, and an automated <strong>LLM-as-a-Judge</strong> evaluation harness. Eight years of business operations and clinical data leadership provides the cross-functional domain expertise to turn ambiguous operational bottlenecks into resilient, auditable AI systems.
                </span>
              )}
            </p>
          </div>

          {/* Flagship Engineering: Nexus */}
          <div>
            <h4 className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider mb-3 font-bold">
              02 // Flagship Project: Nexus (Compound Agentic OS)
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong>Compound Multi-Agent Orchestration:</strong> Architected a <strong>LangGraph</strong> content router dispatching to domain-specialized agents via conditional state-machine edges. Implemented <strong>Deterministic Pre-flight Hydration (DPFH)</strong> — a zero-cost Python orchestration node injecting live schemas, directory structures, and dependency graphs into system prompts at query time, eliminating hallucinated tool invocations and reducing round-trip discovery latency by 13%.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong>Domain Ontology &amp; Filesystem Semantic Layer:</strong> Engineered a structured knowledge ontology across 500+ interconnected markdown nodes, replacing fragile vector chunking with a tree-based semantic layer. Built a <strong>LangGraph</strong> ReAct agent traversing the ontology via scoped filesystem tools (<code className="text-indigo-300 font-mono-code">read_toc</code>, <code className="text-indigo-300 font-mono-code">read_note</code>, <code className="text-indigo-300 font-mono-code">search_vault</code>, <code className="text-indigo-300 font-mono-code">get_vault_structure</code>) with dynamic frontmatter filtering to deliver 100% grounded citations.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong>Two-Phase Commit HITL Governance:</strong> Engineered a full-stack <strong>Next.js 16 + FastAPI</strong> control center featuring real-time SSE trace streaming and a <strong>Monaco Editor</strong> side-by-side diff viewer for pre-commit human review of autonomous agent writes — backed by an auditable <strong>SQLite</strong> transaction queue with approve/reject governance.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-indigo-400 font-bold">•</span>
                <span>
                  <strong>Evaluation &amp; LLMOps Pipeline:</strong> Built an automated <strong>LLM-as-a-Judge</strong> regression harness grading agent responses across factual accuracy, groundedness, and hallucination detection via a 12-case golden dataset with structured JSON telemetry and append-only JSONL run logs.
                </span>
              </div>
            </div>
          </div>

          {/* Experience Grid */}
          <div>
            <h4 className="text-xs font-mono-code text-purple-400 uppercase tracking-wider mb-4 font-bold">
              03 // Professional Experience &amp; Leadership
            </h4>
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="text-sm font-bold text-white">
                    Handshake AI Fellowship — <span className="text-indigo-400 font-medium">AI Training Fellow</span>
                  </div>
                  <div className="text-xs font-mono-code text-slate-400">Nov 2025 – May 2026</div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Performed iterative resampling with corrective feedback across LLMs and latent diffusion models; evaluated outputs across multi-axial quality rubrics, identifying systematic failure modes (hallucination patterns, context degradation) and translating edge cases into actionable fine-tuning constraints.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/[0.06]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div className="text-sm font-bold text-white">
                    SiliSlick Knives — <span className="text-emerald-400 font-medium">Co-Owner &amp; Operations Lead</span>
                  </div>
                  <div className="text-xs font-mono-code text-slate-400">June 2017 – June 2025</div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Doubled private brand revenue over 18 months through sales velocity analysis, high-margin product expansion, and automated supplier workflows. Managed multi-channel international distribution (Amazon, Wholesale, D2C) across US/UK/EU markets, overseeing regulatory compliance, customs logistics, and supplier negotiations.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono-code text-emerald-400 uppercase tracking-wider mb-3 font-bold">
              04 // Education &amp; Honors
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-900/40 border border-white/5">
              <div>
                <span className="text-sm font-bold text-white">Fordham University</span>
                <span className="text-xs text-slate-400 block sm:inline sm:ml-2">
                  BS in Computer Science, Magna Cum Laude (GPA: 3.7)
                </span>
              </div>
              <div className="text-xs font-mono-code text-emerald-300">Dean&apos;s List • Sept 2023 – Dec 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
