"use client";

import React, { useState } from "react";
import { ArrowRight, Workflow } from "lucide-react";

export default function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>("router");

  const nodeDetails: Record<
    string,
    { title: string; subtitle: string; description: string; tech: string[]; code: string }
  > = {
    ingest: {
      title: "Multi-Interface Ingestion Layer",
      subtitle: "Asynchronous Multi-Modal Entrypoints",
      description:
        "Accepts queries from Next.js Web UI, terminal CLI, local Whisper voice captures, and authenticated Telegram bot webhooks. All inputs are normalized into a unified conversational envelope.",
      tech: ["Next.js App Router", "FastAPI SSE", "Whisper Local", "Telegram Bot API"],
      code: `POST /api/v1/agent/query
Content-Type: application/json
{
  "query": "Find latest cardiology labs and summarize findings",
  "interface": "web_control_panel",
  "thread_id": "session_live_01"
}`,
    },
    router: {
      title: "LangGraph Content Router",
      subtitle: "Intent Classification & Conditional Dispatch",
      description:
        "Deterministic zero-shot classifier matches user intent against domain agents (Health, Career, Email, Librarian). High-confidence matches route directly; complex cross-domain queries dispatch to the Librarian subgraph.",
      tech: ["LangGraph StateGraph", "Conditional Edges", "Structured Pydantic"],
      code: `def route_query(state: SwarmState) -> str:
    domain = classify_intent(state["messages"][-1].content)
    # Returns "career", "email", "librarian", or "general"
    return f"enter_{domain}_subgraph"`,
    },
    dpfh: {
      title: "Deterministic Pre-Flight Hydration (DPFH)",
      subtitle: "Zero-Cost Context Tree Injection",
      description:
        "Before the LLM is invoked, a deterministic Python node inspects the physical disk structure of the target domain folder in the Vault. It injects the live directory tree directly into the system prompt, eliminating hallucinations.",
      tech: ["Python OS Subprocess", "YAML Frontmatter Parser", "Prompt Template Engine"],
      code: `// Hydration Payload in System Prompt:
### Physical Vault Structure (Live Injected):
- 6. Forge/
  - 6.1. Projects/
    - 6.1.2. Agentic R&D/
      - Project - Nexus Agentic Engine.md`,
    },
    librarian: {
      title: "Librarian Agent & Filesystem Tools",
      subtitle: "Deterministic Traversal & Regex Grep",
      description:
        "The Librarian agent uses 4 core tools (\`read_toc\`, \`read_note\`, \`search_vault\`, \`get_vault_structure\`) to traverse 500+ markdown files, follow wiki-links, and return 100% grounded citations.",
      tech: ["LangGraph ReAct", "Subprocess Ripgrep", "Wiki-Link Graph Resolver"],
      code: `class LibrarianTools:
    def read_note(self, path: str) -> str:
        # Validates path against security boundary
        return vault_fs.safe_read(path)
    def search_vault(self, query: str) -> list[str]:
        return ripgrep_engine.match(query)`,
    },
    hitl: {
      title: "Two-Phase Commit & HITL Review",
      subtitle: "SQLite Mutation Queue & Monaco Diff",
      description:
        "Agents are strictly prohibited from writing directly to disk. File mutations are drafted to a pending SQLite transaction queue and presented to the user via Monaco Editor side-by-side diffs for approval or rejection.",
      tech: ["SQLite Transaction Journal", "Monaco Diff Editor", "Atomic Commit Rollback"],
      code: `class TransactionQueue:
    def stage_mutation(self, file_path: str, new_content: str):
        tx_id = uuid.uuid4()
        sqlite_db.execute(
            "INSERT INTO queue (id, path, diff, status) VALUES (?, ?, ?, 'PENDING')",
            (tx_id, file_path, generate_diff(file_path, new_content))
        )`,
    },
    evals: {
      title: "LLM-as-a-Judge Observability & Evals",
      subtitle: "Continuous Regression & Groundedness Testing",
      description:
        "Automated evaluation framework testing agent responses against a 12-case golden dataset. Assesses factual accuracy, grounded citations, and tool efficiency with structured JSON reports.",
      tech: ["LLM-as-a-Judge", "JSONL Telemetry", "Pytest Suite"],
      code: `def test_eval_groundedness():
    report = run_golden_eval_suite(dataset="tests/golden_12.json")
    assert report.hallucination_rate == 0.0
    assert report.grounded_citation_score >= 0.99`,
    },
  };

  return (
    <section id="architecture" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono-code text-cyan-300 mb-3">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SYSTEM PIPELINE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            End-to-End <span className="text-gradient-cyan">Execution Architecture</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Click any node in the execution DAG below to inspect how Nexus ingests, classifies, 
            hydrates, evaluates, and safely commits autonomous agent actions.
          </p>
        </div>

        {/* Interactive DAG Graph Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Visual DAG Flow Columns */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {/* Step 1 */}
            <button
              onClick={() => setSelectedNode("ingest")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "ingest"
                  ? "bg-slate-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Ingestion &amp; Multi-Modal Entry</h4>
                    <p className="text-[11px] text-slate-400">Web UI, Whisper Voice, Telegram &amp; CLI</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>

            {/* Step 2 */}
            <button
              onClick={() => setSelectedNode("router")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "router"
                  ? "bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">LangGraph Content Router</h4>
                    <p className="text-[11px] text-slate-400">Pydantic intent classification &amp; conditional dispatch</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>

            {/* Step 3 */}
            <button
              onClick={() => setSelectedNode("dpfh")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "dpfh"
                  ? "bg-slate-900 border-purple-500/60 shadow-lg shadow-purple-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Deterministic Pre-Flight Hydration</h4>
                    <p className="text-[11px] text-slate-400">Zero-cost live vault directory structure injection</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>

            {/* Step 4 */}
            <button
              onClick={() => setSelectedNode("librarian")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "librarian"
                  ? "bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    04
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Librarian ReAct &amp; Subgraphs</h4>
                    <p className="text-[11px] text-slate-400">Filesystem tools &amp; regex subtree traversal</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>

            {/* Step 5 */}
            <button
              onClick={() => setSelectedNode("hitl")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "hitl"
                  ? "bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    05
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">HITL Two-Phase Commit</h4>
                    <p className="text-[11px] text-slate-400">SQLite queue &amp; Monaco side-by-side diff review</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>

            {/* Step 6 */}
            <button
              onClick={() => setSelectedNode("evals")}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                selectedNode === "evals"
                  ? "bg-slate-900 border-rose-500/60 shadow-lg shadow-rose-500/10 scale-[1.01]"
                  : "bg-slate-950/60 border-white/[0.06] hover:bg-slate-900/40 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-mono-code font-bold text-xs">
                    06
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">LLM-as-a-Judge &amp; Telemetry</h4>
                    <p className="text-[11px] text-slate-400">Golden 12-case regression eval &amp; JSONL traces</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>
          </div>

          {/* Detailed Inspector Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between">
            {nodeDetails[selectedNode] && (
              <div className="space-y-5">
                <div>
                  <div className="text-xs font-mono-code text-indigo-400 uppercase tracking-wider mb-1">
                    {nodeDetails[selectedNode].subtitle}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {nodeDetails[selectedNode].title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {nodeDetails[selectedNode].description}
                </p>

                {/* Tech Badges */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono-code text-slate-400 uppercase">
                    Core Technologies &amp; Protocols:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {nodeDetails[selectedNode].tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono-code text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Terminal Snippet */}
                <div className="p-4 rounded-xl bg-slate-900 border border-white/[0.08] font-mono-code text-xs text-slate-300 overflow-x-auto">
                  <div className="text-[10px] text-slate-500 mb-2 flex items-center justify-between">
                    <span>EXECUTION_FRAMEWORK</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      GROUNDED
                    </span>
                  </div>
                  <pre className="text-indigo-300 text-[11px] leading-relaxed">
                    {nodeDetails[selectedNode].code}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
