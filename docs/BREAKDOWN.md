Below is a **clear, autonomous-agent–friendly task breakdown** derived directly from the PRD.
This is written so you can hand it to a coding agent and expect **correct sequencing, minimal drift, and enforceable constraints**.

Think of this as a **build graph**, not a to-do list.

---

# Autonomous Task Breakdown — Systems Portfolio

## Global Agent Instructions (Read First)

**Role:** Senior Frontend Engineer + Design Systems Implementer
**Mindset:** Platform documentation, not marketing site
**Constraints:**

* Do not invent features
* Do not add decorative UI
* Do not use default Tailwind spacing scale
* Ask before deviating from motion, spacing, or typography rules

---

# PHASE 0 — Project Initialization (Blocking)

### TASK 0.1 — Repo & Tooling Setup

* Initialize **Next.js (App Router)**
* Enable **TypeScript strict mode**
* Install dependencies:

  * Tailwind CSS
  * Framer Motion
  * MDX support
* Configure ESLint + Prettier

**Acceptance Criteria**

* `pnpm dev` or `npm run dev` runs cleanly
* No TypeScript errors
* App Router working

---

### TASK 0.2 — Directory Structure

Create the following structure:

```
/app
  /(site)
    page.tsx
    work/
    approach/
    systems/
    writing/
    about/
  layout.tsx

/components
  typography/
  layout/
  motion/
  diagrams/

/content
  /work
  /writing

/styles
  tokens.css
  globals.css

/lib
  mdx.ts
  content.ts
```

**Acceptance Criteria**

* No unused folders
* App routes resolve correctly

---

# PHASE 1 — Design System Foundation (Critical)

### TASK 1.1 — Typography Tokens

Implement:

* Lalezar (display)
* Inter (body)

Expose via:

* CSS variables
* Tailwind theme extension

**Rules**

* Lalezar usable only for headings
* Inter default for body

**Acceptance Criteria**

* No hardcoded font-family in components
* Typography roles are semantic, not ad hoc

---

### TASK 1.2 — Golden Ratio Spacing System

Implement **semantic spacing tokens**, not numeric ones.

Tokens:

* `--space-tight`
* `--space-default`
* `--space-relaxed`
* `--space-section`
* `--space-page`

Each token:

* Uses `clamp(min, preferred, max)`
* Derived from viewport dimension × φⁿ

Expose tokens to Tailwind via:

* `theme.spacing`

**Hard Rule**

* Do not use Tailwind default spacing scale

**Acceptance Criteria**

* Components only reference semantic spacing
* Resizing viewport does not break layout

---

### TASK 1.3 — Color System

Define:

* Near-black background
* Warm off-white foreground
* Scarlet accent (single hue, variable opacity)

Expose as:

* CSS variables
* Tailwind colors

**Rules**

* Scarlet not used as background for large sections
* Scarlet only used for state/emphasis

---

# PHASE 2 — Layout & Navigation

### TASK 2.1 — Global Layout

Implement:

* Persistent navigation
* Minimal visual weight
* No shadows, no gradients

Navigation items:

* Work
* Approach
* Systems
* Writing
* About

**Acceptance Criteria**

* Nav visible but non-dominant
* Keyboard accessible

---

### TASK 2.2 — Page Container System

Create reusable layout primitives:

* Page wrapper
* Section wrapper
* Content column

Rules:

* Asymmetric layout allowed
* Strong vertical rhythm
* Negative space respected

---

# PHASE 3 — Motion System (Guardrails)

### TASK 3.1 — Motion Primitives

Define motion utilities:

* `fadeIn`
* `slideIn`
* `dissolve`
* `focusScale`

All must:

* Use Framer Motion
* Use neutral easing
* Respect `prefers-reduced-motion`

**Acceptance Criteria**

* Motion communicates state only
* No looping animations

---

# PHASE 4 — Content Infrastructure (MDX)

### TASK 4.1 — MDX Pipeline

Implement:

* MDX loader
* Frontmatter parsing

Frontmatter schema:

* title
* description
* tags
* date

Expose utilities to:

* list content
* fetch by slug

---

### TASK 4.2 — Content Types

Create two collections:

* `/content/work`
* `/content/writing`

Rules:

* No CMS
* File-based routing only

---

# PHASE 5 — Page Implementations

### TASK 5.1 — Home Page

Sections:

1. Hero
2. Principles (3)
3. Selected Work (max 3)

Rules:

* No CTA buttons
* Minimal motion
* Clear role positioning

---

### TASK 5.2 — Work Index

* List case studies
* Display title + friction statement + tags
* Optional tag filter (no search)

---

### TASK 5.3 — Case Study Template (Most Important)

Implement strict section order:

1. Friction
2. System
3. Design
4. Engineering
5. Why It Matters

Rules:

* No stock imagery
* Diagrams allowed
* Motion minimal

Agent must reject content that breaks structure.

---

### TASK 5.4 — Approach Page

* Long-form MDX
* Reads like internal platform memo
* No visuals required

---

### TASK 5.5 — Systems Page

* Diagram-friendly layout
* Reusable diagram components
* Emphasis on flows and state

---

### TASK 5.6 — Writing Index + Post Page

* Chronological list
* Title + abstract only
* Clean reading experience

---

### TASK 5.7 — About Page

Include:

* Identity paragraph
* Areas of focus
* Contact links

Exclude:

* Resume dump
* Personal timeline

---

# PHASE 6 — Accessibility & Performance

### TASK 6.1 — Accessibility

* Keyboard navigation
* Semantic HTML
* Reduced motion support

---

### TASK 6.2 — Performance

* Lighthouse ≥ 90
* No blocking scripts
* No heavy media

---

# PHASE 7 — Final Validation

### TASK 7.1 — Constraint Review

Agent must verify:

* No default spacing used
* Motion rules followed
* Scarlet usage restrained
* Typography rules enforced

---

### TASK 7.2 — Big-Tech Readability Test

Agent answers:

* Is role clear in <30 seconds?
* Do projects read like systems docs?
* Does anything feel promotional?

If “yes” to promotional → revise.
