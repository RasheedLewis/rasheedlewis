import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { PageWrapper, SectionWrapper, ContentColumn } from '@/components/layout/Wrappers';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/Primitives';

export const metadata = {
    title: 'Selected Systems',
    description: 'Applied systems exploring continuity, interruption, and real-world interaction.',
};

export default function WorkIndexPage() {
    const posts = getAllPosts('work');

    return (
        <PageWrapper>
            {/* 
        PAGE TITLE BLOCK
      */}
            <SectionWrapper className="mb-[var(--space-section)]">
                <ContentColumn>
                    <FadeIn>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-[var(--space-default)]">
                            Selected Systems
                        </h1>
                        <p className="font-body text-xl text-[var(--foreground)]/80 max-w-2xl">
                            A small number of applied systems exploring continuity, interruption, and real-world interaction across mobile and spatial surfaces.
                        </p>
                    </FadeIn>
                </ContentColumn>
            </SectionWrapper>

            {/* 
        SYSTEM ENTRIES LIST
      */}
            <SectionWrapper>
                <ContentColumn>
                    <StaggerContainer className="flex flex-col gap-[var(--space-section)]">
                        {posts.map((post) => (
                            <StaggerItem key={post.slug}>
                                <Link
                                    href={`/work/${post.slug}`}
                                    className="group block"
                                >
                                    <article className="grid grid-cols-1 md:grid-cols-12 gap-y-[var(--space-tight)] md:gap-x-[var(--space-default)] items-baseline border-b border-transparent group-hover:border-[var(--foreground)]/10 pb-[var(--space-default)] transition-colors">

                                        {/* Title - Dominant */}
                                        <div className="md:col-span-4">
                                            <h2 className="font-display text-2xl group-hover:text-[var(--scarlet-500)] group-hover:underline decoration-1 underline-offset-4 transition-all">
                                                {post.meta.title}
                                            </h2>
                                        </div>

                                        {/* Friction - Explanatory */}
                                        <div className="md:col-span-4">
                                            <p className="font-body text-[var(--foreground)]/80">
                                                {post.meta.description}
                                            </p>
                                        </div>

                                        {/* Focus - Taxonomy */}
                                        <div className="md:col-span-3">
                                            <p className="font-body text-sm text-[var(--foreground)]/60 uppercase tracking-wide">
                                                {post.meta.tags?.slice(0, 3).join(' · ')}
                                            </p>
                                        </div>

                                        {/* Year - Understated */}
                                        <div className="md:col-span-1 md:text-right">
                                            <span className="font-body text-sm text-[var(--foreground)]/40">
                                                {post.meta.year}
                                            </span>
                                        </div>

                                    </article>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </ContentColumn>
            </SectionWrapper>
        </PageWrapper>
    );
}
