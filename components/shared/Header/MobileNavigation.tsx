"use client";

import React from 'react'
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { FaCode, FaMobileAlt, FaBullhorn, FaChalkboardTeacher } from 'react-icons/fa';

const navigationItems = [
    { name: 'Home', href: '/' },
    {
        name: 'Services', href: '/services',
        subItems: [
            { name: 'Web Development', href: '/services/web-development', icon: <FaCode /> },
            { name: 'Apps Development', href: '/services/apps-development', icon: <FaMobileAlt /> },
            { name: 'Digital Marketing', href: '/services/digital-marketing', icon: <FaBullhorn /> },
            { name: 'IT Training', href: '/services/it-training', icon: <FaChalkboardTeacher /> },
        ]
    },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const pathname = usePathname();

    const menuVariants = {
        closed: {
            clipPath: 'circle(0% at 100% 0)',
            opacity: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            clipPath: 'circle(150% at 100% 0)',
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        }
    };

    const itemVariants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    const serviceVariants = {
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3
            }
        },
        open: {
            height: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${isOpen && 'fixed'} top-4 right-4 z-50 p-2 rounded-lg bg-pure-black text-yelly hover:text-winny transition-colors duration-200`}
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
                        className="fixed inset-0 pt-16 bg-gradient-to-br from-pure-black via-off-black to-soft-black z-40 flex flex-col items-center justify-start origin-top-right overflow-y-auto"
                    >
                        <ul className="space-y-4 w-full px-6 py-4">
                            {navigationItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1 }}
                                    className="w-full"
                                >
                                    {item.subItems ? (
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setShowServices(!showServices)}
                                                className="text-xl font-medium text-yelly hover:text-winny transition-colors duration-200 w-full text-left flex items-center justify-between"
                                            >
                                                <span>{item.name}</span>
                                                <motion.div
                                                    animate={{ rotate: showServices ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-yelly"
                                                >
                                                    <HiChevronDown className="w-5 h-5" />
                                                </motion.div>
                                            </button>
                                            <AnimatePresence>
                                                {showServices && (
                                                    <motion.ul
                                                        variants={serviceVariants}
                                                        initial="closed"
                                                        animate="open"
                                                        exit="closed"
                                                        className="overflow-hidden bg-pure-black/50 rounded-lg"
                                                    >
                                                        {item.subItems.map((subItem) => (
                                                            <motion.li
                                                                key={subItem.name}
                                                                whileHover={{ x: 4 }}
                                                                className="border-b border-graphite-gray/20 last:border-none"
                                                            >
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="flex items-center gap-3 p-4 text-graphite-gray hover:text-winny transition-colors duration-200"
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    <span className="text-yelly">{subItem.icon}</span>
                                                                    <span>{subItem.name}</span>
                                                                </Link>
                                                            </motion.li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                            <Link
                                                href={item.href}
                                                className={`text-xl font-medium block w-full ${pathname === item.href ? 'text-winny' : 'text-yelly hover:text-winny'
                                                    } transition-colors duration-200`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
