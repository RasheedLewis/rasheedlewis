# Systems Portfolio — Mobile, Ambient, Spatial

> **A systems-oriented personal portfolio focused on continuity, restraint, and real-world interaction.**
>
> This repository contains the source code for a personal portfolio designed to communicate **Staff+ mobile systems thinking** to platform teams at large technology companies.

---

## ✦ Purpose

This site is **not** a marketing page or creative experiment.

It is a **technical artifact** that demonstrates how I think about:

* mobile systems beyond screens
* interruption and continuity
* sensor-aware interaction
* spatial and ambient computing
* AI as a UX primitive (not a chatbot)

The portfolio is intended to be legible to **senior engineers, design technologists, and platform hiring managers**.

---

## ✦ Design Philosophy

> **Continuity over screens**
> **Systems over features**
> **Restraint over spectacle**
> **Intent over decoration**

The site is designed to feel closer to:

* an internal platform memo
* a systems design review
* an instrument panel

…and *not* like:

* a landing page
* an agency portfolio
* a trend-driven web experiment

---

## ✦ What This Site Demonstrates

* **State-driven thinking**
  Experiences are modeled as systems, not page flows.

* **Interruption-aware design**
  Every interaction assumes partial attention and resumption.

* **Multi-surface continuity**
  Phone, wearables, audio, and spatial interfaces are treated as one system.

* **Restrained motion**
  Animation exists only to explain state or focus changes.

* **Design under constraint**
  Limited color, limited motion, limited typography—by design.

---

## ✦ Information Architecture

```
/
├── Home        → Positioning & selected work
├── Work        → Systems-level case studies
├── Approach    → Design & engineering philosophy
├── Systems     → Diagrams, flows, and models
├── Writing     → Long-form technical essays
└── About       → Professional context
```

Each **case study** follows a strict structure:

1. **The Friction** — real-world problem
2. **The System** — inputs, outputs, state
3. **The Design** — what appears and what doesn’t
4. **The Engineering** — architecture and failure modes
5. **Why This Matters** — scale, trust, platform relevance

---

## ✦ Technology Stack

| Area      | Choice                              |
| --------- | ----------------------------------- |
| Framework | Next.js (App Router)                |
| Language  | TypeScript (strict)                 |
| Styling   | Tailwind CSS (custom design tokens) |
| Content   | MDX (file-based)                    |
| Motion    | Framer Motion (minimal use)         |
| Hosting   | Vercel                              |

> No CMS is used by default.
> Content lives alongside code for transparency and control.

---

## ✦ Design System (High-Level)

### Typography

* **Lalezar** — display only (hero + section headers)
* **Inter** — body copy and UI text

### Spacing

* No fixed 4px grid
* Spacing derived from **golden ratio proportions**
* Semantic tokens only (e.g. `space-section`, `space-page`)

### Color

* Near-black base
* Warm off-white text
* **Scarlet** as the sole accent
  → used only for state, emphasis, or signal

### Motion

* Fade, slide, dissolve, subtle focus
* No decorative or looping animation
* Respects reduced-motion preferences

---

## ✦ Accessibility & Performance

* Keyboard navigable
* Semantic HTML
* Reduced-motion support
* High Lighthouse scores
* Fast initial load (no heavy media)

> If the site does not work with animations disabled, it is considered broken.

---

## ✦ What This Is *Not*

* ❌ A résumé replacement
* ❌ A Webflow-style portfolio
* ❌ A “personal brand” site
* ❌ A showcase of visual tricks

This repository exists to demonstrate **how systems are designed**, not how pixels are decorated.

---

## ✦ Running Locally

```bash
pnpm install
pnpm dev
```

or

```bash
npm install
npm run dev
```

Then open:
`http://localhost:3000`

---

## ✦ Repository Ethos

When working in this codebase:

* favor clarity over cleverness
* remove UI before adding UI
* justify every animation
* treat attention as scarce
* design as if this will be read internally by a platform team

If something feels “cool” before it feels *necessary*, it should be removed.

---

## ✦ License

This project is licensed for **personal and evaluative use only**.
Please do not reuse content or case studies without permission.
