Below is a **technical, agent-ready PRD** you can hand directly to a coding agent (or use yourself) to build this portfolio *correctly*.
This is written to minimize ambiguity, enforce design intent, and prevent “generic portfolio drift.”

---

# PRD — Personal Portfolio: Mobile Systems & Ambient Computing

## 1. Overview

**Project Name:** Personal Systems Portfolio
**Owner:** Rasheed Lewis
**Primary Goal:**
Build a technically credible, interactive portfolio that communicates **systems-level mobile thinking** (continuity, state, sensors, spatial UX) to **Big Tech reviewers**.

**Non-goals:**

* Marketing site
* Agency portfolio
* Trend-chasing visual experiment
* Heavy CMS-driven blog

---

## 2. Target Audience

### Primary

* Senior / Staff engineers
* Design technologists
* Platform UX engineers
* Hiring managers at Apple / Google / Meta

### Secondary

* Technically literate founders
* Research-oriented designers

**Audience assumptions:**

* Low tolerance for fluff
* High sensitivity to clarity, restraint, and intent
* Familiar with React / TypeScript / modern web stacks

---

## 3. Core Product Principles (Hard Constraints)

1. **Continuity over screens**
2. **Systems over features**
3. **Restraint over spectacle**
4. **Motion explains state, never decorates**
5. **Attention is treated as scarce**

Any implementation violating these should be rejected.

---

## 4. Tech Stack (Locked)

### Framework

* **Next.js (App Router)**
* **TypeScript (strict mode enabled)**

### Styling

* **Tailwind CSS**
* Custom design tokens (no default spacing scale)

### Content

* **MDX** for:

  * Case studies
  * Writing/blog posts

### Motion

* **Framer Motion**
* No GSAP unless explicitly approved later

### Hosting

* **Vercel**

---

## 5. Site Structure

### Global Navigation (Max 5 items)

1. Work
2. Approach
3. Systems
4. Writing
5. About

Navigation should be:

* persistent
* minimal
* not visually dominant

---

## 6. Page Definitions

### 6.1 Home (`/`)

**Purpose:**
Immediate positioning + credibility.

**Hero Section**

* Headline (Lalezar):

  > “I design mobile systems that stay out of the user’s way.”
* Subhead (body font):

  > Senior Mobile Systems Designer / Engineer focused on ambient, spatial, and AI-assisted experiences that work in motion.

**Hero behavior**

* No autoplay video
* Optional subtle motion (fade-in, not parallax)
* No CTA buttons

**Below Hero**

* Three principles (Continuity, Systems, Trust)
* Selected Work (max 3 projects)

---

### 6.2 Work (`/work`)

**Purpose:**
Showcase flagship systems-level projects.

**Structure**

* Grid or vertical list
* Each project:

  * Title
  * One-line friction statement
  * Tags (e.g. Mobile Systems, Spatial UX, AI Continuity)

**Filtering**

* Optional tag-based filtering
* No search bar

---

### 6.3 Case Study Page (`/work/[slug]`)

**This is the most important page type.**

Each case study must follow this structure **exactly**:

1. **The Friction**

   * Real-world problem
   * No buzzwords

2. **The System**

   * State model explanation
   * Inputs (sensors, signals)
   * Outputs (surfaces)

3. **The Design**

   * What appears
   * What never appears
   * Glance vs focus UI

4. **The Engineering**

   * Architecture
   * Async / state handling
   * Failure cases

5. **Why This Matters**

   * Scale
   * Platform relevance
   * Trust / safety / continuity

**Allowed Media**

* Diagrams
* Code snippets
* Motion demos (subtle)

**Disallowed**

* Stock photos
* Decorative imagery
* Marketing language

---

### 6.4 Approach (`/approach`)

**Purpose:**
Explain philosophy and decision-making.

Content themes:

* Why interruption matters
* Why systems thinking matters
* Why AR ≠ 3D
* Why AI is a UX primitive

This page should read like an internal platform memo.

---

### 6.5 Systems (`/systems`)

**Purpose:**
Show how you think.

Includes:

* State machine diagrams
* Flow breakdowns
* Cross-device continuity examples

This page can reuse components from case studies.

---

### 6.6 Writing (`/writing`)

**Purpose:**
Long-form thinking, not content marketing.

* Chronological list
* Titles only + short abstracts
* MDX-backed

---

### 6.7 About (`/about`)

**Purpose:**
Humanize without oversharing.

Include:

* Professional identity paragraph
* Areas of focus
* Minimal bio
* Contact links

No résumé dump.

---

## 7. Design System (Technical Spec)

### 7.1 Typography

**Display Font**

* Lalezar
* Usage:

  * Hero titles
  * Section headers
* Never used for body copy

**Body Font**

* Inter (default)
* Used for:

  * Paragraphs
  * UI labels
  * Captions

---

### 7.2 Spacing System (Golden Ratio–Derived)

**Base Concept**

* φ = 0.618
* Spacing derived from viewport size

**Implementation Rule**

* Use `clamp(min, preferred, max)`
* No fixed 4px grid

**Semantic Tokens**

* `space-tight`
* `space-default`
* `space-relaxed`
* `space-section`
* `space-page`

Components must use semantic tokens only.

---

### 7.3 Color

**Base**

* Near-black background
* Warm off-white text

**Accent**

* Scarlet
* Usage:

  * Active state
  * Emphasis
  * Key metrics

Scarlet must never dominate large areas.

---

## 8. Motion & Interaction

### Motion Rules

* Motion must explain:

  * state change
  * focus change
* Duration: short
* Easing: neutral

### Allowed Motion

* Fade
* Slide
* Dissolve
* Subtle scale (focus only)

### Disallowed

* Bounce
* Elastic easing
* Infinite loops
* Decorative parallax

---

## 9. Content Management

### MDX Structure

```
/content
  /work
    project-name.mdx
  /writing
    post-name.mdx
```

Each MDX file includes frontmatter:

* title
* description
* tags
* date

---

## 10. Accessibility & Performance

* Lighthouse score ≥ 90
* Keyboard navigable
* Reduced motion support
* No blocking animations
* Fast initial load

---

## 11. Success Criteria

The site succeeds if:

* A Staff+ engineer understands your role in under 30 seconds
* Projects read like systems documentation, not marketing
* Motion feels intentional and restrained
* The site would not feel out of place in an internal platform review

---

## 12. Explicit Instructions to Coding Agent

* Do not add features not specified
* Do not introduce visual flair without justification
* Favor clarity over novelty
* Ask before deviating from spacing or motion rules
* Treat this as a **platform artifact**, not a personal brand site
