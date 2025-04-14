'use client';

import React from 'react';
import { motion } from 'motion/react';
import LaptopCard from '@/components/store/LaptopCard';
import AccessoryCard from '@/components/store/AccessoryCard';
import NewsletterCard from '@/components/store/NewsletterCard';
import storeData from '@/data/store.json';

const StorePage = () => {
    const { reviews, accessories, newsletter_cta } = storeData.store;

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Hero Section */}
            <section className="mb-12 md:mb-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Tech Picks & Laptop Reviews
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-3xl mx-auto"
                >
                    Expert reviews and recommendations to help you find the perfect tech for your needs
                </motion.p>
            </section>

            {/* Laptop Reviews Grid */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Laptop Reviews</h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {reviews.map((review) => (
                        <motion.div key={review.id} variants={itemVariants}>
                            <LaptopCard review={review} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Accessories Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Recommended Accessories</h2>

                {/* Mobile: Horizontal scroll */}
                <div className="md:hidden relative">
                    <div className="flex overflow-x-auto pb-6 space-x-4 scrollbar-hide snap-x">
                        {accessories.map((accessory) => (
                            <div
                                key={accessory.id}
                                className="snap-center flex-shrink-0 w-4/5"
                            >
                                <AccessoryCard accessory={accessory} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {accessories.map((accessory) => (
                        <motion.div key={accessory.id} variants={itemVariants}>
                            <AccessoryCard accessory={accessory} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Newsletter Section */}
            <section className="mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <NewsletterCard newsletter={newsletter_cta} />
                </motion.div>
            </section>
        </div>
    );
};

export default StorePage;