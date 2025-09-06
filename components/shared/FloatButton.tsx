'use client';
import { useLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export default function FloatButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window?.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    lenis?.on('scroll', toggleVisibility);
    return () => lenis?.off('scroll', toggleVisibility);
  }, [lenis]);

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 1.2,
      easing: (t: number) => 1 - (1 - t) ** 4,
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 red_gradient text-white p-3 rounded-full shadow-lg z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <IoArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
