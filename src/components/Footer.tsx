"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/[0.08] py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-white/10 text-xs font-heading font-bold text-indigo-400">
                WV
              </div>
              <span className="font-heading font-bold text-base text-white">
                William Volodarsky
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Forward Deployed AI &amp; Systems Engineer specializing in Compound AI Systems, 
              Domain Knowledge Ontologies, Deterministic Pre-flight Hydration, and Two-Phase Commit HITL Governance. 
              Built on a foundation of 8 years of operational leadership.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <a
                href="https://github.com/brolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/williamvolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-300 font-semibold">
              Ecosystem
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Command Hero HUD
                </a>
              </li>
              <li>
                <a href="#nexus" className="hover:text-white transition-colors">
                  Nexus Compound OS
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  Execution DAG Pipeline
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills Matrix
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white transition-colors">
                  Living Master Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Telemetry Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-300 font-semibold">
              Deployment Telemetry
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/[0.06] space-y-2 font-mono-code text-[11px]">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Domain:</span>
                <span className="text-slate-300">williamvolodarsky.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Engine:</span>
                <span className="text-indigo-300">Next.js 16 + React 19</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Edge DNS:</span>
                <span className="text-emerald-400">Cloudflare DNSSEC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="text-cyan-300">Fort Lee, NJ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-[11px]">
            &copy; {new Date().getFullYear()} William Volodarsky. All rights reserved. Zero hallucinated dependencies.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-all text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
