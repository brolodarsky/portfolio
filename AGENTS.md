<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Portfolio Flagship

> Guidelines and standing directives for any AI agent working on William Volodarsky's personal flagship website (`williamvolodarsky.com`).

## 1. Project Authority & Master Scope
- **Master Scope Doc:** `Vault/6. Forge/6.1. Projects/6.1.1. Flagship Applications/Project - Personal Portfolio Website.md`
- Always consult the scope doc for roadmap phases (Nexus sandboxes, Art Gallery, MDX engine, Living Resume, Bill-Bot) and design system specifications.
- When completing significant feature phases, update the scope doc's Build Log and Roadmap via the `project_work` skill.

## 2. Standing Directives & Code Standards
1. **Bespoke Luxury Aesthetics:** Obsidian abyss (`#080a0f`), glassmorphic panels, electric indigo/cyan neon accents, and `next/font` typography (`Outfit`, `Inter`, `JetBrains Mono`). Never revert to generic template boilerplate or unstyled defaults.
2. **Public Redaction & Privacy Boundary:** This site is a public showcase. Never hardcode or leak private medical data, personal journals, unredacted financial records, or secret API keys.
3. **Next.js App Router Conventions:** Keep pages as Server Components by default (`src/app/page.tsx`). Isolate client state, intervals, and window event listeners into modular `"use client"` components.
4. **Centralized Single Source of Truth:** All telemetry metrics, engine version numbers, and tool catalogs must reside in `src/data/nexusTelemetry.ts`. Server-side dynamic fetchers live in `src/lib/nexusData.ts` with ISR (`revalidate: 3600`).
5. **Granular Educational Commenting (Learning-First):** Code must be richly annotated with educational comments. Break down complex types, generics, async flows, React hooks, and Next.js server/client boundaries line-by-line using compact, punchy 1-line notes and concrete examples with minimal character/space footprint. Never strip or compress existing educational comments during refactors.



## 3. Deployment & Git Workflow (Mandatory)
1. **Pre-commit Verification:** Always run `npm run build` to verify TypeScript compilation, React boundaries, and static page generation before committing.
2. **Conventional Commits:** Format all commit messages using Conventional Commits (e.g. `feat(telemetry): ...`, `fix(hero): ...`, `style(nav): ...`).
3. **Proactive Push to Production:** Production is deployed automatically via Vercel Edge connected to `master`. Upon completing and verifying any requested change, you MUST proactively offer to stage, commit, and push to `origin/master` so the updates go live.
