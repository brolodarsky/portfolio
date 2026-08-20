export interface NexusToolItem {
  name: string;
  category: string;
  desc: string;
}

export interface NexusTelemetryConfig {
  version: string;
  shortVersion: string;
  status: string;
  swarm: {
    label: string;
    value: string;
    desc: string;
  };
  dpfh: {
    label: string;
    value: string;
    desc: string;
  };
  automation: {
    label: string;
    value: string;
    desc: string;
  };
  evals: {
    label: string;
    value: string;
    desc: string;
  };
  tools: NexusToolItem[];
}

export const NEXUS_TELEMETRY: NexusTelemetryConfig = {
  version: "2.9.0",
  shortVersion: "2.9",
  status: "ACTIVE",
  swarm: {
    label: "Autonomous Swarm",
    value: "4 Agents",
    desc: "LangGraph Router, Librarian, Career & Email subgraphs",
  },
  dpfh: {
    label: "Deterministic Injection",
    value: "99.8%",
    desc: "Zero-cost DPFH directory injection vs chunk fragmentation",
  },
  automation: {
    label: "Deployed Automation",
    value: "12 Tools",
    desc: "HL7 CDA XML, ADB Scraper, Playwright PDF, IMAP OAuth",
  },
  evals: {
    label: "Foundation Model Evals",
    value: "300+ Hrs",
    desc: "Multi-axial alignment, LLM-as-a-Judge test harnesses",
  },
  tools: [
    { name: "HL7 CDA XML Parser", category: "Clinical Health", desc: "Longitudinal clinical record synthesis & lab trend tracking." },
    { name: "11-Platform ADB Scraper", category: "Mobile Ops", desc: "Android screen capture with multi-scroll OCR deduplication." },
    { name: "Dual Resume Engine", category: "Document Systems", desc: "Headless Playwright PDF & python-docx with page-fill metric audits." },
    { name: "Google OAuth2 IMAP Sync", category: "Communication", desc: "Asynchronous email ingestion & priority triage pipeline." },
    { name: "LLM-as-a-Judge Harness", category: "Evaluation", desc: "12-case golden dataset test runner with JSON scoring reports." },
    { name: "Monaco HITL Diff Queue", category: "Governance", desc: "Pre-commit side-by-side file write review in SQLite." },
    { name: "Trafilatura Web Distiller", category: "Content", desc: "Deterministic article cleaning & atomic Zettelkasten synthesis." },
    { name: "TTS Audio Podcast Generator", category: "Audio", desc: "Automated daily briefing audio synthesis via voice models." },
    { name: "Whisper Voice Transcriber", category: "Multimodal", desc: "Local asynchronous audio capture & thought triage." },
    { name: "Telegram Bot Swarm Relay", category: "Edge Capture", desc: "Mobile prompt execution with user-ID crypt-security." },
    { name: "Tree-Based Vault Navigator", category: "Filesystem", desc: "Zero-cost directory tree & frontmatter metadata traversal." },
    { name: "Git-Crypt Secret Enclave", category: "Security", desc: "Zero-knowledge client-side encryption for personal records." },
  ],
};
