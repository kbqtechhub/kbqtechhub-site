import AboutSection from '@/components/AboutSection'
import Faq from '@/components/Faq'
import TrainingEnrollCta from '@/components/TrainingEnrollCta'
import Values from '@/components/Values'
import React from 'react'

export default function AboutPage() {
    return (
        <section className='flex flex-col gap-20 mb-20'>
            <section className='rounded-3xl bg-off-black flex flex-col gap-20'>
                <AboutSection />
                <Values />
            </section>
            <Faq />
            <TrainingEnrollCta />
        </section>
    )
}
