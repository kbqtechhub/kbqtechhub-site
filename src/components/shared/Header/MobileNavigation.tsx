"use client";

import React from 'react'
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';

const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
];

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuVariants = {
        closed: {
            clipPath: 'circle(0% at 100% 0)',
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        open: {
            clipPath: 'circle(150% at 100% 0)',
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    const itemVariants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                aria-label="Toggle navigation menu"
            >
                {isOpen ? (
                    <HiX className="w-6 h-6" />
                ) : (
                    <HiMenu className="w-6 h-6" />
                )}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center origin-top-right"
                    >
                        <ul className="space-y-8">
                            {navigationItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-2xl font-medium relative group ${pathname === item.href ? 'text-primary' : 'text-gray-300'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                        <motion.span
                                            className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform origin-left
                        ${pathname === item.href ? 'scale-x-100' : 'scale-x-0'}`}
                                            initial={false}
                                            animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
