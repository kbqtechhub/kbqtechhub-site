"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

interface HorizontalScrollCarouselProps {
    children: React.ReactNode;
}

const HorizontalScrollCarousel = ({ children }: HorizontalScrollCarouselProps) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-4"
                    transition={{
                        type: "spring",
                        damping: 300,
                        stiffness: 10
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;
