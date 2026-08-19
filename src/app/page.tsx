import React from "react";
import Navbar from "@/components/Navbar";
import HeroTelemetry from "@/components/HeroTelemetry";
import NexusShowcase from "@/components/NexusShowcase";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080a0f] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Command Hero & Telemetry HUD */}
        <HeroTelemetry />

        {/* 2. Nexus Flagship Showcase & DPFH vs Vector RAG */}
        <NexusShowcase />

        {/* 3. Interactive Execution DAG Pipeline */}
        <ArchitectureDiagram />

        {/* 4. Professional Experience & Leadership Track Record */}
        <ExperienceSection />

        {/* 5. Interactive Technical Skills Matrix */}
        <SkillsMatrix />

        {/* 6. Living Master Resume & Evidence Locker */}
        <ResumeSection />

        {/* 7. Direct Contact & Communication Terminal */}
        <ContactSection />
      </main>

      {/* Persistent Luxury Footer */}
      <Footer />
    </div>
  );
}
