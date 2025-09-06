'use client';

import { ReactLenis } from 'lenis/react';
import { motion } from 'motion/react';
import type { PropsWithChildren } from 'react';

interface SmoothScrollWrapperProps extends PropsWithChildren {
  className?: string;
}

interface LenisOptions {
  lerp: number;
  wheelMultiplier: number;
  touchMultiplier: number;
  easing: (t: number) => number;
  smooth: boolean;
  smoothTouch: boolean;
}

export default function SmoothScrollWrapper({ children, className }: SmoothScrollWrapperProps) {
  const lenisOptions: LenisOptions = {
    lerp: 0.08,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5,
    easing: (t: number) => 1 - (1 - t) ** 4,
    smooth: true,
    smoothTouch: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </ReactLenis>
  );
}
