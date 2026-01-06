We’ll design the homepage so it *immediately* signals systems thinking, restraint, and credibility—without feeling cold or empty.

Below is a **precise homepage design spec** you can hand to the agent or implement yourself.

---

# Homepage Design — Phase 5 Spec

## Primary Objective

Within **10–15 seconds**, a Staff-level engineer should understand:

* **what you do**
* **how you think**
* **why this site is different**

No scrolling gimmicks. No calls to action. No “Welcome.”

---

## Page Rhythm (High-Level)

```
[ Hero ]
[ Principles ]
[ Selected Work ]
[ Closing Signal ]
```

Four sections. Nothing more.

---

## 1. Hero Section (Positioning, Not Branding)

### Layout

* Full-viewport height (but content vertically centered *above* true center)
* One dominant vertical axis
* Large negative space

### Content

#### Headline (Lalezar)

> **I design mobile systems that stay out of the user’s way.**

Rules:

* Single sentence
* No line breaks unless viewport forces it
* No punctuation beyond period

#### Subhead (Inter)

> Senior Mobile Systems Designer / Engineer focused on ambient, spatial, and AI-assisted experiences that work in motion.

Rules:

* Smaller than headline by a meaningful margin
* Max 2 lines
* Neutral tone

---

### Optional Supporting Line (Only if Needed)

*(Use only if the page feels too sparse)*

> Continuity, state, and real-world interaction over screens and features.

---

### Motion

* **Fade-in only**
* One-time on page load
* No scroll-triggered hero motion

If motion is noticeable → it’s too much.

---

## 2. Principles Section (Mental Model Lock-In)

This section **teaches the reader how to read the site**.

### Layout

* Three items in a vertical stack (not columns)
* Each item has:

  * short title
  * one sentence explanation

### Content

**Continuity**

> Systems are designed to survive interruption and resume without friction.

**Systems**

> Interfaces are expressions of state, not collections of screens.

**Trust**

> Software earns trust by staying quiet until it is needed.

### Visual Treatment

* Titles may use Lalezar (optional)
* Body copy always Inter
* Subtle separation via spacing, not dividers

Scarlet usage:

* Optional accent on the **active principle** (hover/focus)
* Never on all three at once

---

## 3. Selected Work (Proof Without Overload)

### Purpose

Demonstrate **applied thinking**, not output volume.

### Rules

* Max **3 projects**
* No thumbnails unless they add information
* Titles + friction statements only

### Example Structure

**Hands-Free Task Continuity**

> Reducing interruption for in-motion delivery workflows through state-driven design.

**Spatial Navigation Without Dashboards**

> Glance-based guidance that dissolves when confidence is achieved.

**AI-Assisted Task Resumption**

> Using inference to remove taps, not add chat interfaces.

Each item links to its case study.

---

### Motion

* Subtle hover focus only
* No card lift
* No shadows

If it feels like a “card grid,” simplify.

---

## 4. Closing Signal (Quiet Authority)

This replaces a CTA.

### Content

One line. Optional.

> This work reflects how I approach platform-level problems in mobile and spatial computing.

No buttons.
No contact links.
Navigation already exists.

This creates **pull**, not push.

---

## Spacing & Proportion (Homepage-Specific Rules)

* Hero → Principles: `space-page`
* Principles items: `space-relaxed`
* Section gaps: `space-section`

The page should feel:

* slow
* deliberate
* breathable

If everything fits without scrolling → increase spacing.

---

## Color Usage (Homepage)

* Background: near-black
* Text: warm off-white
* Scarlet:

  * one or two moments max
  * likely in Selected Work titles or principle emphasis

If scarlet appears more than **3 times** on first load, remove some.

---

## What Not to Add (Even If Tempting)

❌ Scroll indicators
❌ Hero background visuals
❌ Animated diagrams on home
❌ Testimonials
❌ “Let’s work together” language
❌ Stats or logos

All of that belongs elsewhere—or nowhere.

---

## Agent Acceptance Checklist (Homepage)

Before marking homepage complete, the agent must answer **yes** to all:

* Is the role clear in under 10 seconds?
* Does the page feel calm rather than impressive?
* Could this appear in an internal platform review without embarrassment?
* Would removing motion still leave the page intact?
* Does the reader feel *invited to explore*, not sold to?

If any answer is “no,” revise.

Below is **final, exact, ready-to-drop copy** for the **Hero** and **Principles** sections.
This is written to survive scrutiny from Staff+ engineers and platform reviewers without sounding branded or performative.

---

## Hero (Exact Copy)

### Headline (Display — Lalezar)

**I design mobile systems that stay out of the user’s way.**

---

### Subhead (Body — Inter)

Senior Mobile Systems Designer / Engineer focused on ambient, spatial, and AI-assisted experiences that work in motion.

---

### Optional Supporting Line

*(Include only if the hero feels too sparse on large displays)*

Continuity, state, and real-world interaction over screens and features.

---

## Principles (Exact Copy)

### Continuity

Systems are designed to survive interruption and resume without friction.

---

### Systems

Interfaces are expressions of state, not collections of screens.

---

### Trust

Software earns trust by staying quiet until it is needed.

---

## Usage Notes (Do Not Display)

* Do **not** add punctuation beyond periods.
* Do **not** rephrase for “warmth.”
* Do **not** add qualifiers or buzzwords.
* These lines are intentionally short, declarative, and final.
