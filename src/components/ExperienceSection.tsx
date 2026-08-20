"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "AI Training Fellow",
      company: "Handshake AI Fellowship",
      location: "Remote / New York, NY",
      period: "Nov 2025 – May 2026",
      badge: "Foundation Model Alignment",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      highlights: [
        "Performed iterative resampling with corrective feedback across LLMs and latent diffusion models.",
        "Evaluated model outputs across multi-axial quality rubrics: factual accuracy, instruction following, safety, and non-deterministic code correctness.",
        "Identified systematic failure modes (hallucination patterns, lost-in-the-middle context degradation), translating edge cases into actionable fine-tuning constraints.",
      ],
      skills: ["LLM Alignment", "RLHF Evaluation", "Prompt Engineering", "Hallucination Auditing", "Error Taxonomy"],
    },
    {
      role: "Co-Owner & Operations Lead",
      company: "SiliSlick Knives",
      location: "Farmingdale, NY / Global",
      period: "June 2017 – June 2025",
      badge: "2x Revenue Growth",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      highlights: [
        "Identified high-margin product opportunities through sales velocity and competitive data analysis, deploying new product lines and automated supplier workflows that doubled private brand revenue over 18 months.",
        "Engineered multi-channel international distribution (Amazon, Wholesale, D2C) across US, UK, and EU markets.",
        "Managed regulatory compliance, international customs logistics, product design, marketing campaigns, and multi-tier supplier negotiations.",
      ],
      skills: ["Process Automation", "Operations Leadership", "Supply Chain", "Data Analysis", "Revenue Optimization"],
    },
    {
      role: "Medical Records & Patient Services",
      company: "Vitreous Retina Macula Consultants",
      location: "New York, NY",
      period: "June 2015 – Feb 2017",
      badge: "100% HIPAA Compliance",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      highlights: [
        "Co-managed clinical records for a premier high-volume ophthalmology practice, maintaining 100% HIPAA compliance across document handling, retrieval, and clinical transfers.",
        "Built interactive tracking spreadsheets and scheduling databases for patient service quality, driving measurable improvements in clinical throughput and reducing retrieval latency.",
      ],
      skills: ["HIPAA Compliance", "Clinical Data Systems", "Process Optimization", "EHR Systems"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      honors: "Magna Cum Laude (GPA: 3.7)",
      institution: "Fordham University",
      period: "Sept 2023 – Dec 2025",
      location: "New York, NY",
      details: "Dean's List. Focus on Algorithms, Operating Systems, Database Systems, Artificial Intelligence, and Software Engineering.",
    },
    {
      degree: "Associate of Science in Computer Science",
      honors: "Dean's List, Phi Theta Kappa (GPA: 3.7)",
      institution: "LaGuardia Community College",
      period: "Jan 2020 – Dec 2022",
      location: "Long Island City, NY",
      details: "Rigorous foundation in Object-Oriented Programming (Java/C++), Data Structures, and Discrete Mathematics.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#080a0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-xs font-mono-code text-purple-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>TRACK RECORD &amp; LEADERSHIP</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional Experience &amp; <span className="text-gradient-indigo">Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Combining rigorous foundation model evaluation with 8 years of operational leadership, 
            business process automation, and mission-critical compliance.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className={`text-[11px] font-mono-code px-2.5 py-0.5 rounded-full border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-slate-400">
                    <span className="text-slate-200 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-code text-indigo-300 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-[11px] font-mono-code text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Academics */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <h3 className="font-heading text-2xl font-bold text-white">
              Education &amp; Academic Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-950/70 border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono-code text-indigo-400 font-semibold">
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono-code px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <Award className="w-3 h-3" />
                      {edu.honors}
                    </span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono-code text-slate-400 mb-4">
                    {edu.institution} — {edu.location}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
