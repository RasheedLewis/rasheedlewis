import Link from 'next/link';
import { PageWrapper, SectionWrapper, ContentColumn } from '@/components/layout/Wrappers';
import { FadeIn, StaggerContainer } from '@/components/motion/Primitives';

export default function HomePage() {
  return (
    <PageWrapper>
      {/* 
        1. HERO SECTION 
        Full-viewport height, content centered above true center.
      */}
      <section className="min-h-[calc(100vh-var(--space-page)*2)] flex flex-col justify-center mb-[var(--space-page)]">
        <ContentColumn>
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-[var(--space-default)]">
              I design mobile systems that stay out of the user’s way.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-body text-lg md:text-xl text-[var(--foreground)]/80 max-w-2xl mb-[var(--space-relaxed)]">
              Senior Mobile Systems Designer / Engineer focused on ambient, spatial, and AI-assisted experiences that work in motion.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-body text-sm md:text-base text-[var(--foreground)]/60">
              Continuity, state, and real-world interaction over screens and features.
            </p>
          </FadeIn>
        </ContentColumn>
      </section>

      {/* 
        2. PRINCIPLES SECTION 
        Vertical stack, teaching the reader how to read the site.
      */}
      <SectionWrapper className="mb-[var(--space-section)]">
        <ContentColumn>
          <StaggerContainer className="flex flex-col gap-[var(--space-relaxed)]">
            <div className="group">
              <h2 className="font-display text-2xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">Continuity</h2>
              <p className="font-body text-[var(--foreground)]/80">
                Systems are designed to survive interruption and resume without friction.
              </p>
            </div>

            <div className="group">
              <h2 className="font-display text-2xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">Systems</h2>
              <p className="font-body text-[var(--foreground)]/80">
                Interfaces are expressions of state, not collections of screens.
              </p>
            </div>

            <div className="group">
              <h2 className="font-display text-2xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">Trust</h2>
              <p className="font-body text-[var(--foreground)]/80">
                Software earns trust by staying quiet until it is needed.
              </p>
            </div>
          </StaggerContainer>
        </ContentColumn>
      </SectionWrapper>

      {/* 
        3. SELECTED WORK 
        Max 3 projects. Title + friction statement only.
      */}
      <SectionWrapper className="mb-[var(--space-page)]">
        <ContentColumn>
          <FadeIn>
            <h3 className="font-body text-sm uppercase tracking-widest opacity-50 mb-[var(--space-relaxed)]">Selected Work</h3>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-[var(--space-relaxed)]">
            {/* Project 1 */}
            <Link href="/work/ambient-notifications" className="group block">
              <h4 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">
                Hands-Free Task Continuity
              </h4>
              <p className="font-body text-[var(--foreground)]/80">
                Reducing interruption for in-motion delivery workflows through state-driven design.
              </p>
            </Link>

            {/* Project 2 */}
            <Link href="/work/spatial-nav" className="group block">
              <h4 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">
                Spatial Navigation Without Dashboards
              </h4>
              <p className="font-body text-[var(--foreground)]/80">
                Glance-based guidance that dissolves when confidence is achieved.
              </p>
            </Link>

            {/* Project 3 */}
            <Link href="/work/ai-resumption" className="group block">
              <h4 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-[var(--scarlet-500)] transition-colors">
                AI-Assisted Task Resumption
              </h4>
              <p className="font-body text-[var(--foreground)]/80">
                Using inference to remove taps, not add chat interfaces.
              </p>
            </Link>
          </StaggerContainer>
        </ContentColumn>
      </SectionWrapper>

      {/* 
        4. CLOSING SIGNAL 
        Quiet authority. Pull, not push.
      */}
      <SectionWrapper>
        <ContentColumn>
          <FadeIn>
            <p className="font-body text-[var(--foreground)]/60 italic text-center md:text-left">
              This work reflects how I approach platform-level problems in mobile and spatial computing.
            </p>
          </FadeIn>
        </ContentColumn>
      </SectionWrapper>
    </PageWrapper>
  );
}
