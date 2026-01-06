"use client";

import { motion, HTMLMotionProps, MotionProps } from "framer-motion";
import React from "react";

// -----------------------------------------------------------------------------
// CONSTANTS & CONFIGURATION
// -----------------------------------------------------------------------------

const DURATION = {
    fast: 0.2,
    default: 0.35,
    slow: 0.5,
};

// "Neutral easing" per Design System
const EASING = [0.32, 0.72, 0, 1] as const;

// -----------------------------------------------------------------------------
// VARIANTS
// -----------------------------------------------------------------------------

export const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: DURATION.default, ease: EASING }
    },
};

export const slideUpVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.default, ease: EASING }
    },
};

export const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

// -----------------------------------------------------------------------------
// COMPONENTS
// -----------------------------------------------------------------------------

type BaseProps = HTMLMotionProps<"div"> & {
    children: React.ReactNode;
    delay?: number;
};

export function FadeIn({ children, delay = 0, className, ...props }: BaseProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                ...fadeVariants,
                visible: {
                    ...fadeVariants.visible,
                    transition: { ...fadeVariants.visible.transition, delay },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function SlideIn({ children, delay = 0, className, ...props }: BaseProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                ...slideUpVariants,
                visible: {
                    ...slideUpVariants.visible,
                    transition: { ...slideUpVariants.visible.transition, delay },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className, ...props }: BaseProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={staggerContainerVariants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
