"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

export default function ServiceSection() {
    return (
        <section className="relative overflow-hidden">
            <div className='min-h-[30rem] sm:min-h-[25rem] md:h-[35rem] py-8 sm:py-5 md:py-10 bg-light-black flex flex-col gap-8 sm:gap-5 md:gap-10 rounded-b-[3rem] sm:rounded-b-[5rem] md:rounded-b-[10rem] relative'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='container mx-auto flex flex-col justify-center px-5 sm:px-4 md:px-0 max-w-5xl'>
                    <h1 className='text-2xl sm:text-3xl md:text-6xl text-white font-extrabold text-center mb-4 sm:mb-6 md:mb-8 leading-snug sm:leading-tight tracking-tight'>
                        <span className="text-red-500">Custom</span> Websites Designed to{' '}
                        <span className="text-yelly relative inline-block">
                            Elevate
                            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-[3px] sm:h-1 bg-yelly/30 rounded-full"></span>
                        </span>{' '}
                        Your <span className="text-indigo-500">Business</span>
                    </h1>
                    <p className='text-sm sm:text-base md:text-xl text-center text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide px-4 sm:px-0'>
                        <span className="text-orange-500">Transform</span> your <span className="text-blue-500">online presence</span> with <span className="text-purple-500">stunning</span>, <span className="text-cyan-500">responsive</span> websites
                        <span className="block mt-2">tailored to your <span className="text-green-500">unique business needs</span>.</span>
                    </p>
                </motion.div>

                <div className='container mx-auto flex flex-col justify-center items-center gap-6 sm:gap-5 md:gap-10 relative px-5 sm:px-4 md:px-0'>
                    <div className='w-full max-w-[250px] sm:max-w-[300px] md:max-w-[600px]'>
                        <Image
                            src='/images/rings.svg'
                            width={600}
                            height={600}
                            alt='hero'
                            className='w-full h-auto'
                        />
                    </div>

                    <button
                        className='px-6 sm:px-8 md:px-12 shadow-lg absolute top-1 sm:top-2 md:top-5 left-1/2 -translate-x-1/2 
                                 rounded-full py-2.5 sm:py-3 md:py-4 bg-white text-gold 
                                 text-xs sm:text-sm md:text-base font-medium hover:shadow-xl transition-shadow duration-300'>
                        Get a Free Quote
                    </button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='bg-off-black rounded-b-2xl sm:rounded-b-3xl max-w-4xl mx-auto w-full px-6 sm:px-10 py-12 sm:py-16 shadow-2xl -mt-16 sm:-mt-24 relative z-10'>
                <h2 className='text-white text-center text-base sm:text-lg md:text-2xl font-medium leading-relaxed px-2 sm:px-0'>
                    At <span className="text-purple-500">KBQ TECH-HUB</span>, we specialize in creating <span className="text-orange-500">high-performance</span> websites that drive <span className="text-cyan-500">growth</span> and <span className="text-red-500">engagement</span>. Whether you're looking to establish a <span className="text-green-500">new online presence</span> or revamp an existing site, our <span className="text-blue-500">expert team</span> will deliver a solution that meets your <span className="text-indigo-500">unique needs</span>.
                </h2>
            </motion.div>
        </section>
    )
}
