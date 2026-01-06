import React from 'react';

interface WrapperProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function PageWrapper({ children, className = '', as: Component = 'main' }: WrapperProps) {
    return (
        <Component className={`min-h-screen pt-[var(--space-page)] px-[var(--space-default)] md:px-[var(--space-relaxed)] pb-[var(--space-page)] ${className}`}>
            {children}
        </Component>
    );
}

export function SectionWrapper({ children, className = '', as: Component = 'section' }: WrapperProps) {
    return (
        <Component className={`my-[var(--space-section)] max-w-screen-lg mx-auto ${className}`}>
            {children}
        </Component>
    );
}

export function ContentColumn({ children, className = '', as: Component = 'div' }: WrapperProps) {
    return (
        <Component className={`max-w-prose mx-auto ${className}`}>
            {children}
        </Component>
    );
}
