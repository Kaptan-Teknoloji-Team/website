<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agent Working Guidelines — Kaptan Teknoloji Takımı Website

This document establishes binding operating rules and behavioral standards for AI coding agents working on the Kaptan Teknoloji Takımı repository. Every agent must adhere to these rules consistently.

---

## 1. Core Operating Principle: User Intent Comes First

**A user question is not an automatic request to modify code.**

Before taking any action, determine the category of the user's prompt:

### When the User Asks a Question or Mentions an Observation
Examples:
- *"Why does the website still look like this?"*
- *"Why isn't the interface updating?"*
- *"What is causing this error?"*
- *"Why does this component behave this way?"*

- **Inspect and Investigate**: Analyze the issue, examine logs, and diagnose the underlying cause.
- **Explain Clearly**: Formulate a direct, accurate explanation of the findings with supporting evidence.
- **Do Not Modify Code**: Do not create files, edit components, refactor, or modify the UI simply in response to a question, unless the user explicitly requests implementation.

### When the User Requests an Investigation
- Inspect relevant files, configuration, runtime logs, and network behavior.
- Clearly explain:
  - What the issue is.
  - What evidence supports the diagnosis.
  - Which files or components are involved.
  - The identified root cause.
  - The recommended solution.
- Do not apply modifications merely because the investigation uncovered an opportunity for refactoring or enhancement.

### When the User Explicitly Requests Implementation
- Make only the requested changes, keeping the scope strictly limited to the task.
- Inspect the existing implementation first.
- Prefer the smallest correct change that solves the problem without breaking unrelated functionality.

### When Intent Is Ambiguous
- Ask one concise clarifying question if taking action without confirmation could lead to destructive, unwanted, or out-of-scope modifications.
- Do not ask trivial or repetitive questions when the user's intent is clear or repository context is sufficient.

---

## 2. Language & Communication Standards

- **Agent Communication**: Communicate with the user in **Turkish** by default, unless the user explicitly requests another language.
- **Repository Documentation**: Developer documentation, rules, commit messages, and internal guidelines (including this `AGENTS.md`) must be written in clear, professional English.
- **User-Facing Website Content**: The website's user interface, copy, branding, and metadata are in Turkish. Do not translate or modify user-facing website content to English unless explicitly instructed.

---

## 3. Evidence-Based Diagnosis & Debugging

Never present an unverified assumption as an established fact.

When troubleshooting unexpected behavior:
1. **Inspect First**: Check relevant source code, imports, exports, routes, and configuration.
2. **Examine Runtime Data**: Review terminal output, development server logs, browser console errors, and build output.
3. **Verify Findings**: Distinguish confirmed facts from working hypotheses.
4. **Explain Before Acting**: If the user asked a question, provide the diagnosis first before proposing or executing fixes.
5. **Inspect the Full Pipeline**: When an unexpected UI state occurs (e.g., starter templates or hydration mismatches), do not assume a single file is at fault; verify `app/page.tsx`, `app/layout.tsx`, routing, CSS variables, build status, and browser extension interference.

---

## 4. Source Code Modification Rules

When implementation is requested:
- **Preserve Architecture**: Respect the existing Next.js App Router, Tailwind CSS, and shadcn/ui conventions.
- **Targeted Scope**: Modify only files directly relevant to the requested task. Avoid unsolicited refactoring or file restructuring.
- **Protect User Work**: Preserve uncommitted changes and ongoing work. Never discard user modifications.
- **Reuse Existing Assets**: Leverage existing UI components in `@/components/ui/`, utility functions in `@/lib/utils.ts`, and structured models in `@/data/`.
- **Targeted Edits**: Use targeted replacements instead of overwriting entire files whenever possible.
- **No Error Suppression**: Do not disable linters, TypeScript checks, or tests (e.g., `// @ts-ignore`, `eslint-disable`) merely to silence errors without a documented reason.

---

## 5. Next.js 16 (App Router) & UI Development Rules

- **Server vs. Client Components**: Default to Server Components. Only introduce `"use client"` when state, effects, event handlers, or browser APIs are required.
- **Component Lifecycle & Hooks**: Strictly follow React Hooks rules. Avoid unnecessary re-renders, redundant state, or premature optimization.
- **Intentional Page Architecture**:
  - Creating a component does not automatically mean it should be rendered on the homepage.
  - Verify that newly created components are imported and rendered in the intended location.
  - The homepage should reflect the intended information architecture, not simply render every component present in the repository.
- **Data Integrity**:
  - Do not invent fictional team members, achievements, statistics, sponsors, news, or contact details.
  - Keep data centralized, structured, and strictly typed in `@/data/team-data.ts`.
- **Design Consistency**:
  - Maintain the established aerospace theme (electric cyan accents, deep space palette, glassmorphism, clean typography).
  - Preserve responsive behavior across all supported screen sizes (mobile, tablet, desktop).
  - Adhere to semantic HTML and accessibility best practices (e.g., ARIA attributes via Radix UI primitives).

---

## 6. Code Quality & Type Safety

- **Strict TypeScript**: Maintain complete type safety. Avoid `any`, unsafe type assertions, or implicit types.
- **Linting Compliance**: Adhere to ESLint configuration (`eslint.config.mjs`) and Next.js guidelines.
- **Maintainability**: Keep component responsibilities focused, cohesive, and easy to maintain.

---

## 7. Verification Requirements

After making code changes, run appropriate verification commands:
1. **TypeScript Typecheck**: Execute `npx tsc --noEmit` and verify zero errors.
2. **ESLint**: Execute `npm run lint` and verify clean results.
3. **Build & Runtime Checks**: Run production builds or verify the development server output when relevant.
4. **Honest Reporting**:
   - Never claim that tests, builds, or checks passed unless they were actually executed and their results verified.
   - If a check could not be performed, explain why.
   - Do not claim visual or UI verification unless an actual browser verification was conducted.

---

## 8. Git & Repository Safety

- **No Destructive Commands**: Never run destructive Git commands (such as `git reset --hard`, `git clean -f`, or `git push --force`) unless explicitly and unambiguously requested.
- **Preserve Uncommitted Changes**: Inspect `git status` before performing any branch or workspace operations.
- **Branch & Remote Operations**: Do not commit, push, merge, create, or delete branches without explicit user instruction.
- **Security**: Never expose or commit API keys, personal access tokens, or sensitive credentials. Respect `.gitignore`.

---

## 9. Communication Style & Completion Reports

- **Default Language**: Always respond in **Turkish** unless requested otherwise.
- **Clarity & Structure**: Distinguish clearly between:
  - Confirmed facts
  - Probable explanations
  - Unverified hypotheses
  - Completed actions
  - Recommended next steps
- **Implementation Reports**: Provide a concise summary containing:
  - What was changed and why.
  - Which files were affected.
  - Which verification checks were executed and their results.
  - Any remaining steps or notes.
- **Investigation Reports**: Summarize findings, root cause, and recommendations without modifying code.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
