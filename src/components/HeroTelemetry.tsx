"use client";

import React, { useState, useEffect } from "react";
import {
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowDown,
  Download,
  Mail,
  Bot,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

import { NEXUS_TELEMETRY, NexusTelemetryConfig } from "@/data/nexusTelemetry";

interface HeroTelemetryProps {
  telemetry?: NexusTelemetryConfig;
}

export default function HeroTelemetry({ telemetry = NEXUS_TELEMETRY }: HeroTelemetryProps) {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTimeString(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: telemetry.swarm.label,
      value: telemetry.swarm.value,
      desc: telemetry.swarm.desc,
      icon: <Bot className="w-4 h-4 text-indigo-400" />,
      accent: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/20",
    },
    {
      label: telemetry.dpfh.label,
      value: telemetry.dpfh.value,
      desc: telemetry.dpfh.desc,
      icon: <Zap className="w-4 h-4 text-cyan-400" />,
      accent: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
    },
    {
      label: telemetry.automation.label,
      value: telemetry.automation.value,
      desc: telemetry.automation.desc,
      icon: <Layers className="w-4 h-4 text-purple-400" />,
      accent: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/20",
    },
    {
      label: telemetry.evals.label,
      value: telemetry.evals.value,
      desc: telemetry.evals.desc,
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-hero"
    >
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Telemetry Terminal HUD */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/[0.08] backdrop-blur-xl mb-8 shadow-xl">
            <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-slate-300">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-400">ENGINE_OS</span>
              <span className="text-slate-600">::</span>
              <span className="text-emerald-400 font-semibold">
                {`NEXUS_v${telemetry.shortVersion}_${telemetry.status}`}
              </span>
            </div>
            <span className="h-3 w-[1px] bg-white/10" />
            <div className="text-[11px] font-mono-code text-slate-400 flex items-center gap-1.5">
              <span>NYC / NJ</span>
              <span className="text-cyan-300 font-medium">
                {timeString || "12:00:00 EST"}
              </span>
            </div>
          </div>

          {/* Main Hero Typography */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] mb-6">
            Architecting <span className="text-gradient">Autonomous Intelligence</span>{" "}
            <br className="hidden sm:inline" />
            &amp; <span className="text-gradient-indigo">Production AI Swarms</span>.
          </h1>

          {/* Elevator Subheading */}
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
            I am <span className="text-white font-semibold">William Volodarsky</span> — an{" "}
            <span className="text-indigo-300 font-medium">Agentic AI Engineer</span> &amp; Systems
            Orchestrator (Fordham CS, Magna Cum Laude). I build local-first multi-agent systems
            using <span className="text-cyan-300 font-medium">LangGraph</span>, deterministic
            context injection, and human-in-the-loop governance to replace fragile AI demos with
            reliable production infrastructure.
          </p>

          {/* Quick Action Dock */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16 w-full max-w-2xl">
            <a
              href="#nexus"
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-cyan-600 rounded-xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-300 active:scale-95 group"
            >
              <Cpu className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
              <span>Explore Nexus Ecosystem</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#resume"
              className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-indigo-500/40 rounded-xl backdrop-blur-lg transition-all duration-200 shadow-lg active:scale-95"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Interactive Resume</span>
            </a>

            {/* Social Icons Dock */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <a
                href="https://github.com/brolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/williamvolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-indigo-400 hover:bg-white/[0.08] rounded-lg transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:bill@williamvolodarsky.com"
                className="p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-white/[0.08] rounded-lg transition-colors"
                title="Direct Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Telemetry Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`group relative flex flex-col text-left p-5 rounded-2xl bg-gradient-to-b ${stat.accent} bg-slate-950/70 border ${stat.border} hover:border-indigo-400/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-900/80 border border-white/5">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {stat.desc}
                </p>
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/[0.02] group-hover:bg-indigo-500/[0.05] transition-colors pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
