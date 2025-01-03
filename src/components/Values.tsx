"use client";

import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'motion/react'
import SectionTitle from './shared/SectionTitle';
import TextGradient from './shared/TextGradient';

const values = [
    {
        title: 'Customer-Centric Approach',
        description: 'Your goals drive everything we do.'
    },
    {
        title: 'Innovation',
        description: 'Constantly evolving to offer the best solutions for a dynamic digital landscape.'
    },
    {
        title: 'Integrity',
        description: 'Building trust through transparency and consistent results.'
    },
    {
        title: 'Excellence',
        description: 'Striving for perfection in every project we undertake.'
    }
]

export default function Values() {
    return (
        <section className='flex flex-wrap h-fit gap-10 md:gap-20'>
            <div className='w-full md:w-auto md:flex-1 h-[20rem] md:h-[35rem] flex items-center justify-center rounded-3xl md:rounded-r-[20rem] values_banner'>
                <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md w-full mx-auto font-semibold text-white px-6 sm:px-8 md:px-4 leading-relaxed md:leading-snug group'>
                    What truly sets us apart is our belief in collaboration, innovation, and excellence. Every project we undertake reflects our core values.
                </div>
            </div>
            <div className='w-full md:w-auto md:flex-1 min-h-[25rem] md:h-[35rem] flex flex-col gap-10 p-4 md:p-10'>
                <h3 className='text-xl md:text-2xl text-gold uppercase' title='Our Values'>Our values</h3>
                <div className='flex flex-col w-full md:w-2/3 justify-around h-full gap-6'>
                    {values.map((value, index) => (
                        <div key={index} className='flex items-center gap-4'>
                            <div>
                                <p>
                                    <span className='text-xl md:text-2xl font-semibold'>
                                        <TextGradient fromColor='from-gold' toColor='to-winny' text={value.title} />: {/* Added space after colon */}
                                    </span>
                                    <span className='text-sm md:text-base text-white'>{value.description}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
