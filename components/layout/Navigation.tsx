"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'Approach', path: '/approach' },
    { name: 'Systems', path: '/systems' },
    { name: 'Writing', path: '/writing' },
    { name: 'About', path: '/about' },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        // Cleanup function to ensure scroll is re-enabled if component unmounts while open
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Variants for the mobile menu overlay
    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] as const }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] as const }
        }
    };

    // Variants for list items staggering
    const listVariants = {
        closed: { opacity: 0 },
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-[var(--space-default)] md:px-[var(--space-relaxed)] bg-background/80 backdrop-blur border-b border-[var(--foreground)]/10 text-[var(--foreground)]">
            {/* Top Bar (Logo + Toggle) */}
            <div className="flex justify-between items-center max-w-screen-xl mx-auto relative z-50 h-16 md:h-20">
                <Link href="/" className="font-display text-xl tracking-wider hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>
                    RASHEED LEWIS
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-[var(--space-default)] font-body text-sm">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.path);
                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`transition-colors hover:opacity-100 ${isActive ? 'text-[var(--scarlet-500)] opacity-100' : 'opacity-80 hover:text-[var(--scarlet-500)]'}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        {isOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-center items-center md:hidden pointer-events-auto"
                        style={{ top: 0, left: 0, height: '100dvh', width: '100vw', zIndex: 40 }}
                    >
                        <motion.ul
                            variants={listVariants}
                            className="flex flex-col gap-[var(--space-relaxed)] text-center"
                        >
                            {navItems.map((item) => {
                                const isActive = pathname.startsWith(item.path);
                                return (
                                    <motion.li key={item.path} variants={itemVariants}>
                                        <Link
                                            href={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`font-display text-2xl tracking-wide transition-colors ${isActive ? 'text-[var(--scarlet-500)]' : 'hover:text-[var(--scarlet-500)]'}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
