'use client';

import Lenis from 'lenis';
import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

interface HorizontalScrollCarouselProps {
  children: React.ReactNode;
}

const HorizontalScrollCarousel = ({ children }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => t,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-4"
          transition={{
            ease: 'linear',
            duration: 0.1,
          }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
