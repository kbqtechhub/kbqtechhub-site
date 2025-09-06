'use client';

import { motion } from 'motion/react';

export default function Clients() {
  const images = Array(6)
    .fill(0)
    .map((_, i) => (
      <img
        key={i}
        src={`https://picsum.photos/200/300?random=${i}`}
        alt="Client Logo"
        className="h-24 w-auto object-contain mx-8"
      />
    ));

  return (
    <section className="flex flex-col gap-10">
      <h3 className="text-xl font-semibold text-center">Trusted by These Amazing Brands</h3>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1035], // Approximate width of one set of logos
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
          <div className="flex">{images}</div>
        </motion.div>
      </div>
    </section>
  );
}
