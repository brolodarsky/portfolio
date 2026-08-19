"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "bill@williamvolodarsky.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono-code text-emerald-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>SYSTEM_STATUS // OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Build <span className="text-gradient-indigo">Production AI</span> Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am currently evaluating high-impact <strong>Agentic AI Engineering</strong> and{" "}
            <strong>Systems Orchestration</strong> roles (NYC, Hybrid, or Remote). 
            Whether you are building autonomous agents, tackling LLM alignment, or scaling complex operations, 
            let&apos;s connect.
          </p>

          {/* Interactive Email Copy & Action Card */}
          <div className="p-8 rounded-3xl bg-slate-950/90 border border-white/10 backdrop-blur-2xl shadow-2xl mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-white/[0.08]">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
                    Official Communication Channel
                  </div>
                  <div className="text-sm sm:text-base font-mono-code font-bold text-white">
                    {email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Opportunity%20Inquiry%20-%20William%20Volodarsky`}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Sub-endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-left">
              <a
                href="https://linkedin.com/in/williamvolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                      LinkedIn Network
                    </div>
                    <div className="text-[11px] text-slate-400">linkedin.com/in/williamvolodarsky</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://github.com/brolodarsky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/40 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub Repositories
                    </div>
                    <div className="text-[11px] text-slate-400">github.com/brolodarsky</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
