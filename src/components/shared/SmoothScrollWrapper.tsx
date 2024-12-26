"use client";

import { ReactLenis } from 'lenis/react';
import { motion } from 'motion/react'
import React, { PropsWithChildren } from 'react'

interface SmoothScrollWrapperProps extends PropsWithChildren {
    className?: string
}

export default function SmoothScrollWrapper({ children, className }: SmoothScrollWrapperProps) {
    const lenisOptions = {
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        smooth: true,
    }

    return (
        <ReactLenis root options={lenisOptions}>
            <motion.div
                className={className}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </ReactLenis>
    )
}
