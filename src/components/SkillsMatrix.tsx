"use client";

import React, { useState } from "react";
import { Wrench, Sparkles } from "lucide-react";

type Category = "all" | "agentic" | "fullstack" | "infra" | "evals";

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const skillItems = [
    // Agentic AI
    { name: "Domain Ontology Engineering", category: "agentic", level: "Specialty", hot: true },
    { name: "Compound AI Systems", category: "agentic", level: "Production", hot: true },
    { name: "LangGraph", category: "agentic", level: "Production", hot: true },
    { name: "Multi-Agent Swarms", category: "agentic", level: "Production", hot: true },
    { name: "Deterministic Pre-Flight Hydration", category: "agentic", level: "Specialty", hot: true },
    { name: "Semantic Knowledge Graphs", category: "agentic", level: "Production" },
    { name: "ReAct Tool-Calling", category: "agentic", level: "Production" },
    { name: "LangChain & LangSmith", category: "agentic", level: "Advanced" },
    { name: "Structured Pydantic Outputs", category: "agentic", level: "Production" },
    { name: "Dynamic Prompt Injection", category: "agentic", level: "Advanced" },
    { name: "SSE Trace Streaming", category: "agentic", level: "Production" },
    { name: "OpenAI API & Anthropic", category: "agentic", level: "Advanced" },
    { name: "Whisper Voice Processing", category: "agentic", level: "Production" },

    // Engineering & Full Stack
    { name: "Python", category: "fullstack", level: "Expert", hot: true },
    { name: "TypeScript", category: "fullstack", level: "Advanced", hot: true },
    { name: "Next.js 16 (App Router)", category: "fullstack", level: "Advanced", hot: true },
    { name: "Business Process Automation", category: "fullstack", level: "Advanced", hot: true },
    { name: "React 19", category: "fullstack", level: "Advanced" },
    { name: "FastAPI", category: "fullstack", level: "Advanced" },
    { name: "Tailwind CSS v4", category: "fullstack", level: "Advanced" },
    { name: "SQL (Postgres, SQLite)", category: "fullstack", level: "Advanced" },
    { name: "Java & C++", category: "fullstack", level: "Proficient" },
    { name: "Node.js", category: "fullstack", level: "Proficient" },
    { name: "Pytest Suite", category: "fullstack", level: "Advanced" },
    { name: "Pydantic V2", category: "fullstack", level: "Advanced" },
    { name: "PowerShell & Bash", category: "fullstack", level: "Advanced" },

    // Systems & Infrastructure
    { name: "Playwright Headless", category: "infra", level: "Production" },
    { name: "ADB / Android Automation", category: "infra", level: "Production" },
    { name: "HL7 CDA Medical XML", category: "infra", level: "Specialty" },
    { name: "Git / GitHub Actions", category: "infra", level: "Advanced" },
    { name: "Git-Crypt Security", category: "infra", level: "Production" },
    { name: "Telegram Bot API", category: "infra", level: "Production" },
    { name: "Google OAuth2 & IMAP", category: "infra", level: "Production" },
    { name: "Syncthing Mesh Sync", category: "infra", level: "Advanced" },
    { name: "Linux / POSIX", category: "infra", level: "Advanced" },
    { name: "Obsidian / Zettelkasten", category: "infra", level: "Mastery" },

    // Evaluations & Safety
    { name: "LLM-as-a-Judge Eval", category: "evals", level: "Specialty", hot: true },
    { name: "LLMOps & Golden Datasets", category: "evals", level: "Production", hot: true },
    { name: "HITL Two-Phase Commit", category: "evals", level: "Specialty", hot: true },
    { name: "Hallucination Auditing", category: "evals", level: "Expert" },
    { name: "Context Degradation QA", category: "evals", level: "Expert" },
    { name: "HIPAA Clinical Compliance", category: "evals", level: "Expert" },
  ];

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "agentic", label: "Compound AI & Agents" },
    { id: "fullstack", label: "Full-Stack & Systems" },
    { id: "infra", label: "Infrastructure & Tools" },
    { id: "evals", label: "Evals & Governance" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skillItems
      : skillItems.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 text-xs font-mono-code text-indigo-300 mb-3">
            <Wrench className="w-3.5 h-3.5 text-indigo-400" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; <span className="text-gradient-indigo">Systems Competencies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Strictly production-tested competencies across agent orchestration, backend services, 
            evaluation testbenches, and data pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id as Category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                selectedCategory === c.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-[1.02]"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl bg-slate-950/70 border ${
                skill.hot ? "border-indigo-500/40 bg-indigo-950/10" : "border-white/[0.06]"
              } hover:border-indigo-400/60 hover:bg-slate-900/80 transition-all duration-200 flex flex-col justify-between group shadow-sm`}
            >
              <div className="flex items-start justify-between gap-1 mb-2">
                <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </span>
                {skill.hot && (
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                )}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 pt-2 border-t border-white/[0.04]">
                <span className="capitalize text-slate-500">{skill.category}</span>
                <span className="text-indigo-300 font-semibold">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
